import{CurCVer_ as t,OnChrome as e,OnFirefox as i,$ as s,$$ as n,nextTick_ as l,post_ as o,enableNextTick_ as r,toggleReduceMotion_ as a,OnEdge as h,CurFFVer_ as u,OnSafari as p,prevent_ as f}from"./async_bg.js";import{bgSettings_ as c,Option_ as _,ExclusionRulesOption_ as d,oTrans_ as m,delayBinding_ as O}from"./options_base.js";_.F=[],_.prototype.b=function(t){if(t.call(this),VApi){let t=c.f[this.y],e=this.z();(t in c.g?o(3,{key:t,val:e}):Promise.resolve(e)).then(i=>{if(VApi.z[t]=null!=i?i:e,"l"===t){let s=VApi.y().r;s&&s.querySelector("iframe.Omnibar")&&o(29,{key:t,val:null!=i?i:e})}_.V&&_.V()})}},_.prototype.k=function(t){t.call(this);let e=this.z();if("autoReduceMotion"===this.y){let t=1===e||0!==e&&matchMedia("(prefers-reduced-motion: reduce)").matches;VApi&&(VApi.z.m=t),a(t)}else this.m()},_.ht=async()=>{let t=_.D,e=[];c.a();let i=t.optionalPermissions,s=i&&i.K();await Promise.all([c.u(),s]);for(let i in t){let s=t[i];!s.O&&s.M()&&e.push(s.pt())}if(e.length>0&&!confirm(m("dirtyOptions",[e.join("\n  * ")])))return false;for(let e in t){let i=t[e];if(!i.O&&!i.C())return false}r(8),t.vimSync.O||await t.vimSync.K(),t.exclusionRules.O||await t.exclusionRules.K();let n=[];for(let e in t){let i=t[e];i.O||n.push(i.K())}return await Promise.all(n),r(0,8),true},_.ft=()=>{let t=_.D;for(let e in t)if(!t[e].O)return true;return false},_.prototype.pt=function(){let t=this.x;return this instanceof BooleanOption_?t.nextElementSibling.textContent:(t=t.closest("tr"),t=t.querySelector(".caption"),t.innerText.replace(/[\r\n]/g,""))};export class NumberOption_ extends _{R(){let t,e;this.P={min:(t=this.x.min)&&!isNaN(e=parseFloat(t))?e:null,max:(t=this.x.max)&&!isNaN(e=parseFloat(t))?e:null,default:0,T:NumberOption_.ct},O(this.x,"input",this.v),O(this.x,"focus",this._t.bind(this)),l(()=>{this.P.default=c.r[this.y]})}N(t){this.x.value=""+t}z(){return Math.round(parseFloat(this.x.value))}_t(){let t=this.x,e=t=>this.dt(t),i=()=>{t.removeEventListener("wheel",e,{passive:false}),t.removeEventListener("blur",i),this.mt=0};this.mt=0,t.addEventListener("wheel",e,{passive:false}),t.addEventListener("blur",i)}dt(t){f(t);let e=this.mt,i=Date.now();if(i-e<100&&i+99>e&&e)return;this.mt=i;let s,n=this.x,l=(t.deltaY||t.deltaX)>0,o=n.value,r=l?n.stepUp:n.stepDown;if("function"==typeof r)r.call(n),s=n.value,n.value=o;else{r=parseFloat;let t=r(n.step)||1;i=(+n.value||0)+(l?t:-t),isNaN(t=r(n.max))||(i=Math.min(i,t)),isNaN(t=r(n.min))||(i=Math.max(i,t)),s=""+i}return this.Ot(s,e>0,false)}static ct(t){return isNaN(t)&&(t=this.default),t=null!=this.min?Math.max(this.min,t):t,null!=this.max?Math.min(this.max,t):t}}export class BooleanOption_ extends _{R(){let t=this.x,e=t.dataset.map;this.xt=e?JSON.parse(e):t.dataset.allowNull?BooleanOption_.gt:BooleanOption_.Nt,this.Tt=this.xt.length-1,this.Tt>1&&"vimSync"!==this.y&&O(t,"input",this.onTripleStatusesClicked.bind(this),true),O(t,"change",this.v)}N(t){let e=true===t||t===this.xt[this.Tt];this.x.checked=e,this.x.indeterminate=this.Tt>1&&t===this.xt[1],this.bt=e?this.Tt:Math.max(0,this.xt.indexOf(t))}z(){return this.x.indeterminate?this.xt[1]:this.xt[this.x.checked?this.Tt:0]}onTripleStatusesClicked(t){this.bt=BooleanOption_.ToggleTripleStatuses(this.bt,t)}static ToggleTripleStatuses(t,e){let i=e.target;f(e);let s=2===t?1:t?0:2;return i.indeterminate=2===t,i.checked=2===s,s}B(t){return this.x.dataset.map&&"boolean"==typeof t&&(t=this.xt[t?this.Tt:0]),t}static Bt(t,e){t.disabled=e;let i=t.nextElementSibling;i.tabIndex=e?-1:0,i.ariaDisabled=e||null}}BooleanOption_.Nt=[false,true],BooleanOption_.gt=[false,null,true];export class TextOption_ extends _{constructor(){super(...arguments),this.vt=false}R(){let t=this.x.dataset.converter||"",e=t?t.split(" "):[];O(this.x,"input",this.v),e.length>0&&(this.P={Et:e,n:0,T:TextOption_.kt})}w(){let t=super.w(),e=this.P;return e&&(e.n=0,t?t=t.then(()=>{e.n=e.T(this.S)===this.S?1:0}):e.n=e.T(this.S)===this.S?1:0),t}N(t,e){let i=this.wt(t);true!==e?this.x.value=i:this.Ot(i,true,true)}yt(){return this.x.value.trim().replace(/\xa0/g," ")}wt(t){return t}z(){let t=this.yt(),e=this.P;return t&&e&&e.T===TextOption_.kt&&(e.n|=2,t=TextOption_.kt.call(e,t),e.n&=-3),t}L(t){return this.wt(t)!==this.yt()}ne(t,e){let i=!!t;(i||this.vt)&&(this.vt=i,TextOption_.ne(t,e,this.x))}static ne(t,e,i){let s=!!t,{classList:n}=i,o=i.nextElementSibling;o=o&&o.classList.contains("tip")?o:null,(s||o)&&l(()=>{s?(null==o&&(o=document.createElement("div"),o.className="tip",i.after(o)),o.textContent=t,null!==e&&n.add(e||"has-error")):(n.remove("has-error"),n.remove("highlight"),o&&o.remove())})}static kt(t){let e=this.Et;if(e.indexOf("lower")>=0?t=t.toUpperCase().toLowerCase():e.indexOf("upper")>=0&&(t=t.toLowerCase().toUpperCase()),t=t.normalize(),e.indexOf("chars")<0||2&this.n&&!(1&this.n))return t;let i="";for(let e of t.replace(/\s/g,""))i.includes(e)||(i+=e);return i}}export class NonEmptyTextOption_ extends TextOption_{z(){let t=super.z();return t||(t=c.r[this.y],this.N(t,true)),t}}export class JSONOption_ extends TextOption_{wt(t){let e=this.x instanceof HTMLInputElement,i=JSON.stringify(t,null,e?1:2);return e?i.replace(/(,?)\n\s*/g,(t,e)=>e?", ":""):i}z(){let t=super.z(),e=null;if(t)try{e=JSON.parse(t)}catch(t){}else e=c.r[this.y],this.N(e,true);return e}static Mt(t){if(!t||"object"!=typeof t)return t;if(t instanceof Array)return t.map(JSONOption_.Mt);let e={};for(let i of Object.keys(t).sort())e[i]=JSONOption_.Mt(t[i]);return e}j(t,e){return JSON.stringify(t)===JSON.stringify(JSONOption_.Mt(e))}B(t){return JSONOption_.Mt(t)}}export class MaskedText_ extends TextOption_{R(){super.R(),this.St=true,this.Vt=this.Jt.bind(this),O(this.x,"focus",this.Vt)}Jt(){this.Vt&&(this.x.removeEventListener("focus",this.Vt),this.x.classList.remove("masked"),this.Vt=null,this.St=false,this.x.removeAttribute("placeholder"),this.w())}N(t,e){this.St?this.x.placeholder=m("clickToUnmask"):super.N(t,e)}yt(){return this.St?this.S:super.yt()}}TextOption_.prototype.Ot=NumberOption_.prototype.Ot=function(t,e,i){let s=this.x,n=s.value,l="backward"!==s.selectionDirection?s.selectionEnd:s.selectionStart,o=false;if(e&&(this.Ft=true,o=document.activeElement!==s,o&&s.focus(),document.execCommand("undo")),this.Ft=i,null==l)s.select(),document.execCommand("insertText",false,t),o&&this.x.blur();else{let i=e?s.value:n,r=s.scrollLeft,a=s.scrollTop,h=0,u=i.length-1,p=t.length-1,f=Math.min(u,p);for(;h<=f&&i[h]===t[h];)h++;for(f=Math.max(h,u-(p-h));f<=u&&i[u]===t[p];)u--,p--;s.setSelectionRange(h,u+1);let c=t.slice(h,p+1);if(document.execCommand("insertText",false,c),o&&s.blur(),n!==i){for(h=0,u=n.length-1,p=t.length-1,f=Math.min(u,p);h<=f&&n[h]===t[h];)h++;for(f=Math.max(h,u-(p-h));f<=u&&n[u]===t[p];)u--,p--}if(l)if(l===n.length)r=s.scrollWidth,a=s.scrollHeight,l=t.length;else if(l<h);else if(l>u)l+=p-u;else{let e=n.slice(0,l).split("\n"),i=e.length,s=t.split("\n").slice(0,i);s.length===i&&(s[i-1]=s[i-1].slice(0,e[i-1].length)),l=s.reduce((t,e)=>t+e.length,0)+s.length-1}else r=a=0;s.scrollTo(r,a),s.setSelectionRange(l,l)}this.Ft=false},d.prototype.Q=function(t){if(this.q.length!==t)return;let e=s("#exclusionToolbar"),i=n("[data-model]",e);e.style.visibility=t?"":"hidden";for(let e of i){let i=_.D[e.id],s=i.x.parentNode.style;s.visibility=t||i.O?"":"visible",s.display=!t&&i.O?"none":""}};export const saveBtn_=s("#saveOptions");export const exportBtn_=s("#exportButton");export let savedStatus_;export let registerClass_;export const createNewOption_=(()=>{let t=false;savedStatus_=e=>t=null!=e?e:t;let e=function(){this.Ft||((this.O=this.j(this.S,this.z()))?t&&!_.ft()&&(saveBtn_.disabled=true,saveBtn_.firstChild.data=m("115"),exportBtn_.disabled=false,savedStatus_(false),window.onbeforeunload=null):t||(window.onbeforeunload=V,savedStatus_(true),saveBtn_.disabled=false,saveBtn_.firstChild.data=m("115_2"),exportBtn_.disabled=true))},i={Number:NumberOption_,Boolean:BooleanOption_,Text:TextOption_,NonEmptyText:NonEmptyTextOption_,JSON:JSONOption_,MaskedText:MaskedText_,ExclusionRules:d},s=t=>{let s=new(0,i[t.dataset.model])(t,e);return _.D[s.y]=s};_.$=true;for(let t of n("[data-model]"))s(t);return registerClass_=(t,e)=>{i[t]=e},s})();{let t=_.D.exclusionRules,e=t.H;e.ondragstart=e=>{let i=e.target,s=document.activeElement;"input"!==s.localName?(t.At=i,i.style.opacity="0.5"):s!==i&&f(e)},e.ondragend=()=>{let e=t.At;t.At=null,e&&(e.style.opacity="")},e.ondragover=e=>{t.At&&f(e)},e.ondrop=e=>{f(e);let i=t.At;if(!i)return;let s=e.target;if(s=s.closest(".exclusionRule"),!s||i===s)return;s.before(i);let n=t.q,l=i.querySelector(".pattern").vnode,o=s.querySelector(".pattern").vnode;n.splice(n.indexOf(l),1),n.splice(n.indexOf(o),0,l),t.v()}}let x=_.D.keyMappings,g=t=>{let e,i=new RegExp("^#![^\\n]*|^[^]","gm");for(;e=i.exec(t);){let i=e[0];if(i&&"\n"!==i[0]){if("#"!==i[0])break;if("!"===i[1]&&"no-check"===i.slice(2).trim()){t=t.slice(0,e.index)+t.slice(e.index+i.length).trimLeft();break}}}return t.replace(/\.activateMode(?:To)?/g,".activate")};x.E=function(){let t=_.prototype.E.call(this);return t instanceof Promise?t.then(g):g(t)},x.B=function(t){return t=g(t),_.prototype.B.call(this,t)};export const onKeyMappingsError_=t=>{true===t?x.ne(m("ignoredNonEN"),null):x.ne(t)};let N=_.D.linkHintCharacters,T=_.D.linkHintNumbers,b=_.D.filterLinkHints;N.m=T.m=function(){this.ne(!this.x.style.display&&this.S.length<4?"Too few characters for LinkHints":"")},b.m=()=>{l(()=>{let t=b.z();T.x.style.display=t?"":"none",N.x.style.display=t?"none":"",BooleanOption_.Bt(_.D.waitForEnter.x,!t),N.m(),T.m()})},O(b.x,"change",b.m,true);let B,v=_.D.keyLayout,[E,k,w,y,M]=n("input",v.x);v.z=()=>{let t=0;E.checked?t=1:(t|=k.checked?8:0,t|=w.checked?2:w.indeterminate?4:0,t|=y.checked?16:y.indeterminate?512:0),t|=M.checked?128:M.indeterminate?64:0;let e=v.S;return 256&e&&(-257&e)===t&&(t|=256),t},v.N=t=>{let e=!!(1&t);E.checked=e,k.checked=e||!!(8&t),w.checked=e||!!(2&t),w.indeterminate=!!(4&t),y.checked=e||!!(16&t),y.indeterminate=!!(512&t),M.checked=!!(128&t),M.indeterminate=!!(64&t),B=t,S(),_.V&&o(3,{key:"l",val:t}).then(e=>{VApi.z.l=null!=e?e:t,_.V&&_.V()})};let S=t=>{let e=E.checked;if(BooleanOption_.Bt(k,e),BooleanOption_.Bt(w,e),BooleanOption_.Bt(y,e),t)if(e)k.checked=w.checked=y.checked=true,w.indeterminate=y.indeterminate=false;else{let e=v.E();"number"!=typeof e||1&B||(B===e?v.w():v.N(B),t.stopImmediatePropagation(),l(v.v))}};O(v.x,"input",t=>{let e=t.target;if(e===E)S(t);else{let i=e===w?4:e===y?512:e===M?64:0,s=e===w?2:e===y?16:e===M?128:8;if(i){let e=BooleanOption_.ToggleTripleStatuses(B&s?2:B&i?1:0,t);B=B&~(i|s)|(e>1?s:e?i:0)}else B=B&~s|(e.checked?s:0)}},true),_.D.vomnibarPage.m=function(){let t=this.S;t.startsWith(location.protocol)||t.startsWith("front/")?this.ne(""):t.startsWith("file:")?this.ne(m("fileVomnibar"),"highlight"):/^http:\/\/(?!localhost[:/])/i.test(t)?this.ne(m("httpVomnibar"),"highlight"):this.ne("")},_.D.userDefinedCss.m=function(){this.x.classList.contains("debugging")&&l(()=>{let t=VApi.y().r;for(let e of n("iframe",t)){let t=e.classList.contains("HUD"),i=e.contentDocument.querySelector("style.debugged");i&&(t?i.remove():i.classList.remove("debugged"))}this.x.classList.remove("debugging")})},_.D.autoReduceMotion.m=function(){l(()=>{let t=this.S;a(2===t?matchMedia("(prefers-reduced-motion: reduce)").matches:t>0)})},_.D.passEsc.z=function(){return NonEmptyTextOption_.prototype.z.call(this).replace(/, /g,",")},_.D.passEsc.wt=t=>t.replace(/,/g,", ");let V=()=>(setTimeout(()=>{setTimeout(()=>{for(let t of Object.values(_.D)){if(t instanceof TextOption_&&t.vt)continue;let e=t.x;e="input"===e.localName&&"checked"===e.type?e.parentElement:e,e.classList.toggle("highlight",!t.O)}},300)},17),m("beforeUnload"));