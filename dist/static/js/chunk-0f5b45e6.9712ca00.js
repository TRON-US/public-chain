(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f5b45e6"],{"0f8a":function(t,e,n){},6505:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"tron-content"},[n("div",{staticClass:"tron-filter-section"},[n("div",[n("el-steps",{attrs:{active:t.currentStep,"align-center":"",type:"mini"}},[n("el-step",{attrs:{title:t.$t("tronPluginConsensusModule")},nativeOn:{click:function(e){return t.stepClickFun(1)}}}),t._v(" "),n("el-step",{attrs:{title:t.$t("tronPluginTransactionModule")},nativeOn:{click:function(e){return t.stepClickFun(2)}}}),t._v(" "),n("el-step",{attrs:{title:t.$t("tronPluginDatabaseModule")},nativeOn:{click:function(e){return t.stepClickFun(3)}}})],1)],1)]),t._v(" "),1==t.currentStep?n("el-form",{ref:"pluginOnsensusDialogForm",staticClass:"pluginSettingForm",attrs:{model:t.pluginOnsensusForm,rules:t.pluginRules,"label-position":"left"}},[n("el-row",{attrs:{gutter:12}},[n("el-col",{attrs:{span:24}},[n("el-card",{attrs:{shadow:"hover"}},[n("div",{on:{click:function(e){t.baseContentShow=!t.baseContentShow}}},[n("i",{class:t.baseContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                            "+t._s(t.$t("tronPluginConsensusModule"))+"\n                        ")]),t._v(" "),t.baseContentShow?n("div",{staticClass:"pluginSettingFormContent"},[n("el-form-item",{staticClass:"baseFormItem mgt30",attrs:{prop:"consensus"}},[n("el-radio-group",{model:{value:t.pluginOnsensusForm.consensus,callback:function(e){t.$set(t.pluginOnsensusForm,"consensus",e)},expression:"pluginOnsensusForm.consensus"}},[n("el-radio",{attrs:{label:"dpos"}},[t._v("DPOS")])],1)],1)],1):t._e()])],1)],1),t._v(" "),n("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[n("router-link",{attrs:{to:{path:"/setting/list"}}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v(t._s(t.$t("tronSettingPreviousStep")))])],1),t._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.saveData("pluginOnsensusDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1):t._e(),t._v(" "),2==t.currentStep?n("el-form",{ref:"transcationDialogForm",staticClass:"transcationDialogForm",attrs:{model:t.pluginTransactionForm,rules:t.transcationRules,"label-position":"left"}},[n("el-row",{attrs:{gutter:12}},[n("el-col",{attrs:{span:24}},[n("el-card",{attrs:{shadow:"hover"}},[n("div",{on:{click:function(e){t.transcationContentShow=!t.transcationContentShow}}},[n("i",{class:t.transcationContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                            "+t._s(t.$t("tronPluginTransactionModule"))+"\n                        ")]),t._v(" "),t.transcationContentShow?n("div",{staticClass:"transcationDialogFormContent"},[n("el-form-item",{staticClass:"baseFormItem mgt20",attrs:{prop:"transaction"}},[n("el-checkbox-group",{model:{value:t.pluginTransactionForm.transaction,callback:function(e){t.$set(t.pluginTransactionForm,"transaction",e)},expression:"pluginTransactionForm.transaction"}},[t._l(t.transactionCheckNodeAry,(function(e,s){return n("el-checkbox",{key:s,attrs:{label:e.value}},[t._v(t._s(e.label))])})),t._v(" "),n("br"),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.moreSetting=!t.moreSetting}}},[t._v(t._s(t.$t("tronMoreSetting")))]),t._v(" "),t.moreSetting?n("div",[n("el-checkbox",{staticStyle:{margin:"0"},attrs:{label:9}},[t._v(t._s(t.$t("tronPluginCustomTradingModule")))]),t._v(" "),n("br"),t._v(" "),n("el-input",{staticClass:"singlePluginSettingFormInput",attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",size:"small",maxlength:300,placeholder:t.$t("tronPluginCustomTradingModulePlaceholder")},model:{value:t.pluginTransactionForm.transactionContent,callback:function(e){t.$set(t.pluginTransactionForm,"transactionContent","string"===typeof e?e.trim():e)},expression:"pluginTransactionForm.transactionContent"}})],1):t._e()],2)],1)],1):t._e()])],1)],1),t._v(" "),n("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.previousStepFun()}}},[t._v(t._s(t.$t("tronSettingPreviousStep")))]),t._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.saveTranstionData("transcationDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1):t._e(),t._v(" "),3==t.currentStep?n("el-form",{ref:"dbFormDialogForm",staticClass:"dbSettingForm",attrs:{model:t.plugindbForm,rules:t.plugindbRules,"label-position":"left"}},[3==t.currentStep?n("el-row",{attrs:{gutter:12}},[n("el-col",{attrs:{span:24}},[n("el-card",{attrs:{shadow:"hover"}},[n("div",{on:{click:function(e){t.dbsettingContentShow=!t.dbsettingContentShow}}},[n("i",{class:t.dbsettingContentShow?"el-icon-arrow-down":"el-icon-arrow-right"}),t._v("\n                            "+t._s(t.$t("tronPluginTransactionModule"))+"\n                        ")]),t._v(" "),t.dbsettingContentShow?n("div",{staticStyle:{"padding-left":"20px"}},[n("el-form-item",{staticClass:"baseFormItem mgt30",attrs:{prop:"dbsetting"}},[n("el-radio-group",{model:{value:t.plugindbForm.dbsetting,callback:function(e){t.$set(t.plugindbForm,"dbsetting",e)},expression:"plugindbForm.dbsetting"}},[n("el-radio",{attrs:{label:"leveldb"}},[t._v("leveldb")]),t._v(" "),n("el-radio",{attrs:{label:"rockdb"}},[t._v("rockdb")]),t._v(" "),n("br"),t._v(" "),n("el-radio",{staticStyle:{margin:"15px 0"},attrs:{label:3}},[t._v(t._s(t.$t("tronPluginCustomDatabaseModule")))])],1),t._v(" "),n("br"),t._v(" "),n("el-input",{staticClass:"pluginSettingFormInput",attrs:{size:"small",maxlength:50,placeholder:t.$t("tronPluginCustomDatabaseModulePlaceholder")},model:{value:t.plugindbForm.dbsettingContent,callback:function(e){t.$set(t.plugindbForm,"dbsettingContent","string"===typeof e?e.trim():e)},expression:"plugindbForm.dbsettingContent"}})],1)],1):t._e()])],1)],1):t._e(),t._v(" "),n("el-form-item",{staticClass:"textRight",attrs:{"label-width":"0"}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.previousStepFun()}}},[t._v(t._s(t.$t("tronSettingPreviousStep")))]),t._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.saveDBData("dbFormDialogForm")}}},[t._v(t._s(t.$t("tronSettingNextStep")))])],1)],1):t._e()],1)])},r=[],a=(n("96cf"),n("3b8d")),o=(n("ac6a"),n("c5f6"),n("75fc")),i=n("b775");function l(){return Object(i["a"])({url:"/pluginConfig",method:"get"})}function u(t){return Object(i["a"])({url:"/dbEngine",method:"post",params:t})}function c(t){return Object(i["a"])({url:"/transaction",headers:{"Content-Type":"application/json"},transformRequest:[function(t){return t=JSON.stringify(t),t}],method:"post",data:t})}function g(t){return Object(i["a"])({url:"/consensus",method:"post",params:t})}var p={name:"pluginlist",data:function(){return{currentStep:1,baseContentShow:!0,moreSetting:!1,transcationContentShow:!0,dbsettingContentShow:!0,pluginOnsensusForm:{consensus:"dpos",consensusContent:""},pluginTransactionForm:{transaction:[],transactionContent:""},transactionCheckNodeAry:[{label:"AccountPermissionUpdate",value:"AccountPermissionUpdateActuator"},{label:"AssetIssue",value:"AssetIssueActuator"},{label:"ClearABIContract",value:"ClearABIContractActuator"},{label:"CreateAccount",value:"CreateAccountActuator"},{label:"ExchangeCreate",value:"ExchangeCreateActuator"},{label:"ExchangeInject",value:"ExchangeInjectActuator"},{label:"ExchangeTransaction",value:"ExchangeTransactionActuator"},{label:"ExchangeWithdraw",value:"ExchangeWithdrawActuator"},{label:"FreezeBalance",value:"FreezeBalanceActuator"},{label:"ParticipateAssetIssue",value:"ParticipateAssetIssueActuator"},{label:"ProposalApprove",value:"ProposalApproveActuator"},{label:"ProposalCreate",value:"ProposalCreateActuator"},{label:"ProposalDelete",value:"ProposalDeleteActuator"},{label:"SetAccountId",value:"SetAccountIdActuator"},{label:"ShieldedTransfer",value:"ShieldedTransferActuator"},{label:"Transfer",value:"TransferActuator"},{label:"TransferAsset",value:"TransferAssetActuator"},{label:"UnfreezeAsset",value:"UnfreezeAssetActuator"},{label:"UnfreezeBalance",value:"UnfreezeBalanceActuator"},{label:"UpdateAccount",value:"UpdateAccountActuator"},{label:"UpdateAsset",value:"UpdateAssetActuator"},{label:"UpdateBrokerage",value:"UpdateBrokerageActuator"},{label:"UpdateEnergyLimit",value:"UpdateEnergyLimitContractActuator"},{label:"UpdateSettingContract",value:"UpdateSettingContractActuator"},{label:"VoteWitness",value:"VoteWitnessActuator"},{label:"WithdrawBalance",value:"WithdrawBalanceActuator"},{label:"WitnessCreate",value:"WitnessCreateActuator"},{label:"WitnessUpdate",value:"WitnessUpdateActuator"}],plugindbForm:{dbsetting:"leveldb",dbsettingContent:""},pluginRules:{consensus:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}]},transcationRules:{transaction:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}]},plugindbRules:{dbsetting:[{required:!0,message:this.$t("tronSettingPlaceholder"),trigger:"blur"}]}}},created:function(){this.pluginConfigFun(),this.getCurrentStepFun()},methods:{stepClickFun:function(t){this.currentStep=t,this.$store.dispatch("tronSetting/getCurrentPluginStepConfig",{step:t}),this.pluginConfigFun()},pluginConfigFun:function(){var t=this;l().then((function(t){return t.data})).then((function(e){"dpos"!=e.consensus&&"pbft"!=e.consensus?t.pluginOnsensusForm={consensus:3,consensusContent:e.consensus}:t.pluginOnsensusForm={consensus:e.consensus,consensusContent:""},""!=e.customTransaction?(t.pluginTransactionForm.transactionContent=e.customTransaction,t.pluginTransactionForm.transaction=[].concat(Object(o["a"])(e.transaction),[9])):t.pluginTransactionForm.transaction=e.transaction,"leveldb"!=e.dbEngine&&"rockdb"!=e.dbEngine?t.plugindbForm={dbsetting:3,dbsettingContent:e.dbEngine}:t.plugindbForm={dbsetting:e.dbEngine,dbsettingContent:""}})).catch((function(t){console.log(t)}))},getCurrentStepFun:function(){var t=sessionStorage.getItem("pluginstep")||1;0!=this.currentStep&&(t=t||this.currentStep),this.currentStep=Number(t),this.$store.dispatch("tronSetting/getCurrentPluginStepConfig",{step:this.currentStep})},previousStepFun:function(t){this.currentStep=this.currentStep-1,this.$store.dispatch("tronSetting/getCurrentPluginStepConfig",{step:this.currentStep}),this.pluginConfigFun()},saveData:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;if(3==e.pluginOnsensusForm.consensus){if(""==e.pluginOnsensusForm.consensusContent)return void e.$message.success(e.$t("tronPluginCustomConsensusModulePlaceholder"));e.pluginOnsensusForm.consensus=e.pluginOnsensusForm.consensusContent}g({consensus:e.pluginOnsensusForm.consensus}).then((function(t){e.$message.success(e.$t("tronPluginConsensusSaveSuccess")),e.currentStep=e.currentStep+1,e.$store.dispatch("tronSetting/getCurrentPluginStepConfig",{step:e.currentStep}),e.pluginConfigFun()})).catch((function(t){console.log(t)}))}))},saveTranstionData:function(t){var e=this;this.$refs[t].validate((function(t){if(t){if(""!=e.pluginTransactionForm.transactionContent)e.pluginTransactionForm.transaction.forEach((function(t,n){9===t?e.pluginTransactionForm.transaction.splice(n,1):e.pluginTransactionForm.transactionContent=""}));else if(e.pluginTransactionForm.transaction.indexOf(9)>0)return void e.$message.success(e.$t("tronPluginCustomTradingModulePlaceholder"));c({transaction:e.pluginTransactionForm.transaction,customTransaction:e.pluginTransactionForm.transactionContent}).then((function(t){e.$message.success(e.$t("tronPluginInputSaveSuccess")),e.currentStep=e.currentStep+1,e.$store.dispatch("tronSetting/getCurrentPluginStepConfig",{step:e.currentStep}),e.pluginConfigFun()})).catch((function(t){console.log(t)}))}}))},saveDBData:function(t){var e=this;this.$refs[t].validate((function(t){if(!t)return console.log("error submit!!"),!1;if(3==e.plugindbForm.dbsetting){if(""==e.plugindbForm.dbsettingContent)return void e.$message.success(e.$t("tronPluginCustomDatabaseModulePlaceholder"));e.plugindbForm.dbsetting=e.plugindbForm.dbsettingContent}u({dbEngine:e.plugindbForm.dbsetting}).then(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$message.success(e.$t("tronPluginInputSaveSuccess")),t.next=3,e.$store.dispatch("user/changeRoles","deploy").then((function(t){console.log(t)}));case 3:e.$router.push({path:"/deploy/list"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(t)}))}))}}},d=p,m=(n("ff6f"),n("2877")),f=Object(m["a"])(d,s,r,!1,null,"0487019a",null);e["default"]=f.exports},aa77:function(t,e,n){var s=n("5ca1"),r=n("be13"),a=n("79e5"),o=n("fdef"),i="["+o+"]",l="​",u=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),g=function(t,e,n){var r={},i=a((function(){return!!o[t]()||l[t]()!=l})),u=r[t]=i?e(p):o[t];n&&(r[n]=u),s(s.P+s.F*i,"String",r)},p=g.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=g},c5f6:function(t,e,n){"use strict";var s=n("7726"),r=n("69a8"),a=n("2d95"),o=n("5dbc"),i=n("6a99"),l=n("79e5"),u=n("9093").f,c=n("11e9").f,g=n("86cc").f,p=n("aa77").trim,d="Number",m=s[d],f=m,b=m.prototype,v=a(n("2aeb")(b))==d,h="trim"in String.prototype,C=function(t){var e=i(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():p(e,3);var n,s,r,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+e}for(var o,l=e.slice(2),u=0,c=l.length;u<c;u++)if(o=l.charCodeAt(u),o<48||o>r)return NaN;return parseInt(l,s)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(v?l((function(){b.valueOf.call(n)})):a(n)!=d)?o(new f(C(e)),n,m):C(e)};for(var S,F=n("9e1e")?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;F.length>_;_++)r(f,S=F[_])&&!r(m,S)&&g(m,S,c(f,S));m.prototype=b,b.constructor=m,n("2aba")(s,d,m)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ff6f:function(t,e,n){"use strict";var s=n("0f8a"),r=n.n(s);r.a}}]);