"use strict"
;__filename="background/ports.js",define(["require","exports","./store","./utils","./browser","./exclusions","./i18n"],(e,l,t,r,n,u,o)=>{
Object.defineProperty(l,"__esModule",{value:true
}),l._i=l.Vn=l.tryToKeepAliveIfNeeded_mv3_non_ff=l.getParentFrame=l.complainNoSession=l.complainLimits=l.c=l.ensuredExitAllGrab=l.showHUDEx=l.showHUD=l.safePost=l.isNotVomnibarPage=l.ensureInnerCSS=l.indexFrame=l.ri=l.R=l.isExtIdAllowed=l.findCPort=l.he=l.j=l.OnFreeze=l.OnConnect=l.sendResponse=void 0
;let f=(e,l)=>{if(90!==e.H)t.dn[e.H](e,l);else{let r=t.dn[e.c](e.a,l,e.i);r!==l&&l.postMessage({N:4,m:e.i,r})}}
;l.sendResponse=(e,t,r)=>{let n=l.ri(e);if(n&&n.J.includes(e))try{e.postMessage({N:4,m:t,r})}catch(e){}},
l.OnConnect=(e,l)=>{if(128&l)return void c(e,l)
;let r=e.sender.documentLifecycle,o=!!r&&"active"!==r,a=d(e),_=a.Rl,p=_===t.vomnibarPage_f;if(l>7||p){
if(999===l)return void(a.m>=0&&!a.Q&&n.removeTempTab(a.m,e.sender.tab.windowId,a.Rl))
;if(256&l||p)return void s(e,l,p||_===t.Z.fi);if(o)return void e.disconnect()}
let m,N,g,k=a.m,I=k>=0?t.a.get(k):void(k=a.m=t.getNextFakeTabId()),h=1!=(9&l)&&33!=(33&l)&&void 0!==I
;if(h&&null!==I.ls?(N=I.ls.ts,m=I.ls.f,g=2===m?3:1):(N=!u.ss||8&l?null:u.rs(_,a),m=null===N?0:N?1:2,g=0),a.f=m,
64&l&&(a.b=g|=64),h&&(g|=4&I.b,1024&l&&(g|=128,I.b|=128),a.b=g),8&l)4096&l&&e.postMessage({N:1,p:1&g?N:u.rs(_,a),f:3&g
}),b(I,e,l);else if(e.postMessage(4&l?{N:0,c:null,d:o,f:g,p:N}:{N:0,c:t.V,d:o,f:g,k:t.pn,m:t.ya,p:N,t:t.ha}),
o)return void e.disconnect();e.onDisconnect.addListener(i),e.onMessage.addListener(f);let y=0===a.Q
;h?(2&l&&(t.u&&I.d.s.f!==m&&t.r(k,m),I.d=e),y&&(I.C=e),I.J.push(e)):(t.a.set(k,{d:e,C:y?e:null,J:[e],ls:null,b:0}),
0!==m&&t.u&&t.r(k,m),void 0!==I&&v(I.J))};let i=e=>{let l,{m:r}=e.s,u=t.a.get(r);if(!u)return n.g();let o=u.J
;if(l=o.lastIndexOf(e),e.s.Q)return l===o.length-1?--o.length:l>=0&&o.splice(l,1),
o.length?e===u.d&&(u.d=o[0]):512&u.b||t.a.delete(r),n.g();l>=0&&t.a.delete(r)},s=(e,l,u)=>{if(256&l){
if(u)return e.s.m<0&&(e.s.m=8&l?t.getNextFakeTabId():t.O?t.O.s.m:t.ye),e.s.b|=256,t.Fe.push(e),
e.onDisconnect.addListener(a),e.onMessage.addListener(f),void(8&l||e.postMessage({N:42,l:t.Nr,s:r.mi(false)}))
}else e.s.m<0||0===e.s.Q||n.p(e.s.m,e.s.Q,[t.Z.Rn]);e.disconnect()},a=e=>{let l=t.Fe,r=l.lastIndexOf(e)
;return r===l.length-1?--l.length:r>=0&&l.splice(r,1),n.g()},c=(e,l)=>{if(1024&l)e.disconnect();else if(e.s=false,
2048&l){let l=t.li(null,null);if(l&&l.t){l.d=null,e.postMessage({N:49,t:l.t,s:l.s});let t=e=>{l&&(clearTimeout(l.i),
l.r&&l.r(e)),l=null};e.onMessage.addListener(t),e.onDisconnect.addListener(()=>{t(false)})}else e.disconnect()
}else e.onMessage.addListener(f)},d=e=>{let l=e.sender,t=l.tab;return l.tab=null,e.s={Q:l.frameId||0,b:0,f:0,
fe:null!=t&&t.incognito,m:null!=t?t.id:-3,Rl:l.url}},v=e=>{for(let l of e)l.s.Q&&_(l)},_=e=>{try{e.s.b|=512,
e.onDisconnect.removeListener(i),e.postMessage({N:15})}catch(l){return e.disconnect(),1}};l.OnFreeze=(e,l)=>{
l.onDisconnect.removeListener(i),l.s.Q||(l.s.Q=2),i(l)},l.j=(e,o,f,i)=>{var s
;return(e=e||(null===(s=t.a.get(t.ye))||void 0===s?void 0:s.C)||null)&&!f&&u.ss&&(o||u.fn)?e.s.Rl:new Promise(t=>{
let u=e&&e.s.Q&&r.isNotPriviledged(e)?n.N():null;e?(e.s.Q?u?u.getFrame:(e,l)=>l(null):n.tabsGet)(u?{tabId:e.s.m,
frameId:e.s.Q}:e.s.m,r=>{let u=r?r.url:"";return!u&&i&&(i.N=3,l.safePost(e,i)),t(u),n.g()
}):n.getCurTab(e=>(t(e&&e.length?n.getTabUrl(e[0]):""),n.g()))})},l.he=(e,r,n,u)=>{var o
;u||(t.O=u=t.O||(null===(o=t.a.get(t.ye))||void 0===o?void 0:o.C));let f=l.j(u,r,n,e)
;if("string"!=typeof f)return f.then(l=>(e.u=l,l&&t.dn[e.H](e,u),l));e.u=f,t.dn[e.H](e,u)},l.findCPort=e=>{
let l=t.a.get(e&&e.s.m>=0?e.s.m:t.ye);return l?l.d:null},l.isExtIdAllowed=e=>{
let l=null!=e.id?e.id:"unknown_sender",r=e.url,n=e.tab,u=t.Ln,o=u.get(l);if(true!==o&&n){
let e=t.a.get(n.id),r=e?e.An:null;e&&(null==r||r!==l&&"string"==typeof r)&&(e.An=null==r?l:2)}
return null!=o?o:r===t.vomnibarPage_f||(console.log("%cReceive message from an extension/sender not in the allow list: %c%s","background-color:#fffbe5","background-color:#fffbe5;color:red",l),
u.set(l,false),false)},l.R=()=>t.a.get(t.O?t.O.s.m:t.ye),l.ri=e=>t.a.get(e.s.m),l.indexFrame=(e,l)=>{let r=t.a.get(e)
;for(let e of r?r.J:[])if(e.s.Q===l)return e;return null},l.ensureInnerCSS=e=>{if(8&e.b)return null;let l=t.a.get(e.m)
;return l&&(l.b|=4),e.b|=12,t.Bn},l.isNotVomnibarPage=(e,l)=>{let t=e.s,r=t.b
;return!(256&r)&&(l||2048&r||(console.warn("Receive a request from %can unsafe source page%c (should be vomnibar) :\n %s @ tab %o","color:red","color:auto",t.Rl.slice(0,128),t.m),
t.b|=2048),true)},l.safePost=(e,l)=>{try{let t=512&e.s.b;return t||e.postMessage(l),t?0:1}catch(e){return 0}}
;let p=(e,t)=>{l.showHUD(t+"",e)};l.showHUD=(e,r)=>{if("string"!=typeof e)return void e.then(p.bind(null,r))
;let n=14===r||15===r;n&&(e.startsWith(t.Z.U+"-")&&e.includes("://")&&(e=e.slice(e.indexOf("/",e.indexOf("/")+2)+1)||e),
e=e.length>41?e.slice(0,41)+"\u2026":e&&e+(t.Gn?"\u3002":".")),t.O&&!l.safePost(t.O,{N:11,H:l.ensureInnerCSS(t.O.s),
k:n&&e?20:r||1,t:e})&&(t.O=null)},l.showHUDEx=(e,t,r,n,u)=>{if(!e)return;let f=u||o._n(t,n)
;"string"==typeof f?l.safePost(e,{N:11,H:l.ensureInnerCSS(e.s),k:1,d:r,t:f}):f.then(l.showHUDEx.bind(null,e,"NS",r,[]))
},l.ensuredExitAllGrab=e=>{let l={N:8};for(let t of e.J)4&t.s.b||(t.s.b|=4,t.postMessage(l));e.b|=4},l.c=(e,l,n)=>{
let u=r.en(t.a),o=t.ye,f=r=>{let n=t.a.get(r),u=0;return void 0!==n&&(512&n.b&&e&&(n.b|=e),u=Math.min(n.J.length,8),
l(n)),u};if(u.length>=10){let e=u.indexOf(o);e>=0&&(u.splice(e,1),f(o)),r.Kn(u,f,n)}else u.forEach(f)},
l.complainLimits=e=>{l.showHUDEx(t.O,"notAllowA",0,[e])},l.complainNoSession=()=>{
l.complainLimits("control tab sessions")},l.getParentFrame=(e,t,r)=>t&&n.N()?1===r&&true?n.ke(n.N().getFrame,{tabId:e,
frameId:t}).then(t=>{let r=t?t.parentFrameId:0;return r>0?l.indexFrame(e,r):null}):n.ke(n.N().getAllFrames,{tabId:e
}).then(n=>{let u=false,o=t;if(!n)return null;do{u=false;for(let e of n)if(e.frameId===o){o=e.parentFrameId,u=o>0;break}
}while(u&&0<--r);return o>0&&o!==t?l.indexFrame(e,o):null}):Promise.resolve(null),
l.tryToKeepAliveIfNeeded_mv3_non_ff=()=>{},l.Vn=(e,l)=>{
(131072&e.b||r.isNotPriviledged(e.d))&&(n.p(e.d.s.m,-1,null,(e,l)=>{"object"==typeof VApi&&VApi&&VApi.q(0,l)
},[0,512|(l?8:0)|126976&e.b]),e.b&=-258561)};let b=(e,r,u)=>{r.s.b|=16&u&&8,e||l.Vn({d:r,C:null,J:[],ls:null,b:131072
},0);let o=u;if(!(512&u)){if(!(2&u&&e&&512&e.b))return;o=258048&e.b,(131072&o||r.s.Q)&&l.Vn(e,0)}8192&o&&r.postMessage({
N:6,d:t.V}),32768&o&&r.postMessage({N:9,m:t.ya,t:t.ha,k:65536&o?t.pn:null}),16384&o&&8&r.s.b&&(r.s.b|=32,r.postMessage({
N:11,H:t.Bn,f:n.k(r.s)}))};l._i=(e,t)=>{let u=r.Je(),o=e&&(t?e.d:e.C);if(e&&(!o||512&o.s.b)){l.Vn(e,0),
/^(?:http|file|ftp)/i.test(e.d.s.Rl)||n.selectTab(e.d.s.m,n.selectWndIfNeed);let r=0,o=setInterval(()=>{r++
;let l=t?e.d:e.C;5!==r&&(!l||512&l.s.b)||(clearInterval(o),u.Ge())},33)}else u.Ge();return u.We},setInterval(()=>{
let e=performance.now();for(let e of t.Fe){if(!(1024&e.s.b)){e.s.b|=1024;continue}let l=e.s.b!==t.ye;l&&e.postMessage({
N:48,d:l})}let l=0;{let r=[];t.a.forEach((e,l)=>{let n=e.J.length&&l>=0&&t.De.get(l)||0;n>0&&r.push(n)}),
r.sort((e,l)=>l-e),l=Math.max(e-288e3,r.length?r[Math.min(5,r.length-1)]-1e3:0)}let n=[];t.a.forEach((e,u)=>{
let o=e.J,f=o.length;if(!f)return;let i=[];for(let e of o)1024&e.s.b?i.push(e):e.s.b|=1024
;if(i.length&&(u>=0&&t.De.get(u)||0)<l&&u!==t.ye&&(1===f&&!(131072&e.b)&&o[0]===e.C||o.some(r.isNotPriviledged))){
e.b|=512;for(let e of i)e.s.b|=512;n.push(e)}});for(let e of n){let l=[];for(let t of e.J)512&t.s.b?(t.disconnect(),
t.s.Q&&(e.b|=131072)):l.push(t);e.J.length=0,l.length&&e.J.push(...l)}},144e3)});