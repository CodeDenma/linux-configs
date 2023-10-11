(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[220],{79340:function(e,t,s){"use strict";s.d(t,{Z:function(){return m}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-row overflow-x-auto rtl-space-x-reverse space-x-4"},e._l(e.percentageValues,(function(t){var i=t.label,r=t.divisor;return s("button",{key:i,staticClass:"border font-bold px-2 py-1 rounded-md text-brand-primary text-sm w-14",class:[{"border-brand-primary bg-brand-primary bg-opacity-5":i===e.selected,"border-black border-opacity-20 bg-gray":i!==e.selected},"t-perc-btn t-perc-btn-"+i],on:{click:function(t){return e.select({label:i,divisor:r})}}},[s("span",1===r?[e._v(e._s(e.$t("general.max")))]:[e._v(e._s(e.localizePercentage(i)))])])})),0)},r=[],n=s(70794),a=s(4634),o=s(98180),l={name:"PercentageButtons",props:{token:{default:void 0,type:Object},value:{default:void 0,type:[n.Z,Number,String]}},data(){return{calculatedAmount:null,percentageValues:[{divisor:4,label:"25"},{divisor:2,label:"50"},{divisor:1,label:"100"}],selected:null}},watch:{value(){this.value!==this.calculatedAmount&&(this.selected=null)}},methods:{calculateAmount(e){const t=Object.assign({},this.token,{balance:new n.Z(this.token.balance).dividedBy(e)});this.calculatedAmount=o.Z.tokenDecimal(t)||(0,n.Z)(0),this.$emit("change",this.calculatedAmount)},localizePercentage:a.Z.localizePercentage,select({label:e,divisor:t}){this.selected=e,this.calculateAmount(t)}}},d=l,c=s(1001),u=(0,c.Z)(d,i,r,!1,null,null,null),m=u.exports},59320:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return A}});var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.token?i("div",[i("top-bar",{attrs:{"test-parent-name":"send_view",title:e.$t("general.send")}}),i("div",{staticClass:"px-14 py-4"},[i("div",{staticClass:"flex font-bold mb-4 relative"},[e._v(" "+e._s(e.$t("general.recipient"))+" "),i("img",{staticClass:"ml-2.5",attrs:{src:s(92769)},on:{mouseout:e.hideAddressResolversPopover,mouseover:e.showAddressResolversPopover}}),i("simple-popover",{ref:"addressResolversPopover",staticClass:"absolute left-12 shadow-2xl top-8 w-10/12 z-10",attrs:{"caret-horizontal-position":"left-5"}},[i("div",[i("p",{staticClass:"font-semibold mb-6 text-dark-N77"},[e._v(" "+e._s(e.$t("views.sendView.domainNamesSupported"))+" ")]),e._l(e.addressResolvers,(function(t){var r=t[0],n=t[1];return i("div",{key:r,staticClass:"flex items-center mt-4 space-x-4"},[i("img",{attrs:{alt:"",src:s(61986)("./"+r+".svg")}}),i("p",{staticClass:"font-medium text-left"},[e._v(e._s(n))])])}))],2)])],1),i("opera-input",{staticClass:"t-send_view-recipient",attrs:{error:!e.validRecipient&&e.amountInitialized?e.$t("errors.generic.invalidRecipient"):"",icon:e.recipientInputIcon,"img-url":e.addressResolver?s(61986)("./"+e.addressResolver+".svg"):"",loading:e.resolvingAddress||e.auditingAddress,placeholder:e.$t("general.enterAddressOrDomain"),"test-error-class":"t-send_view-invalid_recipient",warning:e.isAddressMalicious?e.$t("warnings.maliciousAddressCheck.warning"):""},nativeOn:{input:function(t){return e.resolveAddress(500)}},model:{value:e.recipient,callback:function(t){e.recipient=t},expression:"recipient"}}),i("p",{directives:[{name:"show",rawName:"v-show",value:!(!e.validRecipient&&e.amountInitialized)&&!e.isAddressMalicious,expression:"!(!validRecipient && amountInitialized) && !isAddressMalicious"}],staticClass:"-mt-4 text-dark-N77 text-xs"},[e._v(" "+e._s(e.resolvedAddress)+" ")]),i("br"),i("div",{staticClass:"font-bold mb-4"},[e._v(e._s(e.$t("general.asset")))]),i("asset-selector",{staticClass:"mb-2 t-send_view-asset",attrs:{options:e.sendableTokens},model:{value:e.token,callback:function(t){e.token=t},expression:"token"}}),i("div",{staticClass:"t-send_view-token_balance text-dark-N77 text-xs"},[e._v(" "+e._s(e.$t("general.balance"))+": "+e._s(e.fullBalance)+" ")]),i("br"),i("div",{staticClass:"flex items-center justify-between mb-4"},[i("span",{staticClass:"font-bold"},[e._v(e._s(e.$t("general.amount")))]),i("percentage-buttons",{staticClass:"t-send_view-percentage",attrs:{token:e.token,value:e.amount},on:{change:e.assignNewAmount}})],1),i("opera-input",{staticClass:"t-send_view-amount",attrs:{amount:"",error:!e.validAmount&&e.amountInitialized?e.$t("errors.generic.invalidAmount"):"",icon:!e.validAmount&&e.amountInitialized?"icon-error":"",placeholder:e.$t("general.amountToSend"),"test-error-class":"t-send_view-invalid_amount"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}}),i("transition",{attrs:{name:"fade"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.errorMessage,expression:"errorMessage"}],staticClass:"my-4 text-spectrum-red"},[e._v(" "+e._s(e.errorMessage)+" ")])]),i("div",{staticClass:"bottom-group"},[i("primary-button",{staticClass:"mx-11 t-send_view-next w-full",attrs:{disabled:e.loading||!e.simpleValid||e.isAmountTooSmall,loading:e.loading,title:e.$t("general.next")},on:{click:e.next}})],1)],1)],1):e._e()},r=[],n=(s(57658),s(39765)),a=s(35210),o=s(7565),l=s(70794),d=s(17482),c=s(79340),u=s(68461),m=s(21157),h=s(56258),v=s(75619),p=s(4634),g=s(98180),f={name:"SendView",components:{AssetSelector:o.Z,OperaInput:d.Z,PercentageButtons:c.Z,PrimaryButton:u.Z,SimplePopover:m.Z,TopBar:v.Z},beforeRouteEnter(e,t,s){"SendConfirm"===t.name&&"SendToken"===e.name?s():s((e=>{e.recipient="",e.amount=null,e.token=e.getToken()}))},data(){return{amount:null,error:null,loading:!1,message:"",recipient:"",timer:null,token:null,transaction:null}},computed:{addressResolver(){return this.$store.getters.addressResolver},addressResolvers(){return this.$store.getters.addressResolvers},amountInitialized(){return null!==this.amount},amountWithoutDecimals(){return g.Z.withoutDecimals(this.amount,this.token.contract.decimals)},auditingAddress(){return this.$store.getters.isLoading("addressAudit")},chain(){return this.token.chain},errorMessage(){return this.isAmountTooSmall?this.$t("errors.amountTooSmall"):this.getErrorMessage()},fullBalance(){return this.$store.getters.getFullTokenBalance(this.address,this.token,this.chain)},isAddressMalicious(){return this.$store.getters.isAddressMalicious},isAmountTooSmall(){if(!this.validAmount)return;const e=1e-5;return((0,a.ij)(this.token.chain)||(0,a.wS)(this.token.chain))&&new l.Z(this.amount).isLessThan(e)},maxAmount(){return g.Z.withDecimals(this.token?.balance||0,this.token.contract?.decimals||0)},nativeTokens(){return this.$store.getters.nativeTokens},recipientAddress(){return this.resolvedAddress||this.recipient},recipientInputIcon(){return!this.validRecipient&&this.amountInitialized?"icon-error":this.isAddressMalicious?"icon-warning":this.addressResolver?"":this.validRecipient?"icon-check_selected":"icon-contacts"},resolvedAddress(){return this.$store.getters.resolvedAddress},resolvingAddress(){return this.$store.getters.isLoading("addressResolver")},sendableTokens(){return this.$store.getters.ownedTokens.filter((e=>(0,l.Z)(e.balance).isGreaterThan(0)))},simpleValid(){return this.validRecipient&&this.validAmount},valid(){return this.validRecipient&&this.validAmount&&this.transaction},validAmount(){return!!this.token&&((0,l.Z)(this.amount).isGreaterThan(0)&&(0,l.Z)(this.amount).isLessThanOrEqualTo(this.maxAmount))},validRecipient(){return this.$store.getters.isAddressValid(this.recipientAddress)&&!this.$store.getters.txError["invalidRecipient"]}},watch:{amount(){this.error=null},resolvedAddress(e){e&&this.$store.dispatch("auditAddress",{address:this.recipientAddress,chain:this.chain})},token(){this.amount=null,this.resolveAddress(100)}},beforeDestroy(){this.$store.dispatch("clearTxError"),clearTimeout(this.timer)},mounted(){h.Z.sendStatsEvent(h.Z.types.IMPRESSION,"wt_send_entered"),this.$store.commit("SET_TX_CHAIN",this.chain)},methods:{assignNewAmount(e){this.amount=e},async buildTransactionPayload(){const e=p.Z.removeExponential(this.amountWithoutDecimals).toString(),{contract:t}=this.token,s=(0,l.Z)(this.amount).isEqualTo(this.maxAmount),i={amount:e,from:this.$store.getters.accountsByCoinType[this.chain.coinType],sendMaxAmount:s,to:this.recipientAddress,token:{address:t.contract,chain:this.chain,decimals:t.decimals,symbol:t.symbol,type:this.$store.getters.getTokenType(t.type)}};return i.token.address===n.L1&&delete i.token.address,i},async createTransaction(){if(!this.validRecipient||!this.validAmount)return null;try{const e=await this.buildTransactionPayload(),t=await this.$wallet.createTransaction(e);t.token&&!t.token.decimals&&(t.token.decimals=this.token.contract.decimals),this.transaction=Object.assign(t,{amount:e.amount,from:e.from,to:e.to})}catch(e){this.transaction=null,this.error=e.message||e}return this.transaction},getErrorMessage(){if(!this.error)return"";const{error:e}=this,t=[{message:this.$t("errors.insufficientFunds"),raw:"insufficient funds"},{message:this.$t("errors.cannotEstimateGas"),raw:"cannot estimate gas"},{message:this.$t("errors.nameResolutionFailed"),raw:"ENS: Lookup"},{message:this.$t("errors.minimumSendAmountError",{amount:e.match(/\d+\.?\d* [A-Z]+$/g)?.[0]}),raw:"Minimum amount to send is"}],s=t.find((t=>e.includes(t.raw)))?.message;return s??("string"===typeof e&&e)??this.$t("errors.generic.unknownError")},getToken(){const{token:e}=this.$route.params,t=this.$store.getters.enabledNetworks[0].nativeCurrency;return e??t},hideAddressResolversPopover(){this.$refs.addressResolversPopover.hide()},async next(){if(!this.simpleValid||this.loading)return;h.Z.sendStatsEvent(h.Z.types.CLICK,"wt_send_next_suc",{network:this.$store.getters.getNetworkName(this.chain)}),this.loading=!0,this.$progress.show();const e=await this.createTransaction();this.$progress.hide(),e&&!this.error&&this.$router.push({name:"SendConfirm",params:{token:this.token,transaction:this.transaction}}),this.loading=!1},resolveAddress(e){!this.resolvingAddress&&this.timer&&(this.$store.dispatch("clearResolvedAddressData"),this.$store.dispatch("clearAddressAuditData")),clearTimeout(this.timer),this.timer=setTimeout((async()=>{const e={address:this.recipientAddress,chain:this.chain};await this.$store.dispatch("resolveAddress",e),await this.$store.dispatch("auditAddress",e)}),e)},showAddressResolversPopover(){this.$refs.addressResolversPopover.show()}}},b=f,k=s(1001),w=(0,k.Z)(b,i,r,!1,null,"5108ff53",null),A=w.exports},61986:function(e,t,s){var i={"./1inch.svg":35815,"./binancecnt.svg":80818,"./ens.svg":35332,"./fio.svg":27200,"./goplus.svg":9293,"./moonpay.svg":82820,"./pancakeswap.svg":66670,"./ramp.svg":82702,"./ud.svg":68237,"./wyre.svg":97061,"./yat.svg":15418};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=61986},80818:function(e,t,s){"use strict";e.exports=s.p+"img/binancecnt.f04ec441.svg"},35332:function(e,t,s){"use strict";e.exports=s.p+"img/ens.b2f0fdfa.svg"},27200:function(e,t,s){"use strict";e.exports=s.p+"img/fio.83de3eb2.svg"},82820:function(e,t,s){"use strict";e.exports=s.p+"img/moonpay.6b4c9c2a.svg"},82702:function(e,t,s){"use strict";e.exports=s.p+"img/ramp.26a0a8eb.svg"},68237:function(e,t,s){"use strict";e.exports=s.p+"img/ud.8f615537.svg"},97061:function(e,t,s){"use strict";e.exports=s.p+"img/wyre.72783911.svg"},15418:function(e,t,s){"use strict";e.exports=s.p+"img/yat.b2137dfd.svg"},92769:function(e,t,s){"use strict";e.exports=s.p+"img/help.a36d1970.svg"}}]);