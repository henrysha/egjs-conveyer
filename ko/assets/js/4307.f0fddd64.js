"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4307],{4381:function(e,t,r){r.d(t,{H:function(){return _}});var n=r(4992),i=r(8393),o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},o(e,t)};var s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};function a(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s}function l(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var c=function(){function e(e){this._emitter=new i.Z,this._current=e}var t=e.prototype;return Object.defineProperty(t,"current",{get:function(){return this._current},set:function(e){var t=e!==this._current;this._current=e,t&&this._emitter.trigger("update",e)},enumerable:!1,configurable:!0}),t.subscribe=function(e){this._emitter.on("update",e)},t.unsubscribe=function(e){this._emitter.off("update",e)},e}();function u(e){return Object.keys(e)}function f(e){return e.__observers__||(e.__observers__={}),e.__observers__}function p(e,t,r){var n=f(e);return n[t]||(n[t]=new c(r)),n[t]}function h(e){return function(t,r){var n=e||r;Object.defineProperty(t,r,{get:function(){return p(this,n).current},set:function(e){p(this,n,e).current=e}}),n!==r&&Object.defineProperty(t,n,{get:function(){return p(this,n).current}})}}function v(e){var t=e.prototype;t.subscribe=function(e,t){e in this&&p(this,e).subscribe(t)},t.unsubscribe=function(e,t){var r=this;e?e in this&&p(this,e).unsubscribe(t):u(f(this)).forEach((function(e){r.unsubscribe(e)}))}}function d(e){return"string"==typeof e}var m=function(e){function t(t,r){void 0===r&&(r={});var n=e.call(this)||this;return n.items=[],n.pos=0,n.size=0,n.scrollSize=0,n._scrollTimer=0,n._isDragScroll=!1,n._isAnimation=!1,n._isReachStart=!1,n._isReachEnd=!1,n.update=function(){n.updateItems(),n.updateContainer()},n._onScroll=function(e){e&&n._debounceScroll(),n._refreshScroll();var t=n.size,r=n.scrollSize,i=n.pos;i<=0&&!0!==n.isReachStart?(n._isReachStart=!0,n.trigger("reachStart")):i>0&&!1!==n.isReachStart&&(n._isReachStart=!1,n.trigger("leaveStart")),i>=r-t&&!0!==n.isReachEnd?(n._isReachEnd=!0,n.trigger("reachEnd")):i<r-t&&!1!==n.isReachEnd&&(n._isReachEnd=!1,n.trigger("leaveEnd"))},n._onPreventClick=function(e){e.stopPropagation(),e.preventDefault(),n._enableClick()},n.options=s({horizontal:!0,useDrag:!0,autoInit:!0,scrollDebounce:100},r),n._scrollArea=t,n.options.autoInit&&n.init(),n}!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e);var r=t.prototype;return r.findElement=function(e,t){var r;return void 0===t&&(t={}),(null===(r=this.findItem(e,t))||void 0===r?void 0:r.element)||null},r.findItem=function(e,t){var r;void 0===t&&(t={});var n,i=this.pos,o=this.scrollSize,s=this.size,a=null!==(r=null==t?void 0:t.hitTest)&&void 0!==r?r:1,c=l([],this.items,!0),u=c.length,f=i+s,p=t.sibling,h={pos:0,size:0},v={pos:o,size:0};if(c[0].pos>0&&c.unshift(h),u&&c[u-1].pos+c[u-1].size<o&&c.push(v),"start"===e){if(i<0)return null;n=(d=l([],c,!0).reverse().filter((function(e){var t=e.size,r=e.pos-i,n=r+t;return r>=0||n>=0&&(!t||Math.abs(n)/t>=a)})).reverse())[0]===h&&d[1]||d[0]}else if("end"===e){if(i>o-s)return null;var d;n=(d=c.filter((function(e){var t=e.size,r=e.pos+t-f,n=r-t;return r<=0||n<=0&&(!t||Math.abs(n)/t>=a)})).reverse())[0]===v&&d[1]||d[0]}else if("prev"===e)n=c.filter((function(e){var t=e.size,r=e.pos+t-i,n=r-t;return r<=0||n<=0&&(!t||Math.abs(n)/t>=a)})).reverse()[0];else{if("next"!==e)return this._getItem(e);n=c.reverse().filter((function(e){var t=e.size,r=e.pos-f,n=r+t;return r>=0||n>=0&&(!t||Math.abs(n)/t>=a)})).reverse()[0]}if(p&&n){var m=c.indexOf(n);m>-1&&(n=c[m+p])}return n||null},r.scrollIntoView=function(e,t){void 0===t&&(t={});var r=this.findItem(e,t);if(r){var n=t.duration||0,i=this._getNextScrollPos(r,t);if(d(e)&&t.excludeStand&&i===this.pos){var o=this.items.indexOf(r);if(-1===o)return;var s="start"===e||"prev"===e?-1:1;if(!(r=this.items[o+s]))return;i=this._getNextScrollPos(r,t)}this.scrollBy(i-this.pos,n)}},r.scrollBy=function(e,t){void 0===t&&(t=0),this.axes.setBy({scroll:-e},t)},r.scrollTo=function(e,t){void 0===t&&(t=0),this.axes.setBy({scroll:this.pos-e},t)},r.setItems=function(e){this.items=e},r.updateItems=function(){var e=this,t=this.scrollAreaElement,r=this.options.itemSelector,n=[].slice.call(r?t.querySelectorAll(r):t.children);this.setItems(n.map((function(t){return e._getItem(t)})))},r.updateContainer=function(){var e=this.scrollAreaElement,t=this.options.horizontal;this.size=t?e.clientWidth:e.clientHeight,this.scrollSize=t?e.scrollWidth:e.scrollHeight,this._refreshScroll(),this._onScroll()},r.init=function(){var e=this;if(!this.axes){var t,r=this._scrollArea;d(r)?t=document.querySelector(r):r instanceof Element?t=r:("value"in r||"current"in r)&&(t=r.value||r.current),this.scrollAreaElement=t;var i=!1,o=this.scrollAreaElement,a=new n.ZP({scroll:{circular:!0,range:[-1e3,1e3]}},{deceleration:.005,round:1}),l=!1;a.on({hold:function(t){l=!0,i=!1;var r=t.inputEvent.srcEvent;if(r){var n=e.options;n.preventDefault&&r.preventDefault(),n.preventClickOnDrag&&e._disableClick()}},change:function(t){if(!t.inputEvent||l){e._isDragScroll=!!t.inputEvent,e._isAnimation=!!l,i=!0;var r=t.delta.scroll;e.options.horizontal?o.scrollLeft-=r:o.scrollTop-=r}},release:function(t){i||(t.setTo(s({},t.depaPos),0),e._enableClick()),i=!1}}),this.axes=a,this.options.useDrag&&a.connect(this.options.horizontal?"scroll":["","scroll"],new n.Ju(o,{inputType:["mouse"]})),o.addEventListener("scroll",this._onScroll),window.addEventListener("resize",this.update),this.update()}},r.destroy=function(){var e,t;null===(e=this.axes)||void 0===e||e.destroy(),this.unsubscribe(),null===(t=this.scrollAreaElement)||void 0===t||t.removeEventListener("scroll",this._onScroll),window.removeEventListener("resize",this.update),this.off()},r._refreshScroll=function(){var e=this.options.horizontal,t=this.scrollAreaElement;this.pos=e?t.scrollLeft:t.scrollTop},r._getItem=function(e){var t=this.options.horizontal;return{element:e,pos:t?e.offsetLeft:e.offsetTop,size:t?e.offsetWidth:e.offsetHeight}},r._getNextScrollPos=function(e,t){var r=this.size,n=t.align||"start",i=t.offset||0,o=e.pos,s=e.size,a=0;return"start"===n?a=o-i:"end"===n?a=o+s-r+i:"center"===n&&(a=o+s/2-r/2+i),a},r._enableClick=function(){window.removeEventListener("click",this._onPreventClick,!0)},r._disableClick=function(){window.addEventListener("click",this._onPreventClick,!0)},r._debounceScroll=function(){var e=this;this._scrollTimer||this.trigger("beginScroll"),window.clearTimeout(this._scrollTimer),this._scrollTimer=window.setTimeout((function(){e._scrollTimer=0,e.trigger("finishScroll",{isDragScroll:e._isDragScroll,isTrusted:e._isDragScroll||!e._isAnimation}),e._isDragScroll=!1,e._isAnimation=!1}),this.options.scrollDebounce)},a([h("isReachStart")],t.prototype,"_isReachStart",void 0),a([h("isReachEnd")],t.prototype,"_isReachEnd",void 0),t=a([v],t)}(i.Z),b={state:{isReachStart:!1,isReachEnd:!1},methods:["update","findElement","findItem","scrollBy","scrollTo","scrollIntoView","setItems","updateContainer","updateItems","init"],events:["reachStart","reachEnd","leaveStart","leaveEnd","beginScroll","finishScroll"],instance:function(e){return new m(e.container,s(s({},e.props),{autoInit:!1}))},init:function(e,t){!1!==t.props.autoInit&&e.init()},on:function(e,t,r){e.on(t,r)},off:function(e,t,r){e.off(t,r)},destroy:function(e){e.destroy()}},y=r(7294),g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},g.apply(this,arguments)};function _(e,t){return void 0===t&&(t={}),function(e){var t=e.state,r=u(t),n=(0,y.useState)({})[0];for(var i in t){var o=(0,y.useState)(t[i]);n[i]={getter:!1,set:o[1],value:o[0]}}var s=(0,y.useRef)(),a=(0,y.useState)((function(){return function(e,t){var r={};return t.forEach((function(t){r[t]=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.current||e.value;return i[t].apply(i,r)}})),r}(s,e.methods||[])}))[0];(0,y.useEffect)((function(){var t=e.data?e.data():{},i=e.instance(t);return s.current=i,r.forEach((function(e){i.subscribe(e,(function(t){n[e].getter&&n[e].set(t)}))})),e.init(i,t),function(){var t=e.data?e.data():{};e.destroy(i,t)}}),[]);var l=r.reduce((function(e,t){return Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t].getter=!0,n[t].value}}),e}),{});return u(a).forEach((function(e){l[e]=a[e]})),l}(g({data:function(){return{container:e,props:t}}},b))}},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(r),h=i,v=p["".concat(l,".").concat(h)]||p[h]||f[h]||o;return r?n.createElement(v,s(s({ref:t},u),{},{components:r})):n.createElement(v,s({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:i},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7462),i=r(7294),o=r(2389),s=r(9548),a=r(6010),l="tabItem_LplD";function c(e){var t,r,o,c=e.lazy,u=e.block,f=e.defaultValue,p=e.values,h=e.groupId,v=e.className,d=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=p?p:d.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(m,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(r=d.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=d[0])?void 0:o.props.value;if(null!==y&&!m.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+m.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,s.UB)(),_=g.tabGroupChoices,E=g.setTabGroupChoices,S=(0,i.useState)(y),w=S[0],O=S[1],T=[],j=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=_[h];null!=P&&P!==w&&m.some((function(e){return e.value===P}))&&O(P)}var k=function(e){var t=e.currentTarget,r=T.indexOf(t),n=m[r].value;n!==w&&(j(t),O(n),null!=h&&E(h,n))},z=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;r=T[n]||T[0];break;case"ArrowLeft":var i=T.indexOf(e.currentTarget)-1;r=T[i]||T[T.length-1]}null==(t=r)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":u},v)},m.map((function(e){var t=e.value,r=e.label,o=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:z,onFocus:k,onClick:k},o,{className:(0,a.Z)("tabs__item",l,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),c?(0,i.cloneElement)(d.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function u(e){var t=(0,o.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}}}]);