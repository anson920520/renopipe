(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0344":function(t,a,e){"use strict";var n,i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"Wrap sb la"},[e("Header",{staticClass:"headerWrap"}),e("v-uni-view",{staticClass:"flex10"},[e("v-uni-view",{staticClass:"logoBox"}),e("v-uni-view",{staticClass:"title-padding"},[e("div",{staticClass:"main"},[e("p",{staticClass:"title"},[t._v("工作歷史紀錄")]),e("div",{staticClass:"btn-color customize-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toCreate.apply(void 0,arguments)}}},[t._v("+ 新增記錄")])]),e("hr",{staticClass:"hr-line"})]),e("v-uni-view",{staticClass:" body-padding"},[e("v-uni-view",{staticClass:"box scoll"},[e("table",{attrs:{id:"t01"}},[e("tr",{attrs:{id:"header"}},[e("th",[t._v("創建日期")]),e("th",[t._v("上班人數")]),e("th",[t._v("地盤")]),e("th",[t._v("工作")])]),t._l(t.dataList,(function(a,n){return e("tr",{key:n,attrs:{id:a.ID},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toDetail(a.ID)}}},[e("td",[t._v(t._s(a.createdAt))]),e("td",{staticStyle:{width:"25%"}},[t._v(t._s(a.workers.length))]),e("td",[t._v(t._s(a.site))]),e("td",[t._v(t._s(a.worktype))])])}))],2)])],1)],1),e("v-uni-view",{staticClass:"footer btmBorder"},[t._v("©RenoPipe Construction Co. Ltd. Copyright © 2020")]),e("v-uni-view",{staticClass:"searchBox sb al"},[e("v-uni-input",{staticClass:"searchInp",attrs:{type:"text"},model:{value:t.val,callback:function(a){t.val=a},expression:"val"}}),e("v-uni-view",{staticClass:"searchbtn op",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.search.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1)},r=[];e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}))},"0c63":function(t,a,e){"use strict";var n=e("a198"),i=e.n(n);i.a},"0ff1":function(t,a,e){"use strict";e.r(a);var n=e("0344"),i=e("22f8");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("0c63");var o,c=e("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"5c14501a",null,!1,n["a"],o);a["default"]=s.exports},"1de5":function(t,a,e){"use strict";t.exports=function(t,a){return a||(a={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),a.hash&&(t+=a.hash),/["'() \t\n]/.test(t)||a.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"22f8":function(t,a,e){"use strict";e.r(a);var n=e("84f7"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"84f7":function(t,a,e){"use strict";(function(t){e("4de4"),e("4160"),e("c975"),e("a15b"),e("fb6a"),e("ac1f"),e("5319"),e("1276"),e("159b"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{dataList:[],siteList:[],val:"",allData:[]}},onLoad:function(){this.getSite()},computed:{baseURL:function(){return this.$store.state.baseURL}},methods:{search:function(){var t=this;t.dataList=t.allData.filter((function(a){for(var e in a)if("string"==typeof a[e]&&-1!=a[e].indexOf(t.val))return!0}))},getData:function(){var a=this;uni.showLoading({title:"加载中..."}),uni.request({url:a.baseURL+"attendence?supervisorId="+uni.getStorageSync("userid"),method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(e){t.log(e),e.data.length>0?(a.dataList=e.data,e.data.forEach((function(t){t.createdAt=t.createdAt.slice(0,16).replace("T"," ").split("-").join("/")})),a.dataList.forEach((function(t){a.siteList.forEach((function(a){t.siteId==a.ID&&(t.site=a.name)}))})),a.allData=a.dataList):alert("暫時未有記錄")},complete:function(){uni.hideLoading()}})},getSite:function(){var a=this;uni.request({url:a.baseURL+"site",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(e){t.log(e),e.data&&(a.siteList=e.data,a.getData())}})},toCreate:function(){uni.navigateTo({url:"/pages/record/selectsite"})},toDetail:function(t){uni.navigateTo({url:"/pages/record/detail?id="+t})}}};a.default=n}).call(this,e("5a52")["default"])},a198:function(t,a,e){var n=e("e794");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("596d9e85",n,!0,{sourceMap:!1,shadowMode:!1})},e794:function(t,a,e){var n=e("24fb"),i=e("1de5"),r=e("ffac");a=n(!1);var o=i(r);a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */body[data-v-5c14501a]{font-family:Abel}\r\n/*header的style*/.nav-background[data-v-5c14501a]{background:#5f98ec}.searchBox[data-v-5c14501a]{position:fixed;right:%?0?%;top:%?10?%;width:85%;z-index:200;padding-right:%?20?%;box-sizing:border-box}.searchInp[data-v-5c14501a]{width:78%;background-color:#fff;padding:%?5?% 0}.searchbtn[data-v-5c14501a]{color:#fff;background:#3a75bb;padding:%?10?% %?30?%}\r\n/*header的button的css*/.menu-btn[data-v-5c14501a]{width:.9rem;height:.9rem;padding:10px;cursor:pointer}.logoBox[data-v-5c14501a]{width:40%;height:%?150?%;background:url('+o+") no-repeat;background-size:100%;background-position:40% 20%;margin-left:.5rem}.title-padding[data-v-5c14501a]{padding:0 .7rem;margin-bottom:.4rem}.body-padding[data-v-5c14501a]{padding:0 .7rem}.btn-color[data-v-5c14501a]{background:#3a75bb;color:#fff}.main[data-v-5c14501a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.customize-btn[data-v-5c14501a]{padding:.3rem}.hr-line[data-v-5c14501a]{margin-top:10px;color:#e9e8e8}.title[data-v-5c14501a]{font-size:1rem;color:grey}.scoll[data-v-5c14501a]{overflow-x:scroll;overflow:-moz-scrollbars-vertical}h3[data-v-5c14501a]{color:grey}select[data-v-5c14501a]{padding:.2rem}table[data-v-5c14501a]{width:100%;margin-top:.5rem}table[data-v-5c14501a], th[data-v-5c14501a], td[data-v-5c14501a]{border:1px solid #000;border-collapse:collapse}th[data-v-5c14501a], td[data-v-5c14501a]{padding:8px;text-align:center;font-size:.7rem}table#t01 tr[data-v-5c14501a]:nth-child(even){background-color:#f8fcff}table#t01 tr[data-v-5c14501a]:nth-child(odd){background-color:#f8fcff}table#t01 th[data-v-5c14501a]{background-color:#3a75bb;color:#fff;height:.5rem}tr#header[data-v-5c14501a]{line-height:.1rem}.loginWrap[data-v-5c14501a]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.btmBorder[data-v-5c14501a]{font-size:.6rem;border-bottom:solid 20px #5f98ec;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.Wrap[data-v-5c14501a]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}",""]),t.exports=a},ffac:function(t,a,e){t.exports=e.p+"static/img/logo.c71ee8a6.png"}}]);