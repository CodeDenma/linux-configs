"use strict"
;__filename="background/main.js",define(["require","exports","./store","./utils","./browser","./settings","./ports","./key_mappings","./run_commands","./normalize_urls","./parse_urls","./exclusions","./ui_css","./eval_urls","./open_urls","./all_commands","./request_handlers","./tools"],(e,o,s,t,n,r,i,l,u)=>{
Object.defineProperty(o,"__esModule",{value:true});let a=e=>{let o=s.a.get(s.ye);"quickNext"===e&&(e="nextTab")
;let t=l.ma
;6!==s.el||(t&&t.get(e)?null==o||4&o.b||s.ye<0?u.executeShortcut(e,o):n.tabsGet(s.ye,o=>(u.executeShortcut(e,o&&"complete"===o.status?s.a.get(o.id):null),
n.g())):(t&&null!==t.get(e)&&(t.set(e,null),console.log("Shortcut %o has not been configured.",e)),o&&(s.O=o.d),
i.showHUD(`Shortcut "${e}" has not been configured.`)))};s.eo=()=>{if(6===s.el){
if(s.eo)return t.oo(r.sl.then.bind(r.sl,s.eo)),void(s.eo=null);s.pn||(r._l("keyMappings"),s.L||(l.vi["m-s-c"]=36)),
r._l("exclusionListenHash"),r._l("vomnibarOptions"),r._l("autoDarkMode"),r._l("autoReduceMotion"),
n.t.runtime.onConnect.addListener(e=>i.OnConnect(e,0|e.name)),n.t.runtime.onConnectExternal.addListener(e=>{
let o,{sender:t,name:n}=e;if(t&&i.isExtIdAllowed(t)&&n.startsWith("vimium-c.")&&(o=n.split("@")).length>1){
if(o[1]!==s.Z.GitVer)return e.postMessage({N:2,t:1}),void e.disconnect();i.OnConnect(e,1024|o[0].slice(9))
}else e.disconnect()}),n.t.extension.isAllowedIncognitoAccess(o=>{s.Z.so=false===o,setTimeout(()=>{new Promise((o,s)=>{
e(["/background/others.js"],o,s)}).then(e=>e),setTimeout(()=>{new Promise((o,s)=>{
e(["/background/browsing_data_manager.js"],o,s)}).then(e=>e),new Promise((o,s)=>{
e(["/background/completion_utils.js"],o,s)}).then(e=>e),new Promise((o,s)=>{e(["/background/completion.js"],o,s)
}).then(e=>e)},200)},200)})}},n.t.commands.onCommand.addListener(a),r.sl.then(()=>{r._l("extAllowList"),
n.t.runtime.onMessageExternal.addListener((e,o,t)=>{if(i.isExtIdAllowed(o)){if("string"==typeof e)u.executeExternalCmd({
command:e},o);else if("object"==typeof e&&e)switch(e.handler){case"shortcut":let n=e.shortcut;n&&a(n+"");break;case"id":
return void t({name:"Vimium C",host:location.host,shortcuts:true,injector:s.Z.to,version:s.Z.Ta});case 99:
return void t({s:e.scripts?s.Z.Ze:null,version:s.Z.Ta,host:"",h:"@"+s.Z.GitVer});case"command":u.executeExternalCmd(e,o)
}}else t(false)}),r._l("vomnibarPage",null),r._l("searchUrl",null)}),n.we.onReplaced.addListener((e,o)=>{
let t=s.a.get(o);if(s.no===o&&(s.no=e),t){s.a.delete(o),s.a.set(e,t);for(let o of t.J)o.s.m=e;t.d.s.m=e
;for(let t of s.Fe)t.s.m===o&&(t.s.m=e)}}),s.ml.Bl=(e,o,t)=>{setTimeout(()=>{s.ml.Bl(e,o,t)},210)},s.el=4|s.el,s.eo(),
window.onunload=()=>{for(let e of s.Fe)e.disconnect();s.a.forEach(e=>{for(let o of e.J)o.disconnect()})}});