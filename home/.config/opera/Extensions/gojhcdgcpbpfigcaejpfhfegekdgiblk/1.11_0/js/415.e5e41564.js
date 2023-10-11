"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[415],{81130:function(t,e,l){l.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("figure",{ref:"lazyImage",staticClass:"t-lazy_image"},[t.loading?l("spinning-loader",{staticClass:"h-full"}):t._e()],1)},i=[],n=l(25e3),c={name:"LazyImage",components:{SpinningLoader:n.Z},props:{placeholder:{default:"",type:String},src:{default:"",type:String}},data(){return{loading:!1}},mounted(){this.loadImage()},methods:{loadImage(){this.loading=!0;const t=new Image;t.classList.add("w-full"),t.classList.add("h-full"),t.style.borderRadius="inherit",t.style.objectFit="inherit",t.alt="",t.complete&&this.$nextTick((()=>{t.src=this.src,this.loading=!1})),t.onerror=()=>{this.$nextTick((()=>{t.src=this.placeholder,this.loading=!1}))},this.$refs.lazyImage.appendChild(t)}}},s=c,r=l(1001),o=(0,r.Z)(s,a,i,!1,null,null,null),d=o.exports},79526:function(t,e,l){l.d(e,{Z:function(){return d}});var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.chainNameFriendly?l("div",{staticClass:"flex items-center justify-between pr-4 rounded-full space-x-1 t-chain-badge-v2 text-sm",class:[t.backgroundColor]},[t.chainLogo?l("img",{staticClass:"object-contain w-10",staticStyle:{"margin-right":"5px"},attrs:{alt:"",src:t.chainLogo}}):t._e(),l("span",{staticClass:"t-chain-badge-v2-name text-dark-N77"},[t._v(t._s(t.chainNameFriendly))]),l("span",{staticClass:"t-chain-badge-v2-type"},[t._v(t._s(t.tokenType))])]):t._e()},i=[],n=l(29652),c={name:"ChainBadgeV2",props:{backgroundColor:{default:"bg-dark-N12",type:String},chain:{default:void 0,type:Object},tokenType:{default:"",type:String}},computed:{chainLogo(){if(this.chain)return(0,n.Z)(this.chain).icon()},chainNameFriendly(){if(this.chain)return this.$store.getters.chainNameFriendly(this.chain)}}},s=c,r=l(1001),o=(0,r.Z)(s,a,i,!1,null,null,null),d=o.exports},27264:function(t,e,l){l.d(e,{Z:function(){return p}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-brand-primary flex px-3 py-3 rounded-full"},[a("img",{staticClass:"ml-1 w-3",attrs:{alt:"",src:l(45660)}}),a("a",{staticClass:"font-semibold justify-center px-2 text-dark-N04 text-xs underline",attrs:{href:t.contractLink,rel:"noopener noreferrer",target:"_blank"},on:{click:t.clickContract}},[t._v(" "+t._s(t.elideAddress(t.contract,[6,6]))+" ")])])},i=[],n=l(56258),c=l(29652),s=l(74597),r={name:"ContractBadge",props:{chain:{default:void 0,type:Object},contract:{default:"",type:String}},computed:{contractLink(){const t=(0,c.Z)(this.chain).blockExplorerAddressUrl(this.contract);return t}},methods:{clickContract(){n.Z.sendStatsEvent(n.Z.types.CLICK,"wt_nft_contractClicked",{collection:this.contract})},elideAddress:s.Z.elideAddress}},o=r,d=l(1001),u=(0,d.Z)(o,a,i,!1,null,null,null),p=u.exports},85415:function(t,e,l){l.r(e),l.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return Object.keys(t.collectible).length?l("div",[l("top-bar",{attrs:{"back-override":t.back,"test-parent-name":"collectible_view",title:t.$t("general.collectible")}}),l("div",{staticClass:"flex flex-col items-center mt-2 mx-auto"},[l("div",{staticClass:"bg-dark-N12 flex flex-col items-center justify-between max-w-sm mb-8 rounded-md shadow-lg"},[l("lazy-image",{staticClass:"rounded-lg w-full",attrs:{placeholder:t.placeholder,src:t.collectible.image}}),l("h2",{staticClass:"font-bold m-4 px-8 py-2 text-2xl"},[t._v(t._s(t.collectible.name))])],1),l("div",{staticClass:"flex flex-col font-medium items-center justify-center text-xs w-full"},[l("div",{staticClass:"flex flex-row mb-3 space-x-3"},[l("chain-badge-v2",{attrs:{chain:t.chain,"token-type":t.tokenType}}),t.collectible.id?l("div",{staticClass:"bg-dark-N12 flex items-center justify-between px-4 rounded-full space-x-1 text-sm"},[l("span",{staticClass:"text-dark-N77"},[t._v(t._s(t.idText))]),l("span",[t._v(t._s(t.collectibleId))])]):t._e()],1),l("contract-badge",{attrs:{chain:t.chain,contract:t.contract}})],1)]),t.collectible.description?l("div",{staticClass:"bg-dark-N12 m-8 mb-4 px-8 py-6 rounded-xl text-sm"},[l("p",{staticClass:"overflow-ellipsis overflow-hidden"},[t._v(t._s(t.collectible.description))])]):t._e()],1):t._e()},i=[],n=(l(57658),l(70794)),c=l(79526),s=l(27264),r=l(81130),o=l(75619),d=l(29652),u=l(74597),p=l(98180),h={name:"CollectibleView",components:{ChainBadgeV2:c.Z,ContractBadge:s.Z,LazyImage:r.Z,TopBar:o.Z},props:{collectible:{default:void 0,type:Object},collection:{default:void 0,type:Object}},data(){return{idText:"ID"}},computed:{chain(){return this.collectible.chain},collectibleId(){const t=parseInt(this.collectible.id,16),{elideAddress:e}=this;return Number.isNaN(t)?e(this.collectible.id):t<Number.MAX_SAFE_INTEGER?t:e(new n.Z(t).toString())},contract(){return this.collectible.contract},contractLink(){const t=(0,d.Z)(this.chain).blockExplorerAddressUrl(this.contract);return t},placeholder(){return l(29738)},tokenType(){const t=this.collectible;return t.type?p.Z.tokenTypeFriendly(t.type):""}},methods:{back(){Object.keys(this.collection.collectibles??{}).length?this.$router.push({name:"CollectionView",params:{collection:this.collection}}):this.$router.go(-1)},elideAddress:u.Z.elideAddress}},f=h,m=l(1001),b=(0,m.Z)(f,a,i,!1,null,null,null),g=b.exports},29738:function(t,e,l){t.exports=l.p+"img/collectible_placeholder.90e43ae1.svg"},45660:function(t,e,l){t.exports=l.p+"img/contract.4c33271a.svg"}}]);