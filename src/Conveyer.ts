/**
 * egjs-conveyer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT license
 */
import Axes, { PanInput } from "@egjs/axes";
import Component from "@egjs/component";
import { ReactiveSubscribe, Reactive, Ref } from "./cfcs";
import {
  ConveyerEvents, ConveyerItem,
  ConveyerOptions, FindItemOptions, ConveyerReactiveState,
  ScrollIntoViewOptions,
} from "./types";
import { isString } from "./utils";


/**
 * Conveyer adds Drag gestures to your Native Scroll.
 * @ko Conveyer는 네이티브 스크롤에 드래그 제스처를 추가합니다.
 * @extends Component
 * @support {"ie": "9+(with polyfill)", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "4.X+"}
 * @example
```html
<div class="items">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
<script>
import Conveyer from "@egjs/conveyer";

const conveyer = new Conveyer(".items");
</script>
```
 */
@ReactiveSubscribe
class Conveyer extends Component<ConveyerEvents> {
  protected scrollAreaElement: HTMLElement;

  protected axes: Axes;
  protected items: ConveyerItem[] = [];
  protected pos = 0;
  protected size = 0;
  protected scrollSize = 0;
  protected options: ConveyerOptions;

  private _scrollTimer = 0;
  private _isDragScroll = false;
  private _isAnimation = false;
  private _scrollArea: string | HTMLElement | Ref<HTMLElement>;

  /**
   * Whether the scroll has reached the start.
   * @ko 스크롤이 시작에 닿았는지 여부.
   * @name Conveyer#isReachStart
   * @type {boolean}
   * @default false
   * @readonly
   * @example
   * ```js
   * import { Conveyer } from "@egjs/conveyer";
   *
   * const conveyer = new Conveyer(".container");
   *
   * conveyer.isReachStart
   * ```
   */
  @Reactive("isReachStart") private _isReachStart = false;
  /**
   * Whether the scroll has reached the end.
   * @ko 스크롤이 끝에 닿았는지 여부.
   * @name Conveyer#isReachEnd
   * @type {boolean}
   * @default false
   * @readonly
   * @example
   * ```js
   * import { Conveyer } from "@egjs/conveyer";
   *
   * const conveyer = new Conveyer(".container");
   *
   * conveyer.isReachEnd
   * ```
   */
  @Reactive("isReachEnd") private _isReachEnd = false;
  /**
   * @param - A base element for a module <ko>모듈을 적용할 기준 엘리먼트</ko>
   * @param - The option object of the InfiniteGrid module <ko>eg.InfiniteGrid 모듈의 옵션 객체</ko>
   */
  constructor(scrollArea: string | HTMLElement | Ref<HTMLElement>, options: ConveyerOptions = {}) {
    super();
    this.options = {
      horizontal: true,
      useDrag: true,
      autoInit: true,
      scrollDebounce: 100,
      ...options,
    };

    this._scrollArea = scrollArea;
    if (this.options.autoInit) {
      this.init();
    }
  }
  /**
   * Finds an element for that direction.
   * @ko 해당 방향에 대해 엘리먼트를 찾는다.
   * @param - direction of the element. "start" and "end" find inside. "prev" and "next" find outside. <ko>엘리먼트의 방향. "start", "end"는 안쪽으로 찾는다. "prev", "next"는 바깥쪽으로 찾는다.</ko>
   * @param - Options for the `findElement` method. <ko>findElement 메서드의 옵션</ko>
   * @example
   * <h4>target</h4>
   * <p align="center">
   *  <img src="/img/scrollIntoView1.png" height="200" />
   * </p>
   * <p align="center">
   *   <img src="/img/scrollIntoView2.png" height="210" />
   * </p>
   */
  public findElement(direction: "start" | "end" | "prev" | "next", options: FindItemOptions = {}) {
    return this.findItem(direction, options)?.element || null;
  }
  /**
   * Finds an item for an element or its direction.
   * @ko 엘리먼트 또는 해당 방향에 대해 아이템을 찾는다.
   * @param - direction of the element. "start" and "end" find inside. "prev" and "next" find outside. <ko>엘리먼트의 방향. "start", "end"는 안쪽으로 찾는다. "prev", "next"는 바깥쪽으로 찾는다.</ko>
   * @param - Options for the `findItem` method. <ko>`findItem` 메서드의 옵션</ko>
   * @example
   * <h4>target</h4>
   * <p align="center">
   *  <img src="/img/scrollIntoView1.png" height="200" />
   * </p>
   * <p align="center">
   *   <img src="/img/scrollIntoView2.png" height="210" />
   * </p>
   */
  public findItem(
    target: HTMLElement | "start" | "end" | "prev" | "next",
    options: FindItemOptions = {},
  ): ConveyerItem | null {
    const pos = this.pos;
    const scrollSize = this.scrollSize;
    const size = this.size;
    const hitTest = options?.hitTest ?? 1;
    const items = [{ pos: 0, size: 0 }, ...this.items, { pos: scrollSize, size: 0 }];
    const endPos = pos + size;
    const sibling = options.sibling;
    let selectedItem: ConveyerItem | undefined;


    if (target === "start") {
      if (pos <= 0) {
        return null;
      }
      selectedItem = [...items].reverse().filter(item => {
        const itemSize = item.size;
        const dist = item.pos - pos;
        const dist2 = dist + itemSize;

        return (dist >= 0) || (dist2 >= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest));
      }).reverse()[0];


    } else if (target === "end") {
      if (pos >= scrollSize - size) {
        return null;
      }
      selectedItem = items.filter(item => {
        const itemSize = item.size;
        const dist = item.pos + itemSize - endPos;
        const dist2 = dist - itemSize;

        return dist <= 0 || (dist2 <= 0 && (!itemSize || Math.abs(dist2) / itemSize >= hitTest));
      }).reverse()[0];
    } else if (target === "next") {
      selectedItem = items.reverse().filter(item => {
        const itemSize = item.size;
        const startDist = item.pos - pos;
        const endDist = item.pos + itemSize - endPos;

        return endDist > 0 && startDist > 0 && (!itemSize || Math.abs(startDist) / itemSize >= 1 - hitTest);
      }).reverse()[0];
    } else if (target === "prev") {
      selectedItem = items.filter(item => {
        const itemSize = item.size;
        const startDist = item.pos - pos;
        const endDist = item.pos + itemSize - endPos;

        return startDist < 0 && endDist < 0 && (!itemSize || Math.abs(startDist) / itemSize >= 1 - hitTest);
      }).reverse()[0];
    } else {
      return this._getItem(target);
    }
    if (sibling && selectedItem) {
      const selectedIndex = items.indexOf(selectedItem);

      return items[selectedIndex + sibling] || null;
    }
    return selectedItem || null;
  }
  /**
   * Scrolls an element or an item in that direction into the view.
   * @ko 엘리먼트나 해당 방향에 있는 아이템을 뷰안으로 스크롤을 한다.
   * @param - direction of the element. "start" and "end" find inside. "prev" and "next" find outside. <ko>엘리먼트의 방향. "start", "end"는 안쪽으로 찾는다. "prev", "next"는 바깥쪽으로 찾는다.</ko>
   * @param - Options for the `scrollIntoView` method. <ko>`scrollIntoView` 메서드의 옵션</ko>
   * @example
   * <h4>target</h4>
   * <p align="center">
   *  <img src="/img/scrollIntoView1.png" height="200" />
   * </p>
   * <p align="center">
   *   <img src="/img/scrollIntoView2.png" height="210" />
   * </p>
   */
  public scrollIntoView(target: HTMLElement | "start" | "end" | "prev" | "next", options: ScrollIntoViewOptions = {}) {
    let item = this.findItem(target, options);

    if (!item) {
      return;
    }
    const duration = options.duration || 0;
    let nextScrollPos = this._getNextScrollPos(item, options);

    if (isString(target) && options.excludeStand && nextScrollPos === this.pos) {
      const selectedIndex = this.items.indexOf(item);

      if (selectedIndex === -1) {
        return;
      }
      const sibling = target === "start" || target === "prev" ? -1 : 1;
      item = this.items[selectedIndex + sibling];

      if (!item) {
        return;
      }
      nextScrollPos = this._getNextScrollPos(item, options);
    }

    this.scrollBy(nextScrollPos - this.pos, duration);
  }
  /**
   * Scrolls by the given position amount.
   * @ko 주어진 위치 양만큼 스크롤한다.
   * @param - Amount of position to scroll by. <ko>스크롤할 위치의 양.</ko>
   * @param - Duration to scroll by that position. <ko>해당 위치만큼 스크롤하는 시간</ko>
   */
  public scrollBy(pos: number, duration = 0) {
    this.axes.setBy({ scroll: -pos }, duration);
  }
  /**
   * Scroll to the given position.
   * @ko 주어진 위치로 스크롤한다.
   * @param - Amount of position to scroll to. <ko>스크롤할 위치의 양.</ko>
   * @param - Duration to scroll to that position. <ko>해당 위치로 스크롤하는 시간</ko>
   */
  public scrollTo(pos: number, duration = 0) {
    this.axes.setBy({ scroll: this.pos - pos }, duration);
  }
  /**
   * Set the items directly to the Conveyer.
   * @ko Conveyer에 아이템들을 직접 설정한다.
   * @param - Items to set on Conveyer <ko>Conveyer에 설정할 아이템들</ko>
   */
  public setItems(items: ConveyerItem[]) {
    this.items = items;
  }
  /**
   * Update the position and size information of items.
   * @ko 아이템들의 포지션, 사이즈 정보를 업데이트 한다.
   */
  public updateItems() {
    const scrollAreaElement = this.scrollAreaElement;
    const itemSelector = this.options.itemSelector;
    const itemElements = [].slice.call(
      itemSelector ? scrollAreaElement.querySelectorAll(itemSelector) : scrollAreaElement.children,
    );
    this.setItems(itemElements.map((el) => this._getItem(el)));
  }
  /**
   * Update container size and scroll size.
   * @ko 컨테이너의 크기, 스크롤 사이즈를 업데이트 한다.
   */
  public updateContainer() {
    const scrollAreaElement = this.scrollAreaElement;
    const horizontal = this.options.horizontal;

    this.size = horizontal ? scrollAreaElement.clientWidth : scrollAreaElement.clientHeight;
    this.scrollSize = horizontal ? scrollAreaElement.scrollWidth : scrollAreaElement.scrollHeight;
    this._refreshScroll();
    this._onScroll();
  }
  /**
   * Updating containers and items.
   * @ko 컨테이너와 아이템들을 업데이트 한다.
   * @method
   */
  public update = () => {
    this.updateItems();
    this.updateContainer();
  }
  /**
   * If you use the autoInit option as false, you can initialize it directly through the init method.
   * @ko autoInit 옵션을 false로 사용하는 경우 직접 init 메서드를 통해 초기화 할 수 있다.
   */
  public init() {
    if (this.axes) {
      return;
    }

    const scrollArea = this._scrollArea;
    let el!: HTMLElement;

    if (isString(scrollArea)) {
      el = document.querySelector<HTMLElement>(scrollArea)!;
    } else if (scrollArea instanceof Element) {
      el = scrollArea;
    } else if ("value" in scrollArea || "current" in scrollArea) {
      el = scrollArea.value! || scrollArea.current!;
    }

    this.scrollAreaElement = el;
    let isDrag = false;
    const scrollAreaElement = this.scrollAreaElement;
    const axes = new Axes({
      scroll: {
        circular: true,
        range: [-1000, 1000],
      },
    }, {
      deceleration: 0.005,
      round: 1,
    });
    let isHold = false;

    axes.on({
      "hold": e => {
        isHold = true;
        isDrag = false;
        const inputEvent = e.inputEvent.srcEvent;

        if (!inputEvent) {
          return;
        }
        const options = this.options;
        if (options.preventDefault) {
          inputEvent.preventDefault();
        }
        if (options.preventClickOnDrag) {
          this._disableClick();
        }
      },
      "change": e => {
        if (e.inputEvent && !isHold) {
          return;
        }
        this._isDragScroll = !!e.inputEvent;
        this._isAnimation = !!isHold;
        isDrag = true;
        const scroll = e.delta.scroll;

        if (this.options.horizontal) {
          scrollAreaElement.scrollLeft -= scroll;
        } else {
          scrollAreaElement.scrollTop -= scroll;
        }
      },
      "release": e => {
        if (!isDrag) {
          e.setTo({ ...e.depaPos }, 0);
          this._enableClick();
        }
        isDrag = false;
      },
    });

    this.axes = axes;
    if (this.options.useDrag) {
      axes.connect(this.options.horizontal ? "scroll" : ["", "scroll"], new PanInput(scrollAreaElement, {
        inputType: ["mouse"],
      }));
    }
    scrollAreaElement.addEventListener("scroll", this._onScroll);
    window.addEventListener("resize", this.update);

    this.update();
  }
  /**
   * Releases the instnace and events.
   * @ko 인스턴스와 이벤트를 해제한다.
   */
  public destroy() {
    this.axes?.destroy();
    this.unsubscribe();
    this.scrollAreaElement?.removeEventListener("scroll", this._onScroll);
    window.removeEventListener("resize", this.update);
    this.off();
  }
  private _refreshScroll() {
    const horizontal = this.options.horizontal;
    const scrollAreaElement = this.scrollAreaElement;
    this.pos = horizontal ? scrollAreaElement.scrollLeft : scrollAreaElement.scrollTop;
  }
  private _getItem(element: HTMLElement): ConveyerItem {
    const horizontal = this.options.horizontal;

    return {
      element,
      pos: horizontal ? element.offsetLeft : element.offsetTop,
      size: horizontal ? element.offsetWidth : element.offsetHeight,
    };
  }
  private _getNextScrollPos(item: ConveyerItem, options: ScrollIntoViewOptions) {
    const size = this.size;
    const align = options.align || "start";
    const padding = options.offset || 0;
    const itemPos = item!.pos;
    const itemSize = item!.size;
    let scrollPos = 0;

    if (align === "start") {
      scrollPos = itemPos - padding;
    } else if (align === "end") {
      scrollPos = itemPos + itemSize - size + padding;
    } else if (align === "center") {
      scrollPos = itemPos + itemSize / 2 - size / 2 + padding;
    }
    return scrollPos;
  }
  private _onScroll = (e?: any) => {
    if (e) {
      this._debounceScroll();
    }
    this._refreshScroll();

    const size = this.size;
    const scrollSize = this.scrollSize;
    const pos = this.pos;

    // enter start
    if (pos <= 0 && this.isReachStart !== true) {
      this._isReachStart = true;
      /**
       * This event is fired when scroll reach start.
       * @ko 스크롤이 앞에 닿으면 발생하는 이벤트이다.
       * @event Conveyer#reachStart
       */
      this.trigger("reachStart");
    } else if (pos > 0 && this.isReachStart !== false) {
      this._isReachStart = false;
      /**
       * This event is fired when scroll leave start.
       * @ko 스크롤이 앞에서 떠나면 발생하는 이벤트이다.
       * @event Conveyer#leaveStart
       */
      this.trigger("leaveStart");
    }
    // enter end
    if (pos >= scrollSize - size && this.isReachEnd !== true) {
      this._isReachEnd = true;
      /**
       * This event is fired when scroll reach end.
       * @ko 스크롤이 끝에 닿으면 발생하는 이벤트이다.
       * @event Conveyer#reachEnd
       */
      this.trigger("reachEnd");
    } else if (pos < scrollSize - size && this.isReachEnd !== false) {
      this._isReachEnd = false;
      /**
       * This event is fired when scroll leave end.
       * @ko 스크롤이 끝에서 떠나면 발생하는 이벤트이다.
       * @event Conveyer#leaveEnd
       */
      this.trigger("leaveEnd");
    }
  }
  private _onPreventClick = (e: Event) => {
    e.stopPropagation();
    e.preventDefault();
    this._enableClick();
  }
  private _enableClick() {
    window.removeEventListener("click", this._onPreventClick, true);
  }
  private _disableClick() {
    window.addEventListener("click", this._onPreventClick, true);
  }
  private _debounceScroll() {
    if (!this._scrollTimer) {
      /**
       * This event is fired when begin scroll.
       * @ko 스크롤이 시작하면 발생하는 이벤트이다.
       * @event Conveyer#beginScroll
       */
      this.trigger("beginScroll");
    }
    window.clearTimeout(this._scrollTimer);
    this._scrollTimer = window.setTimeout(() => {
      this._scrollTimer = 0;
      /**
       * This event is fired when finish scroll.
       * @ko 스크롤이 끝나면 발생하는 이벤트이다.
       * @event Conveyer#finishScroll
       * @param {OnFinishScroll} e - The object of data to be sent to an event <ko>이벤트에 전달되는 데이터 객체</ko>
       */
      this.trigger("finishScroll", {
        isDragScroll: this._isDragScroll,
        isTrusted: this._isDragScroll || !this._isAnimation,
      });

      this._isDragScroll = false;
      this._isAnimation = false;
    }, this.options.scrollDebounce);
  }
}


interface Conveyer extends ConveyerReactiveState, ReactiveSubscribe<ConveyerReactiveState> { }

export default Conveyer;