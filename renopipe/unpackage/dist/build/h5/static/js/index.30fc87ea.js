(function(e){function n(n){for(var i,a,c=n[0],u=n[1],s=n[2],d=0,f=[];d<c.length;d++)a=c[d],r[a]&&f.push(r[a][0]),r[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],i=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(i=!1)}i&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var i={},r={index:0},o=[];function a(e){return c.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-login-login":"pages-login-login","pages-record-complete":"pages-record-complete","pages-record-completeEdit":"pages-record-completeEdit","pages-record-create":"pages-record-create","pages-record-detail":"pages-record-detail","pages-record-edit":"pages-record-edit","pages-record-selectsite":"pages-record-selectsite"}[e]||e)+"."+{"pages-index-index":"1ca3676d","pages-login-login":"506e0361","pages-record-complete":"55661584","pages-record-completeEdit":"e8785d45","pages-record-create":"22b83bd0","pages-record-detail":"6067bc77","pages-record-edit":"3d0bfcc8","pages-record-selectsite":"c82c2adf"}[e]+".js"}function c(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,i){t=r[e]=[n,i]}));n.push(t[2]=i);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=a(e),o=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+i+": "+o+")");a.type=i,a.request=o,t[1](a)}r[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(n)},c.m=e,c.c=i,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)c.d(t,i,function(n){return e[n]}.bind(null,i));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="./",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var l=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("8a90")},"0504":function(e,n,t){"use strict";t.r(n);var i=t("2e26"),r=t("0e3b");for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);var a,c=t("f0c5"),u=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"8a4a3618",null,!1,i["a"],a);n["default"]=u.exports},"0e3b":function(e,n,t){"use strict";t.r(n);var i=t("8b84"),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=r.a},1760:function(e,n,t){"use strict";t.r(n);var i=t("37e3"),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=r.a},"1c67":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{show:!1,username:uni.getStorageSync("username")}},methods:{toIndex:function(){uni.navigateTo({url:"/pages/index/index"})},loginOut:function(){uni.showModal({title:"登出",content:"確定退出登錄?",success:function(e){e.confirm&&uni.reLaunch({url:"/pages/login/login"})}})}}};n.default=i},"22ea":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){e.log("App Launch")},onShow:function(){e.log("App Show")},onHide:function(){e.log("App Hide")}};n.default=t}).call(this,t("5a52")["default"])},"282a":function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}))},"2e26":function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{attrs:{id:"barcode"}})},o=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}))},"344e":function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */uni-view{font-size:%?30?%;color:grey}.ju{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.al{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.sb{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.sa{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.op:active{opacity:.4}.flex10{-webkit-box-flex:10;-webkit-flex:10;flex:10}.headerWrap{position:-webkit-sticky;position:sticky;top:0}.imgBox{position:relative}.delImg{position:absolute;right:0;top:0;width:%?40?%;height:%?40?%;z-index:100}.addSubBtn{width:%?42?%;height:%?45?%;border:solid #ccc 1px}.delBtn{padding:%?10?% %?40?%;background:#007aff;color:#fff}",""]),e.exports=n},"37e3":function(e,n,t){"use strict";t("99af"),t("c975"),t("ace4"),t("b420"),t("a9e3"),t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=[],r="",o=0,a={name:"cpimg",props:{maxWidth:{type:Number,default:750},type:{type:String,default:"url"},ql:{type:Number,default:.92},src:{type:String,default:""},number:{type:Number,default:1},fixOrientation:{type:Boolean,default:!0},size:{type:Number,default:5e5}},data:function(){return{cWidth:750,cHeight:750}},onUnload:function(){},methods:{_changImg:function(){var e=this;""==e.src?uni.chooseImage({count:e.number,sizeType:["compressed"],success:function(n){i=[],r=n.tempFilePaths,o=0,e._cpImg()},fail:function(n){e._err(n)}}):_cpImg(e.src)},_cpImg:function(){var e=this,n=r[o];function t(t,i){if(t.type.indexOf("png")>=0)return e._result(n),!1;var r,o,a=t.width,c=t.height,u=1,s=1;(i/1024>=e.size||t.width>=e.maxWidth)&&(t.width>=t.height&&t.width>=e.maxWidth?(t.height=e.maxWidth*t.height/t.width,t.width=e.maxWidth):t.width<t.height&&t.height>=e.maxWidth&&(t.width=e.maxWidth*t.width/t.height,t.height=e.maxWidth),u=t.width/a,s=t.height/c),r=a*u,o=c*s;var d=uni.createCanvasContext("_myCanvas",e);if(e.cWidth=t.width,e.cHeight=t.height,e.fixOrientation){var l=t.orientation;[5,6,7,8,"right","left","right-mirrored","left-mirrored"].indexOf(l)>-1&&(e.cWidth=t.height,e.cHeight=t.width),2==l||"up-mirrored"==l?(d.translate(r,0),d.scale(-1,1)):3==l||"down"==l?(d.translate(r,o),d.rotate(Math.PI)):4==l||"down-mirrored"==l?(d.translate(0,o),d.scale(1,-1)):5==l||"right-mirrored"==l?(d.rotate(.5*Math.PI),d.scale(1,-1)):6==l||"right"==l?(d.rotate(.5*Math.PI),d.translate(0,-o)):7==l||"left-mirrored"==l?(d.rotate(.5*Math.PI),d.translate(r,-o),d.scale(-1,1)):8==l||"left"==l?(d.rotate(-.5*Math.PI),d.translate(-r,0)):d.translate(0,0)}var f=0;function p(){var n=e.maxWidth/5;return n>=600?600:n<=100?100:n}f=p(),setTimeout((function(){d.drawImage(n,0,0,r,o),d.draw(!1,(function(){var n=0;n=10,setTimeout((function(){uni.canvasToTempFilePath({width:Number(e.cWidth),height:Number(e.cHeight),destWidth:Number(e.cWidth),destHeight:Number(e.cHeight),canvasId:"_myCanvas",fileType:"jpg",quality:Number(e.ql),success:function(n){if("base64"==e.type){e._result(n.tempFilePath)}else e._result(n.tempFilePath)},fail:function(n){e._err(n)}},e)}),n)}))}),f)}uni.showLoading({title:"图片压缩中 ".concat(o+1,"/").concat(r.length),mask:!0}),e._getH5ImageInfo(n,(function(e){t(e,e.size)}))},_reverseImgData:function(e){for(var n=e.width,t=e.height,i=0,r=0;r<t/2;r++)for(var o=0;o<4*n;o++)i=e.data[r*n*4+o],e.data[r*n*4+o]=e.data[(t-r-1)*n*4+o],e.data[(t-r-1)*n*4+o]=i;return e},_getH5ImageInfo:function(e,n){var t=new Image;t.src=e,t.onload=function(t){var i=this,r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="blob",r.onload=function(e){var t=this;if(200==t.status||0===t.status){var r=new FileReader;r.onload=function(e){var r=new DataView(this.result);if(65496!=r.getUint16(0,!1))return n({size:t.response.size,type:t.response.type,width:i.width,height:i.height,orientation:-1});var o=r.byteLength,a=2;while(a<o){var c=r.getUint16(a,!1);if(a+=2,65505==c){if(1165519206!=r.getUint32(a+=2,!1))return n({size:t.response.size,type:t.response.type,width:i.width,height:i.height,orientation:-1});var u=18761==r.getUint16(a+=6,!1);a+=r.getUint32(a+4,u);var s=r.getUint16(a,u);a+=2;for(var d=0;d<s;d++)if(274==r.getUint16(a+12*d,u))return n({size:t.response.size,type:t.response.type,width:i.width,height:i.height,orientation:r.getUint16(a+12*d+8,u)})}else{if(65280!=(65280&c))break;a+=r.getUint16(a,!1)}}return n({size:t.response.size,type:t.response.type,width:i.width,height:i.height,orientation:-1})},r.readAsArrayBuffer(t.response)}},r.send()}},_result:function(e,n){i.push(e),o+=1,r.length-1>=o?this._cpImg():(uni.hideLoading(),this.$emit("result",i))},_err:function(e){uni.hideLoading(),this.$emit("err",e)}}};n.default=a},"387f":function(e,n,t){"use strict";t.r(n);var i=t("1c67"),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=r.a},"46a5":function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"_cpimg"},[t("v-uni-canvas",{style:{width:e.cWidth+"px",height:e.cHeight+"px"},attrs:{id:"_myCanvas","canvas-id":"_myCanvas"}})],1)},o=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}))},"498ad":function(e,n,t){"use strict";t.r(n);var i=t("22ea"),r=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,(function(){return i[e]}))}(o);n["default"]=r.a},"555c":function(e,n,t){"use strict";var i=t("a5fa"),r=t.n(i);r.a},"6e43":function(e,n,t){var i=t("344e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=t("4f06").default;r("48fc1700",i,!0,{sourceMap:!1,shadowMode:!1})},"73e5":function(e,n,t){"use strict";t.r(n);var i=t("282a"),r=t("498ad");for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t("fce4");var a,c=t("f0c5"),u=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],a);n["default"]=u.exports},"7b44":function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",{staticClass:"headerWrap"},[i("v-uni-view",{staticClass:"nav-background"},[i("img",{staticClass:"menu-btn op",attrs:{src:t("a65f")},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.show=!e.show}}}),i("v-uni-view",{class:["dropMenu",{show:e.show}]},[i("v-uni-view",{staticClass:"menuList ju al"},[e._v("你好, "+e._s(e.username))]),i("v-uni-view",{staticClass:"menuList op ju al",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.toIndex.apply(void 0,arguments)}}},[e._v("我的報工記錄")]),i("v-uni-view",{staticClass:"menuList ju al op",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.loginOut.apply(void 0,arguments)}}},[e._v("登出")])],1)],1)],1)},o=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i}))},"8a90":function(e,n,t){"use strict";var i=t("ee27"),r=i(t("f3f3"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("ccff"),t("06b9");var o=i(t("e143")),a=i(t("73e5")),c=i(t("de22")),u=i(t("0504")),s=i(t("693b")),d=i(t("b4b3")),l=i(t("bd5a"));o.default.component("cpimg",l.default),o.default.component("Header",d.default),o.default.config.productionTip=!1,o.default.component("scan",u.default),o.default.use(s.default),a.default.mpType="app";var f=new o.default((0,r.default)({store:c.default},a.default));f.$mount()},"8b84":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{}},props:{left:{default:0},top:{default:0},height:{default:0}},created:function(){uni.getSystemInfoSync().statusBarHeight;var e=getCurrentPages();e[e.length-1]},onUnload:function(){clearTimeout(this.t)},methods:{onmarked:function(e,n){var t=this;this.$emit("getCode",n),this.t=setTimeout((function(){t.barcode.start()}),1e3)}}};n.default=i},"8ec1":function(e,n,t){var i=t("9be7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=t("4f06").default;r("6cc87b0a",i,!0,{sourceMap:!1,shadowMode:!1})},"96e7":function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.menu-btn[data-v-82c1abe8]{width:.9rem;height:.9rem;padding:10px;cursor:pointer}.nav-background[data-v-82c1abe8]{background:#5f98ec;position:relative}.dropMenu[data-v-82c1abe8]{width:40vw;max-height:0;overflow:hidden;-webkit-transition:.3s;transition:.3s;background:#f0f0f0;position:absolute;left:0;top:100%;border-radius:0 0 %?30?% 0}.menuList[data-v-82c1abe8]{padding:%?10?% %?20?%;border-top:solid #ccc 1px}.menuList[data-v-82c1abe8]:last-child{margin-bottom:%?30?%}.show[data-v-82c1abe8]{max-height:40vh!important}.headerWrap[data-v-82c1abe8]{position:-webkit-sticky;position:sticky;top:0;z-index:100}',""]),e.exports=n},"9be7":function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,"._cpimg[data-v-7f81d852]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),e.exports=n},a5fa:function(e,n,t){var i=t("96e7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=t("4f06").default;r("5c3571dd",i,!0,{sourceMap:!1,shadowMode:!1})},a65f:function(e,n,t){e.exports=t.p+"static/img/hamburger-btn.37358ed2.png"},b477:function(e,n,t){"use strict";var i=t("8ec1"),r=t.n(i);r.a},b4b3:function(e,n,t){"use strict";t.r(n);var i=t("7b44"),r=t("387f");for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t("555c");var a,c=t("f0c5"),u=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"82c1abe8",null,!1,i["a"],a);n["default"]=u.exports},bd5a:function(e,n,t){"use strict";t.r(n);var i=t("46a5"),r=t("1760");for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t("b477");var a,c=t("f0c5"),u=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"7f81d852",null,!1,i["a"],a);n["default"]=u.exports},ccff:function(e,n,t){"use strict";(function(e){var n=t("ee27"),i=n(t("e143"));e["____62E8C0A____"]=!0,delete e["____62E8C0A____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"Renopipe",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e5,connectSocket:6e4,uploadFile:6e5,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},i.default.component("pages-login-login",(function(e){var n={component:t.e("pages-login-login").then(function(){return e(t("d8a4"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("0ab5"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-record-selectsite",(function(e){var n={component:t.e("pages-record-selectsite").then(function(){return e(t("09d1"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-record-create",(function(e){var n={component:t.e("pages-record-create").then(function(){return e(t("7184"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-record-edit",(function(e){var n={component:t.e("pages-record-edit").then(function(){return e(t("cf7b"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-record-detail",(function(e){var n={component:t.e("pages-record-detail").then(function(){return e(t("21b7"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-record-complete",(function(e){var n={component:t.e("pages-record-complete").then(function(){return e(t("458a"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),i.default.component("pages-record-completeEdit",(function(e){var n={component:t.e("pages-record-completeEdit").then(function(){return e(t("84214"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-login-login",{slot:"page"})])}},meta:{id:1,name:"pages-login-login",isNVue:!1,pagePath:"pages/login/login",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,pagePath:"pages/index/index",windowTop:0}},{path:"/pages/record/selectsite",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-selectsite",{slot:"page"})])}},meta:{name:"pages-record-selectsite",isNVue:!1,pagePath:"pages/record/selectsite",windowTop:0}},{path:"/pages/record/create",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-create",{slot:"page"})])}},meta:{name:"pages-record-create",isNVue:!1,pagePath:"pages/record/create",windowTop:0}},{path:"/pages/record/edit",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-edit",{slot:"page"})])}},meta:{name:"pages-record-edit",isNVue:!1,pagePath:"pages/record/edit",windowTop:0}},{path:"/pages/record/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-detail",{slot:"page"})])}},meta:{name:"pages-record-detail",isNVue:!1,pagePath:"pages/record/detail",windowTop:0}},{path:"/pages/record/complete",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-complete",{slot:"page"})])}},meta:{name:"pages-record-complete",isNVue:!1,pagePath:"pages/record/complete",windowTop:0}},{path:"/pages/record/completeEdit",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-record-completeEdit",{slot:"page"})])}},meta:{name:"pages-record-completeEdit",isNVue:!1,pagePath:"pages/record/completeEdit",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},de22:function(e,n,t){"use strict";var i=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("e143")),o=i(t("2f62"));r.default.use(o.default);var a=new o.default.Store({state:{baseURL:"https://renopipe.co/",site:{}},mutations:{setState:function(e,n){e[n.key]=n.value}}}),c=a;n.default=c},fce4:function(e,n,t){"use strict";var i=t("6e43"),r=t.n(i);r.a}});