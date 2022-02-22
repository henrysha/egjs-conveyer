/*! For license information please see 8798.aab75c12.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8798],{7906:function(t,e,n){var r=n(8393),i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},i(t,e)};function o(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)};var s="undefined"!=typeof window,u=s?window.navigator.userAgent:"",h=!!s&&!!("getComputedStyle"in window),c=/MSIE|Trident|Windows Phone|Edge/.test(u),d=!!s&&!!("addEventListener"in document),f="width",l="height";function y(t,e){return t.getAttribute(e)||""}function p(t){return[].slice.call(t)}function v(t,e){return void 0===e&&(e="data-"),"loading"in t&&"lazy"===t.getAttribute("loading")||!!t.getAttribute(e+"lazy")}function g(t,e,n){d?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function R(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}function E(t,e){var n=t["client"+e]||t["offset"+e];return parseFloat(n||function(t){return(h?window.getComputedStyle(t):t.currentStyle)||{}}(t)[e.toLowerCase()])||0}function m(t,e,n){var r=p(t.querySelectorAll(function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}(["["+n+"skip] ["+n+"width]"],e.map((function(t){return["["+n+"skip] "+t,t+"["+n+"skip]","["+n+"width] "+t].join(", ")}))).join(", ")));return p(t.querySelectorAll("["+n+"width], "+e.join(", "))).filter((function(t){return-1===r.indexOf(t)}))}var C=[];function P(t,e){!C.length&&g(window,"resize",S),t.__PREFIX__=e,C.push(t),k(t)}function k(t,e){void 0===e&&(e="data-");var n=t.__PREFIX__||e,r=parseInt(y(t,""+n+f),10)||0,i=parseInt(y(t,""+n+l),10)||0;if(y(t,n+"fixed")===l){var o=E(t,"Height")||i;t.style.width=r/i*o+"px"}else{o=function(t){return E(t,"Width")}(t)||r;t.style.height=i/r*o+"px"}}function S(){C.forEach((function(t){k(t)}))}var w=function(t){function e(e,n){void 0===n&&(n={});var r=t.call(this)||this;r.isReady=!1,r.isPreReady=!1,r.hasDataSize=!1,r.hasLoading=!1,r.isSkip=!1,r.onCheck=function(t){if(r.clear(),t&&"error"===t.type&&r.onError(r.element),!r.hasLoading||!r.checkElement()){var e=!r.hasDataSize&&!r.hasLoading;r.onReady(e)}},r.options=a({prefix:"data-"},n),r.element=e;var i=r.options.prefix;return r.hasDataSize=function(t,e){return void 0===e&&(e="data-"),!!t.getAttribute(e+"width")}(e,i),r.isSkip=function(t,e){return void 0===e&&(e="data-"),!!t.getAttribute(e+"skip")}(e,i),r.hasLoading=v(e,i),r}o(e,t);var n=e.prototype;return n.check=function(){return this.isSkip||!this.checkElement()?(this.onAlreadyReady(!0),!1):(this.hasDataSize&&P(this.element,this.options.prefix),(this.hasDataSize||this.hasLoading)&&this.onAlreadyPreReady(),!0)},n.addEvents=function(){var t=this,e=this.element;this.constructor.EVENTS.forEach((function(n){g(e,n,t.onCheck)}))},n.clear=function(){var t=this,e=this.element;this.constructor.EVENTS.forEach((function(n){R(e,n,t.onCheck)})),this.removeAutoSizer()},n.destroy=function(){this.clear(),this.off()},n.removeAutoSizer=function(){if(this.hasDataSize){var t=this.options.prefix;!function(t,e){var n=C.indexOf(t);if(!(n<0)){var r=y(t,e+"fixed");delete t.__PREFIX__,t.style[r===l?f:l]="",C.splice(n,1),!C.length&&R(window,"resize",S)}}(this.element,t)}},n.onError=function(t){this.trigger("error",{element:this.element,target:t})},n.onPreReady=function(){this.isPreReady||(this.isPreReady=!0,this.trigger("preReady",{element:this.element,hasLoading:this.hasLoading,isSkip:this.isSkip}))},n.onReady=function(t){this.isReady||((t=!this.isPreReady&&t)&&(this.isPreReady=!0),this.removeAutoSizer(),this.isReady=!0,this.trigger("ready",{element:this.element,withPreReady:t,hasLoading:this.hasLoading,isSkip:this.isSkip}))},n.onAlreadyError=function(t){var e=this;setTimeout((function(){e.onError(t)}))},n.onAlreadyPreReady=function(){var t=this;setTimeout((function(){t.onPreReady()}))},n.onAlreadyReady=function(t){var e=this;setTimeout((function(){e.onReady(t)}))},e.EVENTS=[],e}(r.Z),L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}o(e,t);var n=e.prototype;return n.setHasLoading=function(t){this.hasLoading=t},n.check=function(){return this.isSkip?(this.onAlreadyReady(!0),!1):(this.hasDataSize?(P(this.element,this.options.prefix),this.onAlreadyPreReady()):this.trigger("requestChildren"),!0)},n.checkElement=function(){return!0},n.destroy=function(){this.clear(),this.trigger("requestDestroy"),this.off()},n.onAlreadyPreReady=function(){t.prototype.onAlreadyPreReady.call(this),this.trigger("reqeustReadyChildren")},e.EVENTS=[],e}(w),x=function(t){function e(e){void 0===e&&(e={});var n=t.call(this)||this;return n.readyCount=0,n.preReadyCount=0,n.totalCount=0,n.totalErrorCount=0,n.isPreReadyOver=!0,n.elementInfos=[],n.options=a({loaders:{},prefix:"data-"},e),n}o(e,t);var n=e.prototype;return n.check=function(t){var e=this,n=this.options.prefix;this.clear(),this.elementInfos=p(t).map((function(t,r){var i=e.getLoader(t,{prefix:n});return i.check(),i.on("error",(function(t){e.onError(r,t.target)})).on("preReady",(function(t){var n=e.elementInfos[r];n.hasLoading=t.hasLoading,n.isSkip=t.isSkip;var i=e.checkPreReady(r);e.onPreReadyElement(r),i&&e.onPreReady()})).on("ready",(function(t){var n=t.withPreReady,i=t.hasLoading,o=t.isSkip,a=e.elementInfos[r];a.hasLoading=i,a.isSkip=o;var s=n&&e.checkPreReady(r),u=e.checkReady(r);n&&e.onPreReadyElement(r),e.onReadyElement(r),s&&e.onPreReady(),u&&e.onReady()})),{loader:i,element:t,hasLoading:!1,hasError:!1,isPreReady:!1,isReady:!1,isSkip:!1}}));var r=this.elementInfos.length;return this.totalCount=r,r||setTimeout((function(){e.onPreReady(),e.onReady()})),this},n.getTotalCount=function(){return this.totalCount},n.isPreReady=function(){return this.elementInfos.every((function(t){return t.isPreReady}))},n.isReady=function(){return this.elementInfos.every((function(t){return t.isReady}))},n.hasError=function(){return this.totalErrorCount>0},n.clear=function(){this.isPreReadyOver=!1,this.totalCount=0,this.preReadyCount=0,this.readyCount=0,this.totalErrorCount=0,this.elementInfos.forEach((function(t){!t.isReady&&t.loader&&t.loader.destroy()})),this.elementInfos=[]},n.destroy=function(){this.clear(),this.off()},n.getLoader=function(t,e){var n=this,r=t.tagName.toLowerCase(),i=this.options.loaders,o=e.prefix,a=Object.keys(i);if(i[r])return new i[r](t,e);var s=new L(t,e),u=p(t.querySelectorAll(a.join(", ")));s.setHasLoading(u.some((function(t){return v(t,o)})));var h=!1,c=this.clone().on("error",(function(t){s.onError(t.target)})).on("ready",(function(){s.onReady(h)}));return s.on("requestChildren",(function(){var e=m(t,a,n.options.prefix);c.check(e).on("preReady",(function(t){(h=t.isReady)||s.onPreReady()}))})).on("reqeustReadyChildren",(function(){c.check(u)})).on("requestDestroy",(function(){c.destroy()})),s},n.clone=function(){return new e(a({},this.options))},n.checkPreReady=function(t){return this.elementInfos[t].isPreReady=!0,++this.preReadyCount,!(this.preReadyCount<this.totalCount)},n.checkReady=function(t){return this.elementInfos[t].isReady=!0,++this.readyCount,!(this.readyCount<this.totalCount)},n.onError=function(t,e){var n=this.elementInfos[t];n.hasError=!0,this.trigger(new r.L("error",{element:n.element,index:t,target:e,errorCount:this.getErrorCount(),totalErrorCount:++this.totalErrorCount}))},n.onPreReadyElement=function(t){var e=this.elementInfos[t];this.trigger(new r.L("preReadyElement",{element:e.element,index:t,preReadyCount:this.preReadyCount,readyCount:this.readyCount,totalCount:this.totalCount,isPreReady:this.isPreReady(),isReady:this.isReady(),hasLoading:e.hasLoading,isSkip:e.isSkip}))},n.onPreReady=function(){this.isPreReadyOver=!0,this.trigger(new r.L("preReady",{readyCount:this.readyCount,totalCount:this.totalCount,isReady:this.isReady(),hasLoading:this.hasLoading()}))},n.onReadyElement=function(t){var e=this.elementInfos[t];this.trigger(new r.L("readyElement",{index:t,element:e.element,hasError:e.hasError,errorCount:this.getErrorCount(),totalErrorCount:this.totalErrorCount,preReadyCount:this.preReadyCount,readyCount:this.readyCount,totalCount:this.totalCount,isPreReady:this.isPreReady(),isReady:this.isReady(),hasLoading:e.hasLoading,isPreReadyOver:this.isPreReadyOver,isSkip:e.isSkip}))},n.onReady=function(){this.trigger(new r.L("ready",{errorCount:this.getErrorCount(),totalErrorCount:this.totalErrorCount,totalCount:this.totalCount}))},n.getErrorCount=function(){return this.elementInfos.filter((function(t){return t.hasError})).length},n.hasLoading=function(){return this.elementInfos.some((function(t){return t.hasLoading}))},e}(r.Z),A=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.checkElement=function(){var t=this.element,e=t.getAttribute("src");if(t.complete){if(e)return t.naturalWidth||this.onAlreadyError(t),!1;this.onAlreadyPreReady()}return this.addEvents(),c&&t.setAttribute("src",e),!0},e.EVENTS=["load","error"],e}(w),b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.checkElement=function(){var t=this.element;return!(t.readyState>=1)&&(t.error?(this.onAlreadyError(t),!1):(this.addEvents(),!0))},e.EVENTS=["loadedmetadata","error"],e}(w),O=function(t){function e(e){return void 0===e&&(e={}),t.call(this,a({loaders:{img:A,video:b}},e))||this}return o(e,t),e}(x);e.ZP=O},871:function(t,e,n){n.d(e,{H:function(){return u}});var r=function(){function t(){this.keys=[],this.values=[]}var e=t.prototype;return e.get=function(t){return this.values[this.keys.indexOf(t)]},e.set=function(t,e){var n=this.keys,r=this.values,i=n.indexOf(t),o=-1===i?n.length:i;n[o]=t,r[o]=e},t}(),i=function(){function t(){this.object={}}var e=t.prototype;return e.get=function(t){return this.object[t]},e.set=function(t,e){this.object[t]=e},t}(),o="function"==typeof Map,a=function(){function t(){}var e=t.prototype;return e.connect=function(t,e){this.prev=t,this.next=e,t&&(t.next=this),e&&(e.prev=this)},e.disconnect=function(){var t=this.prev,e=this.next;t&&(t.next=e),e&&(e.prev=t)},e.getIndex=function(){for(var t=this,e=-1;t;)t=t.prev,++e;return e},t}();var s=function(){function t(t,e,n,r,i,o,a,s){this.prevList=t,this.list=e,this.added=n,this.removed=r,this.changed=i,this.maintained=o,this.changedBeforeAdded=a,this.fixed=s}var e=t.prototype;return Object.defineProperty(e,"ordered",{get:function(){return this.cacheOrdered||this.caculateOrdered(),this.cacheOrdered},enumerable:!0,configurable:!0}),Object.defineProperty(e,"pureChanged",{get:function(){return this.cachePureChanged||this.caculateOrdered(),this.cachePureChanged},enumerable:!0,configurable:!0}),e.caculateOrdered=function(){var t=function(t,e){var n=[],r=[];return t.forEach((function(t){var e=t[0],i=t[1],o=new a;n[e]=o,r[i]=o})),n.forEach((function(t,e){t.connect(n[e-1])})),t.filter((function(t,n){return!e[n]})).map((function(t,e){var i=t[0],o=t[1];if(i===o)return[0,0];var a=n[i],s=r[o-1],u=a.getIndex();return a.disconnect(),s?a.connect(s,s.next):a.connect(void 0,n[0]),[u,a.getIndex()]}))}(this.changedBeforeAdded,this.fixed),e=this.changed,n=[];this.cacheOrdered=t.filter((function(t,r){var i=t[0],o=t[1],a=e[r],s=a[0],u=a[1];if(i!==o)return n.push([s,u]),!0})),this.cachePureChanged=n},t}();function u(t,e,n){var a=o?Map:n?i:r,u=n||function(t){return t},h=[],c=[],d=[],f=t.map(u),l=e.map(u),y=new a,p=new a,v=[],g=[],R={},E=[],m=0,C=0;return f.forEach((function(t,e){y.set(t,e)})),l.forEach((function(t,e){p.set(t,e)})),f.forEach((function(t,e){var n=p.get(t);void 0===n?(++C,c.push(e)):R[n]=C})),l.forEach((function(t,e){var n=y.get(t);void 0===n?(h.push(e),++m):(d.push([n,e]),C=R[e]||0,v.push([n-C,e-m]),g.push(e===n),n!==e&&E.push([n,e]))})),c.reverse(),new s(t,e,h,c,E,d,v,g)}var h=function(){function t(t,e){void 0===t&&(t=[]),this.findKeyCallback=e,this.list=[].slice.call(t)}return t.prototype.update=function(t){var e=[].slice.call(t),n=u(this.list,e,this.findKeyCallback);return this.list=e,n},t}();e.Z=h}}]);