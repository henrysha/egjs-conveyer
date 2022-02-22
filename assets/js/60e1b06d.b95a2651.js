"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4419],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=c(n),s=r,h=m["".concat(p,".").concat(s)]||m[s]||k[s]||l;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1381:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={custom_edit_url:null},p=void 0,c={unversionedId:"api/Conveyer",id:"api/Conveyer",title:"Conveyer",description:"Conveyer adds Drag gestures to your Native Scroll.",source:"@site/docs/api/Conveyer.mdx",sourceDirName:"api",slug:"/api/Conveyer",permalink:"/egjs-conveyer/docs/next/api/Conveyer",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",next:{title:"Component",permalink:"/egjs-conveyer/docs/next/api/Component"}},d=[{value:"Constructor",id:"constructor",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"isReachStart",id:"isReachStart",children:[],level:3},{value:"isReachEnd",id:"isReachEnd",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"findElement",id:"findElement",children:[],level:3},{value:"findItem",id:"findItem",children:[],level:3},{value:"scrollIntoView",id:"scrollIntoView",children:[],level:3},{value:"scrollBy",id:"scrollBy",children:[],level:3},{value:"scrollTo",id:"scrollTo",children:[],level:3},{value:"setItems",id:"setItems",children:[],level:3},{value:"updateItems",id:"updateItems",children:[],level:3},{value:"updateContainer",id:"updateContainer",children:[],level:3},{value:"update",id:"update",children:[],level:3},{value:"init",id:"init",children:[],level:3},{value:"destroy",id:"destroy",children:[],level:3},{value:"trigger",id:"trigger",children:[],level:3},{value:"once",id:"once",children:[],level:3},{value:"hasOn",id:"hasOn",children:[],level:3},{value:"on",id:"on",children:[],level:3},{value:"off",id:"off",children:[],level:3}],level:2},{value:"Events",id:"events",children:[{value:"reachStart",id:"event-reachStart",children:[],level:3},{value:"leaveStart",id:"event-leaveStart",children:[],level:3},{value:"reachEnd",id:"event-reachEnd",children:[],level:3},{value:"leaveEnd",id:"event-leaveEnd",children:[],level:3},{value:"beginScroll",id:"event-beginScroll",children:[],level:3},{value:"finishScroll",id:"event-finishScroll",children:[],level:3}],level:2}],k={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Conveyer extends Component\n")),(0,l.kt)("p",null,"Conveyer adds Drag gestures to your Native Scroll."),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("strong",null,"Methods")),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("strong",null,"Events"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("a",{href:"#isReachStart"},"isReachStart"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#isReachEnd"},"isReachEnd")),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("a",{href:"#findElement"},"findElement"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#findItem"},"findItem"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#scrollIntoView"},"scrollIntoView"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#scrollBy"},"scrollBy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#scrollTo"},"scrollTo"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#setItems"},"setItems"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateItems"},"updateItems"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateContainer"},"updateContainer"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#update"},"update"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#trigger"},"trigger"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#once"},"once"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#hasOn"},"hasOn"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#on"},"on"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#off"},"off")),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("a",{href:"#event-reachStart"},"reachStart"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#event-leaveStart"},"leaveStart"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#event-reachEnd"},"reachEnd"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#event-leaveEnd"},"leaveEnd"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#event-beginScroll"},"beginScroll"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#event-finishScroll"},"finishScroll")))),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new Conveyer(scrollArea, options)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"scrollArea"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string ","|"," HTMLElement ","|"," Ref","<","HTMLElement",">"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"A base element for a module "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"ConveyerOptions"},"ConveyerOptions")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The option object of the InfiniteGrid module "))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"isReachStart"},"isReachStart"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly")),(0,l.kt)("p",null,"Whether the scroll has reached the start."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default"),": false"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { Conveyer } from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".container");\n\nconveyer.isReachStart\n')),(0,l.kt)("h3",{id:"isReachEnd"},"isReachEnd"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly")),(0,l.kt)("p",null,"Whether the scroll has reached the end."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default"),": false"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import { Conveyer } from "@egjs/conveyer";\n\nconst conveyer = new Conveyer(".container");\n\nconveyer.isReachEnd\n')),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"findElement"},"findElement"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Finds an element for that direction."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"direction"),(0,l.kt)("td",{parentName:"tr",align:"center"},'"start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"direction of the element. ",'"',"start",'"'," and ",'"',"end",'"'," find inside. ",'"',"prev",'"'," and ",'"',"next",'"'," find outside. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"FindItemOptions"},"FindItemOptions")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"Options for the ",(0,l.kt)("code",null,"findElement")," method. "))))),(0,l.kt)("h4",null,"target"),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"/img/scrollIntoView1.png",height:"200"})),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"/img/scrollIntoView2.png",height:"210"})),(0,l.kt)("h3",{id:"findItem"},"findItem"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Finds an item for an element or its direction."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"ConveyerItem"},"ConveyerItem")," ","|"," null"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"HTMLElement ","|",' "start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"direction of the element. ",'"',"start",'"'," and ",'"',"end",'"'," find inside. ",'"',"prev",'"'," and ",'"',"next",'"'," find outside. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"FindItemOptions"},"FindItemOptions")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"Options for the ",(0,l.kt)("code",null,"findItem")," method. "))))),(0,l.kt)("h4",null,"target"),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"/img/scrollIntoView1.png",height:"200"})),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"/img/scrollIntoView2.png",height:"210"})),(0,l.kt)("h3",{id:"scrollIntoView"},"scrollIntoView"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Scrolls an element or an item in that direction into the view."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"target"),(0,l.kt)("td",{parentName:"tr",align:"center"},"HTMLElement ","|",' "start" ',"|",' "end" ',"|",' "prev" ',"|",' "next"'),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"direction of the element. ",'"',"start",'"'," and ",'"',"end",'"'," find inside. ",'"',"prev",'"'," and ",'"',"next",'"'," find outside. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"ScrollIntoViewOptions"},"ScrollIntoViewOptions")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"Options for the ",(0,l.kt)("code",null,"scrollIntoView")," method. "))))),(0,l.kt)("h4",null,"target"),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"/img/scrollIntoView1.png",height:"200"})),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"/img/scrollIntoView2.png",height:"210"})),(0,l.kt)("h3",{id:"scrollBy"},"scrollBy"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Scrolls by the given position amount."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"Amount of position to scroll by. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"Duration to scroll by that position. "))))),(0,l.kt)("h3",{id:"scrollTo"},"scrollTo"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Scroll to the given position."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"Amount of position to scroll to. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"0"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"Duration to scroll to that position. "))))),(0,l.kt)("h3",{id:"setItems"},"setItems"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Set the items directly to the Conveyer."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"items"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"ConveyerItem"},"ConveyerItem"),"[]"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"Items to set on Conveyer "))))),(0,l.kt)("h3",{id:"updateItems"},"updateItems"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Update the position and size information of items."),(0,l.kt)("h3",{id:"updateContainer"},"updateContainer"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Update container size and scroll size."),(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Updating containers and items."),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",null),(0,l.kt)("p",null,"If you use the autoInit option as false, you can initialize it directly through the init method."),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",null),(0,l.kt)("p",null,"Releases the instnace and events."),(0,l.kt)("h3",{id:"trigger"},"trigger"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Trigger a custom event."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,"An instance of the component itself"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"event"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string ","|"," ComponentEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The name of the custom event to be triggered or an instance of the ComponentEvent"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"params"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Array","<","any",">"," ","|"," $ts:..."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"Event data to be sent when triggering a custom event "))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  beforeHi: ComponentEvent<{ foo: number; bar: string }>;\n  hi: { foo: { a: number; b: boolean } };\n  someEvent: (foo: number, bar: string) => void;\n  someOtherEvent: void; // When there\'s no event argument\n}> {\n  some(){\n    if(this.trigger("beforeHi")){ // When event call to stop return false.\n      this.trigger("hi");// fire hi event.\n    }\n  }\n}\n\nconst some = new Some();\nsome.on("beforeHi", e => {\n  if(condition){\n    e.stop(); // When event call to stop, `hi` event not call.\n  }\n  // `currentTarget` is component instance.\n  console.log(some === e.currentTarget); // true\n\n  typeof e.foo; // number\n  typeof e.bar; // string\n});\nsome.on("hi", e => {\n  typeof e.foo.b; // boolean\n});\n// If you want to more know event design. You can see article.\n// https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F\n')),(0,l.kt)("h3",{id:"once"},"once"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Executed event just one time."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,"An instance of the component itself"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The name of the event to be attached or an event name - event handler mapped object."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,l.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The handler function of the event to be attached "))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: ComponentEvent;\n}> {\n  hi() {\n    alert("hi");\n  }\n  thing() {\n    this.once("hi", this.hi);\n  }\n}\n\nvar some = new Some();\nsome.thing();\nsome.trigger(new ComponentEvent("hi"));\n// fire alert("hi");\nsome.trigger(new ComponentEvent("hi"));\n// Nothing happens\n')),(0,l.kt)("h3",{id:"hasOn"},"hasOn"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Checks whether an event has been attached to a component."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,"Indicates whether the event is attached. "))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The name of the event to be attached "))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import Component from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  some() {\n    this.hasOn("hi");// check hi event.\n  }\n}\n')),(0,l.kt)("h3",{id:"on"},"on"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Attaches an event to a component."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,"An instance of a component itself"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The name of the event to be attached or an event name - event handler mapped object."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,l.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The handler function of the event to be attached "))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.on("hi",this.hi); //attach event\n  }\n}\n')),(0,l.kt)("h3",{id:"off"},"off"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--danger"},"inherited")),(0,l.kt)("p",null,"Detaches an event from the component.",(0,l.kt)("br",null),"If the ",(0,l.kt)("code",null,"eventName")," is not given this will detach all event handlers attached.",(0,l.kt)("br",null),"If the ",(0,l.kt)("code",null,"handlerToDetach")," is not given, this will detach all event handlers for ",(0,l.kt)("code",null,"eventName"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",null,"An instance of a component itself "))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,l.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The name of the event to be detached "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"handlerToDetach"),(0,l.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The handler function of the event to be detached "))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.off("hi",this.hi); //detach event\n  }\n}\n')),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"event-reachStart"},"reachStart"),(0,l.kt)("div",null),(0,l.kt)("p",null,"This event is fired when scroll reach start."),(0,l.kt)("h3",{id:"event-leaveStart"},"leaveStart"),(0,l.kt)("div",null),(0,l.kt)("p",null,"This event is fired when scroll leave start."),(0,l.kt)("h3",{id:"event-reachEnd"},"reachEnd"),(0,l.kt)("div",null),(0,l.kt)("p",null,"This event is fired when scroll reach end."),(0,l.kt)("h3",{id:"event-leaveEnd"},"leaveEnd"),(0,l.kt)("div",null),(0,l.kt)("p",null,"This event is fired when scroll leave end."),(0,l.kt)("h3",{id:"event-beginScroll"},"beginScroll"),(0,l.kt)("div",null),(0,l.kt)("p",null,"This event is fired when begin scroll."),(0,l.kt)("h3",{id:"event-finishScroll"},"finishScroll"),(0,l.kt)("div",null),(0,l.kt)("p",null,"This event is fired when finish scroll."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"e"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"OnFinishScroll"},"OnFinishScroll")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("p",null,"The object of data to be sent to an event "))))))}m.isMDXComponent=!0}}]);