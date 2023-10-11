"use strict"
;__filename="background/sync.js",define(["require","exports","./store","./utils","./browser","./settings"],(e,t,l,n,r,i)=>{
Object.defineProperty(t,"__esModule",{value:true});let o,u=n.di({findModeRawQueryList:1,innerCSS:1,keyboard:1,
newTabUrl_f:1,vomnibarPage_f:1
}),s=r.t.storage,f="sync.cloud:",a=null,c=null,d="",y=null,S=null,p=0,b=null,g=()=>o||(o=s&&s.sync),m=(e,t)=>{let l=e=>{
if(y){n.di(e);for(let t in y){let l=t.split(":")[0],n=l===t;if(n||!(l in y)){let r=n?y[t]:null
;v(l,null!=r?r.newValue:e[l],e)}}y=null}};if(n.di(e),y?Object.assign(y,e):y=e,b)b.then(()=>m({},t));else{e=y,y=null
;for(let t in e){let n=e[t];if(8===(t.includes(":")?8:v(t,null!=n?n.newValue:null)))return y=e,void g().get(l)
;delete e[t]}}},O=console.log.bind(console,"[%s]",{toString(){
return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")}}),v=(e,t,n)=>{
let r,o=t&&"object"==typeof t&&t.$_serialize||"";if(!(e in i.E)||!k(e)){let n=o||!i.ho?-1:i.ao.indexOf(e)
;return void(n>=0&&(r=l.Hn.get(e),(null!=r?r+"":null)!==(null!=t?t+"":null))&&(i.Nn(e,null!=t?t:null),i.lo(n)))}
let u=i.E[e];if(o){if("split"===o&&!n)return 8;if(8===(t=J(e,t,n)))return}
if(null==t)return void(l.A[e]!=u&&(b||O("sync.this:","reset",e),j(e,u)));let s,f,a,c=l.A[e]
;(a="object"!=typeof u||!t||"object"!=typeof t)?(f=t,s=c):(f=JSON.stringify(t),s=JSON.stringify(c)),
f!==s&&(f===(a?u:JSON.stringify(u))&&(t=u),
b||O("sync.this:","update",e,"string"==typeof t?(t.length>32?t.slice(0,30)+"...":t).replace(/\n/g,"\\n"):t),j(e,t))
},j=(e,t)=>{d=e,i.La(e,t),d="",e in i.B&&i.mn({N:6,d:[i.B[e]]})},w=(e,t)=>{let l=k(e)?1:i.ao.includes(e)?2:0
;l&&e!==d&&(a||(setTimeout(_,800),a=n.i()),1===l?a[e]=t:(c||(c=[])).push(e))},N=e=>{let t={Q:'\\"',S:"\\\\",d:"`",l:"<",
n:"\u2029",q:'"',r:"\u2028"};return e.replace(/`[QSdlnqr]/g,e=>t[e[1]])},J=(e,t,l)=>{let n="";switch(t.$_serialize){
case"split":for(let{k:r,s:i}=t,o=0;o<i;o++){let t=l[e+":"+o];if(!t||"string"!=typeof t||!t.startsWith(r))return 8
;n+=t.slice(r.length)}break;case"single":return JSON.parse(N(JSON.stringify(t.d)));default:
return O("Error: can not support the data format in synced settings data:",e,":",t.$_serialize),null}
return"string"==typeof i.E[e]?(n=N(n),n):(n=N(JSON.stringify(n)),JSON.parse(n.slice(1,-1)))},T=(e,t,l)=>{
if(!t||("string"!=typeof t?"object"!=typeof t:t.length<8192/6-40))return;let n=JSON.stringify(t),r=""
;if(n.length<8192/6-40)return;let o=n.length
;n=n.replace(/[<`\u2028\u2029]/g,e=>"<"===e?"`l":"`"===e?"`d":"\u2028"===e?"`r":"`n");let u=n.length
;if(3*(u-o)+3*o<8093)return;if(r=l.encode(n),r.length<8093)return r.length+4*(u-o)<8093?void 0:n
;let s=0,f=Date.now().toString(36)+":",a={}
;n="string"==typeof i.E[e]?n.slice(1,-1):n.replace(/"|\\[\\"]/g,e=>'"'===e?"`q":'\\"'===e?"`Q":"`S"),
S||(S=new TextDecoder),r=l.encode(n);for(let t=0,l=r.length;t<l;){let i,o=Math.min(t+8134,l),u=0
;for(;o<l&&128==(192&r[o]);o--);if(i=S.decode(r.subarray(t,o)),n=i.slice(-6),u=o<l?n.lastIndexOf("\\"):-1,
u>0&&u>n.length-2)i+="b",u=1;else if(u>0&&"u"===n[u+1]){u=n.length-u;for(let e=u;e++<6;i+="b");}else u=0
;if(i=JSON.parse(`"${i}"`),u){let e=i.endsWith("b");e||(o-=u),i=i.slice(0,u>1&&e?u-6:-1)}if(a[e+":"+s++]=f+i,t=o,
s>=13)break}return a[e]={$_serialize:"split",k:f,s},a},_=()=>{let e=a,t=c,o=[],u=[],s=[],d=n.i(),y={};if(a=c=null,
!e||l.wo!==w)return;let p=Object.keys(e).length>0?new TextEncoder:null;for(let t in e){
let l=t,n=e[l],r=i.E[l],f="string"==typeof r||"object"==typeof r&&"vimSync"!==l?0:13;if(null!=n){let e=T(l,n,p)
;e&&"object"==typeof e?(d[l]=e,f=e[l].s):(y[l]=e?{$_serialize:"single",d:JSON.parse(e)}:n,u.push(l))}else o.push(l)
;for(;f<13;f++)s.push(l+":"+f)}S=p=null,t&&o.push(...t),s.push(...o),o.length>0&&O(f,"reset",o.join(", ")),
s.length>0&&g().remove(s),u.length>0&&(O(f,"update",u.join(", ")),g().set(y));for(let e in d)g().set(d[e],()=>{
let t=r.g();return t?O("Failed to update",e,":",t.message||t):O(f,"update (serialized) "+e),t})},k=e=>!(e in u),h=e=>{
l.On=null,p&&clearTimeout(p),p=setTimeout(()=>{p=0,i.co.get(e=>{let t=i.ro;if(!t.length)return
;O("storage.local: update settings from localStorage"),n.di(e);let r=n.i();for(let n=0,o=t.length;n<o;n++){
let o=t.key(n),u=e[o];if(o in i.E){let e=l.A[o],t=e,n=u;"object"==typeof i.E[o]&&(n=JSON.stringify(u),
t=JSON.stringify(e)),t!==n&&i.La(o,e)}else e[o]!==u&&"i18n_f"!==o&&(r[o]=u)}Object.keys(r).length>0&&i.co.set(r),
t.clear()})},e)},D=(e,t)=>{n.di(e);let r=e.vimSync||null==l.A.vimSync&&l.mo;if(l.fl.vimSync(false,"vimSync"),
!r)return void t();e.vimSync||(O(f,"enable vimSync"),e.vimSync=true,g().set({vimSync:true}));let o=[],u=i.ro
;for(let t in l.A)l.A[t]!==i.E[t]&&(!(t in e)&&k(t)&&("keyLayout"===t&&2&i.ho||o.push(t)),u&&u.length&&u.removeItem(t))
;for(let e of o)v(e,null);for(let t in e)t.includes(":")||v(t,e[t],e);h(60),i._l("vimSync"),setTimeout(()=>{t()},4),
O(f,"download settings")};l.fl.vimSync=e=>{if(!g())return;let t=g().onChanged,n=m;if(!e)return t.removeListener(n),
void(l.wo=l.o);l.wo!==w?(t.addListener(n),l.wo=w,h(60)):a&&(O(f,"save immediately"),_())},i.sl.then(()=>{
let e=l.A.vimSync;if(false===e||!e&&!l.mo){{let e=true===l.On;l.On=e?null:h,e&&h(6e3)}
"showActionIcon"in l.fl?l.ll=null:setTimeout(()=>{l.ll=null},1e3)
}else l.ll?(b=l.ll.then(e=>("showActionIcon"in l.fl?l.ll=null:setTimeout(()=>{l.ll=null},1e3),
!!e&&"install"===e.reason)).then(e=>new Promise(t=>{g()?g().get(n=>{
let o=r.g(),u=e&&l.mo&&(o||0===Object.keys(n).length)?()=>{i.La("keyLayout",2),t()}:t;return o?(l.fl.vimSync=l.o,u(),
O("Error: failed to get storage:",o,"\n\tSo disable syncing temporarily.")):D(n,u),o}):t()})).then(()=>{l.Dn=null,b=null
}),l.Dn=Promise.race([b,new Promise(e=>{setTimeout(e,800)})]).then(()=>{l.Dn=null,l.A.vimSync&&l.wo!==w&&i._l("vimSync")
})):i._l("vimSync")})});