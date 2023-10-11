"use strict";__filename="background/store.js",define(["require","exports"],(e,l)=>{
Object.defineProperty(l,"__esModule",{value:true
}),l.Z=l.ei=l.In=l.On=l.$r=l.S=l.Jl=l.Al=l.Dn=l.wo=l.r=l.getNextFakeTabId=l.ml=l.o=l.li=l.Zn=l.na=l.P=l.y=l.M=l.$=l.O=l.Ce=l.vl=l.ha=l.ii=l.ya=l.pn=l.Y=l.It=l.St=l.ue=l._a=l.Ma=l.de=l.nu=l.xe=l.ye=l.De=l.Fe=l.a=l.Ca=l.no=l.fl=l.dn=l.eo=l.el=l.Ln=l.Le=l.oa=l.n=l.Pa=l.u=l.ja=l.Bn=l.Sa=l.Va=l.pi=l.Nr=l.Il=l.V=l.vomnibarPage_f=l.newTabUrl_f=l.Hn=l.A=l.Ia=l.mo=l.Gn=l.Ue=l.ll=l.L=l.Na=l.Un=l.Qe=l.OnSafari=l.OnEdge=l.OnFirefox=l.OnChrome=l.Ba=void 0,
l.Ba=1,l.OnChrome=true,l.OnFirefox=!!0,l.OnEdge=!!0,l.OnSafari=!!0;let a,n=navigator.userAgentData,t=n&&n.brands
;l.Qe=t?!!t.find(e=>e.brand.includes("Edge")||e.brand.includes("Microsoft")):matchMedia("(-ms-high-contrast)").matches,
l.Un=t&&(a=t.find(e=>e.brand.includes("Chromium")))&&parseInt(a.version)>82?parseInt(a.version):0|(navigator.userAgent.match(/\bChrom(?:e|ium)\/(\d+)/)||[0,998])[1],
l.Na=999,l.L=2,l.Ue=location.origin+"/",l.Gn=navigator.language.startsWith("zh"),l.mo=false,l.Ia=false,l.A={},
l.Hn=new Map,l.newTabUrl_f="",l.vomnibarPage_f="",l.V={v:l.Un,d:"",g:false,m:false},l.Il={map:new Map,rules:[],
keywords:null},l.Nr={v:l.Qe?-l.Un:l.Un,c:"",i:0,l:0,m:null,n:0,s:"",t:""},l.pi={actions:[]},l.Va=false,l.u=false,
l.Le=new Map,l.Ln=new Map,l.el=0,l.fl={},l.no=-1,l.Ca=false,l.a=new Map,l.Fe=[],l.De=new Map,l.ye=-1,l.xe=-1,l.nu=-1
;l.de=0,l.Ma=null,l._a=null,l.ue={ie:[],Ve:[],f:0,Be:0},l.St={Ct:null,Gt:new Map,Bt:0,Ft:0,Jt:0},l.It=new Map,l.pn=null,
l.ya=null,l.ha=0,l.vl=new Map,l.Ce=0,l.O=null,l.$=1;let o=null;l.x=null,l.hn=null,l.li=(e,l)=>{let a=o,n=!e||a&&a.i===e
;return o=n?l:a,n?a:null},l.o=()=>{},l.ml={};let r=-4;l.getNextFakeTabId=()=>r--,l.r=l.o,l.wo=l.o,l.Dn=null,l.Al=()=>"",
l.Jl=()=>"",l.S=e=>e,l.$r=()=>null,l.On=null,l.In=null,l.Z={Da:0,U:"chrome",Ga:0,
Ye:l.Qe?/^https:\/\/(ntp|www)\.msn\.\w+\/(edge|spartan)\/ntp\b/:"chrome-search://local-ntp/local-ntp.html",so:false,
Ze:null,Ta:"",aa:"",GitVer:"40332b4",to:"/lib/injector.js",ti:"/front/vomnibar-tee.html",
HelpDialogJS:"/background/help_dialog.js",Fr:"pages/options.html",ka:"browser",Oa:"",
ta:"https://github.com/gdh1995/vimium-c",wa:null,Ti:"/pages/show.html",fi:"",Rn:"/front/vomnibar.js",ci:""}});