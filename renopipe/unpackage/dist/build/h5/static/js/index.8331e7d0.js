(function(e){function t(t){for(var a,o,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={index:0},r=[];function o(e){return s.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-login-login":"pages-login-login","pages-record-complete":"pages-record-complete","pages-record-completeEdit":"pages-record-completeEdit","pages-record-completeResend":"pages-record-completeResend","pages-record-completeResendIMG":"pages-record-completeResendIMG","pages-record-create":"pages-record-create","pages-record-detail":"pages-record-detail","pages-record-edit":"pages-record-edit","pages-record-selectsite":"pages-record-selectsite"}[e]||e)+"."+{"pages-index-index":"c4ef0839","pages-login-login":"1f51140c","pages-record-complete":"c73bece7","pages-record-completeEdit":"f6d961eb","pages-record-completeResend":"6eae9ed9","pages-record-completeResendIMG":"303bf3e4","pages-record-create":"d315cdef","pages-record-detail":"c5f525c0","pages-record-edit":"7c4ebe23","pages-record-selectsite":"790db23c"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var u=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",u.name="ChunkLoadError",u.type=a,u.request=r,n[1](u)}i[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="./",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("1329")},"0910":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"_cpimg"},[n("v-uni-canvas",{style:{width:e.cWidth+"px",height:e.cHeight+"px"},attrs:{id:"_myCanvas","canvas-id":"_myCanvas"}})],1)},r=[]},1006:function(e,t,n){"use strict";var a=n("3e55"),i=n.n(a);i.a},"11d2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},props:{left:{default:0},top:{default:0},height:{default:0}},created:function(){uni.getSystemInfoSync().statusBarHeight;var e=getCurrentPages();e[e.length-1]},onUnload:function(){clearTimeout(this.t)},methods:{onmarked:function(e,t){var n=this;this.$emit("getCode",t),this.t=setTimeout((function(){n.barcode.start()}),1e3)}}};t.default=a},1210:function(e,t,n){"use strict";n.r(t);var a=n("28a1"),i=n("f3ac");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"aba8a9c0",null,!1,a["a"],o);t["default"]=c.exports},1329:function(e,t,n){"use strict";var a=n("4ea4"),i=a(n("5530"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("17f7"),n("06b9");var r=a(n("e143")),o=a(n("4819")),s=a(n("68d6")),c=a(n("1210")),u=a(n("e6d4")),d=a(n("c78f")),l=a(n("cae7")),f=a(n("b0aa"));r.default.component("Modal",f.default),r.default.component("cpimg",l.default),r.default.component("Header",d.default),r.default.config.productionTip=!1,r.default.component("scan",c.default),r.default.use(u.default),o.default.mpType="app";var p=new r.default((0,i.default)({store:s.default},o.default));p.$mount()},"17f7":function(e,t,n){"use strict";(function(e){var t=n("4ea4"),a=t(n("e143"));e["____62E8C0A____"]=!0,delete e["____62E8C0A____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"Renopipe",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="3.1.9",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e5,connectSocket:6e4,uploadFile:6e5,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=n.e,a.default.component("pages-login-login",(function(e){var t={component:n.e("pages-login-login").then(function(){return e(n("4c61"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-index-index",(function(e){var t={component:n.e("pages-index-index").then(function(){return e(n("0ff1"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-record-selectsite",(function(e){var t={component:n.e("pages-record-selectsite").then(function(){return e(n("5f59"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-record-create",(function(e){var t={component:n.e("pages-record-create").then(function(){return e(n("829a"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-record-edit",(function(e){var t={component:n.e("pages-record-edit").then(function(){return e(n("5f55"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-record-detail",(function(e){var t={component:n.e("pages-record-detail").then(function(){return e(n("0b22"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-record-complete",(function(e){var t={component:n.e("pages-record-complete").then(function(){return e(n("e55e"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-record-completeEdit",(function(e){var t={component:n.e("pages-record-completeEdit").then(function(){return e(n("cb40"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-record-completeResend",(function(e){var t={component:n.e("pages-record-completeResend").then(function(){return e(n("f0e2"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),a.default.component("pages-record-completeResendIMG",(function(e){var t={component:n.e("pages-record-completeResendIMG").then(function(){return e(n("fe52"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),e.__uniRoutes=[{path:"/",alias:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-login-login",{slot:"page"})])}},meta:{id:1,name:"pages-login-login",isNVue:!1,maxWidth:0,pagePath:"pages/login/login",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",windowTop:0}},{path:"/pages/record/selectsite",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-selectsite",{slot:"page"})])}},meta:{name:"pages-record-selectsite",isNVue:!1,maxWidth:0,pagePath:"pages/record/selectsite",windowTop:0}},{path:"/pages/record/create",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-create",{slot:"page"})])}},meta:{name:"pages-record-create",isNVue:!1,maxWidth:0,pagePath:"pages/record/create",windowTop:0}},{path:"/pages/record/edit",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-edit",{slot:"page"})])}},meta:{name:"pages-record-edit",isNVue:!1,maxWidth:0,pagePath:"pages/record/edit",windowTop:0}},{path:"/pages/record/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-detail",{slot:"page"})])}},meta:{name:"pages-record-detail",isNVue:!1,maxWidth:0,pagePath:"pages/record/detail",windowTop:0}},{path:"/pages/record/complete",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-complete",{slot:"page"})])}},meta:{name:"pages-record-complete",isNVue:!1,maxWidth:0,pagePath:"pages/record/complete",windowTop:0}},{path:"/pages/record/completeEdit",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-completeEdit",{slot:"page"})])}},meta:{name:"pages-record-completeEdit",isNVue:!1,maxWidth:0,pagePath:"pages/record/completeEdit",windowTop:0}},{path:"/pages/record/completeResend",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-completeResend",{slot:"page"})])}},meta:{name:"pages-record-completeResend",isNVue:!1,maxWidth:0,pagePath:"pages/record/completeResend",windowTop:0}},{path:"/pages/record/completeResendIMG",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-completeResendIMG",{slot:"page"})])}},meta:{name:"pages-record-completeResendIMG",isNVue:!1,maxWidth:0,pagePath:"pages/record/completeResendIMG",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,n("c8ba"))},"27c0":function(e,t,n){"use strict";var a=n("2df9"),i=n.n(a);i.a},"28a1":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{attrs:{id:"barcode"}})},r=[]},"2c20":function(e,t,n){e.exports=n.p+"static/img/hamburger-btn.37358ed2.png"},"2ca3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){e.log("App Launch")},onShow:function(){e.log("App Show")},onHide:function(){e.log("App Hide")}};t.default=n}).call(this,n("5a52")["default"])},"2df9":function(e,t,n){var a=n("d7a0");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("24b83b92",a,!0,{sourceMap:!1,shadowMode:!1})},"3c95":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.menu-btn[data-v-42614460]{width:.9rem;height:.9rem;padding:10px;cursor:pointer}.nav-background[data-v-42614460]{background:#5f98ec;position:relative}.dropMenu[data-v-42614460]{width:40vw;max-height:0;overflow:hidden;-webkit-transition:.3s;transition:.3s;background:#f0f0f0;position:absolute;left:0;top:100%;-webkit-border-radius:0 0 %?30?% 0;border-radius:0 0 %?30?% 0}.menuList[data-v-42614460]{padding:%?10?% %?20?%;border-top:solid #ccc 1px}.menuList[data-v-42614460]:last-child{margin-bottom:%?30?%}.show[data-v-42614460]{max-height:40vh!important}.headerWrap[data-v-42614460]{position:-webkit-sticky;position:sticky;top:0;z-index:100}',""]),e.exports=t},"3cdc":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uniTransition:n("fbe7").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showPopup?n("v-uni-view",{staticClass:"uni-popup",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[n("uni-transition",{attrs:{"mode-class":["fade"],styles:e.maskClass,duration:e.duration,show:e.showTrans},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onTap.apply(void 0,arguments)}}}),n("uni-transition",{attrs:{"mode-class":e.ani,styles:e.transClass,duration:e.duration,show:e.showTrans},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._t("default")],2)],1)],1):e._e()},r=[]},"3e55":function(e,t,n){var a=n("98d4");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("1c73932e",a,!0,{sourceMap:!1,shadowMode:!1})},4819:function(e,t,n){"use strict";n.r(t);var a=n("fc81"),i=n("d496");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("be6f");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=c.exports},4829:function(e,t,n){"use strict";var a=n("4ea4");n("4160"),n("a9e3"),n("ac1f"),n("5319"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),r={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(e){e?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var e=(0,i.default)((0,i.default)({},this.styles),{},{"transition-duration":this.duration/1e3+"s"}),t="";for(var n in e){var a=this.toLine(n);t+=a+":"+e[n]+";"}return t}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var e=this;for(var t in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===t?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[t]," ");this.$nextTick((function(){setTimeout((function(){e._animation(!0)}),50)}))},close:function(e){clearTimeout(this.timer),this._animation(!1)},_animation:function(e){var t=this,n=this.getTranfrom(e);for(var a in this.transform="",n)"opacity"===a?this.ani.in="fade-".concat(e?"out":"in"):this.transform+="".concat(n[a]," ");this.timer=setTimeout((function(){e||(t.isShow=!1),t.$emit("change",{detail:t.isShow})}),this.duration)},getTranfrom:function(e){var t={transform:""};return this.modeClass.forEach((function(n){switch(n){case"fade":t.opacity=e?1:0;break;case"slide-top":t.transform+="translateY(".concat(e?"0":"-100%",") ");break;case"slide-right":t.transform+="translateX(".concat(e?"0":"100%",") ");break;case"slide-bottom":t.transform+="translateY(".concat(e?"0":"100%",") ");break;case"slide-left":t.transform+="translateX(".concat(e?"0":"-100%",") ");break;case"zoom-in":t.transform+="scale(".concat(e?1:.8,") ");break;case"zoom-out":t.transform+="scale(".concat(e?1:1.2,") ");break}})),t},_modeClassArr:function(e){var t=this.modeClass;if("string"!==typeof t){var n="";return t.forEach((function(t){n+=t+"-"+e+","})),n.substr(0,n.length-1)}return t+"-"+e},toLine:function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}}};t.default=r},"5b28":function(e,t,n){"use strict";n.r(t);var a=n("4829"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"68d6":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("e143")),r=a(n("2f62"));i.default.use(r.default);var o=new r.default.Store({state:{baseURL:"https://renopipe.co/",site:{}},mutations:{setState:function(e,t){e[t.key]=t.value}}}),s=o;t.default=s},"708d":function(e,t,n){"use strict";var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("fbe7")),r={name:"UniPopup",components:{uniTransition:i.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(e){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(e){e.stopPropagation()},open:function(){var e=this;this.showPopup=!0,this.$nextTick((function(){clearTimeout(e.timer),e.timer=setTimeout((function(){e.showTrans=!0}),50)})),this.$emit("change",{show:!0})},close:function(e){var t=this;this.showTrans=!1,this.$nextTick((function(){clearTimeout(t.timer),t.timer=setTimeout((function(){t.$emit("change",{show:!1}),t.showPopup=!1}),300)}))},onTap:function(){this.maskClick&&this.close()}}};t.default=r},"813b":function(e,t,n){"use strict";n.r(t);var a=n("a91a"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"98d4":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup[data-v-697b345a]{position:fixed;top:var(--window-top);bottom:0;left:0;right:0;z-index:99}.uni-popup__mask[data-v-697b345a]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-697b345a]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-697b345a]{opacity:1}.uni-bottom-mask[data-v-697b345a]{opacity:1}.uni-center-mask[data-v-697b345a]{opacity:1}.uni-popup__wrapper[data-v-697b345a]{display:block;position:absolute}.top[data-v-697b345a]{top:0;left:0;right:0;-webkit-transform:translateY(-500px);transform:translateY(-500px)}.bottom[data-v-697b345a]{bottom:0;left:0;right:0;-webkit-transform:translateY(500px);transform:translateY(500px)}.center[data-v-697b345a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;bottom:0;left:0;right:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-697b345a]{display:block;position:relative}.content-ani[data-v-697b345a]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-697b345a]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-697b345a]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-697b345a]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""]),e.exports=t},"9e6b":function(e,t,n){var a=n("3c95");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("160edcd4",a,!0,{sourceMap:!1,shadowMode:!1})},a91a:function(e,t,n){"use strict";n("99af"),n("c975"),n("ace4"),n("b420"),n("a9e3"),n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[],i="",r=0,o={name:"cpimg",props:{maxWidth:{type:Number,default:750},type:{type:String,default:"url"},ql:{type:Number,default:.92},src:{type:String,default:""},number:{type:Number,default:1},fixOrientation:{type:Boolean,default:!0},size:{type:Number,default:1e5}},data:function(){return{cWidth:750,cHeight:750}},onUnload:function(){},methods:{_changImg:function(){var e=this;""==e.src?uni.chooseImage({count:e.number,sizeType:["compressed"],success:function(t){a=[],i=t.tempFilePaths,r=0,e._cpImg()},fail:function(t){e._err(t)}}):_cpImg(e.src)},_cpImg:function(){var e=this,t=i[r];function n(n,a){if(n.type.indexOf("png")>=0)return e._result(t),!1;var i,r,o=n.width,s=n.height,c=1,u=1;(a/1024>=e.size||n.width>=e.maxWidth)&&(n.width>=n.height&&n.width>=e.maxWidth?(n.height=e.maxWidth*n.height/n.width,n.width=e.maxWidth):n.width<n.height&&n.height>=e.maxWidth&&(n.width=e.maxWidth*n.width/n.height,n.height=e.maxWidth),c=n.width/o,u=n.height/s),i=o*c,r=s*u;var d=uni.createCanvasContext("_myCanvas",e);if(e.cWidth=n.width,e.cHeight=n.height,e.fixOrientation){var l=n.orientation;[5,6,7,8,"right","left","right-mirrored","left-mirrored"].indexOf(l)>-1&&(e.cWidth=n.height,e.cHeight=n.width),2==l||"up-mirrored"==l?(d.translate(i,0),d.scale(-1,1)):3==l||"down"==l?(d.translate(i,r),d.rotate(Math.PI)):4==l||"down-mirrored"==l?(d.translate(0,r),d.scale(1,-1)):5==l||"right-mirrored"==l?(d.rotate(.5*Math.PI),d.scale(1,-1)):6==l||"right"==l?(d.rotate(.5*Math.PI),d.translate(0,-r)):7==l||"left-mirrored"==l?(d.rotate(.5*Math.PI),d.translate(i,-r),d.scale(-1,1)):8==l||"left"==l?(d.rotate(-.5*Math.PI),d.translate(-i,0)):d.translate(0,0)}var f=0;function p(){var t=e.maxWidth/5;return t>=600?600:t<=100?100:t}f=p(),setTimeout((function(){d.drawImage(t,0,0,i,r),d.draw(!1,(function(){var t=0;t=10,setTimeout((function(){uni.canvasToTempFilePath({width:Number(e.cWidth),height:Number(e.cHeight),destWidth:Number(e.cWidth),destHeight:Number(e.cHeight),canvasId:"_myCanvas",fileType:"jpg",quality:Number(e.ql),success:function(t){if("base64"==e.type){e._result(t.tempFilePath)}else e._result(t.tempFilePath)},fail:function(t){e._err(t)}},e)}),t)}))}),f)}uni.showLoading({title:"圖片壓縮中 ".concat(r+1,"/").concat(i.length),mask:!0}),e._getH5ImageInfo(t,(function(e){n(e,e.size)}))},_reverseImgData:function(e){for(var t=e.width,n=e.height,a=0,i=0;i<n/2;i++)for(var r=0;r<4*t;r++)a=e.data[i*t*4+r],e.data[i*t*4+r]=e.data[(n-i-1)*t*4+r],e.data[(n-i-1)*t*4+r]=a;return e},_getH5ImageInfo:function(e,t){var n=new Image;n.src=e,n.onload=function(n){var a=this,i=new XMLHttpRequest;i.open("GET",e,!0),i.responseType="blob",i.onload=function(e){var n=this;if(200==n.status||0===n.status){var i=new FileReader;i.onload=function(e){var i=new DataView(this.result);if(65496!=i.getUint16(0,!1))return t({size:n.response.size,type:n.response.type,width:a.width,height:a.height,orientation:-1});var r=i.byteLength,o=2;while(o<r){var s=i.getUint16(o,!1);if(o+=2,65505==s){if(1165519206!=i.getUint32(o+=2,!1))return t({size:n.response.size,type:n.response.type,width:a.width,height:a.height,orientation:-1});var c=18761==i.getUint16(o+=6,!1);o+=i.getUint32(o+4,c);var u=i.getUint16(o,c);o+=2;for(var d=0;d<u;d++)if(274==i.getUint16(o+12*d,c))return t({size:n.response.size,type:n.response.type,width:a.width,height:a.height,orientation:i.getUint16(o+12*d+8,c)})}else{if(65280!=(65280&s))break;o+=i.getUint16(o,!1)}}return t({size:n.response.size,type:n.response.type,width:a.width,height:a.height,orientation:-1})},i.readAsArrayBuffer(n.response)}},i.send()}},_result:function(e,t){a.push(e),r+=1,i.length-1>=r?this._cpImg():(uni.hideLoading(),this.$emit("result",a))},_err:function(e){uni.hideLoading(),this.$emit("err",e)}}};t.default=o},b0aa:function(e,t,n){"use strict";n.r(t);var a=n("3cdc"),i=n("c005");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("1006");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"697b345a",null,!1,a["a"],o);t["default"]=c.exports},bd8a:function(e,t,n){"use strict";var a=n("9e6b"),i=n.n(a);i.a},be6f:function(e,t,n){"use strict";var a=n("d0d2"),i=n.n(a);i.a},c005:function(e,t,n){"use strict";n.r(t);var a=n("708d"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},c6c4:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"._cpimg[data-v-11b87987]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),e.exports=t},c78f:function(e,t,n){"use strict";n.r(t);var a=n("e072"),i=n("f828");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("bd8a");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"42614460",null,!1,a["a"],o);t["default"]=c.exports},cae7:function(e,t,n){"use strict";n.r(t);var a=n("0910"),i=n("813b");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("f7b1");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"11b87987",null,!1,a["a"],o);t["default"]=c.exports},cfc2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{show:!1,username:uni.getStorageSync("username")}},methods:{toIndex:function(){uni.navigateTo({url:"/pages/index/index"})},loginOut:function(){uni.showModal({title:"登出",content:"確定退出登錄?",success:function(e){e.confirm&&uni.reLaunch({url:"/pages/login/login"})}})}}};t.default=a},d0d2:function(e,t,n){var a=n("e64a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("051d5cb8",a,!0,{sourceMap:!1,shadowMode:!1})},d496:function(e,t,n){"use strict";n.r(t);var a=n("2ca3"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},d7a0:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".uni-transition[data-v-016ede03]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-016ede03]{opacity:0}.fade-active[data-v-016ede03]{opacity:1}.slide-top-in[data-v-016ede03]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-016ede03]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-016ede03]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-016ede03]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-016ede03]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-016ede03]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-016ede03]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-016ede03]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-016ede03]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-016ede03]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-016ede03]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""]),e.exports=t},e072:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"headerWrap"},[a("v-uni-view",{staticClass:"nav-background"},[a("img",{staticClass:"menu-btn op",attrs:{src:n("2c20")},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.show=!e.show}}}),a("v-uni-view",{class:["dropMenu",{show:e.show}]},[a("v-uni-view",{staticClass:"menuList ju al"},[e._v("你好, "+e._s(e.username))]),a("v-uni-view",{staticClass:"menuList op ju al",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toIndex.apply(void 0,arguments)}}},[e._v("我的報工記錄")]),a("v-uni-view",{staticClass:"menuList ju al op",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.loginOut.apply(void 0,arguments)}}},[e._v("登出")])],1)],1)],1)},r=[]},e64a:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */uni-view{font-size:%?30?%;color:grey}.ju{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.al{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.sb{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.sa{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.op:active{opacity:.4}.flex10{-webkit-box-flex:10;-webkit-flex:10;flex:10}.headerWrap{position:-webkit-sticky;position:sticky;top:0}.imgBox{position:relative}.delImg{position:absolute;right:0;top:0;width:%?40?%;height:%?40?%;z-index:100}.addSubBtn{width:%?42?%;height:%?45?%;border:solid #ccc 1px}.delBtn{padding:%?10?% %?40?%;background:#007aff;color:#fff}.input{padding:%?10?%;margin:%?5?% 0}",""]),e.exports=t},e8a1:function(e,t,n){var a=n("c6c4");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("045beb9a",a,!0,{sourceMap:!1,shadowMode:!1})},f3ac:function(e,t,n){"use strict";n.r(t);var a=n("11d2"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},f7b1:function(e,t,n){"use strict";var a=n("e8a1"),i=n.n(a);i.a},f828:function(e,t,n){"use strict";n.r(t);var a=n("cfc2"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},f937:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShow?n("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[e.ani.in],style:"transform:"+e.transform+";"+e.stylesObject,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}},[e._t("default")],2):e._e()},r=[]},fbe7:function(e,t,n){"use strict";n.r(t);var a=n("f937"),i=n("5b28");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("27c0");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"016ede03",null,!1,a["a"],o);t["default"]=c.exports},fc81:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[]}});