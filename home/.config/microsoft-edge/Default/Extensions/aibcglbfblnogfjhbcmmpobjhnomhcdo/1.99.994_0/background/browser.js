"use strict";__filename="background/browser.js",define(["require","exports","./store","./utils"],(e,l,t,r)=>{
Object.defineProperty(l,"__esModule",{value:true
}),l.import2=l.s=l.p=l.w=l.v=l.removeTempTab=l.downloadFile=l.makeTempWindow_r=l.makeWindow=l.openMultiTabs=l.tabsCreate=l.selectWndIfNeed=l.selectWnd=l.selectTab=l.h=l.k=l.Ne=l.Oe=l.ke=l.H=l.selectIndexFrom=l.selectFrom=l.getCurWnd=l.$e=l.oe=l.getCurTabs=l.getCurTab=l.isTabMuted=l.getTabUrl=l.getGroupId=l.tabsUpdate=l.tabsGet=l.g=l.N=l.Pe=l.He=l.we=l.t=void 0,
l.t=chrome,l.we=l.t.tabs,l.He=l.t.windows,l.Pe=()=>l.t.sessions,l.N=()=>l.t.webNavigation,l.g=()=>l.t.runtime.lastError,
l.tabsGet=l.we.get,l.tabsUpdate=l.we.update,l.getGroupId=e=>{let l=e.groupId;return-1!==l&&null!=l?l:null},
l.getTabUrl=e=>e.url||e.pendingUrl||"",l.isTabMuted=e=>e.mutedInfo.muted,l.getCurTab=l.we.query.bind(null,{active:true,
lastFocusedWindow:true}),l.getCurTabs=l.we.query.bind(null,{lastFocusedWindow:true}),l.oe=l.getCurTabs,l.$e=()=>true,
l.getCurWnd=(e,r)=>{let u={populate:e};return t.xe>=0?l.He.get(t.xe,u,r):l.He.getCurrent(u,r)},
l.selectFrom=e=>e[l.selectIndexFrom(e)],l.selectIndexFrom=e=>{for(let l=e.length;0<--l;)if(e[l].active)return l;return 0
},l.H=e=>/^(edge-)?extension:/.test(e)?t.Z.U+"-"+e.slice(e.indexOf("ext")):e,l.ke=function(e){
let t=[].slice.call(arguments,1),{We:u,Ge:n}=r.Je();return t.push(e=>{let t=l.g();return n(t?void 0:null!=e?e:null),t}),
e.apply(void 0,t),u},l.Oe=e=>e!==t.o?()=>{let t=l.g();return e(!t),t}:l.g,l.Ne=function(e){
let l=[].slice.call(arguments,1);return new Promise(t=>{l.push(t),e.apply(0,l)})};let u=(e,l)=>{let r=t.Le.get(e)
;return 1===r||2===r&&!(!t.Qe&&!l)};l.h=e=>{l.k=e},l.selectTab=(e,t)=>{l.tabsUpdate(e,{active:true},t)},
l.selectWnd=e=>(e&&l.He.update(e.windowId,{focused:true
}),l.g()),l.selectWndIfNeed=e=>(e&&e.windowId!==t.xe&&l.selectWnd(e),l.g()),l.tabsCreate=(e,r,n)=>{let{url:o}=e
;return o?u(o,2===t.de)&&delete e.url:(o=t.newTabUrl_f,
2===t.de&&(-1===n?o.includes("pages/blank.html")&&o.startsWith(t.Ue):!n&&o.startsWith(location.protocol))||u(o,2===t.de)||(e.url=o),
e.url||delete e.url),l.we.create(e,r)},l.openMultiTabs=(e,t,r,u,n,o,s)=>{let i;n=false!==n,
i=null!=o?l.getGroupId(o):null,n||null==i||delete e.index,i=n&&null!=i&&l.we.group?i:void 0,l.tabsCreate(e,r=>{
if(l.g())return s&&s(),l.g();e.index=r.index,e.windowId=r.windowId,null!=i&&l.we.group({tabIds:r.id,groupId:i}),s&&s(r),
e.active=false;let n=null!=e.index,o=u?u.length:1,a=null!=i?e=>(e&&l.we.group({tabIds:e.id,groupId:i}),l.g()):l.g
;u.length>1&&(u[0]=e.url);for(let r=0;r<t;r++)for(let t=r>0?0:1;t<o;t++)u.length>1&&(e.url=u[t]),n&&++e.index,
l.we.create(e,a)},r)},l.makeWindow=(e,r,n)=>{let o=false!==e.focused
;(r=r?"minimized"===r===o||"popup"===e.type||"normal"===r||"docked"===r?"":r:"")&&!r.includes("fullscreen")&&(e.state=r,
r=""),e.focused=true;let s=e.url
;s||null!=e.tabId||(s=e.url=t.newTabUrl_f),"string"==typeof s&&u(s,e.incognito)&&delete e.url,
l.He.create(e,r||!o||n?e=>{if(n&&n(e),!(r||!o)||!e)return l.g();let t=o?{}:{focused:false};r&&(t.state=r),
l.He.update(e.id,t)}:l.g)},l.makeTempWindow_r=(e,t,r)=>{l.He.create({type:"normal",focused:false,incognito:t,
state:"minimized",tabId:e},r)},l.downloadFile=(e,t)=>l.ke(l.t.permissions.contains,{permissions:["downloads"]
}).then(u=>{if(!u)return false;let n={url:e};if(t){let l=/\.[a-z\d]{1,4}(?=$|[?&])/i
;if(t=(t="#"===(t=r.Xe(t))[0]?t.slice(1):t).replace(/[\r\n]+/g," ").replace(/[/\\?%*:|"<>_]+/g,"_"),!l.test(t)){
let r=l.exec(e);t+=r?r[0]:e.includes(".")?"":".bin"}n.filename=t}return l.ke(l.t.downloads.download,n).then(()=>true)}),
l.removeTempTab=e=>{l.we.remove(e,l.g)
},l.v=e=>(e=e.slice(0,99).toLowerCase(),1!==t.Le.get(e)&&(e.startsWith("about:")?"about:blank"!==e:e.startsWith("chrome:")?!e.startsWith("chrome://downloads"):e.startsWith(t.Z.U)&&!("string"!=typeof t.Z.Ye?t.Z.Ye.test(e):e.startsWith(t.Z.Ye))||t.Qe&&/^(edge|extension):/.test(e)&&!e.startsWith("edge://downloads"))),
l.w=(e,t)=>{
let r=l.t.permissions,u=Promise.all(e.map(e=>e&&l.ke(l.t.permissions.contains,e))),n=e.map(e=>e&&(e.permissions||e.origins)[0])
;u.then(e=>{let l=false,u=false,o=(o,a)=>{let f=!a;if(a){let l=a.permissions;for(let t of l||[]){let l=n.indexOf(t)
;l>=0&&(e[l]=o,f=true)}for(let t of(!l||l.length<=0)&&a.origins||[])if("chrome://*/*"!==t){let l=n.indexOf(t)
;l>=0&&(e[l]=o,f=true)}else for(let l=0;l<n.length;l++)(n[l]||"").startsWith("chrome://")&&(e[l]=o,f=true)}
f&&(false===t(e,true)&&(l=u=false),l!==e.includes(false)&&r.onAdded[(l=!l)?"addListener":"removeListener"](s),
u!==e.includes(true)&&r.onRemoved[(u=!u)?"addListener":"removeListener"](i))},s=o.bind(null,true),i=o.bind(null,false)
;e.includes(false)||e.includes(true)?o(true):t(e,false)})},l.p=(e,t,r,u,n,o)=>{{let s=t>=0?{frameId:t}:{allFrames:true,
matchAboutBlank:true}
;s.runAt="document_start",u?s.code=`${(u+"").split("{")[1].split("(")[0].trim()}(${n?n.join(","):""})`:s.file=r[0],
l.we.executeScript(e,s,o||l.g)}},l.s=e=>{let r=t.Ue.length-1;for(let u of t.Z.Ze.slice(0,-1))l.p(e,-1,[u.slice(r)])},
l.import2=l=>new Promise((t,r)=>{e([l],t,r)}).then(e=>e),t.el<6&&(t.ll=new Promise(e=>{
let t=l.t.runtime.onInstalled,r=l=>{let u=r;u&&(r=null,e(l),t.removeListener(u))};t.addListener(r),
setTimeout(r,6e3,null)}))});