"use strict"
;__filename="background/request_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./tools","./open_urls","./frame_commands","./tab_commands"],function(e,l,t,r,n,u,i,o,s,a,f,d,m,v,c,p,b,g,y){
Object.defineProperty(l,"__esModule",{value:true});let _,k=-1;t.dn=[(e,l)=>{let r=e.handler
;r&&"string"==typeof r&&("focus"===r?(4&l.s.b||(l.s.b|=4,l.postMessage({N:8
})),t.dn[12]({},l)):"command"===r?v.executeExternalCmd(e,null,l):"tip"===r&&(t.O=s.indexFrame(l.s.m,0)||l,
s.showHUD(e.tip||"Error: Lack .tip")))},()=>0,(e,l)=>{let r=e.k,n=o.Wn;if(!(r>=0&&r<n.length))return t.O=l,
s.complainLimits(d.K("notModify",[r]));let u=n[r],i=t.Dn;t.A[u]!==e.v&&(i?i.then(()=>{o.La(u,e.v)}):o.La(u,e.v))
},(e,l)=>{let t="object"==typeof e;return p.me.Jr(l.s.fe,t?e.q:"",t?1:e)},(e,l)=>{let t=i.je(e);if(null==e.i)return t
;l.postMessage({N:44,i:e.i,s:t})},(e,l)=>{let u=e.u,o=e.e,a=i.fu(e);r.Fl(),e.e=a,null==a.p?(t.O=l,
s.showHUD(a.u)):o||u!==a.u?!l||"file://"===a.u.slice(0,7).toLowerCase()&&"file://"!==u.slice(0,7).toLowerCase()?n.tabsUpdate({
url:a.u}):v.sendFgCmd(18,false,{r:1,u:a.u}):(t.O=l,s.showHUD("Here is just root"),e.e={p:null,u:"(just root)"})
},(e,l)=>{let r,n=i.je(e);if(!n||!n.k)return t.O=l,s.showHUD(d.K("noEngineFound")),void(e.n&&v.runNextCmdBy(0,e.n))
;let u=e.o||b.parseOpenPageUrlOptions(e.n),o={}
;r=e.t.trim()&&t.S(e.t.trim(),524288,u.s,o).trim()||(e.c?t.Jl(u.s,0,o={}):""),Promise.resolve(r).then(r=>{var i
;let a=null===r?"It's not allowed to read clipboard":(r=r.trim())?"":d.K("noSelOrCopied");if(a)return t.O=l,
s.showHUD(a),void(e.n&&v.runNextCmdBy(0,e.n));u.k=null!==(i=o.F)&&void 0!==i?i:null==u.k?n.k:u.k,t.dn[8]({u:r,o:u,r:0,
n:v.parseFallbackOptions(e.n)||{}},l)})},(e,l)=>{let r=e.s,u=0!==e.a,i=2===e.a,o=t.xe;if(t.O=s.findCPort(l),
"number"==typeof r)return void n.selectTab(r,e=>(n.g()?s.showHUD(d.K("noTabItem")):n.selectWnd(e),n.g()))
;if(!n.Pe())return void s.complainNoSession();let a=l.s.m>=0?l.s.m:t.ye>=0?t.ye:null,f=u?null:a;n.Pe().restore(r[1],e=>{
let l=n.g();return l?s.showHUD(d.K("noSessionItem")):y.Ie(o,e,f).then(e=>{i&&a&&e&&e.windowId!==o&&n.tabsGet(a,l=>{
n.we.move(e.id,{windowId:o,index:l?l.index+1:-1},n.g),n.tabsUpdate(e.id,{active:true})})}),l}),f&&n.selectTab(f,n.g)
},b.openUrlReq,(e,l)=>{let r,n=l.s.m,u=t.a.get(n);if(!u)return void(t.u&&t.r(n,l.s.f));let i=u.d;l!==i&&(u.d=l,
t.u&&(r=l.s.f)!==i.s.f&&t.r(n,r))},(e,l)=>{let r=l;if(!r&&(r=s.indexFrame(e.tabId,e.frameId),!r)){let l=t.a.get(e.tabId)
;return void(l&&512&l.b&&(l.b|=4096))}let{s:n}=r,u=n.Rl,i=t.a.get(n.m),o=n.Rl=l?e.u:e.url;if(i&&i.ls)return
;let f=a.ss?a.rs(o,n):null,d=null===f?0:f?1:2;if(n.f!==d)n.f=d,t.u&&i.d===r&&t.r(n.m,d);else if(!f||f===a.rs(u,n))return
;r.postMessage({N:1,p:f,f:0})},(e,l)=>{let r,n=e.t||0;t.O=l,t.$=n||t.$>0?1:-1,t.Ce=e.k,v.replaceCmdOptions(e.f||{}),
2!==n?1===n?g.parentFrame():g.nextFrame():(r=s.ri(l))?g.focusFrame(r.d,r.J.length<=2,e.o?1:2):s.safePost(l,{N:45,l:t.Ce
})},(e,l)=>{let t=s.ri(l);if(!t)return;if(l.s.b|=4,t.b|=4,t.J.length<2)return;let r={N:8};for(let e of t.J){let l=e.s.b
;e.s.b|=4,4&l||e.postMessage(r)}},(e,l,r)=>{let u,i=l.s.m,o=s.ri(l),a=e.u;if(!o||o.J.length<2)return false
;for(let e of o.J)if(e.s.Rl===a&&e!==o.C){if(u){u=null;break}u=e}return u&&u!==l?(t.Ce=e.k,I(e,l,u,1),
true):!!n.N()&&(n.N().getAllFrames({tabId:l.s.m},r=>{let n=0,u=l.s.Q;for(let e of r)if(e.parentFrameId===u){if(n){n=0
;break}n=e.frameId}let o=n&&s.indexFrame(i,n);o&&(t.Ce=e.k,I(e,l,o,1))}),!!r&&l)},g.initHelp,(e,l)=>{s.ri(l).b|=4,
l.s.b|=12,l.postMessage({N:11,H:t.Bn})},(e,l)=>{var n;let{i:u}=e;if(t.Ce=0,null!=e.u){
let{m:l,t:r}=e,u=l>=42&&l<=64,o=e.u,s={};o=u?i.Pn(o,true):o,o=t.S(o,u?1048576:524288,e.o&&e.o.s,s),v.replaceCmdOptions({
url:o,newtab:null!=r?!!r:!u,keyword:null!==(n=s.F)&&void 0!==n?n:e.o.k}),w(e.f),t.$=1}else{if(true!==e.r)return
;if(null==t.x||"omni"!==t.x.k){if(u)return;t.x=r.i(),t.$=1}else if(u&&t.x.v===t.Z.fi)return}t.O=l,g.showVomnibar(u)
},(e,l)=>{s.isNotVomnibarPage(l,false)||t.ml.Bl(e.q,e,N.bind(l,0|e.i))},(e,l)=>{if(null!=e.i){
let n=(e.r||"")+"",u=e.i,i=n.includes("name")?e.u:""
;return void Promise.all([/^data:/i.test(u)?Promise.resolve(u):r.Qn(u||e.u),null]).then(([e,u])=>{
let o="string"==typeof e,a=o?e:e?e[1]:"";t.O=l
;let f=a.indexOf(",")+1,m=a.slice(5,Math.max(5,f)).toLowerCase(),v=m.split(";")[0]
;if(!e||v.startsWith("text/"))return void(e?s.showHUD("",74):s.showHUD(d.K(0===e?"downloadTimeout":"downloadFail")))
;let c=a.slice(f,f+8);c=m.includes("base64")?r.Xe(c,"atob"):c.slice(0,6)
;let p=c.startsWith("\x89PNG")?"PNG":c.startsWith("\xff\xd8\xff")?"JPEG":/^GIF8[79]a/.test(c)?"GIF":(v.split("/")[1]||"").toUpperCase()||v,b=i&&/^(http|ftp|file)/i.test(i)?i:"",y=n.includes("safe")&&"GIF"!==p||n.includes("force")
;g.handleImageUrl(o?e:"",o?null:e[0],y&&"PNG"!==p?9:1,e=>{
s.showHUD(d.K(e?"imgCopied":"failCopyingImg",[1===e?"HTML":y?"PNG":p]))},i,b,null,false),r.Fl()})}
let n=e.n,u=e.o||n&&b.parseOpenPageUrlOptions(n)||{},o=!!(n&&n.copy&&n.o),a=null!=e.s&&e.m||0,f=o?null:u.s,c=o?null:u.k,p=a>=42&&a<=64&&(!f||false!==f.r),y=e.d?false!==u.d:!!u.d
;if(!e.s&&n&&null!=n.type&&"frame"!==n.type){let e=n.type,u=v.concatOptions(n,r.di({url:null,
type:"tab"===e&&n.url||"tab-url"===e?null:"tab-title"===e?"title":e}));return t.O=l,t.$=1,
void v.executeCommand(m.la("copyWindowInfo",u),1,t.Ce,l,1,n.$f&&{c:n.$f,r:n.$retry,u:0,w:0})}let _=e.u||e.s||""
;if(y)if("string"!=typeof _)for(let e=_.length;0<=--e;)p&&(_[e]=i.Pn(_[e]+"")),_[e]=r.Ml(_[e]+"");else p&&(_=i.Pn(_)),
_=r.Ml(_);else"string"==typeof _&&_.length<4&&!_.trim()&&" "===_[0]&&(_="");let k=!!_,N=_&&t.Al(_,e.j,f,c)
;N=e.s&&"object"==typeof e.s?`[${e.s.length}] `+e.s.slice(-1)[0]:N,Promise.resolve(N).then(r=>{t.O=l,
n&&v.runNextCmdBy(k?1:0,n)||s.showHUD(y?r.replace(/%[0-7][\dA-Fa-f]/g,decodeURIComponent):r,e.u?14:15)})},(e,l)=>{
let n=null!=l?l.s:null;if(null!==n&&!(4&n.b)){n.b|=4;let e=s.ri(l);e&&(e.b|=4)}let u=e.k,i=1,o=/^\d+|^-\d*/.exec(u)
;if(null!=o){let e=o[0];u=u.slice(e.length),i="-"!==e?parseInt(e,10)||1:-1
}else u.length>6&&u.startsWith(`<c-v-${u[5]}>`)&&(u=u[5]+u.slice(7));let a=t.ii.get(u);a||(o=u.match(m.pa),
u=o[o.length-1],i=1,a=t.ii.get(u)),r.Fl(),a&&(38===a.ui&&a.ni&&t.na(a),e.e&&(t.hn={element:r.Xn(e.e)}),
v.executeCommand(a,i,e.l,l,0,null))},v.waitAndRunKeyReq,(e,l)=>{if(2===e.c){let l=p.be.ve(e.u)
;return void(e.f&&v.runNextCmdBy(l>0?1:0,e.f))}let r=!!e.f,n=e.c.o;r||(t.O=l);let u=!r&&g.pe(l,n.type,e.l)||l
;Promise.resolve(u).then(t=>{if(!(r||t===l&&e.u)){let l=e;return l.U=(n.extUrl?1:0)|(e.c.a?2:0),l.f=true,
void s.he(l,true,1,t)}
1===e.c.a?(p.be.La(e,l.s.fe,l.s.m),s.showHUDEx(l,"mNormalMarkTask",1,[["mCreate"],[e.l?"Local":"Global"],e.n]),
v.runNextCmdBy(1,n)):p.be.Yn(n,e,l,e.l&&r?e.k:0)})},b.wn,v.onBeforeConfirm,v.onConfirmResponse,(e,l)=>{var r
;if("e"===e.t)return void s.showHUD(d.K("cannotDelSug"))
;let{t:u,s:i,u:o}=e,a="history"===u&&null!=i?"session":u,f="tab"===a?a:a+" item",m=e=>{
Promise.resolve(d.K("sugs")).then(l=>{s.showHUD(d.K(e?"delSug":"notDelSug",[l&&d.gn(l,a[0])||f]))})}
;if(t.O=s.findCPort(l),
"tab"===a&&t.ye===i)s.showHUD(d.K("notRemoveCur"));else if("session"!==a)t.ml.al("tab"===a?i:o,a,m);else if(null===(r=n.Pe())||void 0===r?void 0:r.forgetClosedTab){
let e=i;n.Pe().forgetClosedTab(e[0],e[1]).then(()=>1,t.o).then(m)}},g.openImgReq,(e,l)=>{t.O=null,
b.openJSUrl(e.u,{},()=>{t.O=l,s.showHUD(d.K("jsFail"))})},(e,l)=>{var t
;2!==e.c&&4!==e.c?I(e,l,(null===(t=s.ri(l))||void 0===t?void 0:t.C)||null,e.f):s.getParentFrame(l.s.m,l.s.Q,1).then(t=>{
var r;I(e,l,t||(null===(r=s.ri(l))||void 0===r?void 0:r.C)||null,e.f)})},f.qe,(e,l)=>{v.replaceCmdOptions({active:true,
returnToViewport:true,extend:!!(1&e.c),direction:e.c>=56?"before":null}),t.O=l,t.$=1,g.performFind()
},g.framesGoBack,()=>(d.$n&&d.$n(),d.jn),(e,l)=>{l.s.b|=8},(e,l)=>{v.replaceCmdOptions({mode:e.c?"caret":"",start:true
}),w(e.f),t.O=l,t.$=1,g.enterVisualMode()},e=>{if(performance.now()-e.r.n<500){let l=e.r.c;l.element=r.Xn(e.e),
c.runKeyWithCond(l)}},(e,l)=>{var r
;let o=e.o||{},a={},f=t.S(i.Pn(e.u,true),1048576,o.s,a),d=null!==(r=a.F)&&void 0!==r?r:o.k;f=f!==e.u||d?u.Xl(f,d,0):f,
t.O=l,s.showHUD(f,78),n.downloadFile(f,e.f,e.r||"").then(e.m<44?r=>{r||t.dn[26]({m:37,f:e.f,u:f},l)}:void 0)
},(e,l,t)=>(setTimeout(()=>{s.sendResponse(l,t,9)},e),l),({k:e,v:l})=>{let t=l!==!!l
;s.showHUD(d.K(t?"useVal":l?"turnOn":"turnOff",[e,t?JSON.stringify(l):""]))},(e,l)=>{t.dn[19](e,s.findCPort(l))
},(e,l,r)=>!(false!==l.s&&!l.s.Rl.startsWith(t.Ue))&&(P(e.q,e.i,l).then(e=>{l.postMessage(r?{N:4,m:r,r:e}:e)}),
l),(e,l)=>{let r=e.u,n=r.indexOf("://");r=n>0?r.slice(r.indexOf("/",n+4)+1):r,r=r.length>40?r.slice(0,39)+"\u2026":r,
t.O=l,s.showHUD(r,78)},(e,l)=>{
let n=e.t,u=r.Ml(e.u),i=n&&u?(t.pi.actions.find(e=>e.startsWith("itemJoin="))||"").slice(9):""
;i=i?i.includes("\\")?r.tryParse('"'===i[0]?i:`"${i}"`):r.Xe(i):"\n",t.dn[18]({s:n&&u?n+i+u:u||n,d:false,m:0
},s.findCPort(l))},(e,l)=>{t.O=s.findCPort(l),s.showHUD(e.t,15)},(e,l)=>{
s.showHUDEx(l,"mLocalMarkTask",1,[[e.n?"mCreate":"mJumpTo"],e.i>1?e.i:["mLastMark"]]),t.O=l,v.runNextCmdBy(1,e.c.o)
},()=>{let e=t.li(null,null);return e&&(clearTimeout(e.i),e.r&&e.r(false)),!e},(e,l)=>{let r=e>0&&s.indexFrame(l.s.m,e)
;return r?(g.focusFrame(r,false,2,1),2):(e<=0&&t.dn[45](),e?4:2)},s.OnFreeze,(e,l)=>{
let[r,n,u]=e.s,i=u&&(n?"^ ":"")+u.join(" "),o={N:1,p:i,f:r};l.postMessage(o);let a=s.ri(l),f=3===r?2:0
;if(a&&(!a.ls||a.ls.f!==f||a.ls.ts!==i)){a.ls={f,ts:i},t.u&&a.d.s.f!==f&&t.r(l.s.m,f);for(let e of a.J)e.s.f=f,
512&e.s.b||e.postMessage(o)}},(e,l)=>{let r=l.s.m,u=0,i=setInterval(()=>{let e=t.a.get(r);r!==t.ye&&e?(clearInterval(i),
(e.J.includes(l)||512&l.s.b)&&n.selectTab(r,n.selectWndIfNeed)):(++u>=12||!e)&&clearInterval(i)},17)}]
;let N=function(e,l,n,u,i,o,a,f){var d;let m,v,{Rl:c}=this.s,p=2===e?2:0;if(1===e&&true){
c=c.slice(0,c.indexOf("/",c.indexOf("://")+3)+1);let e=-1!==k?null===(d=t.a.get(k))||void 0===d?void 0:d.C:null
;if(null!=e&&(e.s.Rl.startsWith(c)?p=1:k=-1),p);else for(let e of t.a.values())if(m=e.C,v=m&&m.s,v&&v.Rl.startsWith(c)){
p=1,k=v.m;break}}s.safePost(this,{N:43,a:n,c:f,i:p,l,m:u,r:a,s:i,t:o}),r.Fl()};t.Zn=(e,l,r,n,u)=>{e.postMessage({N:7,
H:u||4!==l?s.ensureInnerCSS(e.s):null,m:u?5:0,k:u?t.Ce:0,f:{},c:l,n:n||0,a:r})};let I=(e,l,r,n)=>{
r&&2!==r.s.f?t.Zn(r,e.c,e.a,e.n,n):(e.a.$forced=1,v.portSendFgCmd(l,e.c,false,e.a,e.n||0))},w=e=>{
e&&("string"==typeof e&&(e=c.parseEmbeddedOptions(e)),e&&"object"==typeof e&&Object.assign(t.x,r.di(e)))
},P=(e,l,t)=>(_||(_=n.import2("/background/sync.js").then(()=>o.sl).then(()=>n.import2("/background/page_handlers.js"))),
_.then(l=>Promise.all(e.map(e=>l.onReq(e,t)))).then(e=>({i:l,a:e.map(e=>void 0!==e?e:null)})));window.onPagesReq=e=>{
if(-3===e.i){let e=t.li(null,null);return e&&clearTimeout(e.i),e}return P(e.q,e.i,null)}});