"use strict";var VApi,VimiumInjector=null;(()=>{let e,t=chrome,o=document.currentScript.parentElement,l=[],n=t.runtime.getURL(""),m=location.pathname.replace("/pages/","").split(".")[0],i=t.runtime.getManifest().content_scripts[0].js;for(let e of i){let t=document.createElement("script");t.async=false,t.src="/"===e[0]||0===e.lastIndexOf(n,0)?e:"/"+e,l.push(t)}if(l[l.length-1].onload=()=>{for(let e=l.length;0<=--e;)l[e].remove();VApi&&(VApi.$r=e=>{4===e&&document.dispatchEvent(new CustomEvent("VimiumC"))},VApi.v=function t(o){return e=e||new Promise(e=>{let t=document.createElement("script");t.src="/lib/simple_eval.js",t.onload=()=>{t.remove(),e()},document.head.append(t)}),e.then(()=>VApi.v!==t?(VApi.v=VApi.v.tryEval||VApi.v)(o):void 0)})},setTimeout(()=>{o.append(...l)},"options"===m?32:100),"blank"===m&&(t.storage.local.get("autoDarkMode",e=>{let o=e&&e.autoDarkMode;if(false===o||1===o){let e=document.head.querySelector("meta[name=color-scheme]");e&&(e.content=1===o?"dark":"light")}return t.runtime.lastError}),t.i18n.getMessage("lang1"))){let e=t.i18n.getMessage("vblank");e&&(document.title=e)}})();