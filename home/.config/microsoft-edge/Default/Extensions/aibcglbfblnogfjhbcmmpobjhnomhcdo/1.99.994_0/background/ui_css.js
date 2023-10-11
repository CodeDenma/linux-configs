"use strict"
;__filename="background/ui_css.js",define(["require","exports","./store","./utils","./browser","./settings","./ports"],(n,e,t,i,l,r,u)=>{
let s,f;Object.defineProperty(e,"__esModule",{value:true}),e.qe=e.mergeCSS=e.En=void 0,e.En=(n,l)=>{
if(-1===n)return e.mergeCSS(l,-1);2===n&&(t.oa=null);{let e;if(0===n&&(e=t.Hn.get("findCSS")))return f=null,t.Sa=o(e),
t.Bn=l.slice(s.length),void(t.Nr.c=t.Hn.get("omniCSS")||"")}i.hi("vimium-c.css").then(i=>{s.slice(s.indexOf(",")+1)
;let l=S(i);{let n=(i=l.ui).indexOf("all:"),e=i.lastIndexOf("{",n),t=i.indexOf(";",n)
;i=i.slice(0,e+1)+i.slice(n,t+1)+i.slice(i.indexOf("\n",t)+1||i.length)}{
let n=i.indexOf("display:"),e=i.lastIndexOf("{",n);i=i.slice(0,e+1)+i.slice(n)}
t.Un<112&&(i=i.replace(/\n\.PO\{[^}]+\}/,"")),i=i.replace(/\n/g,""),r.Nn("innerCSS",s+i);let u=l.find
;r.Nn("findCSS",u.length+"\n"+u),e.mergeCSS(t.A.userDefinedCss,n)})};let S=n=>{
let e=n?n.split(/^\/\*\s?#!?([A-Za-z:]+)\s?\*\//m):[""],t={ui:e[0].trim()};for(let n=1;n<e.length;n+=2){
let i=e[n].toLowerCase();t[i]=(t[i]||"")+e[n+1].trim()}return t},o=n=>{
let e=(n=n.slice(n.indexOf("\n")+1)).indexOf("\n")+1,t=n.indexOf("\n",e);return{c:n.slice(0,e-1).replace("  ","\n"),
s:n.slice(e,t).replace("  ","\n"),i:n.slice(t+1)}};e.mergeCSS=(n,i)=>{let f=t.Hn.get("innerCSS"),d=f.indexOf("\n")
;f=d>0?f.slice(0,d):f
;let a=S(n),C=a.ui?f+"\n"+a.ui:f,c=a["find:host"],m=a["find:selection"],v=a.find,g=a.omni,_="findCSS",b="omniCSS"
;f=t.Hn.get(_),d=f.indexOf("\n"),f=f.slice(0,d+1+ +f.slice(0,d));let p=f.indexOf("\n",d+1),N=f.slice(0,p).indexOf("  ")
;m=m?"  "+m.replace(/\n/g," "):"",(N>0?f.slice(N,p)!==m:m)&&(N=N>0?N:p,f=f.slice(d+1,N)+m+f.slice(p),p=N-(d+1)+m.length,
d=-1);let $=f.indexOf("\n",p+1),j=f.slice(0,$).indexOf("  ",p);if(c=c?"  "+c.replace(/\n/g," "):"",
(j>0?f.slice(j,$)!==c:c)&&(f=f.slice(d+1,j>0?j:$)+c+f.slice($),d=-1),d<0&&(f=f.length+"\n"+f),v=v?f+"\n"+v:f,
f=(t.Hn.get(b)||"").split("\n",1)[0],g=g?f+"\n"+g:f,-1===i)return{ui:C.slice(s.length),find:o(v),omni:g}
;r.Nn("innerCSS",C),r.Nn(_,v),r.Nn(b,g||null),e.En(0,C),0!==i&&1!==i&&(u.c(16384,n=>{
for(let e of n.J)8&e.s.b&&e.postMessage({N:11,H:t.Bn,f:32&e.s.b?l.k(e.s):void 0})}),r.Ha({N:47,d:{c:t.Nr.c}}))},
e.qe=(n,e)=>{let l,r=t.Nr.t;if(!n.o&&t.Va)return;{let e=` ${n.t} `,u=r&&` ${r} `,s=u.includes(e),f=null!=n.e?n.e:s
;if(l=f?s?r:r+e:u.replace(e," "),l=l.trim().replace(i.D," "),false===n.b)return void(t.Nr.t=l)
;n.o&&(t.Va=f!==` ${t.A.vomnibarOptions.styles} `.includes(e))}if(l===r)return;t.Nr.t=l;let u={N:47,d:{t:l}}
;i.Kn(t.Fe.slice(0),n=>(n!==e&&t.Fe.includes(n)&&n.postMessage(u),1))},l.k=()=>t.Sa,r.sl.then(()=>{
s=t.Z.Ta+","+t.Un+";",t.Bn=t.Hn.get("innerCSS")||"",t.Bn&&!t.Bn.startsWith(s)?(t.Hn.set("vomnibarPage_f",""),
e.En(1)):(e.En(0,t.Bn),t.ll&&t.ll.then(n=>n&&e.En(1))),t.fl.userDefinedCss=e.mergeCSS})});