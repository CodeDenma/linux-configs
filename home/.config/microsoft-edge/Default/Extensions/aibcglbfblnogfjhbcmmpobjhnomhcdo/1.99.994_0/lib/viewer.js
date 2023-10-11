/*!
 * Viewer.js v1.11.0
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-10-17T06:53:32.276Z
 */
((t,i)=>{"function"==typeof define&&true?define(i):(t="undefined"!=typeof globalThis?globalThis:t||self).Viewer=i()})(this,function(){"use strict";function t(t,i){var e,s=Object.keys(t);return Object.getOwnPropertySymbols&&(e=Object.getOwnPropertySymbols(t),i&&(e=e.filter(i=>Object.getOwnPropertyDescriptor(t,i).enumerable)),s.push.apply(s,e)),s}function i(i){var e,s;for(e=1;e<arguments.length;e++)s=null!=arguments[e]?arguments[e]:{},e%2?t(Object(s),!0).forEach(t=>{r(i,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach(t=>{Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(s,t))});return i}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t=>typeof t:t=>t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t,e(t)}function s(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function h(t,i){var e,s;for(e=0;e<i.length;e++)(s=i[e]).enumerable=s.enumerable||false,s.configurable=true,"value"in s&&(s.writable=true),Object.defineProperty(t,s.key,s)}function r(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:true,configurable:true,writable:true}):t[i]=e,t}function a(t){return"string"==typeof t}function o(t){return"number"==typeof t&&!Q(t)}function n(t){return void 0===t}function l(t){return"object"===e(t)&&null!==t}function u(t){var i,e;if(!l(t))return false;try{return e=(i=t.constructor).prototype,i&&e&&_.call(e,"isPrototypeOf")}catch(t){return false}}function c(t){return"function"==typeof t}function d(t,i){var e,s;if(t&&c(i))if(Array.isArray(t)||o(t.length))for(e=t.length,s=0;s<e&&false!==i.call(t,t[s],s,t);s+=1);else l(t)&&Object.keys(t).forEach(e=>{i.call(t,t[e],e,t)});return t}function v(t,i){var e=t.style;d(i,(t,i)=>{it.test(i)&&o(t)&&(t+="px"),e[i]=t})}function f(t,i){return!(!t||!i)&&(t.classList?t.classList.contains(i):t.className.indexOf(i)>-1)}function m(t,i){if(t&&i)if(o(t.length))d(t,t=>{m(t,i)});else if(t.classList)t.classList.add(i);else{var e=t.className.trim();e?e.indexOf(i)<0&&(t.className=e+" "+i):t.className=i}}function w(t,i){t&&i&&(o(t.length)?d(t,t=>{w(t,i)}):t.classList?t.classList.remove(i):t.className.indexOf(i)>=0&&(t.className=t.className.replace(i,"")))}function b(t,i,e){i&&(o(t.length)?d(t,t=>{b(t,i,e)}):e?m(t,i):w(t,i))}function p(t){return t.replace(et,"$1-$2").toLowerCase()}function g(t,i){return l(t[i])?t[i]:t.dataset?t.dataset[i]:t.getAttribute("data-"+p(i))}function y(t,i,e){l(e)?t[i]=e:t.dataset?t.dataset[i]=e:t.setAttribute("data-"+p(i),e)}function k(t,i,e){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},h=e;i.trim().split(G).forEach(i=>{if(!st){var r=t.listeners;r&&r[i]&&r[i][e]&&(h=r[i][e],delete r[i][e],0===Object.keys(r[i]).length&&delete r[i],0===Object.keys(r).length&&delete t.listeners)}t.removeEventListener(i,h,s)})}function x(t,i,e){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},h=e;i.trim().split(G).forEach(i=>{if(s.once&&!st){var r=t.listeners,a=void 0===r?{}:r;h=function(){delete a[i][e],t.removeEventListener(i,h,s);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];e.apply(t,o)},a[i]||(a[i]={}),a[i][e]&&t.removeEventListener(i,a[i][e],s),a[i][e]=h,t.listeners=a}t.addEventListener(i,h,s)})}function T(t,e,s,h){var r;return c(Event)&&c(CustomEvent)?r=new CustomEvent(e,i({bubbles:true,cancelable:true,detail:s},h)):(r=document.createEvent("CustomEvent")).initCustomEvent(e,true,true,s),t.dispatchEvent(r)}function z(t){var i=t.getBoundingClientRect();return{left:i.left+(window.pageXOffset-document.documentElement.clientLeft),top:i.top+(window.pageYOffset-document.documentElement.clientTop)}}function O(t){var i,e=t.rotate,s=t.scaleX,h=t.scaleY,r=t.translateX,a=t.translateY,n=[];return o(r)&&0!==r&&n.push("translateX("+r+"px)"),o(a)&&0!==a&&n.push("translateY("+a+"px)"),o(e)&&0!==e&&n.push("rotate("+e+"deg)"),o(s)&&1!==s&&n.push("scaleX("+s+")"),o(h)&&1!==h&&n.push("scaleY("+h+")"),{WebkitTransform:i=n.length?n.join(" "):"none",msTransform:i,transform:i}}function M(t){return a(t)?decodeURIComponent(t.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}function j(t,i,e){var s,h=document.createElement("img");return t.naturalWidth&&!ht?(e(t.naturalWidth,t.naturalHeight),h):(s=document.body||document.documentElement,h.onload=()=>{e(h.width,h.height),ht||s.removeChild(h)},d(i.inheritedAttributes,i=>{var e=t.getAttribute(i);null!==e&&h.setAttribute(i,e)}),h.src=t.src,ht||(h.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",s.appendChild(h)),h)}function I(t){switch(t){case 2:return V;case 3:return $;case 4:return U;default:return""}}function X(t){var e=i({},t),s=[];return d(t,(t,i)=>{delete e[i],d(e,i=>{var e=Math.abs(t.startX-i.startX),h=Math.abs(t.startY-i.startY),r=Math.abs(t.endX-i.endX),a=Math.abs(t.endY-i.endY),o=Math.sqrt(e*e+h*h),n=Math.sqrt(r*r+a*a);s.push((n-o)/o)})}),s.sort((t,i)=>Math.abs(t)<Math.abs(i)),s[0]}function E(t,e){var s=t.pageX,h=t.pageY,r={endX:s,endY:h};return e?r:i({timeStamp:Date.now(),startX:s,startY:h},r)}function Y(t){var i=0,e=0,s=0;return d(t,t=>{i+=t.startX,e+=t.startY,s+=1}),{pageX:i/=s,pageY:e/=s}}var N,A,S,R,C,D={backdrop:true,button:true,navbar:true,title:true,toolbar:true,className:"",container:"body",filter:null,fullscreen:true,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:false,interval:5e3,keyboard:true,focus:true,loading:true,loop:true,minWidth:200,minHeight:100,movable:true,rotatable:true,scalable:true,zoomable:true,zoomOnTouch:true,zoomOnWheel:true,slideOnTouch:true,toggleOnDblclick:true,tooltip:true,transition:true,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},L="undefined"!=typeof window&&void 0!==window.document,P=L?window:{},F=!(!L||!P.document.documentElement)&&"ontouchstart"in P.document.documentElement,W=!!L&&"PointerEvent"in P,U="viewer-hide-md-down",$="viewer-hide-sm-down",V="viewer-hide-xs-down",Z="viewer-in",q="viewer-transition",H=W?"pointerdown":F?"touchstart":"mousedown",B=W?"pointermove":F?"touchmove":"mousemove",K=W?"pointerup pointercancel":F?"touchend touchcancel":"mouseup",G=/\s\s*/,J=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"],Q=Number.isNaN||P.isNaN,_={}.hasOwnProperty,tt=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),s=1;s<i;s++)e[s-1]=arguments[s];return l(t)&&e.length>0&&e.forEach(i=>{l(i)&&Object.keys(i).forEach(e=>{t[e]=i[e]})}),t},it=/^(?:width|height|left|top|marginLeft|marginTop)$/,et=/([a-z\d])([A-Z])/g,st=(C=false,L&&(A=false,S=()=>{},R=Object.defineProperty({},"once",{get:()=>(C=true,A),set(t){A=t}}),P.addEventListener("test",S,R),P.removeEventListener("test",S,R)),C),ht=P.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(P.navigator.userAgent),rt={render(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody(){var t=this.element.ownerDocument,i=t.body||t.documentElement;this.body=i,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=i.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(i).paddingRight},initContainer(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer(){var t,i=this.options,e=this.parent;i.inline&&(this.parentData=t={width:Math.max(e.offsetWidth,i.minWidth),height:Math.max(e.offsetHeight,i.minHeight)}),!this.fulled&&t||(t=this.containerData),this.viewerData=tt({},t)},renderViewer(){this.options.inline&&!this.fulled&&v(this.viewer,this.viewerData)},initList(){var t=this,i=this.element,e=this.options,s=this.list,h=[];s.innerHTML="",d(this.images,(i,r)=>{var a,o,n=i.src,l=i.alt||M(n),u=t.getImageURL(i);(n||u)&&(a=document.createElement("li"),o=document.createElement("img"),d(e.inheritedAttributes,t=>{var e=i.getAttribute(t);null!==e&&o.setAttribute(t,e)}),e.navbar&&(o.src=n||u),o.alt=l,o.setAttribute("data-original-url",u||n),a.setAttribute("data-index",r),a.setAttribute("data-viewer-action","view"),a.setAttribute("role","button"),e.keyboard&&a.setAttribute("tabindex",0),a.appendChild(o),s.appendChild(a),h.push(a))}),this.items=h,d(h,i=>{var s,h,r=i.firstElementChild;y(r,"filled",true),e.loading&&m(i,"viewer-loading"),x(r,"load",s=s=>{k(r,"error",h),e.loading&&w(i,"viewer-loading"),t.loadImage(s)},{once:true}),x(r,"error",h=()=>{k(r,"load",s),e.loading&&w(i,"viewer-loading")},{once:true})}),e.transition&&x(i,"viewed",()=>{m(s,q)},{once:true})},renderList(){var t,i,e,s=this.index,h=this.items[s];h&&(t=parseInt(window.getComputedStyle(h.nextElementSibling||h).marginLeft,10),v(this.list,tt({width:(e=(i=h.offsetWidth)+t)*this.length-t},O({translateX:(this.viewerData.width-i)/2-e*s}))))},resetList(){var t=this.list;t.innerHTML="",w(t,q),v(t,O({translateX:0}))},initImage(t){var i,e=this,s=this.options,h=this.image,r=this.viewerData,a=this.footer.offsetHeight,n=r.width,l=Math.max(r.height-a,a),u=this.imageData||{};this.imageInitializing={abort(){i.onload=null}},i=j(h,s,(i,h)=>{var r,a,c,d,v=i/h,f=Math.max(0,Math.min(1,s.initialCoverage)),m=n,w=l;e.imageInitializing=false,l*v>n?w=n/v:m=l*v,f=o(f)?f:.9,d=tt({},c={left:r=(n-(m=Math.min(m*f,i)))/2,top:a=(l-(w=Math.min(w*f,h)))/2,x:r,y:a,width:m,height:w,oldRatio:1,ratio:m/i,aspectRatio:v,naturalWidth:i,naturalHeight:h}),s.rotatable&&(c.rotate=u.rotate||0,d.rotate=0),s.scalable&&(c.scaleX=u.scaleX||1,c.scaleY=u.scaleY||1,d.scaleX=1,d.scaleY=1),e.imageData=c,e.initialImageData=d,t&&t()})},renderImage(t){var i,e=this,s=this.image,h=this.imageData;v(s,tt({width:h.width,height:h.height,marginLeft:h.x,marginTop:h.y},O(h))),t&&((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&f(s,q)?(i=()=>{e.imageRendering=false,t()},this.imageRendering={abort(){k(s,"transitionend",i)}},x(s,"transitionend",i,{once:true})):t())},resetImage(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},at={bind(){var t=this.options,i=this.viewer,e=this.canvas,s=this.element.ownerDocument;x(i,"click",this.onClick=this.click.bind(this)),x(i,"dragstart",this.onDragStart=this.dragstart.bind(this)),x(e,H,this.onPointerDown=this.pointerdown.bind(this)),x(s,B,this.onPointerMove=this.pointermove.bind(this)),x(s,K,this.onPointerUp=this.pointerup.bind(this)),x(s,"keydown",this.onKeyDown=this.keydown.bind(this)),x(window,"resize",this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&x(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:false,capture:true}),t.toggleOnDblclick&&x(e,"dblclick",this.onDblclick=this.dblclick.bind(this))},unbind(){var t=this.options,i=this.viewer,e=this.canvas,s=this.element.ownerDocument;k(i,"click",this.onClick),k(i,"dragstart",this.onDragStart),k(e,H,this.onPointerDown),k(s,B,this.onPointerMove),k(s,K,this.onPointerUp),k(s,"keydown",this.onKeyDown),k(window,"resize",this.onResize),t.zoomable&&t.zoomOnWheel&&k(i,"wheel",this.onWheel,{passive:false,capture:true}),t.toggleOnDblclick&&k(e,"dblclick",this.onDblclick)}},ot={click(t){var i=this.options,e=this.imageData,s=t.target,h=g(s,"viewerAction");switch(h||"img"!==s.localName||"li"!==s.parentElement.localName||(h=g(s=s.parentElement,"viewerAction")),F&&t.isTrusted&&s===this.canvas&&clearTimeout(this.clickCanvasTimeout),h){case"mix":this.played?this.stop():i.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.hide();break;case"view":this.view(g(s,"index"));break;case"zoom-in":this.zoom(.1,true);break;case"zoom-out":this.zoom(-.1,true);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(i.loop);break;case"play":this.play(i.fullscreen);break;case"next":this.next(i.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-e.scaleX||-1);break;case"flip-vertical":this.scaleY(-e.scaleY||-1);break;default:this.played&&this.stop()}},dblclick(t){t.preventDefault(),this.viewed&&t.target===this.image&&(F&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(t.isTrusted?t:t.detail&&t.detail.originalEvent))},load(){var t,i,e,s,h,r=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=false),t=this.element,i=this.options,s=this.index,h=this.viewerData,w(e=this.image,"viewer-invisible"),i.loading&&w(this.canvas,"viewer-loading"),e.style.cssText="height:0;margin-left:"+h.width/2+"px;margin-top:"+h.height/2+"px;max-width:none!important;position:relative;width:0;",this.initImage(()=>{b(e,"viewer-move",i.movable),b(e,q,i.transition),r.renderImage(()=>{r.viewed=true,r.viewing=false,c(i.viewed)&&x(t,"viewed",i.viewed,{once:true}),T(t,"viewed",{originalImage:r.images[s],index:s,image:e},{cancelable:false})})})},loadImage(t){var i=t.target,e=i.parentNode,s=e.offsetWidth||30,h=e.offsetHeight||50,r=!!g(i,"filled");j(i,this.options,(t,e)=>{var a=t/e,o=s,n=h;h*a>s?r?o=h*a:n=s/a:r?n=s/a:o=h*a,v(i,tt({width:o,height:n},O({translateX:(s-o)/2,translateY:(h-n)/2})))})},keydown(t){var i,e=this.options;if(e.keyboard&&(13===(i=t.keyCode||t.which||t.charCode)&&this.viewer.contains(t.target)&&this.click(t),this.fulled))switch(i){case 27:this.played?this.stop():e.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(e.loop);break;case 38:t.preventDefault(),this.zoom(e.zoomRatio,true);break;case 39:this.played&&this.playing?this.playing.next():this.next(e.loop);break;case 40:t.preventDefault(),this.zoom(-e.zoomRatio,true);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle())}},dragstart(t){"img"===t.target.localName&&t.preventDefault()},pointerdown(t){var i,e=this.options,s=this.pointers,h=t.buttons,r=t.button;!this.viewed||this.showing||this.viewing||this.hiding||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(o(h)&&1!==h||o(r)&&0!==r||t.ctrlKey)||(t.preventDefault(),t.changedTouches?d(t.changedTouches,t=>{s[t.identifier]=E(t)}):s[t.pointerId||0]=E(t),i=!!e.movable&&"move",e.zoomOnTouch&&e.zoomable&&Object.keys(s).length>1?i="zoom":e.slideOnTouch&&("touch"===t.pointerType||"touchstart"===t.type)&&this.isSwitchable()&&(i="switch"),!e.transition||"move"!==i&&"zoom"!==i||w(this.image,q),this.action=i)},pointermove(t){var i=this.pointers;this.viewed&&this.action&&(t.preventDefault(),t.changedTouches?d(t.changedTouches,t=>{tt(i[t.identifier]||{},E(t,true))}):tt(i[t.pointerId||0]||{},E(t,true)),this.change(t))},pointerup(t){var i,e=this,s=this.options,h=this.action,r=this.pointers;t.changedTouches?d(t.changedTouches,t=>{i=r[t.identifier],delete r[t.identifier]}):(i=r[t.pointerId||0],delete r[t.pointerId||0]),h&&(t.preventDefault(),!s.transition||"move"!==h&&"zoom"!==h||m(this.image,q),this.action=false,F&&"zoom"!==h&&i&&Date.now()-i.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),s.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=false,this.doubleClickImageTimeout=setTimeout(()=>{T(e.image,"dblclick",{originalEvent:t})},50)):(this.imageClicked=true,this.doubleClickImageTimeout=setTimeout(()=>{e.imageClicked=false},500)):(this.imageClicked=false,s.backdrop&&"static"!==s.backdrop&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(()=>{T(e.canvas,"click",{originalEvent:t})},50)))))},resize(){var t=this;if(this.isShown&&!this.hiding&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(()=>{t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement))return void this.stop();d(this.player.getElementsByTagName("img"),i=>{x(i,"load",t.loadImage.bind(t),{once:true}),T(i,"load")})}},wheel(t){var i,e,s=this;this.viewed&&(t.preventDefault(),this.wheeling||(this.wheeling=true,setTimeout(()=>{s.wheeling=false},50),i=Number(this.options.zoomRatio)||.1,e=1,t.deltaY?e=t.deltaY>0?1:-1:t.wheelDelta?e=-t.wheelDelta/120:t.detail&&(e=t.detail>0?1:-1),this.zoom(-e*i,true,null,t)))}},nt={show(){var t,i,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=this.element,h=this.options;return h.inline||this.showing||this.isShown||this.showing?this:this.ready?(c(h.show)&&x(s,"show",h.show,{once:true}),false!==T(s,"show")&&this.ready?(this.hiding&&this.transitioning.abort(),this.showing=true,this.open(),w(t=this.viewer,"viewer-hide"),t.setAttribute("role","dialog"),t.setAttribute("aria-labelledby",this.title.id),t.setAttribute("aria-modal",true),t.removeAttribute("aria-hidden"),h.transition&&!e?(i=this.shown.bind(this),this.transitioning={abort(){k(t,"transitionend",i),w(t,Z)}},m(t,q),t.initialOffsetWidth=t.offsetWidth,x(t,"transitionend",i,{once:true}),m(t,Z)):(m(t,Z),this.shown()),this):this):(this.build(),this.ready&&this.show(e),this)},hide(){var t,i,e,s,h,r=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],o=this.element,n=this.options;return n.inline||this.hiding||!(this.isShown||this.showing)||(c(n.hide)&&x(o,"hide",n.hide,{once:true}),false===T(o,"hide")||(this.showing&&this.transitioning.abort(),this.hiding=true,this.played?this.stop():this.viewing&&this.viewing.abort(),t=this.viewer,i=this.image,e=()=>{w(t,Z),r.hidden()},n.transition&&!a?(s=function i(e){e&&e.target===t&&(k(t,"transitionend",i),r.hidden())},h=()=>{f(t,q)?(x(t,"transitionend",s),w(t,Z)):e()},this.transitioning={abort(){r.viewed&&f(i,q)?k(i,"transitionend",h):f(t,q)&&k(t,"transitionend",s)}},this.viewed&&f(i,q)?(x(i,"transitionend",h,{once:true}),this.zoomTo(0,false,null,null,true)):h()):e())),this},view(){var t,i,e,s,h,r,a,o,n,l,u,v,f,b=this,p=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.initialViewIndex;return p=Number(p)||0,this.hiding||this.played||p<0||p>=this.length||this.viewed&&p===this.index?this:this.isShown?(this.viewing&&this.viewing.abort(),t=this.element,i=this.options,e=this.title,s=this.canvas,a=g(r=(h=this.items[p]).querySelector("img"),"originalUrl"),o=r.getAttribute("alt"),n=document.createElement("img"),d(i.inheritedAttributes,t=>{var i=r.getAttribute(t);null!==i&&n.setAttribute(t,i)}),n.src=a,n.alt=o,c(i.view)&&x(t,"view",i.view,{once:true}),false===T(t,"view",{originalImage:this.images[p],index:p,image:n})||!this.isShown||this.hiding||this.played||((l=this.items[this.index])&&(w(l,"viewer-active"),l.removeAttribute("aria-selected")),m(h,"viewer-active"),h.setAttribute("aria-selected",true),i.focus&&h.focus(),this.image=n,this.viewed=false,this.index=p,this.imageData={},m(n,"viewer-invisible"),i.loading&&m(s,"viewer-loading"),s.innerHTML="",s.appendChild(n),this.renderList(),e.innerHTML="",u=()=>{var t=b.imageData,s=Array.isArray(i.title)?i.title[1]:i.title;e.textContent=c(s)?s.call(b,n,t):o+" ("+t.naturalWidth+" \xd7 "+t.naturalHeight+")"},x(t,"viewed",u,{once:true}),this.viewing={abort(){k(t,"viewed",u),n.complete?b.imageRendering?b.imageRendering.abort():b.imageInitializing&&b.imageInitializing.abort():(n.src="",k(n,"load",v),b.timeout&&clearTimeout(b.timeout))}},n.complete?this.load():(x(n,"load",v=()=>{k(n,"error",f),b.load()},{once:true}),x(n,"error",f=()=>{k(n,"load",v),b.timeout&&(clearTimeout(b.timeout),b.timeout=false),w(n,"viewer-invisible"),i.loading&&w(b.canvas,"viewer-loading")},{once:true}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{w(n,"viewer-invisible"),b.timeout=false},1e3))),this):(this.index=p,this.show())},prev(){var t=this.index-1;return t<0&&(t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?this.length-1:0),this.view(t),this},next(){var t=this.length-1,i=this.index+1;return i>t&&(i=arguments.length>0&&void 0!==arguments[0]&&arguments[0]?0:t),this.view(i),this},move(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,e=this.imageData;return this.moveTo(n(t)?t:e.x+Number(t),n(i)?i:e.y+Number(i)),this},moveTo(t){var i,e,s,h=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=this.element,l=this.options,u=this.imageData;if(t=Number(t),r=Number(r),this.viewed&&!this.played&&l.movable&&(i=u.x,e=u.y,s=false,o(t)?s=true:t=i,o(r)?s=true:r=e,s)){if(c(l.move)&&x(n,"move",l.move,{once:true}),false===T(n,"move",{x:t,y:r,oldX:i,oldY:e,originalEvent:a}))return this;u.x=t,u.y=r,u.left=t,u.top=r,this.moving=true,this.renderImage(()=>{h.moving=false,c(l.moved)&&x(n,"moved",l.moved,{once:true}),T(n,"moved",{x:t,y:r,oldX:i,oldY:e,originalEvent:a},{cancelable:false})})}return this},rotate(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo(t){var i,e=this,s=this.element,h=this.options,r=this.imageData;if(o(t=Number(t))&&this.viewed&&!this.played&&h.rotatable){if(i=r.rotate,c(h.rotate)&&x(s,"rotate",h.rotate,{once:true}),false===T(s,"rotate",{degree:t,oldDegree:i}))return this;r.rotate=t,this.rotating=true,this.renderImage(()=>{e.rotating=false,c(h.rotated)&&x(s,"rotated",h.rotated,{once:true}),T(s,"rotated",{degree:t,oldDegree:i},{cancelable:false})})}return this},scaleX(t){return this.scale(t,this.imageData.scaleY),this},scaleY(t){return this.scale(this.imageData.scaleX,t),this},scale(t){var i,e,s,h=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,a=this.element,n=this.options,l=this.imageData;if(t=Number(t),r=Number(r),this.viewed&&!this.played&&n.scalable&&(i=l.scaleX,e=l.scaleY,s=false,o(t)?s=true:t=i,o(r)?s=true:r=e,s)){if(c(n.scale)&&x(a,"scale",n.scale,{once:true}),false===T(a,"scale",{scaleX:t,scaleY:r,oldScaleX:i,oldScaleY:e}))return this;l.scaleX=t,l.scaleY=r,this.scaling=true,this.renderImage(()=>{h.scaling=false,c(n.scaled)&&x(a,"scaled",n.scaled,{once:true}),T(a,"scaled",{scaleX:t,scaleY:r,oldScaleX:i,oldScaleY:e},{cancelable:false})})}return this},zoom(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,h=this.imageData;return t=Number(t),this.zoomTo(h.width*(t=t<0?1/(1-t):1+t)/h.naturalWidth,i,e,s),this},zoomTo(t){var i,e,s,h,r,a,n,l,d,v=this,f=arguments.length>1&&void 0!==arguments[1]&&arguments[1],m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,w=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,b=arguments.length>4&&void 0!==arguments[4]&&arguments[4],p=this.element,g=this.options,y=this.pointers,k=this.imageData,O=k.x,M=k.y,j=k.width,I=k.height,X=k.naturalWidth,E=k.naturalHeight;if(o(t=Math.max(0,t))&&this.viewed&&!this.played&&(b||g.zoomable)){if(b||(i=Math.max(.01,g.minZoomRatio),e=Math.min(100,g.maxZoomRatio),t=Math.min(Math.max(t,i),e)),w)switch(w.type){case"wheel":g.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);break;case"pointermove":case"touchmove":case"mousemove":t>.99&&t<1.01&&(t=1)}if(r=(s=X*t)-j,a=(h=E*t)-I,n=k.ratio,c(g.zoom)&&x(p,"zoom",g.zoom,{once:true}),false===T(p,"zoom",{ratio:t,oldRatio:n,originalEvent:w}))return this;this.zooming=true,w?(l=z(this.viewer),d=y&&Object.keys(y).length>0?Y(y):{pageX:w.pageX,pageY:w.pageY},k.x-=r*((d.pageX-l.left-O)/j),k.y-=a*((d.pageY-l.top-M)/I)):u(m)&&o(m.x)&&o(m.y)?(k.x-=r*((m.x-O)/j),k.y-=a*((m.y-M)/I)):(k.x-=r/2,k.y-=a/2),k.left=k.x,k.top=k.y,k.width=s,k.height=h,k.oldRatio=n,k.ratio=t,this.renderImage(()=>{v.zooming=false,c(g.zoomed)&&x(p,"zoomed",g.zoomed,{once:true}),T(p,"zoomed",{ratio:t,oldRatio:n,originalEvent:w},{cancelable:false})}),f&&this.tooltip()}return this},play(){var t,i,e,s,h,r,a,n,l=this,u=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!this.isShown||this.played||(t=this.element,c((i=this.options).play)&&x(t,"play",i.play,{once:true}),false===T(t,"play")||(e=this.player,s=this.loadImage.bind(this),h=[],r=0,a=0,this.played=true,this.onLoadWhenPlay=s,u&&this.requestFullscreen(u),m(e,"viewer-show"),d(this.items,(t,o)=>{var n=t.querySelector("img"),l=document.createElement("img");l.src=g(n,"originalUrl"),l.alt=n.getAttribute("alt"),l.referrerPolicy=n.referrerPolicy,r+=1,m(l,"viewer-fade"),b(l,q,i.transition),f(t,"viewer-active")&&(m(l,Z),a=o),h.push(l),x(l,"load",s,{once:true}),e.appendChild(l)}),o(i.interval)&&i.interval>0&&(n=function t(){clearTimeout(l.playing.timeout),w(h[a],Z),m(h[a=(a+=1)<r?a:0],Z),l.playing.timeout=setTimeout(t,i.interval)},r>1&&(this.playing={prev:function t(){clearTimeout(l.playing.timeout),w(h[a],Z),m(h[a=(a-=1)>=0?a:r-1],Z),l.playing.timeout=setTimeout(t,i.interval)},next:n,timeout:setTimeout(n,i.interval)})))),this},stop(){var t,i,e,s=this;return this.played?(t=this.element,c((i=this.options).stop)&&x(t,"stop",i.stop,{once:true}),false===T(t,"stop")||(e=this.player,clearTimeout(this.playing.timeout),this.playing=false,this.played=false,d(e.getElementsByTagName("img"),t=>{k(t,"load",s.onLoadWhenPlay)}),w(e,"viewer-show"),e.innerHTML="",this.exitFullscreen()),this):this},full(){var t=this,i=this.options,e=this.viewer,s=this.image,h=this.list;return!this.isShown||this.played||this.fulled||!i.inline||(this.fulled=true,this.open(),m(this.button,"viewer-fullscreen-exit"),i.transition&&(w(h,q),this.viewed&&w(s,q)),m(e,"viewer-fixed"),e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",this.title.id),e.setAttribute("aria-modal",true),e.removeAttribute("style"),v(e,{zIndex:i.zIndex}),i.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=tt({},this.containerData),this.renderList(),this.viewed&&this.initImage(()=>{t.renderImage(()=>{i.transition&&setTimeout(()=>{m(s,q),m(h,q)},0)})})),this},exit(){var t=this,i=this.options,e=this.viewer,s=this.image,h=this.list;return this.isShown&&!this.played&&this.fulled&&i.inline?(this.fulled=false,this.close(),w(this.button,"viewer-fullscreen-exit"),i.transition&&(w(h,q),this.viewed&&w(s,q)),i.focus&&this.clearEnforceFocus(),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),w(e,"viewer-fixed"),v(e,{zIndex:i.zIndexInline}),this.viewerData=tt({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(()=>{t.renderImage(()=>{i.transition&&setTimeout(()=>{m(s,q),m(h,q)},0)})}),this):this},tooltip(){var t=this,i=this.options,e=this.tooltipBox;return this.viewed&&!this.played&&i.tooltip?(e.textContent=Math.round(100*this.imageData.ratio)+"%",this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&T(e,"transitionend"),m(e,"viewer-show"),m(e,"viewer-fade"),m(e,q),e.removeAttribute("aria-hidden"),e.initialOffsetWidth=e.offsetWidth,m(e,Z)):(m(e,"viewer-show"),e.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(()=>{i.transition?(x(e,"transitionend",()=>{w(e,"viewer-show"),w(e,"viewer-fade"),w(e,q),e.setAttribute("aria-hidden",true),t.fading=false},{once:true}),w(e,Z),t.fading=true):(w(e,"viewer-show"),e.setAttribute("aria-hidden",true)),t.tooltipping=false},1e3),this):this},toggle(){return this.zoomTo(1===this.imageData.ratio?this.imageData.oldRatio:1,true,null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:null),this},reset(){return this.viewed&&!this.played&&(this.imageData=tt({},this.initialImageData),this.renderImage()),this},update(){var t,i,e,s,h=this,r=this.element,a=this.options,o=this.isImg;return o&&!r.parentNode?this.destroy():(t=[],d(o?[r]:r.querySelectorAll("img"),i=>{c(a.filter)?a.filter.call(h,i)&&t.push(i):h.getImageURL(i)&&t.push(i)}),t.length?(this.images=t,this.length=t.length,this.ready?(i=[],d(this.items,(e,s)=>{var h=e.querySelector("img"),r=t[s];r&&h&&r.src===h.src&&r.alt===h.alt||i.push(s)}),v(this.list,{width:"auto"}),this.initList(),this.isShown&&(this.length?this.viewed&&((e=i.indexOf(this.index))>=0?(this.viewed=false,this.view(Math.max(Math.min(this.index-e,this.length-1),0))):(m(s=this.items[this.index],"viewer-active"),s.setAttribute("aria-selected",true))):(this.image=null,this.viewed=false,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""))):this.build(),this):this)},destroy(){var t=this.element,i=this.options;return t.viewer?(this.destroyed=true,this.ready?(this.played&&this.stop(),i.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=false,this.viewer.parentNode.removeChild(this.viewer)):i.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),i.inline||k(t,"click",this.onStart),t.viewer=void 0,this):this}},lt={getImageURL(t){var i=this.options.url;return a(i)?t.getAttribute(i):c(i)?i.call(this,t):""},enforceFocus(){var t=this;this.clearEnforceFocus(),x(document,"focusin",this.onFocusin=i=>{var e=t.viewer,s=i.target;if(s!==document&&s!==e&&!e.contains(s)){for(;s;){if(null!==s.getAttribute("tabindex")||"true"===s.getAttribute("aria-modal"))return;s=s.parentElement}e.focus()}})},clearEnforceFocus(){this.onFocusin&&(k(document,"focusin",this.onFocusin),this.onFocusin=null)},open(){var t=this.body;m(t,"viewer-open"),this.scrollbarWidth>0&&(t.style.paddingRight=this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0)+"px")},close(){var t=this.body;w(t,"viewer-open"),this.scrollbarWidth>0&&(t.style.paddingRight=this.initialBodyPaddingRight)},shown(){var t=this.element,i=this.options,e=this.viewer;this.fulled=true,this.isShown=true,this.render(),this.bind(),this.showing=false,i.focus&&(e.focus(),this.enforceFocus()),c(i.shown)&&x(t,"shown",i.shown,{once:true}),false!==T(t,"shown")&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden(){var t=this.element,i=this.options,e=this.viewer;i.fucus&&this.clearEnforceFocus(),this.fulled=false,this.viewed=false,this.isShown=false,this.close(),this.unbind(),m(e,"viewer-hide"),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),e.setAttribute("aria-hidden",true),this.resetList(),this.resetImage(),this.hiding=false,this.destroyed||(c(i.hidden)&&x(t,"hidden",i.hidden,{once:true}),T(t,"hidden",null,{cancelable:false}))},requestFullscreen(t){var i,e=this.element.ownerDocument;this.fulled&&!(e.fullscreenElement||e.webkitFullscreenElement||e.mozFullScreenElement||e.msFullscreenElement)&&((i=e.documentElement).requestFullscreen?u(t)?i.requestFullscreen(t):i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):i.mozRequestFullScreen?i.mozRequestFullScreen():i.msRequestFullscreen&&i.msRequestFullscreen())},exitFullscreen(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change(t){var i,e,s,h=this.options,r=this.pointers,a=r[Object.keys(r)[0]];if(a){switch(i=a.endX-a.startX,e=a.endY-a.startY,this.action){case"move":this.move(i,e,t);break;case"zoom":this.zoom(X(r),false,null,t);break;case"switch":this.action="switched",(s=Math.abs(i))>1&&s>Math.abs(e)&&(this.pointers={},i>1?this.prev(h.loop):i<-1&&this.next(h.loop))}d(r,t=>{t.startX=t.endX,t.startY=t.endY})}},isSwitchable(){var t=this.imageData,i=this.viewerData;return this.length>1&&t.x>=0&&t.y>=0&&t.width<=i.width&&t.height<=i.height}},ut=P.Viewer,ct=(N=-1,()=>N+=1),dt=(function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s(this,t),!i||1!==i.nodeType)throw new Error("The first argument is required and must be an element.");this.element=i,this.options=tt({},D,u(e)&&e),this.action=false,this.fading=false,this.fulled=false,this.hiding=false,this.imageClicked=false,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=false,this.isShown=false,this.length=0,this.moving=false,this.played=false,this.playing=false,this.pointers={},this.ready=false,this.rotating=false,this.scaling=false,this.showing=false,this.timeout=false,this.tooltipping=false,this.viewed=false,this.viewing=false,this.wheeling=false,this.zooming=false,this.id=ct(),this.init()}var i,e,r;return i=t,e=[{key:"init",value(){var t,i,e,s,h=this,r=this.element,a=this.options;r.viewer||(r.viewer=this,a.focus&&!a.keyboard&&(a.focus=false),i=[],d((t="img"===r.localName)?[r]:r.querySelectorAll("img"),t=>{c(a.filter)?a.filter.call(h,t)&&i.push(t):h.getImageURL(t)&&i.push(t)}),this.isImg=t,this.length=i.length,this.images=i,this.initBody(),n(document.createElement("viewer").style.transition)&&(a.transition=false),a.inline?(e=0,s=()=>{var t;(e+=1)===h.length&&(h.initializing=false,h.delaying={abort(){clearTimeout(t)}},t=setTimeout(()=>{h.delaying=false,h.build()},0))},this.initializing={abort(){d(i,t=>{t.complete||(k(t,"load",s),k(t,"error",s))})}},d(i,t=>{var i,e;t.complete?s():(x(t,"load",i=()=>{k(t,"error",e),s()},{once:true}),x(t,"error",e=()=>{k(t,"load",i),s()},{once:true}))})):x(r,"click",this.onStart=t=>{var i=t.target;"img"!==i.localName||c(a.filter)&&!a.filter.call(h,i)||h.view(h.images.indexOf(i))}))}},{key:"build",value(){var t,i,e,s,h,r,l,f,w,g,k,z,O,M,j,X,E;this.ready||(i=this.options,e=(t=this.element).parentNode,(s=document.createElement("div")).innerHTML='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',r=(h=s.querySelector(".viewer-container")).querySelector(".viewer-title"),l=h.querySelector(".viewer-toolbar"),f=h.querySelector(".viewer-navbar"),w=h.querySelector(".viewer-button"),g=h.querySelector(".viewer-canvas"),this.parent=e,this.viewer=h,this.title=r,this.toolbar=l,this.navbar=f,this.button=w,this.canvas=g,this.footer=h.querySelector(".viewer-footer"),this.tooltipBox=h.querySelector(".viewer-tooltip"),this.player=h.querySelector(".viewer-player"),this.list=h.querySelector(".viewer-list"),h.id="viewer"+this.id,r.id="viewerTitle"+this.id,m(r,i.title?I(Array.isArray(i.title)?i.title[0]:i.title):"viewer-hide"),m(f,i.navbar?I(i.navbar):"viewer-hide"),b(w,"viewer-hide",!i.button),i.keyboard&&w.setAttribute("tabindex",0),i.backdrop&&(m(h,"viewer-backdrop"),i.inline||"static"===i.backdrop||y(g,"viewerAction","hide")),a(i.className)&&i.className&&i.className.split(G).forEach(t=>{m(h,t)}),i.toolbar?(k=document.createElement("ul"),z=u(i.toolbar),O=J.slice(0,3),M=J.slice(7,9),j=J.slice(9),z||m(l,I(i.toolbar)),d(z?i.toolbar:J,(t,e)=>{var s,h,r,a=z&&u(t),l=z?p(e):t,d=a&&!n(t.show)?t.show:t;!d||!i.zoomable&&-1!==O.indexOf(l)||!i.rotatable&&-1!==M.indexOf(l)||!i.scalable&&-1!==j.indexOf(l)||(s=a&&!n(t.size)?t.size:t,h=a&&!n(t.click)?t.click:t,r=document.createElement("li"),i.keyboard&&r.setAttribute("tabindex",0),r.setAttribute("role","button"),m(r,"viewer-"+l),c(h)||y(r,"viewerAction",l),o(d)&&m(r,I(d)),-1!==["small","large"].indexOf(s)?m(r,"viewer-"+s):"play"===l&&m(r,"viewer-large"),c(h)&&x(r,"click",h),k.appendChild(r))}),l.appendChild(k)):m(l,"viewer-hide"),i.rotatable||(m(X=l.querySelectorAll('li[class*="rotate"]'),"viewer-invisible"),d(X,t=>{l.appendChild(t)})),i.inline?(m(w,"viewer-fullscreen"),v(h,{zIndex:i.zIndexInline}),"static"===window.getComputedStyle(e).position&&v(e,{position:"relative"}),e.insertBefore(h,t.nextSibling)):(m(w,"viewer-close"),m(h,"viewer-fixed"),m(h,"viewer-fade"),m(h,"viewer-hide"),v(h,{zIndex:i.zIndex}),a(E=i.container)&&(E=t.ownerDocument.querySelector(E)),E||(E=this.body),E.appendChild(h)),i.inline&&(this.render(),this.bind(),this.isShown=true),this.ready=true,c(i.ready)&&x(t,"ready",i.ready,{once:true}),false!==T(t,"ready")?this.ready&&i.inline&&this.view(this.index):this.ready=false)}}],r=[{key:"noConflict",value:()=>(window.Viewer=ut,t)},{key:"setDefaults",value(t){tt(D,u(t)&&t)}}],e&&h(i.prototype,e),r&&h(i,r),Object.defineProperty(i,"prototype",{writable:false}),t})();return tt(dt.prototype,rt,at,ot,nt,lt),dt});