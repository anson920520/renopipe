(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"1de5":function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},3899:function(t,e,a){var i=a("e721");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4c3c1522",i,!0,{sourceMap:!1,shadowMode:!1})},"61f2":function(t,e,a){t.exports=a.p+"static/img/logo.c71ee8a6.png"},"842c":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"Wrap sb la"},[a("Header",{staticClass:"headerWrap"}),a("v-uni-view",{staticClass:"flex10"},[a("v-uni-view",{staticClass:"logoBox"}),a("v-uni-view",{staticClass:"title-padding"},[a("div",{staticClass:"main"},[a("p",{staticClass:"title"},[t._v("工作歷史紀錄")]),a("div",{staticClass:"btn-color customize-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCreate.apply(void 0,arguments)}}},[t._v("+ 新增記錄")])]),a("hr",{staticClass:"hr-line"})]),a("v-uni-view",{staticClass:"body-padding"},[a("div",{staticClass:"main"},[a("v-uni-label",{staticStyle:{"font-size":"20px"}},[t._v("選擇日期 :")]),a("v-uni-picker",{staticClass:"selectedDate",attrs:{mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.attendenceDate.apply(void 0,arguments)}}},[a("v-uni-input",{staticClass:"dateBox",staticStyle:{"font-size":"20px"},attrs:{type:"date",disabled:"disabled"},model:{value:t.start.name,callback:function(e){t.$set(t.start,"name",e)},expression:"start.name"}})],1)],1)]),a("v-uni-view",{staticClass:" body-padding"},[a("v-uni-view",{staticClass:"box scoll"},[a("table",{attrs:{id:"t01"}},[a("tr",{attrs:{id:"header"}},[a("th",[t._v("地盤")]),a("th",[t._v("工作")]),a("th",[t._v("訊息狀態")])]),t._l(t.dataList,(function(e,i){return a("tr",{key:i,attrs:{id:e.ID},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toDetail(e.ID)}}},[a("td",{staticStyle:{width:"40%"}},[a("b",{staticStyle:{color:"#007AFF"}},[t._v(t._s(e.siteName)+"("+t._s(e.site)+")")]),t._v(", "+t._s(e.sitecode1)+", "+t._s(e.sitecode3)+", "+t._s(e.sitetoc)+", "+t._s(e.imple)+", "+t._s(e.dma)+", "+t._s(e.emfm))]),a("td",{staticStyle:{width:"30%"}},[t._v(t._s(e.worktype))]),e.log&&"successfully sent group text"==JSON.parse(e.log).message?a("td",{staticStyle:{color:"green"}},[t._v("已送出")]):e.log&&"successfully sent group text"!==JSON.parse(e.log).message?a("td",{staticStyle:{color:"red"}},[t._v("whatsapp未發送，需要重發")]):a("td",{staticStyle:{color:"red"}},[t._v("Selo Whatsapp Gateway 發生錯誤，請聯絡Tesla Chong 60814693")])])}))],2),0==t.dataList.length?a("v-uni-view",{staticClass:"ju al noData"},[t._v(t._s(this.loaderMSG))]):t._e()],1)],1)],1),a("v-uni-view",{staticClass:"footer btmBorder"},[t._v("©RenoPipe Construction Co. Ltd. Copyright © 2020")]),a("v-uni-view",{staticClass:"searchBox sb al"},[a("v-uni-input",{staticClass:"searchInp",attrs:{type:"text"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}}),a("v-uni-view",{staticClass:"searchbtn op",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},b30e:function(t,e,a){"use strict";a.r(e);var i=a("842c"),n=a("cc59");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("d5c3");var o,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"5189c9f6",null,!1,i["a"],o);e["default"]=c.exports},c8e7:function(t,e,a){"use strict";(function(t){a("4de4"),a("4160"),a("c975"),a("a15b"),a("fb6a"),a("d3b7"),a("e25e"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{dataList:[],siteList:[],val:"",allData:[],start:{name:"",id:null,timesamp:0},end:null,loaderMSG:"讀取數據中...",abc:null}},onLoad:function(){var e,a=new Date,i=a.getFullYear(),n=a.getMonth(),s=a.getDate();s<=9?(s="0"+s.toString(),t.log(s)):s=s,e=n+1>9?i+"-"+(n+1)+"-"+s:i+"-0"+(n+1)+"-"+s,this.start.name=e,this.start.id=n+1>9?i.toString()+(n+1).toString()+s:i.toString()+"0"+(n+1).toString()+s,this.start.timesamp=new Date(e).getTime()/1e3,this.end=parseInt(this.start.id)-1},onShow:function(){this.getSite()},computed:{baseURL:function(){return this.$store.state.baseURL}},methods:{search:function(){var t=this;t.dataList=t.allData.filter((function(e){for(var a in e)if("string"==typeof e[a]&&-1!=e[a].indexOf(t.val))return!0}))},getData:function(){this.end=parseInt(this.start.id)+1,this.loaderMSG="讀取數據中...",this.loaderMSG="所選擇的日期沒有數據";var e=this;uni.showLoading({title:"讀取數據中..."}),uni.request({url:e.baseURL+"attendence?supervisorId="+uni.getStorageSync("userid")+"&start="+this.start.id+"&end="+this.end,method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(a){t.log(a),a.data.length>0?(e.allData=a.data,a.data.forEach((function(t){t.createdAt=t.createdAt.slice(0,16).replace("T"," ").split("-").join("/")})),e.allData.forEach((function(t){e.siteList.forEach((function(e){t.siteId==e.ID&&(t.site=e.name,t.sitecode1=e.siteCode1,t.sitecode2=e.siteCode2,t.sitecode3=e.siteCode3,t.imple=e.imple,t.sitetoc=e.sitetoc,t.dma=e.dma,t.emfm=e.emfm,t.siteName=e.cname,t.project=e.project)}))})),e.dataList=e.allData):(this.loaderMSG="所選擇的日期沒有數據",t.log(this.loaderMSG),e.allData=[],e.dataList=[])},fail:function(){e.allData=[],e.dataList=[]},complete:function(){uni.hideLoading()}})},getSite:function(){var e=this;uni.request({url:e.baseURL+"site",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(a){t.log(a),a.data&&(e.siteList=a.data,e.getData())}})},toCreate:function(){uni.navigateTo({url:"/pages/record/selectsite"})},toDetail:function(t){uni.navigateTo({url:"/pages/record/detail?id="+t})},yesterday:function(){this.start.id=parseInt(this.start.id)-1,this.end=parseInt(this.start.id)-2,t.log(parseInt(this.start.name)-1),t.log(this.start.id),t.log(this.end),this.getData()},tomorrow:function(){this.start.id=parseInt(this.start.id)+1,this.end=parseInt(this.start.id)+2,t.log(this.start.id),t.log(this.end),this.getData()},attendenceDate:function(e){t.log(e);var a=e.detail.value;this.start.name=a;var i=new RegExp("-",""),n=e.detail.value.replace(i,""),s=n.replace(i,"");t.log(s),this.start.id=s,this.end=parseInt(s)+1,t.log(this.start.id),t.log(this.end),this.getData()}}};e.default=i}).call(this,a("5a52")["default"])},cc59:function(t,e,a){"use strict";a.r(e);var i=a("c8e7"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},d5c3:function(t,e,a){"use strict";var i=a("3899"),n=a.n(i);n.a},e721:function(t,e,a){var i=a("24fb"),n=a("1de5"),s=a("61f2");e=i(!1);var o=n(s);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */body[data-v-5189c9f6]{font-family:Abel}.arrow[data-v-5189c9f6]{color:#5f98ec;font-size:1.3rem}\n/*header的style*/.nav-background[data-v-5189c9f6]{background:#5f98ec}.noData[data-v-5189c9f6]{padding:%?250?%;background-color:#e8e8e8}.searchBox[data-v-5189c9f6]{position:fixed;right:%?0?%;top:%?10?%;width:85%;z-index:200;padding-right:%?20?%;box-sizing:border-box}.searchInp[data-v-5189c9f6]{width:78%;background-color:#fff;padding:%?5?% 0}.searchbtn[data-v-5189c9f6]{color:#fff;background:#3a75bb;padding:%?10?% %?30?%}\n/*header的button的css*/.menu-btn[data-v-5189c9f6]{width:.9rem;height:.9rem;padding:10px;cursor:pointer}.logoBox[data-v-5189c9f6]{width:40%;height:%?150?%;background:url('+o+") no-repeat;background-size:100%;background-position:40% 20%;margin-left:.5rem}.title-padding[data-v-5189c9f6]{padding:0 .7rem;margin-bottom:.4rem}.body-padding[data-v-5189c9f6]{padding:0 .7rem}.btn-color[data-v-5189c9f6]{background:#3a75bb;color:#fff}.main[data-v-5189c9f6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.customize-btn[data-v-5189c9f6]{padding:.3rem}.hr-line[data-v-5189c9f6]{margin-top:10px;color:#e9e8e8}.title[data-v-5189c9f6]{font-size:1rem;color:grey}.scoll[data-v-5189c9f6]{overflow-x:scroll;overflow:-moz-scrollbars-vertical}h3[data-v-5189c9f6]{color:grey}select[data-v-5189c9f6]{padding:.2rem}table[data-v-5189c9f6]{width:100%;margin-top:.5rem}table[data-v-5189c9f6], th[data-v-5189c9f6], td[data-v-5189c9f6]{border:1px solid #000;border-collapse:collapse}th[data-v-5189c9f6], td[data-v-5189c9f6]{padding:8px;text-align:center;font-size:.7rem}table#t01 tr[data-v-5189c9f6]:nth-child(even){background-color:#f8fcff}table#t01 tr[data-v-5189c9f6]:nth-child(odd){background-color:#f8fcff}table#t01 th[data-v-5189c9f6]{background-color:#3a75bb;color:#fff;height:.5rem}tr#header[data-v-5189c9f6]{line-height:.1rem}.loginWrap[data-v-5189c9f6]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.btmBorder[data-v-5189c9f6]{font-size:.6rem;border-bottom:solid 20px #5f98ec;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.Wrap[data-v-5189c9f6]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.dateBox[data-v-5189c9f6]{border:solid 1px}.selectedDate[data-v-5189c9f6]{text-align:center;background-color:#5f98ec;color:#fff}",""]),t.exports=e}}]);