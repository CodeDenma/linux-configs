async function e(){ee&&(w(),te.style.display="none",ee.remove(),ee=null),VData=window.VData=Object.create(null);let e,i=location.hash,l="",f="";if(D||!i&&J&&(e=await E(17))){i=D||e,D="",/^[^:]+[ &]data:/i.test(i)&&(le=-1),le=le||Math.floor(4294967296*Math.random())||3286711320;let t=I(i,le,true);history.state?history.pushState(t,"",""):history.replaceState(t,"",""),window.name=""+le}else i||!history.state||(le?(i=I(history.state,le,false),window.name=""+le):history.replaceState(null,"",""));VData.full=i,i.length<3||(i.startsWith("#!image")?(i=i.slice(7),l="image"):/^#!(url|text)\b/.test(i)&&(l="u"===i[2]?"url":"text",i=i.slice("url"===l?5:6))),i=i.startsWith("%20")?i.slice(3):i.trim();for(let e=0;e=i.indexOf("&")+1;i=i.slice(e)){let t=i.slice(0,e).indexOf("="),n=t>0?i.slice(0,t):"",l=t>0?i.slice(t+1,e-1):"";if("download"===n)f=r(l).split(/\||\uff5c| [-\xb7] /,1)[0].trim(),f=f.replace(/[\r\n"]/g,""),VData.file=f;else if(l=l.toLowerCase(),"auto"===n)VData.auto="once"===l?l:"true"===l||"false"!==l&&parseInt(l,10)>0;else if("pixel"===n)VData.pixel="1"===l||"true"===l;else{if("incognito"!==n)break;VData.incognito="true"===l||"false"!==l&&parseInt(l,10)>0}}{let e=r(i,i.includes(":")||i.includes("/")?decodeURI:null);i=(e==i||/[%\n]/.test(e)?i:e).trim()}if(i)if(i.toLowerCase().startsWith("javascript:"))l=i=f=VData.file="";else if(J){let e=await E(10,[i,-2]);e[1]<=2&&(i=e[0])}else i.startsWith("//")?i="http:"+i:/^([-.\dA-Za-z]+|\[[\dA-Fa-f:]+])(:\d{2,5})?\//.test(i)&&(i="http://"+i);else"image"===l&&(l="");switch(VData.type=l,/^data:/i.test(i)&&(i="data:"+i.slice(5).replace(/#/g,"%23")),VData.url=VData.original=i,l){case"image":if(VData.auto){let e=await b(J&&await E(18,[i,256])||i,i);e&&(console.log("Auto predict a better URL:\n %o =>\n %o",i,e),i=VData.url=e)}if(ee=o("shownImage"),ee.onerror=function(){VData.url!==VData.original&&VData.url?k():(T(),VData.auto=false,this.onerror=this.onload=null,this.alt=VData.error=sTrans_("failInLoading"),this.classList.add("broken"),setTimeout(t,34),this.onclick=async e=>{J&&await E(19,VData.url)||(e.ctrlKey||e.shiftKey||e.altKey||!H.tabs||!H.tabs.update?n({target:"_top"},e):H.tabs.update({url:VData.url}))})},/[:.]/.test(i)){ee.alt=sTrans_("loading"),ee.onclick=a,ee.onload=function(){let e=this.naturalWidth,n=this.naturalHeight;if(e<12&&n<12){if(VData.auto)return void k();if(e<2&&n<2)return console.log("The image is too small to see."),void this.onerror(null)}VData.original=VData.url,T();let i=VData.url.slice(0,6).toLowerCase(),l=i.startsWith("blob:");if((l||i.startsWith("data:")&&!this.src.startsWith("data"))&&(te.dataset.vimUrl=VData.original=VData.url=this.src,R(l?0:1)),this.onerror=this.onload=null,this.src.startsWith("blob:")||setTimeout(()=>{ee.src=ee.src},0),t(),this.alt=f,this.classList.add("zoom-in"),VData.pixel){Q.classList.add("pixel");let t=devicePixelRatio;if(e>innerWidth*t*.9&&n>innerHeight*t*.9){let e=o("snapshot-banner",true);e.querySelector(".banner-close").onclick=()=>{e.remove()};let t=e.querySelectorAll("[data-i]");for(let e=0;e<t.length;e++){let n=t[e].dataset.i,i=n.endsWith("-t"),l=P(i?n.slice(0,-2):n);l&&(i?t[e].title=l:t[e].textContent=l)}Q.prepend(e)}}e>=.9*innerWidth&&Q.classList.add("filled")};let e=await fe(i);x(i,ee,e)}else i=VData.url="",ee.onerror(null),ee.alt=VData.error=sTrans_("none");if(f){VData.file=f=y(f)||f;let e=f.split(/[/\\]+/);e.length>1&&ee.setAttribute("download",e[e.length-1]),ee.setAttribute("aria-title",f)}break;case"url":case"text":if(ee=o("shownText"),i&&"text"!==l){let e=await E(16,i);if("string"!=typeof e){s(e[1],e[0]||e[2]||"");break}i=e}i=v(i)||i,s(l,i);break;default:i="",ee=o("shownImage"),ee.src="../icons/icon128.png",te.style.display="none"}te.dataset.vimUrl=i,f?(te.dataset.vimText=f,te.download=f):(te.removeAttribute("data-vim-text"),te.removeAttribute("download")),te.onclick=ee?u:a}function t(){let e=ee.scrollWidth;te.style.height=ee.scrollHeight+"px",te.style.width=e+"px",te.style.display=""}function n(e,t){if(N(t),!VData.url)return;let n=document.createElement("a");Object.setPrototypeOf(e,null);for(let t in e)n.setAttribute(t,e[t]);n.href=VData.url,W(n,t)}function i(e){if(VData.error)return false;let{keyCode:t}=e,n=VApi&&VApi.z?VApi.r[3]({c:" ",e,i:t,v:""},9):32===t?"space":13===t?"enter":"",i=n.slice(n.lastIndexOf("-")+1)||n&&"-";if("space"===i||"enter"===i){if(VData.pixel){let e=document.activeElement,t=e&&document.querySelector("#snapshot-banner");if(t&&t.contains(e)){let n=t.querySelector(".banner-close");return n.contains(e)&&n.onclick(null),true}}return N(e),"enter"===i&&ie&&ie.isShown&&!ie.hiding&&!ie.played?ie.play(true):ie&&ie.isShown&&!ie.hiding||W(ee,e),true}let r=0;switch(n){case"c-=":case"m-=":case"+":case"=":case"up":r=1;break;case"left":r=-2;break;case"right":r=2;break;case"c--":case"m--":case"-":case"down":r=-1;break;default:return false}return N(e),e.stopImmediatePropagation(),ie&&ie.viewed?l(ie,r):(re=false,m().then(p).then(e=>{l(e,r)}).catch(g)),true}function l(e,t){2===t||-2===t?e.rotate(45*t):e.zoom(t/10,true)}function r(e,t){try{e=(t||decodeURIComponent)(e)}catch(e){}return e}function o(e,t){let n=S("#bodyTemplate"),i=document.importNode(n.content.querySelector("#"+e),true);return t||n.before(i),i}function a(e){if(e.altKey)return e.stopImmediatePropagation(),n({download:VData.file||""},e);switch(VData.type){case"url":n({target:"_blank"},e);break;case"image":if(VData.error)return;re=e.ctrlKey||e.metaKey,m().then(p).catch(g)}}function u(e){N(e),ee.onclick&&ee.onclick(e)}function s(e,n){e="number"==typeof e?["math","copy","search","ERROR","status","paste","run","url","run-one-key"][e]:e,S("#textTip").dataset.text=sTrans_(`t_${e}`)||e,S(".colon").dataset.colon=sTrans_("colon")+sTrans_("NS");let i=S("#textBody");return n?(i.textContent="string"!=typeof n?n.join(" "):n,ee.onclick=f):i.classList.add("null"),t()}function f(e){let t=getSelection(),n=""+t;if(!n||"image"===VData.type&&n.trim()===ee.alt.trim()){if("image"===VData.type&&VData.url){if("Range"===t.type&&!VData.url.startsWith(location.protocol))return;N(e);let n=navigator.clipboard;return void(null!=se?Promise.resolve(se):fetch(VData.url,{cache:"force-cache",referrer:"no-referrer"}).then(e=>e.blob()).catch(()=>(c(VData.url),0)).then(e=>se=e)).then(e=>{if(!e)return;let t={"image/png":"image/png"!==e.type?new Blob([e],{type:"image/png"}):e};/^(http|ftp|file)/i.test(VData.url)&&(t["text/plain"]=new Blob([VData.url],{type:"text/plain"}));let i=()=>n.write([new ClipboardItem(t)]),l=document.createElement("img");return l.src=VData.url,VData.file&&l.setAttribute("aria-title",l.alt=VData.file),t["text/html"]=new Blob([l.outerHTML],{type:"text/html"}),i().catch(()=>(delete t["text/html"],i()))}).catch(e=>{console.log(e),c(VData.url)})}c("url"===VData.type?S("#textBody").textContent:VData.url,e)}}function c(e,t){e&&VApi&&(t&&N(t),VApi.p({H:18,s:e}))}function d(e){"image"===VData.type&&(VData.error||ie&&ie.isShown&&!ie.hiding?N(e):ee.classList.toggle("invert"))}function h(e){if(S('link[href="'+e+'"]'))return;let t=document.createElement("link");return t.rel="stylesheet",t.href=e,new Promise(e=>{t.onload=()=>{t.onload=null,e()},S('link[href$="show.css"]').before(t)})}function g(e){e&&console.log("%o",e)}function m(){return X?Promise.resolve(X):Promise.all([B("../lib/viewer.js"),h("../lib/viewer.css")]).then(([e])=>{(e=e&&"function"==typeof e?e:window.Viewer).setDefaults({navbar:false,shown(){te.style.display="none"},viewed(){ne&&ne(true)},zoom(e){if(!oe)return;let{ratio:t}=e.detail,n=ie.imageData,{width:i,height:l,naturalWidth:r,naturalHeight:o}=n,a=r*t,u=o*t,s=a-i,f=u-l;if(1===t)n.oldXY=[n.x,n.y],n.x=(innerWidth-a)/2|0,n.y=(innerHeight-u)/2|0;else{if(!n.oldXY)return;n.x=n.oldXY[0],n.y=n.oldXY[1]}n.x+=s/2,n.y+=f/2},hide(){te.style.display="",ne&&ne(false)}});let t=e.prototype,n=t.initImage,i=t.toggle;return t.initImage=function(e){let t=[].slice.call(arguments);t[0]=function(){let t=ie&&ie.imageData;if(t){let e=t.naturalWidth,n=t.naturalHeight,i=!!document.fullscreenElement,l=i?window.screen.availWidth:e,r=i?window.screen.availHeight:n;if(i?e>=l&&n>=r:!re&&t.ratio<1){let o=i?Math.max(l/e,r/n):1;t.left=t.x=i?(l-e*o)/2|0:0,t.top=t.y=i?(r-n*o)/2|0:0,t.width=Math.round(e*o),t.height=Math.round(n*o),t.ratio=o}}e.apply(this,arguments)},n.apply(this,t)},t.toggle=function(e){oe=!(e||!ie||1===this.imageData.ratio&&1===this.imageData.oldRatio);let t=i.apply(this,arguments);return oe=false,t},X=e,e})}function p(e){let t=scrollX||scrollY,n=getSelection();"Range"===n.type&&n.collapseToStart();let i=ie=ie||new e(ee);return i.scrollbarWidth=0,i.hiding&&(i.isShown=false),i.isShown||i.show(),i.hiding=false,t&&scrollTo(0,0),i.viewed?(i.zoomTo(1),i):new Promise((e,t)=>{ne=n=>{ne=null,n?e(i):t("failed to view the image")}})}function w(){if(_(),se=null,Y&&(Y(),Y=null),"image"===VData.type){let e=document.body.classList;ee.classList.remove("svg"),e.remove("pixel"),e.remove("filled"),ee.removeAttribute("src"),ee.onerror=ee.onload=null,ie&&(ie.destroy(),ie=null)}}async function b(e,t){function n(e){try{return new URL(e)}catch(e){}return null}function i(e){try{e=decodeURIComponent(e||"")}catch(e){}return e}let l=n(e);if(!l||!/^(ht|s?f)tp/i.test(l.protocol))return null;let{origin:r,pathname:o}=l,a=l.search;if(t=t||e,a.length>10)for(let e of a.slice(1).split("&")){let t=e.split("=",1)[0],l=e.slice(t.length+1),u=l;if(u.length>7)if(!u.includes("://")&&/%(?:3[aA]|2[fF])/.test(u)&&(u=i(u).trim()),u.includes("/")&&null!=n(u)){if(/^(?:imgurl|mediaurl|objurl|origin(?:al)?|real\w*|src|url)$/i.test(t))return u;let e=u.split("?")[0].split("/");if(ae.test(e[e.length-1])&&!/\bthumb/i.test(t))return u}else if("id"===t&&/&w=\d{2,4}&h=\d{2,4}/.test(a))return r+o+"?id="+l;if("name"===t&&/^(\d{2,4}x\d{2,4}|small)$/i.test(l)&&a.toLowerCase().includes("format="))return r+o+a.replace(u,"large");if(/^(x-)?(\w+)-?process\b/i.test(t)&&l.toLowerCase().includes("image/")&&/resize|quality/i.test(l))return a=a.replace(t+"="+l,""),r+o+(a.length>1?a:"")}let u=null;if((u=/[?&]s=\d{2,4}(&|$)/.exec(a))&&a.split("=").length<=4)return r+o;a=o;let s=a.lastIndexOf("/")+1;a=a.slice(s);let f=a.lastIndexOf("@")+1||a.lastIndexOf("!")+1,c=f>2||ae.test(a),d=null;if(c){s+=f,a=a.slice(f);let e=/(?:[.\-_]|\b)(?:[1-9]\d{2,3}[a-z]{1,3}[_\-]?|[1-9]\d?[a-z][_\-]?|0[a-z][_\-]?|[1-9]\d{1,3}[_\-]|[1-9]\d{1,2}(?=[.\-_]|\b)){2,6}(?=[.\-_]|\b)/gi;for(;d=e.exec(a);u=d);if(u&&/.[_\-].|\d\dx\d/i.test(u[0])){d=ae.exec(a.slice(u.index+u[0].length)),s+=u.index;let e=u[0].length;if(d&&0===d.index&&(e+=d[0].length),a=o.slice(s+e),o.lastIndexOf("@",s+e)>=0&&a.includes("!")){let e=a.slice(a.indexOf("!")).toLowerCase();e.includes("cover")&&/^![a-z\d_\.-]+\.(avif|jpe?g|a?png|svg|webp)$/.test(e)&&(a=a.split("!")[0])}/[@!]$/.test(a||o.charAt(s-1))?a?a=a.slice(0,-1):s--:a||!d||0!==d.index||ae.test(o.slice(Math.max(0,s-6),s))||(a=d[0])}else(u=/\b([\da-f]{8,48})([_-](?:[a-z]{1,2}|\d{3,4}[whp]?))\.[a-z]{2,4}$/.exec(a))?(s+=u.index+u[1].length,a=a.slice(u.index+u[1].length+u[2].length)):(u=/\b((?:[1-9]\d{1,3}[whxyp][_\-x]?){1,2})\.[a-z]{2,4}$/.exec(a))?(s+=u.index,a=a.slice(u.index+u[1].length)):c=false}return c||f>2?c=c||0:(u=/_(0x)?[1-9]\d{2,3}([whp]|x0)?\./.exec(a))?a=a.slice(0,u.index)+a.slice(u.index+u[0].length-1):a.startsWith("thumb_")?a=a.slice(6):/^[1-9]\d+$/.test(a)&&+a>0&&+a<640?(s--,a=""):ae.test(a)&&/^\/(small|(thumb|mw|orj)[1-9]\d{2,3})\//.test(o)?(c=true,a="/large"+o.slice(o.indexOf("/",1)),s=0):c=0,0!==c?r+o.slice(0,s)+a:t!==e?e:null}function y(e){if(!e||/.\.[a-z]{3,4}\b/i.test(e))return;let t=ae.exec(VData.url);if(t)return e+t[0];let n=se?se.type.toLowerCase():"";if(n.startsWith("image/")){let e={jpeg:"jpg",png:0,bmp:0,svg:0,gif:0,tif:0,ico:0};for(let t in e)if(e.hasOwnProperty(t)&&n.includes(t))return e[t]||"."+t}}function x(e,t,n){let i=new Text,l=Y=()=>{t.removeEventListener("load",l),t.removeEventListener("error",l),clearTimeout(u),i.remove(),Y===l&&(Y=null)};t.addEventListener("load",l,true),t.addEventListener("error",l,true);let r=e.slice(0,20).toLowerCase(),o=r.startsWith("blob:"),a=r.startsWith("data:");a&&r.startsWith("data:image/svg+xml,")&&t.classList.add("svg"),n?t.src=e:(_(),Q.replaceChild(i,t),Promise.resolve(K[e]||fetch(e,o||a?{}:{cache:"no-store",referrer:"no-referrer"}).then(e=>e.blob())).then(t=>(K[e]=t,ue=URL.createObjectURL(se=t)),()=>e).then(e=>{t.src=e,i.parentNode?Q.replaceChild(t,i):Q.append(t)}));let u=setTimeout(()=>{!t.parentNode||t.scrollHeight>=24||t.scrollWidth>=80?l():i.parentNode||(t.before(i),i.data=sTrans_("loading"))},400)}function _(){ue&&(URL.revokeObjectURL(ue),ue="")}function v(e){let t=e.split(":",1)[0];switch(t.toLowerCase()){case"thunder":case"flashget":case"qqdl":e=e.slice(t.length+3).split("&",1)[0];break;default:return""}try{e=atob(e)}catch(e){return""}return e.startsWith("AA")&&e.endsWith("ZZ")&&(e=e.slice(2,-2)),e.startsWith("[FLASHGET]")&&e.endsWith("[FLASHGET]")&&(e=e.slice(10,-10)),v(e)||e}function k(){console.log("Failed to visit the predicted URL, so go back to the original version."),T(),VData.auto=false,e()}function T(){let e=false;return"once"===VData.auto&&(VData.auto=false,e=true),e&&R(),e}function R(e){let t=VData.type;if(!t)return;let n="#!"+t+" "+(VData.incognito?"incognito=1&":"")+(VData.file?"download="+A(VData.file)+"&":"")+(VData.auto?"auto="+("once"===VData.auto?"once":1)+"&":"")+(VData.pixel?"pixel=1&":"")+VData.original;if(VData.full=n,e)return;let i=I(n,le,true);history.replaceState(i,"","")}function A(e){return e.replace(new RegExp("[^\\p{L}\\p{N}]+","ug"),encodeURIComponent)}function I(e,t,n){if(-1===t)return e;let i=[];if(n)e=encodeURIComponent(e);else try{e=atob(e)}catch(t){e=""}for(let t of e)i.push(t.charCodeAt(0));for(let e=0;e<i.length;e++)i[e]=255&(i[e]^t>>>8*(3&e));if(e=String.fromCharCode(...i),n)e=btoa(e);else try{e=decodeURIComponent(e)}catch(t){e=""}return e}function U(){return VData&&VData.full?location.href.split("#",1)[0]+VData.full:location.href}import{CurCVer_ as z,CurFFVer_ as L,OnChrome as j,OnFirefox as $,OnEdge as C,$ as S,pageTrans_ as P,browser_ as H,nextTick_ as M,enableNextTick_ as V,import2_ as B,isVApiReady_ as F,post_ as E,disconnect_ as O,simulateClick_ as W,hasShift_ as q,setupPageOs_ as Z,isRepeated_ as G,prevent_ as N}from"./async_bg.js";let X,Y,D,VData=null,J=true,K={},Q=document.body,ee=null,te=S("#bgLink"),ne=null,ie=null,le=+window.name||0,re=false,oe=false,ae=/\.(?:avif|bmp|gif|icon?|jpe?g|a?png|svg|tiff?|webp)(?=[.\-_]|\b)/i,ue="",se=null;export const sTrans_=(e,t)=>P(e,t)||"";V(1),F.then(()=>{VApi.u=U}),M(()=>{window.onhashchange=e,window.onpopstate=e,e().then(()=>{F.then(O)}),E(31).then(e=>{Z(e.os)})}),window.onunload=_,Q.ondrop=t=>{let n=t.dataTransfer.files;if(1===n.length){let i=n.item(0),l=i.name;(i.type.startsWith("image/")||ae.test(l))&&(N(t),D="#!image download="+A(l)+"&"+URL.createObjectURL(i),e())}},Q.ondragover=Q.ondragenter=e=>{let t=e.dataTransfer.items;1===t.length&&t[0].type.startsWith("image/")&&N(e)},document.addEventListener("keydown",t=>{if("image"===VData.type&&i(t))return;if(!(t.ctrlKey||t.metaKey)||t.altKey||G(t)||q(t))return;let l=String.fromCharCode(t.keyCode);if("S"===l)n({download:VData.file||""},t);else if("C"===l)f(t);else if("A"===l)d(t);else if("O"===l){N(t);let n=document.createElement("input");n.type="file",n.accept="image/*",n.onchange=()=>{let t=n.files&&n.files[0];t&&(D="#!image download="+A(t.name)+"&"+URL.createObjectURL(t),e())},document.body.append(n),setTimeout(()=>{n.remove()},0),n.click()}});let fe=e=>{let t=e.slice(0,20).toLowerCase();return!(t.startsWith("blob:")||t.startsWith("data:")&&e.length>1e4)&&(!/^(ht|s?f)tp|^data:/.test(t)||!VData.incognito&&E(5,{key:"showInIncognito"}).then(e=>!e))};