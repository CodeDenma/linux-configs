"use strict"
;__filename="background/frame_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./ports","./exclusions","./i18n","./key_mappings","./run_commands","./open_urls","./tools"],(e,l,t,r,i,u,n,o,a,s,f,d,c)=>{
let m;Object.defineProperty(l,"__esModule",{value:true
}),l.blurInsertOnTabChange=l.ge=l.focusFrame=l.framesGoNext=l.toggleZoom=l.mainFrame=l.framesGoBack=l.openImgReq=l.captureTab=l.handleImageUrl=l.enterVisualMode=l.X=l.pe=l.showVomnibar=l.initHelp=l.performFind=l.parentFrame=l.nextFrame=void 0,
t.ei=(e,l,u)=>{var o,a;let s=t.a.get(t.ye)||t.O&&n.R(),d=s?s.d:t.O
;!s||!s.C||d===s.C||512&s.C.s.b||r.ln.test(s.C.s.Rl)&&!(512&d.s.b)&&d.s.Rl.startsWith((null!==(a=null===(o=r.uu(s.C.s.Rl))||void 0===o?void 0:o.origin)&&void 0!==a?a:"")+"/")||(d=s.C)
;let c=setTimeout(()=>{let e=t.li(c,null);e&&e.r&&e.r(false)},4e4),m=r.Je();if(t.li(null,{i:c,t:e,s:l,d:u,r:m.Ge}),
d)f.portSendFgCmd(d,0,1,{u:t.Z.ti,c:"R TEE UI",a:1===e||5===e||9===e||0?"clipboard-write; clipboard-read":"",t:3e3,
i:!s||d===s.d||512&s.d.s.b?0:s.d.s.Q},1);else{let e=m.We;i.getCurWnd(false,l=>{let r=l?l.id:t.xe;i.makeWindow({
type:"popup",url:t.Z.ti,focused:true,incognito:false,left:0,top:0,width:100,height:32},"",l=>{
let u=l?null:t.li(null,null);if(l){let u=l.id;e.then(()=>{r!==t.xe&&i.He.update(r,{focused:true},i.g),i.He.remove(u,i.g)
}),e=null}else u&&u.i===c&&(clearTimeout(u.i),u.r&&u.r(false))})})}return m.We},l.nextFrame=()=>{
let e=t.O,r=-1,i=n.R(),u=i&&i.J;if(u&&u.length>1){r=u.indexOf(e);for(let e=Math.abs(t.$);e>0;e--)r+=t.$>0?1:-1,
r===u.length?r=0:r<0&&(r=u.length-1);e=u[r]}l.focusFrame(e,0===e.s.Q,e!==t.O&&i&&e!==i.d?4:3)},l.parentFrame=()=>{
let e=t.O.s,r=e.m>=0&&n.ri(t.O)?null:"Vimium C can not access frames in current tab";r&&n.showHUD(r),
n.getParentFrame(e.m,e.Q,t.$).then(e=>{e?l.focusFrame(e,true,5):l.mainFrame()})},l.performFind=()=>{
let e=t.O.s,l=t.$<0?-t.$:t.$,r=t.x.index,u=r?"other"===r?l+1:"count"===r?l:r>=0?-1-(0|r):0:0,n=t.x.highlight,o=t.x.extend,a="before"===o||"before"===t.x.direction?-1:1,s=!!u||!t.x.active,d=null
;32&e.b||(e.b|=32,d=i.k(e)),f.sendFgCmd(1,true,f.wrapFallbackOptions({c:u>0?t.$/l:t.$,l:s?1:0,f:d,d:a,
m:"number"==typeof n?n>=1?Math.min(0|n,200):0:n?s?100:20:0,n:!!t.x.normalize,r:true===t.x.returnToViewport,
s:!u&&l<2&&!!t.x.selected,t:o?a>0?2:1:0,p:!!t.x.postOnEsc,e:!!t.x.restart,
q:t.x.query?t.x.query+"":s||t.x.last?c.me.Jr(e.fe,"",u<0?-u:u):""}))},l.initHelp=(e,l)=>f.initHelpDialog().then(r=>{
var i;if(!r)return;let u=e.w&&(null===(i=n.ri(l))||void 0===i?void 0:i.C)||l,o=u.s.Rl.startsWith(t.Z.Fr),a=e.a||{}
;if(u.s.b|=262144,t.O=u,e.f){let e=t.ii.get("?"),l=e&&8===e.ui&&e.ni?"?":"";l||t.ii.forEach((t,r)=>{
8===t.ui&&t.ni&&(l=l&&l.length<r.length?l:(e=t,r))}),a=l&&s.oi(e)||a}f.sendFgCmd(17,true,{h:r.ai(o,a.commandNames),
o:t.Z.Fr,f:e.f,e:!!a.exitOnClick,c:o&&!!s.si||t.A.showAdvancedCommands})}),l.showVomnibar=e=>{var i;let u=t.O,o=t.x.url
;if(null!=o&&true!==o&&"string"!=typeof o&&(o=null,delete t.x.url),!u){
if(u=(null===(i=n.R())||void 0===i?void 0:i.C)||null,!u)return;t.O=u}let a=null;if(null!=o&&t.x.urlSedKeys){
let r="string"==typeof o?o:"string"==typeof t.x.u?t.x.u:n.j();if(r&&r instanceof Promise)return void r.then(t=>{
f.overrideCmdOptions({u:t||""},true),l.showVomnibar(e)});let i={};a=t.S(r,0,{r:null,k:t.x.urlSedKeys},i),
null!=i.F&&f.overrideCmdOptions({keyword:i.F})}"bookmark"===t.x.mode&&f.overrideOption("mode","bookm")
;let s=t.vomnibarPage_f,{Rl:d}=u.s,c=!s.startsWith(t.Z.U),m=d.startsWith(t.Z.U),p=e||!s.startsWith(t.Ue)?t.Z.fi:s,v=(e=e||(c?m||s.startsWith("file:")&&!d.startsWith("file:///")||s.startsWith("http:")&&!/^http:/.test(d)&&!/^http:\/\/localhost[:/]/i.test(s):u.s.fe||m&&!s.startsWith(d.slice(0,d.indexOf("/",d.indexOf("://")+3)+1))))||s===p||u.s.m<0,g=t.x.trailingSlash,b=t.x.trailing_slash,h=f.copyCmdOptions(r.di({
v:v?p:s,i:v?null:p,t:v?0:c?2:1,s:null!=g?!!g:null!=b?!!b:null,j:v?"":t.Z.ci,e:!!t.x.exitOnClick,u:a,
url:"string"==typeof o&&a||o,k:r.mi(true)}),t.x);null==h.icase&&t.pi.actions.includes("icase")&&(h.icase=true),
f.portSendFgCmd(u,6,true,h,t.$),h.k="omni",t.x=h},l.pe=(e,l,r)=>{let i=e.s.m,u=i>=0?i:t.ye,o=e.s.Q||i<0?t.a.get(u):null
;return o&&(i<0&&(64&e.s.b||e.s.Rl.startsWith("about:"))&&(e=o.d),("tab"===l||!l&&!r&&i<0)&&(o.C||i<0)&&(e=o.C||o.d),
64&e.s.b||e.s.Rl.startsWith("blob:"))?n.getParentFrame(u,e.s.Q,1).then(e=>e||o.C||o.d):e},l.X=()=>{
let e=t.x.mode,l=t.$<2||t.$>10?1:t.$,r=e&&"create"===(e+"").toLowerCase()?1:0,i=t.x.key,u={a:r,n:!t.x.storeCount,
s:true!==t.x.swap,t:"",o:t.x};if("string"==typeof i&&1===i.trim().length)return u.a=0,void t.dn[21]({H:21,c:u,k:t.Ce,
n:i.trim(),s:0,u:"",l:!!t.x.local},t.O);Promise.resolve(a.K(1===r?"mBeginCreate":"mBeginGoto")).then(e=>{u.t=e,
f.portSendFgCmd(t.O,3,true,u,l)})},l.enterVisualMode=()=>{
let e=t.x.mode,l=t.x.start,u="string"==typeof e?e.toLowerCase():"",n=t.O.s,o=null,a=null,d=null
;16&~n.b&&(32&n.b||(n.b|=32,o=i.k(n)),a=s.vi,d=s.gi,n.b|=16);let c=r.bi({m:"caret"===u?3:"line"===u?2:1,f:o,g:d,k:a,
t:!!t.x.richText,s:null!=l?!!l:null,w:""},t.x);delete c.mode,delete c.start,delete c.richText,f.sendFgCmd(5,true,c)}
;let p=e=>{try{URL.revokeObjectURL(e)}catch(e){}};l.handleImageUrl=(e,u,o,a,s,f,d,c)=>{var v;if(!o)return void a(1)
;let g=!(!(1&o)||2===t.de||t.O&&t.O.s.fe||false),b=4&o||g;if(b&&!u)return void r.hi(e,"blob").then(t=>{
l.handleImageUrl(e,t,o,a,s,f,d,c)});m&&(clearTimeout(m[0]),p(m[1]),m=null);let h=b?URL.createObjectURL(u):"";if(h){
m=[setTimeout(()=>{m&&p(m[1]),m=null},4&o?3e4:5e3),h];let e=a;a=[1,4,9].includes(o)?l=>{e(l),m&&p(h),
m&&m[1]===h&&(clearTimeout(m[0]),m=null)}:e}if(1&o&&(e||g?Promise.resolve():r.yi(u).then(l=>{e=l
})).then(()=>t.ei(9===o?o:1,{u:g?h:e,t:f,b:1},u)).then(async l=>{if(l)return void a(!!l)
;let t=globalThis.document,i=t.createElement("img");i.alt=s.replace(r.ki(),""),i.src=e||await r.yi(u),
t.documentElement.appendChild(i);let n=t.getSelection(),o=t.createRange();o.selectNode(i),n.removeAllRanges(),
n.addRange(o),t.execCommand("copy"),i.remove(),a(1)}),2&o)return d(e||h),void(1&o||a(1));if(4&o){
let e=(null===(v=n.R())||void 0===v?void 0:v.C)||t.O,l=r.Je();1&o&&true?setTimeout(l.Ge,800):l.Ge(0),
l.We.then(()=>i.downloadFile(h,s,e?e.s.Rl:null)).then(e=>{e||(()=>{let e=globalThis.document.createElement("a")
;e.href=h,e.download=s,e.target="_blank",e.click()})(),4===o&&a(true)})}},l.captureTab=(e,u)=>{
let o=t.x.show,s=!!t.x.copy,f=t.x.download,d=s?true===f:false!==f,c=!!t.x.richText,m=t.x.png?0:Math.min(Math.max(0|t.x.jpeg,0),100),p=e&&e[0],v=!!p&&p.url.startsWith(location.protocol),g=p?p.windowId:t.xe,b=p?p.title:"Tab"+(p?p.id:t.ye)
;b="title"===t.x.name?b:r.now().replace(/[-: ]/g,e=>" "===e?"_":"")+"-"+b,b=b.replace(r.ki(),""),b+=m>0?".jpg":".png",
i.we.captureVisibleTab(g,m>0?{format:"jpeg",quality:m}:{format:"png"},e=>{
if(!e)return t.O&&n.showHUD("Can not capture "+(v?"injected extensions":"this tab")),u(0),i.g()
;l.handleImageUrl(e,null,(o?2:0)|(d?4:0)|(s?1:0),s?e=>{
n.showHUD(a.K(e?"imgCopied":"failCopyingImg",[1===e?"HTML":m?"JPEG":"PNG"])),u(e)
}:u,b,((c||"")+"").includes("name")?b:"",e=>{t.dn[26]({t:"pixel=1&",u:e,f:b,a:false,m:37,o:{r:t.x.reuse,m:t.x.replace,
p:t.x.position,w:t.x.window}},t.O)})})},l.openImgReq=(e,l)=>{var i,o;let s=e.u;if(/^<svg[\s>]/i.test(s)){if(s=u.Mi(s),
!s)return t.O=l,void n.showHUD(a.K("invalidImg"));e.f=e.f||"SVG Image"}if(!r.uu(s))return t.O=l,
void n.showHUD(a.K("invalidImg"));let c=t.Z.Ti+"#!image ";e.f&&(c+="download="+r.Sl(e.f)+"&"),
false!==e.a&&(c+="auto=once&"),e.t&&(c+=e.t)
;let m=e.o||r.i(),p={},v=m.s?t.S(s,32768,m.s,p):s,g=null!==(i=p.F)&&void 0!==i?i:m.k,b=null!==(o=m.t)&&void 0!==o?o:!g,h=v!==s
;s=v,f.replaceCmdOptions({opener:true,reuse:null!=m.r?m.r:16&e.m?-2:-1,replace:m.m,position:m.p,window:m.w}),t.$=1
;let y=g||h?b?u.Xl(s,g,2):u.q(s.trim().split(r.D),g,2):s;l&&n.safePost(l,{N:11,H:n.ensureInnerCSS(t.O.s),k:1,t:" ",
d:1e-4}),d.openUrlWithActions("string"!=typeof y||!b||y.startsWith(location.protocol)&&!y.startsWith(t.Ue)?y:c+y,9)},
l.framesGoBack=(e,t,r)=>{let u=f.hasFallbackOptions(e.o)?(f.replaceCmdOptions(e.o),
f.getRunNextCmdBy(0)):i.g,n=r?r.id:t.s.m,o=e.s,a=d.parseReuse(e.o.reuse||0);if(a){let t=e.o.position
;i.we.duplicate(n,r=>{if(!r)return u();-2===a&&i.selectTab(n);{let t=f.parseFallbackOptions(e.o)||{};t.reuse=0,
l.framesGoBack({s:o,o:t},null,r)}let s=r.index--,c="end"===t?-1:d.newTabIndex(r,t,false,true)
;null!=c&&c!==s&&i.we.move(r.id,{index:3e4===c?-1:c},i.g)})}else{let e=o>0?i.we.goForward:i.we.goBack
;for(let l=0,t=o>0?o:-o;l<t;l++)e(n,l?i.g:u)}},l.mainFrame=()=>{let e=n.R(),r=e&&e.C
;!r||r===e.d&&t.x.$else&&"string"==typeof t.x.$else?f.runNextCmd(0):l.focusFrame(r,true,r===e.d?3:5)},l.toggleZoom=e=>{
i.ke(i.we.getZoom).then(l=>{if(!l)return void e(0);let r=t.$<-4?-t.$:t.$;(t.x.in||t.x.out)&&(r=0,t.$=t.x.in?t.$:-t.$)
;let u,n=t.x.level,o=Math;if(t.x.reset)u=1;else if(null!=n&&!isNaN(+n)||r>4){
let e=o.max(.1,o.min(0|t.x.min||.25,.9)),l=o.max(1.1,o.min(0|t.x.min||5,100))
;u=null==n||isNaN(+n)?r>1e3?1:r/(r>49?100:10):1+n*t.$,u=o.max(e,o.min(u,l))}else{
let e=0,r=9,i=[.25,1/3,.5,2/3,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5]
;for(let t=0,u=0;t<i.length&&(u=Math.abs(i[t]-l))<r;t++)e=t,r=u;u=i[e+t.$<0?0:o.min(e+t.$,i.length-1)]}
Math.abs(u-l)>.005?i.we.setZoom(u,i.Oe(e)):e(0)})},l.framesGoNext=(e,l)=>{let r=t.x.patterns,i=false
;if(r&&r instanceof Array||(r=r&&"string"==typeof r?r:(i=true,e?t.A.nextPatterns:t.A.previousPatterns),r=r.split(",")),
i||!t.x.$fmt){let e=[];for(let l of r)if(l=l&&(l+"").trim(),l&&e.push(".#[:".includes(l[0])?l:l.toLowerCase()),
200===e.length)break;r=e,i||(f.overrideOption("patterns",r),f.overrideOption("$fmt",1))}
let u=r.map(e=>Math.max(e.length+12,4*e.length)),n=Math.max.apply(Math,u);f.sendFgCmd(10,true,f.wrapFallbackOptions({
r:t.x.noRel?"":l,n:e,match:t.x.match,clickable:t.x.clickable,clickableOnHost:t.x.clickableOnHost,exclude:t.x.exclude,
excludeOnHost:t.x.excludeOnHost,evenIf:t.x.evenIf,scroll:t.x.scroll,p:r,l:u,m:n>0&&n<99?n:32,v:false!==t.x.view,
a:!!t.x.avoidClick}))},l.focusFrame=(e,l,r,i)=>{e.postMessage({N:7,H:l?n.ensureInnerCSS(e.s):null,m:r,k:t.Ce,c:0,
f:!i&&t.x&&f.parseFallbackOptions(t.x)||{}})},l.ge=()=>{var e;return null!==(e=t.x.blur)&&void 0!==e?e:t.x.grabFocus},
l.blurInsertOnTabChange=e=>{let u=f.parseFallbackOptions(t.x);u&&u.$then?u.$else=u.$then:u=null;let a=l.ge()
;if("string"==typeof a){let e=o.kl(a)||false;f.overrideOption(a===t.x.blur?"blur":"grabFocus",e),a=e}
let s=e?t.a.get(e.id):null;if(i.g()||!s||a&&true!==a&&!o.Ll(a,s.d.s.Q?s.d.s.Rl:e.url))return u&&f.runNextCmdBy(1,u),
i.g();setTimeout(()=>{n._i(t.a.get(t.ye),true).then(()=>{let e=t.a.get(t.ye);if(!e||512&e.b)u&&f.runNextCmdBy(1,u);else{
let l=r.di({esc:true});u&&f.copyCmdOptions(l,r.di(u)),f.portSendFgCmd(e.d,16,false,l,-1)}})},17)}});