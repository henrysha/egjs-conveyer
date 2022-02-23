"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6068],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),v=c(t),d=a,m=v["".concat(s,".").concat(d)]||v[d]||p[d]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=v;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(7462),a=t(7294),o=t(2389),l=t(9548),i=t(6010),s="tabItem_LplD";function c(e){var n,t,o,c=e.lazy,u=e.block,p=e.defaultValue,v=e.values,d=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),k=h.tabGroupChoices,C=h.setTabGroupChoices,N=(0,a.useState)(y),x=N[0],w=N[1],I=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=k[d];null!=j&&j!==x&&g.some((function(e){return e.value===j}))&&w(j)}var O=function(e){var n=e.currentTarget,t=I.indexOf(n),r=g[t].value;r!==x&&(T(n),w(r),null!=d&&C(d,r))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=I.indexOf(e.currentTarget)+1;t=I[r]||I[0];break;case"ArrowLeft":var a=I.indexOf(e.currentTarget)-1;t=I[a]||I[I.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},m)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return I.push(e)},onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),c?(0,a.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function u(e){var n=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},1572:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return v},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=t(9960),i=t(4996),s=t(9877),c=t(8215),u=["components"],p={title:"Listen to Events",id:"listen-to-events",slug:"/listen-to-events",custom_edit_url:null},v=void 0,d={unversionedId:"listen-to-events",id:"listen-to-events",title:"Listen to Events",description:"<Tabs",source:"@site/docs/listen-to-events.mdx",sourceDirName:".",slug:"/listen-to-events",permalink:"/egjs-conveyer/ko/docs/next/listen-to-events",editUrl:null,tags:[],version:"current",frontMatter:{title:"Listen to Events",id:"listen-to-events",slug:"/listen-to-events",custom_edit_url:null},sidebar:"started",previous:{title:"Use the Methods",permalink:"/egjs-conveyer/ko/docs/next/use-the-methods"},next:{title:"Subscribe to Reactive Properties",permalink:"/egjs-conveyer/ko/docs/next/subscribe-to-reactive-properties"}},m=[],f={toc:m};function g(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("p",null,"You can listen to Conveyer's events with ",(0,o.kt)("a",{parentName:"p",href:"api/Conveyer#on"},"Conveyer#on")),(0,o.kt)("p",null,"Since events occur during initialization, set [autoInit(api/ConveyerOptions) to false if you want to register events."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Conveyer from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".items", {\n  autoInit: false,\n});\n\nconveyer.on("scrollStart", evt => {\n  console.log(evt);\n});\n\nconveyer.init();\n'))),(0,o.kt)(c.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)("p",null,"You can use events of Conveyer by getting a result of ",(0,o.kt)("inlineCode",{parentName:"p"},"useConveyer"),"."),(0,o.kt)("p",null,"All events are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import * as React from "react";\nimport { useConveyer } from "@egjs/react-conveyer";\n\nexport default () => {\n  const ref = useRef();\n  const { scrollIntoView, onBeginScroll } = useConveyer(ref);\n\n  onBeginScroll(() => {\n    console.log("begin scroll");\n  });\n\n  return <div className="container">\n    <div className="buttons">\n      <button className="prev" onClick={() => {\n        // start to end\n        scrollIntoView("start", {\n          align: "end",\n          duration: 500,\n        });\n      }}>Prev</button>\n      <button className="next" onClick={() => {\n        // end to start\n        scrollIntoView("end", {\n          align: "start",\n          duration: 500,\n        });\n      }}>Next</button>\n    </div>\n    <div className="items" ref={ref}>\n      <div className="item">1</div>\n      <div className="item">2</div>\n      <div className="item">3</div>\n    </div>\n  </div>;\n};\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,o.kt)(c.Z,{value:"vue",mdxType:"TabItem"},(0,o.kt)("p",null,"You can use events of Conveyer by getting a result of ",(0,o.kt)("inlineCode",{parentName:"p"},"useConveyer"),"."),(0,o.kt)("p",null,"All events are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <button id="prev" @click="prev">prev</button>\n  <button id="next" @click="next">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue-conveyer";\n\nexport default {\n  setup() {\n      const { ref, scrollIntoView, onBeginScroll } = useConveyer({\n        horizontal: false,\n      });\n\n      onBeginScroll(() => {\n        console.log("begin scroll");\n      });\n\n      return {\n        ref,\n        scrollIntoView,\n      };\n    },\n    methods: {\n      prev() {\n        this.scrollIntoView("start", {\n          align: "end",\n          duration: 500,\n        });\n      },\n      next() {\n        this.scrollIntoView("end", {\n          align: "start",\n          duration: 500,\n        });\n      },\n    },\n  });\n};\n'))),(0,o.kt)(c.Z,{value:"vue2",mdxType:"TabItem"},(0,o.kt)("p",null,"You can call methods of Conveyer by getting a result of ",(0,o.kt)("inlineCode",{parentName:"p"},"useConveyer"),"."),(0,o.kt)("p",null,"All events are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="<template>"',title:'"<template>"'},'<div class="items" ref="ref">\n  <button id="prev" @click="prev">prev</button>\n  <button id="next" @click="next">next</button>\n  <div class="items" ref="ref">\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n  </div>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<script>"',title:'"<script>"'},'import { useConveyer } from "@egjs/vue2-conveyer";\n\nexport default {\n  setup() {\n      const { ref, scrollIntoView, onBeginScroll } = useConveyer({\n        horizontal: false,\n      });\n\n      onBeginScroll(() => {\n        console.log("begin scroll");\n      });\n      return {\n        ref,\n        scrollIntoView,\n      };\n    },\n    methods: {\n      prev() {\n        this.scrollIntoView("start", {\n          align: "end",\n          duration: 500,\n        });\n      },\n      next() {\n        this.scrollIntoView("end", {\n          align: "start",\n          duration: 500,\n        });\n      },\n    },\n  });\n};\n'))),(0,o.kt)(c.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)("p",null,"There're few ways to interact with child component in Angular.",(0,o.kt)("br",{parentName:"p"}),"\n","See ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Conveyer."),(0,o.kt)("p",null,"You can listen events of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ngx-conveyer")," using Angular's ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.component.html"',title:'"app.component.html"'},'<div class="container">\n  <button id="prev" (click)="prev()">prev</button>\n  <button id="next" (click)="next()">next</button>\n  <div\n    class="items"\n    NgxConveyer\n    (beginScroll)="onBeginScroll"\n    #conveyer="ngxConveyer"\n    >\n    <div class="item"><a href="#1">1</a></div>\n    <div class="item"><a href="#2">2</a></div>\n    <div class="item"><a href="#3">3</a></div>\n    <div class="item"><a href="#4">4</a></div>\n    <div class="item"><a href="#5">5</a></div>\n    <div class="item"><a href="#6">6</a></div>\n    <div class="item"><a href="#7">7</a></div>\n    <div class="item"><a href="#8">8</a></div>\n    <div class="item"><a href="#9">9</a></div>\n    <div class="item"><a href="#10">10</a></div>\n    <div class="item"><a href="#11">11</a></div>\n    <div class="item"><a href="#12">12</a></div>\n  </div>\n</div>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app.component.ts"',title:'"app.component.ts"'},'import { Component, Input, AfterViewInit } from \'@angular/core\';\n\nimport { NgxConveyerComponent } from \'ngx-conveyer\';\n@Component({\n  selector: \'app-root\',\n  templateUrl: \'./app.component.html\',\n})\nexport class AppComponent implements AfterViewInit {\n  @ViewChild("conveyer") conveyer!: NgxConveyerComponent;\n  onBeginScroll() {\n    console.log("begin scroll");\n  }\n  prev() {\n    this.conveyer.scrollIntoView("start", {\n      align: "end",\n      duration: 500,\n    });\n  }\n  next() {\n    this.conveyer.scrollIntoView("end", {\n      align: "start",\n      duration: 500,\n    });\n  }\n}\n'))),(0,o.kt)(c.Z,{value:"svelte",mdxType:"TabItem"},(0,o.kt)("p",null,"All events are prefixed with ",(0,o.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import { useConveyer } from "@egjs/svelte-conveyer";\n\n  const { ref, scrollIntoView, onBeginScroll } = useConveyer();\n\n  onBeginScroll(() => {\n    console.log("begin scroll");\n  });\n<\/script>\n<div class="container">\n  <div class="buttons">\n    <button class="prev" on:click={() => {\n      // start to end\n      scrollIntoView("start", {\n        align: "end",\n        duration: 500,\n      });\n    }}>Prev</button>\n    <button class="next" on:click={() => {\n      // end to start\n      scrollIntoView("end", {\n        align: "start",\n        duration: 500,\n      });\n    }}>Next</button>\n  </div>\n  <div class="items" use:ref>\n    <div class="item">1</div>\n    <div class="item">2</div>\n    <div class="item">3</div>\n  </div>\n</div>\n')))),(0,o.kt)("p",null,"See all available events at ",(0,o.kt)(l.Z,{to:(0,i.Z)("docs/api/Conveyer#events"),mdxType:"Link"},"Conveyer#events"),"."))}g.isMDXComponent=!0}}]);