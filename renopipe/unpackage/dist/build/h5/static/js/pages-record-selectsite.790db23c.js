(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-selectsite"],{"07ed":function(t,e,r){var n=r("24fb"),i=r("1de5"),a=r("ffac");e=n(!1);var o=i(a);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */body[data-v-4a240c4a]{font-family:Abel}\r\n/*header的style*/.nav-background[data-v-4a240c4a]{background:#5f98ec}.scrollSection[data-v-4a240c4a]{height:350px;overflow-x:auto;border:solid 2px #d3d3d3;background:#e8e8e8;overflow-y:auto}\r\n/*header的button的css*/.menu-btn[data-v-4a240c4a]{width:.9rem;height:.9rem;padding:10px;cursor:pointer}.logoBox[data-v-4a240c4a]{width:40%;height:%?150?%;background:url('+o+") no-repeat;background-size:100%;background-position:40% 20%;margin-left:.5rem}.title-padding[data-v-4a240c4a]{padding:0 .7rem;margin-bottom:.4rem}.body-padding[data-v-4a240c4a]{padding:0 .7rem}.btn-color[data-v-4a240c4a]{background:#3a75bb;color:#fff;width:5rem}.main[data-v-4a240c4a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.customize-btn[data-v-4a240c4a]{padding:.7rem}.hr-line[data-v-4a240c4a]{margin-top:10px;color:#e9e8e8}.title[data-v-4a240c4a]{font-size:1rem;color:grey}.scoll[data-v-4a240c4a]{overflow-x:scroll;overflow:-moz-scrollbars-vertical;height:20rem}h3[data-v-4a240c4a]{color:grey}select[data-v-4a240c4a]{padding:.6rem;width:100%}table[data-v-4a240c4a]{width:100%;margin-top:.5rem}table[data-v-4a240c4a], th[data-v-4a240c4a], td[data-v-4a240c4a]{border:1px solid #000;border-collapse:collapse}th[data-v-4a240c4a], td[data-v-4a240c4a]{padding:15px;text-align:left;font-size:.5rem}table#t01 tr[data-v-4a240c4a]:nth-child(even){background-color:#f8fcff}table#t01 tr[data-v-4a240c4a]:nth-child(odd){background-color:#f8fcff}table#t01 th[data-v-4a240c4a]{background-color:#3a75bb;color:#fff;height:.5rem}tr#header[data-v-4a240c4a]{line-height:.1rem}.loginWrap[data-v-4a240c4a]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.btmBorder[data-v-4a240c4a]{font-size:.6rem;border-bottom:solid 20px #5f98ec;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.keywordSearch[data-v-4a240c4a]{border:solid #666 1px;padding:%?10?%}.Wrap[data-v-4a240c4a]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.word-in-btn[data-v-4a240c4a]{padding:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:.9rem}.qrWrap[data-v-4a240c4a]{width:100%;height:%?750?%}.qrView[data-v-4a240c4a]{border:solid #ccc 1px;-webkit-box-sizing:border-box;box-sizing:border-box}.siteBorder[data-v-4a240c4a]{margin:5px;padding:10px;border:solid 1px #5f98ec;background:#fff}",""]),t.exports=e},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,a){var o=t.apply(e,r);function s(t){n(o,i,a,s,c,"next",t)}function c(t){n(o,i,a,s,c,"throw",t)}s(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"1de5":function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2c65":function(t,e,r){"use strict";var n=r("97f1"),i=r.n(n);i.a},"5f59":function(t,e,r){"use strict";r.r(e);var n=r("8d0d"),i=r("8fb5");for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);r("2c65");var o,s=r("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"4a240c4a",null,!1,n["a"],o);e["default"]=c.exports},6062:function(t,e,r){"use strict";var n=r("6d61"),i=r("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"8d0d":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"Wrap sb la"},[r("Header"),r("v-uni-view",{staticClass:"selectsiteWrap flex10"},[r("v-uni-view",{staticClass:"logoBox"}),r("v-uni-view",{staticClass:"title-padding"},[r("div",{staticClass:"main"},[r("p",{staticClass:"title"},[t._v("掃描QR code或選擇地盤")])]),r("hr",{staticClass:"hr-line"})]),r("p",{staticClass:"error"},[t._v(t._s(t.error))]),r("v-uni-view",{staticClass:"qrWrap"},[r("qrcode-stream",{staticClass:"qrView",on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.onInit.apply(void 0,arguments)},decode:function(e){arguments[0]=e=t.$handleEvent(e),t.onDecode.apply(void 0,arguments)}}})],1),r("br"),r("hr"),r("br"),r("p",{staticStyle:{"text-align":"center"}},[t._v("如未能使用QR code，可選擇手動輸入")]),r("br"),r("v-uni-view",{staticClass:"body-padding"},[r("v-uni-view",[r("v-uni-view",[t._v("地盤項目編號搜索:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.pro,expression:"pro"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.pro=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("全部")]),t._l(t.proList,(function(e,n){return r("option",{domProps:{value:e}},[t._v(t._s(e))])}))],2)],1),r("v-uni-view",[r("v-uni-view",[t._v("地盤地區搜索:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.dis1,expression:"dis1"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.dis1=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("全部")]),t._l(t.disList1,(function(e,n){return r("option",{domProps:{value:e}},[t._v(t._s(e))])}))],2)],1),r("v-uni-view",[r("v-uni-view",[t._v("地盤地址搜索:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.dis2,expression:"dis2"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.dis2=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("全部")]),t._l(t.sitename,(function(e,n){return r("option",{domProps:{value:e}},[t._v(t._s(e))])}))],2)],1),r("v-uni-view",{staticClass:"ju al",staticStyle:{padding:"20upx 0"}},[r("v-uni-view",{staticStyle:{"border-top":"dashed #333333 2px",flex:"10"}}),r("v-uni-view",{staticStyle:{padding:"0 20upx"}},[t._v("或")]),r("v-uni-view",{staticStyle:{"border-top":"dashed #333333 2px",flex:"10"}})],1),r("v-uni-view",[r("v-uni-view",[t._v("關鍵字搜索")]),r("v-uni-input",{staticClass:"keywordSearch",attrs:{type:"text",placeholder:"搜索地盤"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),r("small",{staticStyle:{color:"red"}},[t._v("所有關鍵字大小不可以寫錯以及必須要以繁體字輸入"),r("br"),t._v('(e.g:可輸入"T0050", "AKK-DMA10A", "王屋村", 等等)')])],1),r("br"),r("div",{staticClass:"btn-color customize-btn",attrs:{long:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[r("span",{staticClass:"word-in-btn"},[t._v("搜索")])])],1),r("br"),r("br"),r("v-uni-view",{staticClass:"body-padding scrollSection"},[t.noData?r("v-uni-view",{staticClass:"ju",staticStyle:{padding:"20upx"}},[t._v("暫無數據")]):t._e(),t._l(t.siteList,(function(e,n){return r("v-uni-view",{key:n,staticClass:"siteBorder op",attrs:{value:e.ID},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.toCreate(e)}}},[r("b",{staticStyle:{color:"#007AFF"}},[t._v(t._s(e.name)+" | "+t._s(e.cname))]),r("br"),t._v(t._s(e.siteCode1)+"("+t._s(e.siteCode2)+") | "+t._s(e.siteCode3)),r("br"),t._v(t._s(e.dma)),r("br"),t._v(t._s(e.emfm))])}))],2)],1),r("v-uni-view",{staticClass:"footer btmBorder"},[t._v("©RenoPipe Construction Co. Ltd. Copyright © 2020")])],1)},a=[]},"8fb5":function(t,e,r){"use strict";r.r(e);var n=r("d2a2"),i=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=w;var d="suspendedStart",f="suspendedYield",v="executing",p="completed",h={},m={};m[o]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(A([])));y&&y!==n&&i.call(y,o)&&(m=y);var b=k.prototype=_.prototype=Object.create(m);L.prototype=b.constructor=k,k.constructor=L,k[c]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},E(C.prototype),C.prototype[s]=function(){return this},l.AsyncIterator=C,l.async=function(t,e,r,n){var i=new C(w(t,e,r,n));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(b),b[c]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;D(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),h}}}function w(t,e,r,n){var i=e&&e.prototype instanceof _?e:_,a=Object.create(i.prototype),o=new N(n||[]);return a._invoke=S(t,r,o),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function e(r,n,a,o){var s=x(t[r],t,n);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,o)}),(function(t){e("throw",t,a,o)})):Promise.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return e("throw",t,a,o)}))}o(s.arg)}var r;function n(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=n}function S(t,e,r){var n=d;return function(i,a){if(n===v)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return P()}r.method=i,r.arg=a;while(1){var o=r.delegate;if(o){var s=j(o,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?p:f,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=x(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,h;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"97f1":function(t,e,r){var n=r("07ed");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("e1a51362",n,!0,{sourceMap:!1,shadowMode:!1})},d2a2:function(t,e,r){"use strict";(function(t){var n=r("4ea4");r("4de4"),r("4160"),r("c975"),r("d3b7"),r("ac1f"),r("6062"),r("3ca3"),r("841c"),r("159b"),r("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var i=n(r("1da1")),a=n(r("2909")),o={data:function(){return{val:"",site:{},siteList:[],allData:[],error:null,proList:[],disList1:[],sitename:[],pro:"",dis1:"",dis2:"",keyword:"",noData:!1}},onLoad:function(){this.getSite()},watch:{pro:function(t){this.search();var e=this;e.disList1=[],e.sitename=[],e.allData.forEach((function(r){-1!=r.project.indexOf(t)&&(e.disList1.push(r.siteCode2),e.sitename.push(r.cname))})),e.dis1="",e.disList1=(0,a.default)(new Set(e.disList1)),e.sitename=(0,a.default)(new Set(e.sitename))},dis1:function(e){var r=this;r.sitename=[],r.allData.forEach((function(n){t.log(n.siteCode1,e),-1!=n.siteCode2.indexOf(e)&&r.sitename.push(n.cname)})),r.dis2="",r.sitename=(0,a.default)(new Set(r.sitename)),this.search()},dis2:function(t){this.search()}},computed:{baseURL:function(){return this.$store.state.baseURL}},methods:{onInit:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t;case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),"NotAllowedError"===r.t0.name?e.error="錯誤: 需要權限使用手機上的相機":"NotFoundError"===r.t0.name?e.error="錯誤: 本設備沒有發現具備相機功能":"NotSupportedError"===r.t0.name?e.error="錯誤: 從不合法渠道訪問請重新登陸":"NotReadableError"===r.t0.name?e.error="錯誤: 偵測到相機正在被其他程式佔用":"OverconstrainedError"===r.t0.name?e.error="錯誤: 相機現在無法啟用":"StreamApiNotSupportedError"===r.t0.name&&(e.error="錯誤: 本瀏覽器不支援QR code掃描，如果是Iphone請使用safari，如果是安卓手機請使用Chorme或Firefox");case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()},search:function(){var t=this;t.siteList=t.allData.filter((function(e){for(var r in e)if("string"==typeof e[r]&&-1!=e[r].indexOf(t.pro))return!0})),t.siteList=t.siteList.filter((function(e){for(var r in e)if("string"==typeof e[r]&&-1!=e[r].indexOf(t.dis1))return!0})),t.siteList=t.siteList.filter((function(e){for(var r in e)if("string"==typeof e[r]&&-1!=e[r].indexOf(t.dis2))return!0})),t.siteList=t.siteList.filter((function(e){for(var r in e)if("string"==typeof e[r]&&-1!=e[r].indexOf(t.keyword))return!0})),0==t.siteList.length?t.noData=!0:t.noData=!1},toCreate:function(t){this.val=t.ID,uni.navigateTo({url:"/pages/record/create?siteId="+this.val})},QRtoCreate:function(t){uni.navigateTo({url:"/pages/record/create?siteId="+t})},onDecode:function(t){var e=this;e.siteList.forEach((function(r){r.uuid==t&&(e.val=String(r.ID),e.QRtoCreate(e.val))}))},chooseSite:function(t){},getSite:function(){var e=this;uni.request({url:e.baseURL+"site",header:{Authorization:uni.getStorageSync("token")},method:"GET",success:function(r){t.log(r),r.data&&(e.siteList=r.data,e.allData=r.data,e.val=e.siteList[0].ID,e.getFilterData())}})},getFilterData:function(){var t=this;t.proList=[],t.disList1=[],t.sitename=[],t.siteList.forEach((function(e){t.proList.push(e.project),t.disList1.push(e.siteCode2),t.sitename.push(e.cname)})),t.proList=(0,a.default)(new Set(t.proList)),t.disList1=(0,a.default)(new Set(t.disList1)),t.sitename=(0,a.default)(new Set(t.sitename))}}};e.default=o}).call(this,r("5a52")["default"])},ffac:function(t,e,r){t.exports=r.p+"static/img/logo.c71ee8a6.png"}}]);