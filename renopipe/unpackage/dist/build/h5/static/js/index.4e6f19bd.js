(function(e){function n(n){for(var o,a,c=n[0],u=n[1],s=n[2],d=0,f=[];d<c.length;d++)a=c[d],r[a]&&f.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(n);while(f.length)f.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={index:0},i=[];function a(e){return c.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-login-login":"pages-login-login","pages-record-complete":"pages-record-complete","pages-record-completeEdit":"pages-record-completeEdit","pages-record-create":"pages-record-create","pages-record-detail":"pages-record-detail","pages-record-edit":"pages-record-edit","pages-record-selectsite":"pages-record-selectsite"}[e]||e)+"."+{"pages-index-index":"f44cbb07","pages-login-login":"3c5ac4d0","pages-record-complete":"40355365","pages-record-completeEdit":"76e82b0c","pages-record-create":"8b17f284","pages-record-detail":"09dc38ce","pages-record-edit":"474c6d01","pages-record-selectsite":"fc7ed1c0"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e),i=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,t[1](a)}r[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="./",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var l=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("1329")},"11d2":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{}},props:{left:{default:0},top:{default:0},height:{default:0}},created:function(){uni.getSystemInfoSync().statusBarHeight;var e=getCurrentPages();e[e.length-1]},onUnload:function(){clearTimeout(this.t)},methods:{onmarked:function(e,n){var t=this;this.$emit("getCode",n),this.t=setTimeout((function(){t.barcode.start()}),1e3)}}};n.default=o},1210:function(e,n,t){"use strict";t.r(n);var o=t("28a1"),r=t("f3ac");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);var a,c=t("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"aba8a9c0",null,!1,o["a"],a);n["default"]=u.exports},1329:function(e,n,t){"use strict";var o=t("ee27"),r=o(t("f3f3"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("17f7"),t("06b9");var i=o(t("e143")),a=o(t("4819")),c=o(t("68d6")),u=o(t("1210")),s=o(t("e6d4")),d=o(t("c78f"));i.default.component("Header",d.default),i.default.config.productionTip=!1,i.default.component("scan",u.default),i.default.use(s.default),a.default.mpType="app";var l=new i.default((0,r.default)({store:c.default},a.default));l.$mount()},"17f7":function(e,n,t){"use strict";(function(e){var n=t("ee27"),o=n(t("e143"));e["____62E8C0A____"]=!0,delete e["____62E8C0A____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"Renopipe",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="2.8.8",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e5,connectSocket:6e4,uploadFile:6e5,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-login-login",(function(e){var n={component:t.e("pages-login-login").then(function(){return e(t("4c61"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("0ff1"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-record-selectsite",(function(e){var n={component:t.e("pages-record-selectsite").then(function(){return e(t("5f59"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-record-create",(function(e){var n={component:t.e("pages-record-create").then(function(){return e(t("829a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-record-edit",(function(e){var n={component:t.e("pages-record-edit").then(function(){return e(t("5f55"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-record-detail",(function(e){var n={component:t.e("pages-record-detail").then(function(){return e(t("0b22"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-record-complete",(function(e){var n={component:t.e("pages-record-complete").then(function(){return e(t("e55e"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-record-completeEdit",(function(e){var n={component:t.e("pages-record-completeEdit").then(function(){return e(t("cb40"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-login-login",{slot:"page"})])}},meta:{id:1,name:"pages-login-login",isNVue:!1,pagePath:"pages/login/login",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",windowTop:0}},{path:"/pages/record/selectsite",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-selectsite",{slot:"page"})])}},meta:{name:"pages-record-selectsite",isNVue:!1,pagePath:"pages/record/selectsite",windowTop:0}},{path:"/pages/record/create",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-create",{slot:"page"})])}},meta:{name:"pages-record-create",isNVue:!1,pagePath:"pages/record/create",windowTop:0}},{path:"/pages/record/edit",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-edit",{slot:"page"})])}},meta:{name:"pages-record-edit",isNVue:!1,pagePath:"pages/record/edit",windowTop:0}},{path:"/pages/record/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-detail",{slot:"page"})])}},meta:{name:"pages-record-detail",isNVue:!1,pagePath:"pages/record/detail",windowTop:0}},{path:"/pages/record/complete",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-complete",{slot:"page"})])}},meta:{name:"pages-record-complete",isNVue:!1,pagePath:"pages/record/complete",windowTop:0}},{path:"/pages/record/completeEdit",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-completeEdit",{slot:"page"})])}},meta:{name:"pages-record-completeEdit",isNVue:!1,pagePath:"pages/record/completeEdit",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},"28a1":function(e,n,t){"use strict";var o,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{attrs:{id:"barcode"}})},i=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},"2c20":function(e,n,t){e.exports=t.p+"static/img/hamburger-btn.37358ed2.png"},"2ca3":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){e.log("App Launch")},onShow:function(){e.log("App Show")},onHide:function(){e.log("App Hide")}};n.default=t}).call(this,t("5a52")["default"])},"3c95":function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.menu-btn[data-v-42614460]{width:.9rem;height:.9rem;padding:10px;cursor:pointer}.nav-background[data-v-42614460]{background:#5f98ec;position:relative}.dropMenu[data-v-42614460]{width:40vw;max-height:0;overflow:hidden;-webkit-transition:.3s;transition:.3s;background:#f0f0f0;position:absolute;left:0;top:100%;border-radius:0 0 %?30?% 0}.menuList[data-v-42614460]{padding:%?10?% %?20?%;border-top:solid #ccc 1px}.menuList[data-v-42614460]:last-child{margin-bottom:%?30?%}.show[data-v-42614460]{max-height:40vh!important}.headerWrap[data-v-42614460]{position:-webkit-sticky;position:sticky;top:0;z-index:100}',""]),e.exports=n},4819:function(e,n,t){"use strict";t.r(n);var o=t("5a6f"),r=t("d496");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("be6f");var a,c=t("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=u.exports},"5a6f":function(e,n,t){"use strict";var o,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},"68d6":function(e,n,t){"use strict";var o=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t("e143")),i=o(t("2f62"));r.default.use(i.default);var a=new i.default.Store({state:{baseURL:"https://renopipe.co/",site:{}},mutations:{setState:function(e,n){e[n.key]=n.value}}}),c=a;n.default=c},"9e6b":function(e,n,t){var o=t("3c95");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=t("4f06").default;r("160edcd4",o,!0,{sourceMap:!1,shadowMode:!1})},bd8a:function(e,n,t){"use strict";var o=t("9e6b"),r=t.n(o);r.a},be6f:function(e,n,t){"use strict";var o=t("d0d2"),r=t.n(o);r.a},c78f:function(e,n,t){"use strict";t.r(n);var o=t("e072"),r=t("f828");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("bd8a");var a,c=t("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,"42614460",null,!1,o["a"],a);n["default"]=u.exports},cfc2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{show:!1,username:uni.getStorageSync("username")}},methods:{toIndex:function(){uni.navigateTo({url:"/pages/index/index"})},loginOut:function(){uni.showModal({title:"登出",content:"確定退出登錄?",success:function(e){e.confirm&&uni.reLaunch({url:"/pages/login/login"})}})}}};n.default=o},d0d2:function(e,n,t){var o=t("e64a");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=t("4f06").default;r("051d5cb8",o,!0,{sourceMap:!1,shadowMode:!1})},d496:function(e,n,t){"use strict";t.r(n);var o=t("2ca3"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},e072:function(e,n,t){"use strict";var o,r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("v-uni-view",{staticClass:"headerWrap"},[o("v-uni-view",{staticClass:"nav-background"},[o("img",{staticClass:"menu-btn op",attrs:{src:t("2c20")},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.show=!e.show}}}),o("v-uni-view",{class:["dropMenu",{show:e.show}]},[o("v-uni-view",{staticClass:"menuList ju al"},[e._v("你好, "+e._s(e.username))]),o("v-uni-view",{staticClass:"menuList op ju al",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.toIndex.apply(void 0,arguments)}}},[e._v("我的報工記錄")]),o("v-uni-view",{staticClass:"menuList ju al op",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.loginOut.apply(void 0,arguments)}}},[e._v("登出")])],1)],1)],1)},i=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},e64a:function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */uni-view{font-size:%?30?%;color:grey}.ju{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.al{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.sb{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.sa{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.op:active{opacity:.4}.flex10{-webkit-box-flex:10;-webkit-flex:10;flex:10}.headerWrap{position:-webkit-sticky;position:sticky;top:0}.imgBox{position:relative}.delImg{position:absolute;right:0;top:0;width:%?40?%;height:%?40?%;z-index:100}.addSubBtn{width:%?42?%;height:%?45?%;border:solid #ccc 1px}",""]),e.exports=n},f3ac:function(e,n,t){"use strict";t.r(n);var o=t("11d2"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a},f828:function(e,n,t){"use strict";t.r(n);var o=t("cfc2"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=r.a}});