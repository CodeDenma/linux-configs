"use strict"
;__filename="background/tools.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./run_commands","./open_urls","./tab_commands"],function(e,t,l,r,n,o,i,a,u,s,f,c,d,_){
function m(e){let t=e.tabId,r=l.a.get(t);if(r&&512&r.b&&u.Vn(r,0),e.windowId!==l.xe)return void n.He.get(e.windowId,p)
;let o=performance.now();if(o-w>666){let e=1===l.L?Date.now():o;v.set(l.ye,e)}l.ye=t,w=o}function p(e){
if(!e||!e.focused)return n.g();let t=e.id;t!==l.xe&&(l.nu=l.xe,l.xe=t),n.we.query({windowId:t,active:true},e=>{
e&&e.length>0&&t===l.xe&&g(e)})}function g(e){if(!e||0===e.length)return n.g();let r=e[0],o=r.windowId,i=l.xe
;o!==i&&(l.xe=o,l.nu=i),l.de=r.incognito?2:0,t.Ae.nn(),m({tabId:r.id,windowId:o})}Object.defineProperty(t,"__esModule",{
value:true}),t.Ae=t.qn=t.me=t.be=t.se=void 0,t.se={uo:(e,t)=>"vimiumContent|"+e+(t?"|"+t:""),fo(e,t){
let o=n.t.contentSettings;try{o&&o.images.get({primaryUrl:"https://127.0.0.1/"},n.g)}catch(e){o=null}
return o?o[e]&&!/^[A-Z]/.test(e)&&o[e].get?!(!t.startsWith("read:")&&r.ln.test(t)&&!t.startsWith(l.Z.U))&&(u.complainLimits(f.K("changeItsCS")),
true):(u.showHUD(f.K("unknownCS",[e])),true):(u.showHUD("Has not permitted to set contentSettings"),true)},do(e,t){
if(e.startsWith("file:")){let t=1;return t?(u.complainLimits(1===t?f.K("setFileCS",[56]):f.K("setFolderCS")),
[]):[e.split(/[?#]/,1)[0]]}if(e.startsWith("ftp"))return u.complainLimits(f.K("setFTPCS")),[]
;let l,n=e.match(/^([^:]+:\/\/)([^\/]+)/),i=o.Li.exec(n[2]),a=i[3]+(i[4]||"");if(l=[(e=n[1])+a+"/*"],
t<2||r.cn(i[3],0))return l;i=null;let[s,c]=r.ar(a),d=Math.min(s.length-c,t-1)
;for(let t=0;t<d;t++)a=a.slice(s[t].length+1),l.push(e+a+"/*");return l.push(e+"*."+a+"/*"),
d===s.length-c&&"http://"===e&&l.push("https://*."+a+"/*"),l},_o(e){let t;for(let{s:{Rl:l}}of e.J){let e=new URL(l).host
;if(t&&t!==e)return true;t=e}return false},po(e,l){let r=n.t.contentSettings[e];null==l?(r.clear({scope:"regular"}),
r.clear({scope:"incognito_session_only"},n.g),a.Nn(t.se.uo(e),null)):r.clear({scope:l?"incognito_session_only":"regular"
})},ae(e,r){let n=e.type?""+e.type:"images";return!t.se.fo(n,"http://a.cc/")&&(t.se.po(n,r?r.s.fe:2===l.de),
u.showHUDEx(r,"csCleared",0,[[n[0].toUpperCase()+n.slice(1)]]),true)},Se(e,l,r,n){let o=e.type?""+e.type:"images",i=r[0]
;e.incognito?t.se.go(l,o,i,n):t.se.yo(o,l,i,"reopen"===e.action,n)},yo(e,r,i,u,s){let f=o.$i(i.url)
;t.se.fo(e,f)?s(0):n.t.contentSettings[e].get({primaryUrl:f,incognito:i.incognito},o=>{t.se.bo(e,f,r,{
scope:i.incognito?"incognito_session_only":"regular",setting:o&&"allow"===o.setting?"block":"allow"},r=>{
if(r)return void s(0);if(!i.incognito){let l=t.se.uo(e);1!==a.io(l)&&a.Nn(l,1)}
let o,f=!n.Pe()||(o=l.a.get(i.id))&&o.J.length>1&&t.se._o(o)
;i.incognito||u?_.Te(i):i.index>0?_.Te(i,f?0:2):n.getCurWnd(true,e=>(e&&"normal"===e.type?_.Te(i,f?0:e.tabs.length>1?2:1):n.we.reload(c.getRunNextCmdBy(0)),
n.g()))})})},go(e,r,i,a){if(l.Z.so)return u.complainLimits(f.K("setIncogCS")),void a(0);let s=o.$i(i.url)
;t.se.fo(r,s)?a(0):n.t.contentSettings[r].get({primaryUrl:s,incognito:true},l=>n.g()?(n.t.contentSettings[r].get({
primaryUrl:s},l=>{l&&"allow"===l.setting?a(1):n.He.create({type:"normal",incognito:true,focused:false,url:"about:blank"
},l=>{let o=l.tabs[0].id;return t.se.vo(e,r,i,s,l.id,true,()=>{n.we.remove(o)})})}),
n.g()):l&&"allow"===l.setting&&i.incognito?t.se.Mo(i):void n.He.getAll(n=>{
if(!(n=n.filter(e=>e.incognito&&"normal"===e.type)).length)return void console.log("%cContentSettings.ensure","color:red","get incognito content settings",l," but can not find an incognito window.")
;let o=d.preferLastWnd(n);if(l&&"allow"===l.setting)return t.se.Mo(i,o.id)
;let a=i.windowId,u=i.incognito&&n.some(e=>e.id===a);return t.se.vo(e,r,i,s,u?void 0:o.id)}))},vo(e,l,r,o,i,a,u){
let s=t.se.Co.bind(null,r,i,u);return t.se.bo(l,o,e,{scope:"incognito_session_only",setting:"allow"
},a&&i!==r.windowId?e=>{if(e)return s(e);n.He.get(r.windowId,s)}:s)},bo(e,l,o,i,a){
let u,s=false,f=n.t.contentSettings[e],c=()=>{let e=n.g();return e&&console.log("[%o]",Date.now(),e),s||(--u,s=!!e,
(s||0===u)&&setTimeout(a,0,s)),e},d=t.se.do(l,0|o);if(u=d.length,u<=0)return a(true);r.di(i)
;for(let e of d)f.set(Object.assign({primaryPattern:e},i),c)},Co(e,l,r,o){true!==o&&t.se.Mo(e,l),r&&r(),
true!==o?l&&n.He.update(l,{focused:true,state:o?o.state:void 0}):c.runNextCmd(0)},Mo(e,t){e.active=true,
"number"==typeof t&&e.windowId!==t&&(e.index=void 0,e.windowId=t),_.Te(e)}},t.be={La({l:e,n:r,s:n,u:o},i,u){
if(e&&0===n[0]&&0===n[1])if(2===n.length){let e=o.indexOf("#");e>0&&e<o.length-1&&(n=[0,0,o.slice(e)])
}else(n[2]||"").length<2&&(n=[0,0]);u=u>=0?u:-1
;let s=i?n:2!==n.length||n[0]||n[1]?2!==n.length||n[1]>524287||n[0]>8191?n:Math.max(0,n[0])|Math.max(0,n[1])<<13:0,f=t.be.Io(r,e?o:""),c=e?s:s?{
s,t:u,u:o.slice(0,8192)}:{t:u,u:o.slice(0,8192)};i?(l._a||(y.ko(),l._a=new Map)).set(f,c):a.Nn(f,c)},Yn(e,o,i,s){
let{n:f}=o,_=t.be.Io(f,o.l?o.u:""),m=i.s.fe&&(null==l._a?void 0:l._a.get(_))||a.io(_),p="number"==typeof m?[8191&m,m>>>13]:"string"==typeof m?JSON.parse(m):m?m instanceof Array?m.slice(0):{
url:m.u,tabId:m.t,scroll:"number"!=typeof m.s?m.s||[0,0]:[8191&m.s,m.s>>>13]}:m;if("string"==typeof m&&t.be.La({l:o.l,
n:f,s:p instanceof Array?p:p.scroll||[0,0],u:o.u},false,i.s.m),!p&&o.s)try{let e=JSON.parse(o.s)
;if(e&&"object"==typeof e){let t=+e.scrollX,l=+e.scrollY;t>=0&&l>=0&&(p=[0|t,0|l,""+(e.hash||"")])}}catch(e){}
if(!p)return u.showHUDEx(i,"noMark",0,[[o.l?"Local":"Global"],f]),void c.runNextCmdBy(0,e)
;let g=c.parseFallbackOptions(e);if(p instanceof Array)return g&&(g.$else=null),
void t.be.To(i.s.m,null,i,true,f,p,0,g,s);g&&(g.$else=g.$then);let y=p.tabId,h=e.wait,b=e.prefix,v=p.url,w={n:f,
a:!!e.parent&&!b,p:true,q:d.parseOpenPageUrlOptions(e),s:p.scroll||[0,0],t:y,u:v,f:g,
w:"number"==typeof h?Math.min(Math.max(0,h||0),2e3):h}
;w.p=!!b||null==b&&!w.a&&0===w.s[1]&&0===w.s[0]&&!!r.jr(v)&&(!v.includes("#")||o.u.startsWith(v)),
t.be.So(o.u,v,w)?t.be.To(i.s.m,null,i,false,f,w.s,0,g,s):y>=0&&l.a.has(y)?n.tabsGet(y,t.be.jo.bind(0,w,s)):d.wn(w)},
So(e,t,l){let r=e.split("#",1)[0],n=t.split("#",1)[0]
;return r===n||!!l.p&&r.startsWith(n.endsWith("/")||n.includes("?")?n:n+"/")||!!l.a&&n.startsWith(r.endsWith("/")||r.includes("?")?r:r+"/")
},jo(e,r,o){let i=n.getTabUrl(o);if(t.be.So(i,e.u,e)){let i=o.id===l.ye;i||n.selectTab(o.id,n.selectWndIfNeed),
t.be.xn(e,o.id,i?r:0,true)}else d.wn(e)},
Io:(e,t)=>t?"vimiumMark|"+i.iu(t.slice(0,499).split("#",1)[0])+(t.length>1?"|"+e:""):"vimiumGlobalMark|"+e,
To(e,t,r,o,i,a,u,s,d){if(r=!t||!t.C||512&t.C.s.b?r:t.C){let e={g:!o,s:a,t:"",f:s||{},w:u||0}
;Promise.resolve(i&&f._n("mNormalMarkTask",[["mJumpTo"],[o?"Local":"Global"],i])).then(t=>{e.t=t||"",d?(l.Ce=d,
l.Zn(r,19,e,1,1)):c.portSendFgCmd(r,19,true,e,1)})}else n.p(e,0,null,(e,t)=>{window.scrollTo(e,t)
},[a[0],a[1]],s?()=>(c.runNextCmdBy(1,s),n.g()):null)},xn(e,r,n,o){let i=l.a.get(r),a=e.w;u._i(i).then(()=>{
t.be.To(r,i,null,false,e.n,e.s,o||false===a?0:"number"!=typeof a?200:a,e.f,n)}),e.t!==r&&e.n&&t.be.La({l:false,n:e.n,
s:e.s,u:e.u},2===l.de,r)},ve(e){let r=t.be.Io("",e),n=0;l.Hn.forEach((e,t)=>{t.startsWith(r)&&(n++,a.Nn(t,null))})
;let o=l._a;return o&&o.forEach((e,t)=>{t.startsWith(r)&&(n++,o.delete(t))
}),u.showHUDEx(l.O,"markRemoved",0,[n,["#"===e?"allLocal":e?"Local":"Global"],[1!==n?"have":"has"]]),n}},t.me={Lo:null,
Xt:0,Ao(){let e=l.Hn.get("findModeRawQueryList")||"";t.me.Lo=e?e.split("\n"):[],t.me.Ao=null},Jr(e,n,o){let i=t.me
;i.Ao&&i.Ao();let u=e?l.Ma||(y.ko(),l.Ma=i.Lo.slice(0)):i.Lo;if(!n)return(u[u.length-(o||1)]||"").replace(/\r/g,"\n")
;if(n=n.replace(/\n/g,"\r"),e)return void i.Oo(n,u,true);n=r.Yt(n,0,99);let s=i.Oo(n,u)
;s&&a.Nn("findModeRawQueryList",s),l.Ma&&i.Oo(n,l.Ma,true)},Oo(e,t,l){let r=t.lastIndexOf(e);if(r>=0){
if(r===t.length-1)return;t.splice(r,1)}else t.length>=50&&t.shift();if(t.push(e),!l)return t.join("\n")},ce(e){
e?l.Ma&&(l.Ma=[]):(t.me.Ao=null,t.me.Lo=[],a.Nn("findModeRawQueryList",""))}};let y={Ro:false,Xt:0,ko(){
y.Ro||(n.He.onRemoved.addListener(y.Uo),y.Ro=true)},Uo(){y.Ro&&(y.Xt=y.Xt||setTimeout(y.No,34))},No(){y.Xt=0
;for(let e of l.a.values())if(e.d.s.fe)return;n.He.getAll(e=>{e.some(e=>e.incognito)||y.$o()})},$o(){l.Ma=null,
l._a=null,n.He.onRemoved.removeListener(y.Uo),y.Ro=false}},h=false,b=h?-1:0;t.qn={qo:[2,1],Go(e){let l=t.qn.qo[e]
;return"object"==typeof l?l.matches:null},Po(e,l){
let r=2===l,n=t.qn,o=n.qo,i=o[e],a=e?"prefers-color-scheme":"prefers-reduced-motion"
;if(1===i&&r&&(o[e]=i=matchMedia(`(${a})`).matches?2:0),r&&2===i){let l=matchMedia(`(${a}: ${e?"dark":"reduce"})`)
;l.onchange=n.Wo,o[e]=l,0!==b&&-2!==b||(b=setInterval(t.qn.Jn,6e4))}else r||"object"!=typeof i||(i.onchange=null,o[e]=2,
(b>0||-2===b)&&o.every(e=>"object"!=typeof e)&&(b>0&&clearInterval(b),b=0))},Pr(e,r,n){
let o=t.qn.qo[e],i="object"==typeof o;if(!h&&false){let l=matchMedia(o.media);l.onchange=o.onchange,o.onchange=null,
t.qn.qo[e]=o=l}
let u=e?"dark":"less-motion",f=i?o.matches:null!=n?n:1===(0===e?l.A.autoReduceMotion:l.A.autoDarkMode),c=e?"d":"m",d=a.W(c,f)
;l.V[c]!==d&&(l.V[c]=d,r||a.mn({N:6,d:[c]})),s.qe({t:u,e:f||` ${l.A.vomnibarOptions.styles} `.includes(` ${u} `),b:!r})
},Jn(){b>0&&performance.now()-w>27e4&&(clearInterval(b),b=-2)
;for(let e=t.qn.qo,l=e.length;0<=--l;)"object"==typeof e[l]&&t.qn.Pr(l)},Fo(){t.qn.Jn(),b=setInterval(t.qn.Jn,6e4)},
Wo(){h||(b>0&&clearInterval(b),b=-1,h=true);let e=t.qn.qo.indexOf(this);e>=0&&t.qn.Pr(e)}};let v=l.De;t.Ae={ze(e,t){
return v.get(t.id)-v.get(e.id)},nn:l.o};let w=0;n.we.onActivated.addListener(m),n.He.onFocusChanged.addListener(e=>{
-1!==e&&n.we.query({windowId:e,active:true},g)}),n.we.onRemoved.addListener(e=>{l.a.delete(e),v.delete(e)}),
a.sl.then(()=>{n.getCurTab(e=>{w=performance.now();let t=e&&e[0];if(!t)return n.g();l.ye=t.id,l.xe=t.windowId,
l.de=t.incognito?2:0});let e=[]
;for(let r of["images","plugins","javascript","cookies"])null!=l.Hn.get(t.se.uo(r))&&e.push(r)
;e.length&&n.t.contentSettings&&setTimeout(()=>{for(let l of e)t.se.po(l)},100)}),
l.fl.autoDarkMode=l.fl.autoReduceMotion=(e,l)=>{let r=l.length>12?0:1;t.qn.Po(r,e="boolean"==typeof e?e?2:0:e),
t.qn.Pr(r,0,2===e?null:e>0)},l.fl.vomnibarOptions=e=>{
let r=a.E.vomnibarOptions,n=l.Nr,o=true,{actions:i,maxMatches:u,queryInterval:s,styles:f,sizes:c}=r
;if(e!==r&&e&&"object"==typeof e){
let t=Math.max(3,Math.min(0|e.maxMatches||u,25)),r=e.actions,n=r?r.replace(/[,\s]+/g," ").trim():"",a=+e.queryInterval,d=((e.sizes||"")+"").trim(),_=((e.styles||"")+"").trim(),m=Math.max(0,Math.min(a>=0?a:s,1200))
;o=u===t&&s===m&&d===c&&i===n&&f===_,o||(u=t,s=m,c=d,f=_),l.pi.actions=n?n.split(" "):[],e.actions=n,e.maxMatches=t,
e.queryInterval=m,e.sizes=d,e.styles=_}l.A.vomnibarOptions=o?r:e,n.n=u,n.i=s,n.s=c,n.t=f,t.qn.Pr(0,1),t.qn.Pr(1,1),
a.Ha({N:47,d:{n:u,i:s,s:c,t:n.t}})}});