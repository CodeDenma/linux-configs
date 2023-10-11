"use strict"
;__filename="background/settings.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports"],(e,t,o,a,s,n,l,i)=>{
Object.defineProperty(t,"__esModule",{value:true
}),t.ao=t.B=t.Wn=t.E=t.W=t.lo=t.Ha=t.mn=t._l=t.io=t.Nn=t.La=t.sl=t.co=t.ro=t.ho=void 0;let c=null,r=null;t.ho=0,
t.ro=localStorage,t.co=s.t.storage.local,t.sl=Promise.all([0,s.Ne(s.t.runtime.getPlatformInfo).then(e=>{
let t=e.os.toLowerCase(),a=s.t.runtime.PlatformOs,n=t===a.WIN?2:t===a.MAC?0:1;o.Z.ka=t,o.Nr.o=o.V.o=n,o.L=n
}),s.Ne(t.co.get.bind(t.co)).then(e=>{let a=o.A;Object.assign(a,t.E),e=e||{}
;for(let s of Object.entries(e))s[0]in t.E?a[s[0]]=s[1]:o.Hn.set(s[0],s[1]);let s=0;s=t.ro.length;for(let e=0;e<s;e++){
let s=t.ro.key(e),n=t.ro.getItem(s);if(s in t.E){
let e=t.E[s],o="string"==typeof e?n:false===e||true===e?"true"===n:JSON.parse(n);a[s]=o}else o.Hn.set(s,n)}
let n=s+Object.keys(e).length;return o.mo=0===n,n})]).then(e=>{260===o.A.keyLayout&&(t.ho|=1,w())
;for(let e in t.B)t.W(t.B[e],o.A[e],o.V);return o.V.g=o.A.grabBackFocus,o.Nr.l=o.V.l,o.el=2|o.el,e[2]}),t.sl.then(()=>{
o.eo&&o.eo()}),t.La=(e,s)=>{o.A[e]=s,r||(r=a.i(),setTimeout(h,0));let n=t.E[e];t.ro.removeItem(e);let l,i=s!==n?s:null
;if(r[e]=i,o.wo(e,i),e in t.B&&t.W(t.B[e],s,o.V),l=o.fl[e])return l(s,e)},t.Nn=(e,t)=>{let s=o.Hn.get(e)
;(void 0!==s?s:null)!==t&&(r||(r=a.i(),setTimeout(h,0)),r[e]=t,null!==t?o.Hn.set(e,t):o.Hn.delete(e))},
t.io=e=>o.Hn.get(e);let h=()=>{let e=r,o=[];r=null;for(let[t,a]of Object.entries(e))null===a&&(o.push(t),delete e[t])
;t.co.remove(o),t.co.set(e)};t._l=(e,t)=>o.fl[e](void 0!==t?t:o.A[e],e),t.mn=e=>{
if(6!==e.N)m(e);else if(null==e.d.length)m(e);else{let t=e.d;c?t=t.concat(c):a.oo(m.bind(null,e)),c=t,e.d=null}}
;let m=e=>{if(6===e.N&&!e.d){let t=c,a=e.d={};for(let e of t)a[e]=o.V[e];c=null}
i.c(3===e.N?4096:9===e.N?32768|(e.k?65536:0):8192,t=>{for(let o of t.J)o.postMessage(e)})};t.Ha=e=>{
a.Kn(o.Fe.slice(0),t=>(o.Fe.includes(t)&&t.postMessage(e),1))};let w=()=>{
let e=o.Hn.get(t.ao[0]),a=o.Hn.get(t.ao[1]),s=o.Hn.get(t.ao[2]);void 0!==e&&(e+=""),void 0!==a&&(a+=""),
void 0!==s&&(s+="");let n=260;return void 0!==e||void 0!==a||void 0!==s?(n=null==e?4:"2"===e||"true"===e?1:"1"===e?12:4,
n|=null==a||1===n?0:"2"===a||"true"===a?16:"1"===a?512:0,n|=null==s?0:"2"===s?128:"1"===s?64:0,t.ho|=2):t.ho&=-3,
o.A.keyLayout=n};t.lo=e=>{if(e<3&&1&t.ho){let e=o.V.l,a=w();t.W("l",a,o.V)!==e&&t._l("keyLayout",a)}},t.W=(e,t,a)=>{
switch(e){case"c":case"n":t=t.toLowerCase().toUpperCase();break;case"l":t=255&t|(512&t&&!o.L?16:0);break;case"d":
t=t?" D":""}return a?a[e]=t:t},Object.assign(o.fl,{extAllowList(e){let t=o.Ln;if(t.forEach((e,o)=>{
false!==e&&t.delete(o)
}),e)for(let o=e.split("\n"),a=o.length,s=/^[\da-z_]/i;0<=--a;)(e=o[a].trim())&&s.test(e)&&t.set(e,true)},
grabBackFocus(e){o.V.g=e},keyLayout(e){if(o.Nr.l=o.V.l,t.Ha({N:47,d:{l:o.V.l}}),1&t.ho&&!(256&e)){let e=2&t.ho;t.ho&=-4
;for(let a=0,s=e?3:0;a<s;a++)t.Nn(t.ao[a],null),o.wo(t.ao[a],null)}},newTabUrl(e){
e=/^\/?pages\/[a-z]+.html\b/i.test(e)?s.t.runtime.getURL(e):s.H(n.Xl(e)),o.newTabUrl_f=e,t.Nn("newTabUrl_f",e)},
searchEngines(){
o.Il.map.clear(),o.Il.keywords=null,o.Il.rules=l.zn("~:"+o.A.searchUrl+"\n"+o.A.searchEngines,o.Il.map).reverse()},
searchUrl(e){let a=o.Il.map;if(e)l.zn("~:"+e,a);else if(a.clear(),a.set("~",{Tr:"~",o:"",
Rl:o.A.searchUrl.split(" ",1)[0]}),o.Il.rules=[],o.newTabUrl_f=o.Hn.get("newTabUrl_f")||"",o.newTabUrl_f)return
;t._l("newTabUrl")},vomnibarPage(e){let a=o.Hn.get("vomnibarPage_f")
;!a||e?((e=e?s.H(e):o.A.vomnibarPage)===t.E.vomnibarPage?e=o.Z.fi:e.startsWith("front/")?e=s.t.runtime.getURL(e):(e=n.Xl(e),
e=(e=n.wi(e)).replace(":version",`${parseFloat(o.Z.Ta)}`)),
o.vomnibarPage_f=e,t.Nn("vomnibarPage_f",e)):o.vomnibarPage_f=a}}),t.E={__proto__:null,allBrowserUrls:false,
autoDarkMode:2,autoReduceMotion:2,
clipSub:"p=^git@([^/:]+):=https://$1/=\ns@^https://(?:www\\.)?google\\.com(?:\\.[^/]+)?/url\\?(?:[^&#]+&)*?url=([^&#]+)@$1@,matched,decodecomp\np@^https://item\\.m\\.jd\\.com/product/(\\d+)\\.html\\b@https://item.jd.com/$1.html@",
exclusionListenHash:true,exclusionOnlyFirstMatch:false,exclusionRules:[{passKeys:"",pattern:":https://mail.google.com/"
}],
extAllowList:"# modified versions of X New Tab and PDF Viewer,\n# NewTab Adapter, and Shortcuts Forwarding Tool\nhdnehngglnbnehkfcidabjckinphnief\nnacjakoppgmdcpemlfnfegmlhipddanj\ncglpcedifkgalfdklahhcchnjepcckfn\nclnalilglegcjmlgenoppklmfppddien\n# EdgeTranslate\nbocbaocobfecmglnmeaeppambideimao\nbfdogplmndidlpjfhoijckpakkdjkkil\n# SalaDict\ncdonnmffkdaoajfknoeeecmchibpmkmg\nidghocbbahafpfhjnfhpbfbmpegphmmp",
filterLinkHints:false,grabBackFocus:false,hideHud:false,keepWorkerAlive:false,keyLayout:260,keyboard:[560,33],
keyupTime:120,keyMappings:"",linkHintCharacters:"sadjklewcmpgh",linkHintNumbers:"0123456789",localeEncoding:"gbk",
mouseReachable:true,newTabUrl:"",
nextPatterns:"\u4e0b\u4e00\u5c01,\u4e0b\u9875,\u4e0b\u4e00\u9875,\u4e0b\u4e00\u7ae0,\u540e\u4e00\u9875,\u4e0b\u4e00\u5f20,next,more,newer,>,\u203a,\u2192,\xbb,\u226b,>>",
notifyUpdate:true,omniBlockList:"",passEsc:"[aria-controls],[role=combobox],#kw.s_ipt",
previousPatterns:"\u4e0a\u4e00\u5c01,\u4e0a\u9875,\u4e0a\u4e00\u9875,\u4e0a\u4e00\u7ae0,\u524d\u4e00\u9875,\u4e0a\u4e00\u5f20,prev,previous,back,older,<,\u2039,\u2190,\xab,\u226a,<<",
regexFindMode:false,scrollStepSize:100,
searchUrl:o.Gn?"https://www.baidu.com/s?ie=utf-8&wd=%s \u767e\u5ea6":"https://www.google.com/search?q=%s Google",
searchEngines:o.Gn?"b|ba|baidu|Baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\nbi: https://www.bing.com/search?q=$s\nbi|bing|Bing|\u5fc5\u5e94: https://cn.bing.com/search?q=%s \\\n  blank=https://cn.bing.com/ \u5fc5\u5e94\ng|go|gg|google|Google|\u8c37\u6b4c: https://www.google.com/search?q=%s\\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\nb.m|bm|map|b.map|bmap|\u5730\u56fe|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\\\n  blank=https://map.baidu.com/\ngd|gaode|\u9ad8\u5fb7\u5730\u56fe: https://www.gaode.com/search?query=%s \\\n  blank=https://www.gaode.com\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps \u8c37\u6b4c\u5730\u56fe\nbili|bilibili|bz|Bili: https://search.bilibili.com/all?keyword=%s \\\n  blank=https://www.bilibili.com/ \u54d4\u54e9\u54d4\u54e9\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\n\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\nb.x|b.xs|bx|bxs|bxueshu: https://xueshu.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://xueshu.baidu.com/ \u767e\u5ea6\u5b66\u672f\ngs|g.s|gscholar|g.x|gx|gxs: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ \u8c37\u6b4c\u5b66\u672f\n\nt|tb|taobao|ali|\u6dd8\u5b9d: https://s.taobao.com/search?ie=utf8&q=%s \\\n  blank=https://www.taobao.com/ \u6dd8\u5b9d\nj|jd|jingdong|\u4eac\u4e1c: https://search.jd.com/Search?enc=utf-8&keyword=%s\\\n  blank=https://jd.com/ \u4eac\u4e1c\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ \u4e9a\u9a6c\u900a\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= \u8ba1\u7b97\u5668\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub \u4ed3\u5e93\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript":"bi: https://cn.bing.com/search?q=$s\nbi|bing: https://www.bing.com/search?q=%s \\\n  blank=https://www.bing.com/ Bing\nb|ba|baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\ng|go|gg|google|Google: https://www.google.com/search?q=%s \\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps Google Maps\nb.m|bm|map|b.map|bmap|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\ng.s|gs|gscholar: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ Google Scholar\n\na|ae|ali|alie|aliexp: https://www.aliexpress.com/wholesale?SearchText=%s \\\n  blank=https://www.aliexpress.com/ AliExpress\nj|jd|jb|joy|joybuy: https://www.joybuy.com/search?keywords=%s \\\n  blank=https://www.joybuy.com/ Joybuy\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ Amazon\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= Calculate\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub Repo\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript",
showActionIcon:true,showAdvancedCommands:true,showInIncognito:false,smoothScroll:true,userDefinedCss:"",
vomnibarOptions:{actions:"",maxMatches:10,queryInterval:333,sizes:"77,3,44,0.8",styles:"mono-url"},vimSync:null,
vomnibarPage:"front/vomnibar.html",waitForEnter:true},t.Wn=["showAdvancedCommands"],t.B={__proto__:null,
filterLinkHints:"f",keyLayout:"l",keyboard:"k",keyupTime:"u",linkHintCharacters:"c",linkHintNumbers:"n",
mouseReachable:"e",passEsc:"p",regexFindMode:"r",smoothScroll:"s",scrollStepSize:"t",waitForEnter:"w"},
t.ao=["ignoreKeyboardLayout","ignoreCapsLock","mapModifier"],o.el<6&&(()=>{
let e=s.t.runtime.getManifest(),{origin:a}=location,n=a+"/",l=e.content_scripts[0].js,i=o.Z,c=o.Le,r=e=>(47===e.charCodeAt(0)?a:e.startsWith(n)?"":n)+e
;t.E.newTabUrl=o.Qe?"edge://newtab":"chrome://newtab",c.set("about:newtab",1),c.set("about:newtab/",1);{
c.set("chrome://newtab",1),c.set("chrome://newtab/",1),o.Qe&&(c.set("edge://newtab",1),c.set("edge://newtab/",1))
;let e="chrome://new-tab-page";c.set(e,2),c.set(e+"/",2)}
i.wa=Object.keys(e.commands||{}).map(e=>"quickNext"===e?"nextTab":e),i.Ta=e.version,i.aa=e.version_name||e.version,
i.Fr=r(i.Fr),i.Ti=r(i.Ti),i.fi=r(t.E.vomnibarPage),i.ci=r(i.Rn),i.ta=e.homepage_url||i.ta,i.to=r(i.to),i.ti=r(i.ti),
l.push("content/injected_end.js"),i.Ze=l.map(r)})()});