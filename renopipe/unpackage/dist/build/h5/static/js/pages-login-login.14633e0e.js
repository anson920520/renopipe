(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"07d4":function(t,n,e){var o=e("24fb"),a=e("1de5"),s=e("ffac");n=o(!1);var i=a(s);n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.loginWrap[data-v-271cabb5]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.logoBox[data-v-271cabb5]{width:80%;height:%?350?%;background:url('+i+") no-repeat;background-size:100%;background-position:0 100%}.formTitle[data-v-271cabb5]{text-align:center;font-weight:700;font-size:%?40?%;padding-bottom:%?30?%}.formBox[data-v-271cabb5]{width:75%;position:relative;top:-20vh}.loginInput[data-v-271cabb5]{border:solid #cbd2d7 %?1?%;width:100%;margin:auto;-webkit-border-radius:%?10?%;border-radius:%?10?%;padding:%?10?% 0;text-indent:%?10?%;color:#768693;margin:%?19?% 0}.focus[data-v-271cabb5]{-webkit-box-shadow:0 0 %?12?% #b5bec5;box-shadow:0 0 %?12?% #b5bec5}.forget[data-v-271cabb5]{color:#3f8aca;border-bottom:solid #3f8aca %?1?%;font-size:%?28?%}.showPwd[data-v-271cabb5]{color:#6e7f8d;border-bottom:solid #6e7f8d %?1?%;font-size:%?28?%}.logBtn[data-v-271cabb5]{width:100%;padding:%?15?% 0;background:#0777cf;margin-top:%?40?%;color:#fff;text-align:center;-webkit-border-radius:%?10?%;border-radius:%?10?%}.loginBottom[data-v-271cabb5]{color:#464646}.btmBorder[data-v-271cabb5]{border-bottom:solid 20px #5f98ec;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""]),t.exports=n},"1de5":function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"393e":function(t,n,e){var o=e("07d4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("51e6a4aa",o,!0,{sourceMap:!1,shadowMode:!1})},"3e9c":function(t,n,e){"use strict";(function(t){e("498a"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{username:"",password:"",showPwd:!1,focus:-1}},methods:{toHome:function(){var n=this;this.username.trim()&&this.password.trim()?uni.request({url:n.$store.state.baseURL+"login/supervisor",method:"POST",data:{phone:n.username,password:n.password},success:function(n){t.log(n),n.data.ID?(uni.setStorageSync("token","Bearer "+n.data.token),uni.setStorageSync("username",""+n.data.cName),uni.setStorageSync("userid",""+n.data.ID),uni.navigateTo({url:"/pages/index/index"})):uni.showToast({title:"賬號或密碼錯誤",icon:"none"})},fail:function(){uni.showToast({title:"賬號或密碼錯誤",icon:"none"})}}):uni.showToast({title:"請填寫賬號密碼",icon:"none"})}}};n.default=o}).call(this,e("5a52")["default"])},"45ba":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"loginWrap sb al"},[e("v-uni-view",{staticClass:"logoBox"}),e("v-uni-view",{staticClass:"formBox"},[e("v-uni-view",{staticClass:"formTitle"},[t._v("Renopipe 匯報工作系統")]),e("v-uni-input",{class:["loginInput",{focus:0==t.focus}],attrs:{placeholder:"輸入用戶名",type:"text"},on:{focus:function(n){arguments[0]=n=t.$handleEvent(n),t.focus=0},blur:function(n){arguments[0]=n=t.$handleEvent(n),t.focus=-1}},model:{value:t.username,callback:function(n){t.username=n},expression:"username"}}),e("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:t.showPwd,expression:"showPwd"}],class:["loginInput",{focus:1==t.focus}],attrs:{placeholder:"輸入密碼",type:"text"},on:{focus:function(n){arguments[0]=n=t.$handleEvent(n),t.focus=1},blur:function(n){arguments[0]=n=t.$handleEvent(n),t.focus=-1}},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),e("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:!t.showPwd,expression:"!showPwd"}],class:["loginInput",{focus:1==t.focus}],attrs:{placeholder:"輸入密碼",type:"password"},on:{focus:function(n){arguments[0]=n=t.$handleEvent(n),t.focus=1},blur:function(n){arguments[0]=n=t.$handleEvent(n),t.focus=-1}},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),e("v-uni-view",{staticClass:"sb"},[e("v-uni-text",{staticClass:"forget"},[t._v("忘記密碼請聯繫管理員")]),e("v-uni-text",{staticClass:"showPwd",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showPwd=!t.showPwd}}},[t._v("顯示密碼")])],1),e("v-uni-view",{staticClass:"logBtn op",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toHome.apply(void 0,arguments)}}},[t._v("登陸")])],1),e("v-uni-view",{staticClass:"btmBorder"},[t._v("©RenoPipe Construction Co. Ltd. Copyright © 2020")])],1)},s=[]},"4c61":function(t,n,e){"use strict";e.r(n);var o=e("45ba"),a=e("90e2");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("5574");var i,r=e("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"271cabb5",null,!1,o["a"],i);n["default"]=c.exports},5574:function(t,n,e){"use strict";var o=e("393e"),a=e.n(o);a.a},"90e2":function(t,n,e){"use strict";e.r(n);var o=e("3e9c"),a=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);n["default"]=a.a},ffac:function(t,n,e){t.exports=e.p+"static/img/logo.c71ee8a6.png"}}]);