(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-edit"],{"1bbf":function(t,e,a){var i=a("24fb"),n=a("1de5"),o=a("ffac"),s=a("a7e6");e=i(!1);var c=n(o),r=n(s);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */body[data-v-188c3524]{font-family:Abel}\r\n/*header的style*/.nav-background[data-v-188c3524]{background:#5f98ec}.mt25[data-v-188c3524]{margin-top:25px}\r\n/*header的button的css*/.menu-btn[data-v-188c3524]{width:.9rem;height:.9rem;padding:10px;cursor:pointer}.logoBox[data-v-188c3524]{width:40%;height:%?150?%;background:url('+c+") no-repeat;background-size:100%;background-position:40% 20%;margin-left:.5rem}.title-padding[data-v-188c3524]{padding:0 .7rem;margin-bottom:.4rem}.body-padding[data-v-188c3524]{padding:0 .7rem}.btn-color[data-v-188c3524]{background:#3a75bb;color:#fff}.main[data-v-188c3524]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.worker-main[data-v-188c3524]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:10px}.customize-btn[data-v-188c3524]{padding:.3rem}.hr-line[data-v-188c3524]{margin-top:10px;color:#e9e8e8}.title[data-v-188c3524]{font-size:1rem;color:grey}.scoll[data-v-188c3524]{overflow-x:scroll;overflow:-moz-scrollbars-vertical;height:16rem}h3[data-v-188c3524]{color:grey}p[data-v-188c3524]{line-height:1.5rem;color:grey}select[data-v-188c3524]{padding:.2rem}table[data-v-188c3524]{width:100%;margin-top:.5rem}table[data-v-188c3524], th[data-v-188c3524], td[data-v-188c3524]{border:1px solid #000;border-collapse:collapse}th[data-v-188c3524], td[data-v-188c3524]{padding:15px;text-align:left;font-size:.5rem}table#t01 tr[data-v-188c3524]:nth-child(even){background-color:#f8fcff}table#t01 tr[data-v-188c3524]:nth-child(odd){background-color:#f8fcff}table#t01 th[data-v-188c3524]{background-color:#3a75bb;color:#fff;height:.5rem}tr#header[data-v-188c3524]{line-height:.1rem}.loginWrap[data-v-188c3524]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.btmBorder[data-v-188c3524]{font-size:.6rem;border-bottom:solid 20px #5f98ec;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.Wrap[data-v-188c3524]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.blue-divider[data-v-188c3524]{border-bottom:1px solid #5f98ec;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%}.hr[data-v-188c3524]{padding:0 8rem 0 8rem;margin-top:20px;margin-bottom:20px}.border[data-v-188c3524]{border:1px solid #e8e8e8;background:#f7f7f7}b[data-v-188c3524]{font-size:1.5rem}.worker-info-area[data-v-188c3524]{padding:1rem}.chk-box-area[data-v-188c3524]{padding:1.2rem}.worker-icon[data-v-188c3524]{height:50px;width:50px}.worktype-info-area[data-v-188c3524]{padding:1.3rem .5rem}.worktype[data-v-188c3524]{font-size:1.2rem}hr[data-v-188c3524]{color:#e8e8e8;border:solid 1px}.mt20[data-v-188c3524]{margin-top:20px}.jobTag[data-v-188c3524]{background:#007aff;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% %?20?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.textarea-padding[data-v-188c3524]{width:100%;border:solid 1px #e8e8e8}.submit-padding[data-v-188c3524]{padding:.5rem}.uploadBtn[data-v-188c3524]{display:inline;padding:%?10?% %?20?%;background:#007aff;border-radius:%?10?%;color:#fff;margin:%?15?% 0}.imgsWrap[data-v-188c3524]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.upLoadImg[data-v-188c3524]{width:100%;height:%?230?%}.imgBox[data-v-188c3524]{width:33%;border-right:solid 1px #fff}.selectType[data-v-188c3524]{width:100%}.checkBox[data-v-188c3524]{border:solid #1296db 1px;width:%?40?%;height:%?40?%}.checkBoxIcon[data-v-188c3524]{width:100%}.check[data-v-188c3524]{background:url("+r+");background-position:50%;background-size:cover}.selectpadding[data-v-188c3524]{padding:.3rem;position:relative;top:2px}uni-input[data-v-188c3524]{border:solid 1px #d3d3d3;margin-bottom:1rem}.selectPosition[data-v-188c3524]{background:#007aff;padding:%?10?% %?20?%;color:#fff;width:50vw}.positionIcon[data-v-188c3524]{width:0;height:0;border:solid %?15?% transparent;border-top:%?15?% #fff solid;-webkit-transform:translateY(%?13?%);transform:translateY(%?13?%)}.whiteColor[data-v-188c3524]{color:#fff}",""]),t.exports=e},"1de5":function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},4947:function(t,e,a){"use strict";(function(t){a("a4d3"),a("e01a"),a("4160"),a("a15b"),a("a434"),a("a9e3"),a("e25e"),a("ac1f"),a("1276"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{attendenceData:"",imgs:[],description:"",workerList:[],siteList:[],siteId:"",site:{},start:{name:"",timesamp:0},end:{name:"",timesamp:0},projectid:"",subcontract:"",rporsubCRP:"",machine:"",username:uni.getStorageSync("username"),supervisorId:uni.getStorageSync("userid"),selected:"",head:"Renopipe",timeRange:"上午",worktypeOption:[{name:"打路面",check:!1},{name:"挖坑",check:!1},{name:"打拆",check:!1},{name:"駁水",check:!1},{name:"裝水喉",check:!1},{name:"還原",check:!1},{name:"探坑",check:!1},{name:"試制",check:!1},{name:"雜務",check:!1}],machineOption:[{name:"發電機 1",check:!1},{name:"發電機 2",check:!1},{name:"發電機 3",check:!1},{name:"大電炮 1",check:!1},{name:"大電炮 2",check:!1},{name:"細電炮",check:!1},{name:"保路華",check:!1},{name:"跳鎚",check:!1},{name:"震船",check:!1},{name:"9噸吊雞",check:!1},{name:"30噸吊雞",check:!1},{name:"5.5噸車",check:!1},{name:"水泵",check:!1}],allPosition:[],currentPositionIndex:0,delImgs:[]}},onLoad:function(t){this.siteId=Number(t.siteId),this.getAllPosition();var e=new Date,a=e.getFullYear(),i=e.getMonth(),n=e.getDate(),o=a+"-"+(i+1)+"-"+n;this.start.name=o,this.start.timesamp=new Date(o).getTime()/1e3;var s=new Date(Date.now()+2592e6),c=s.getFullYear(),r=s.getMonth(),d=s.getDate(),l=c+"-"+(r+1)+"-"+d;this.end.name=l,this.end.timesamp=new Date(l).getTime()/1e3},computed:{baseURL:function(){return this.$store.state.baseURL}},methods:{delImg2:function(t,e){this.delImgs.push(t),this.attendenceData.images.splice(e,1)},delImg:function(t){this.imgs.splice(t,1)},checkData:function(){var t=this;setTimeout((function(){t.attendenceData.workers.forEach((function(e){var a=e.ID;t.allPosition.forEach((function(t){t.workers.forEach((function(t){a==t.ID&&(t.check=!0)}))}))})),t.attendenceData.worktype.split(",").forEach((function(e){t.worktypeOption.forEach((function(t){t.name==e&&(t.check=!0)}))})),t.attendenceData.machine.split(",").forEach((function(e){t.machineOption.forEach((function(t){t.name==e&&(t.check=!0)}))}))}),500)},getData:function(){var t=this;uni.showLoading({title:"讀取中..."}),uni.request({url:t.baseURL+"attendence?id="+this.$route.query.id,method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(e){e?(t.attendenceData=e.data[0],t.getSite(e),t.checkData()):alert("記錄不存在")},complete:function(){uni.hideLoading()}})},startTime:function(t){this.start.name=t.detail.value,this.start.timesamp=new Date(t.detail.value).getTime()/1e3},endTime:function(t){this.end.name=t.detail.value,this.end.timesamp=new Date(t.detail.value).getTime()/1e3},choosePosition:function(e){var a=this,i=Number(e.detail.value);this.currentPositionIndex=i,t.log(a.currentPositionIndex),a.workerList=this.allPosition[this.currentPositionIndex].workers},getAllPosition:function(){var e=this;uni.request({url:e.baseURL+"worker?action=byRole",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(a){t.log(a),a.data&&(e.allPosition=a.data,e.allPosition.forEach((function(t){t.workers.forEach((function(t){t.check=!1}))})),e.workerList=e.allPosition[0].workers,e.getData())}})},getSite:function(e){var a=this;uni.request({url:a.baseURL+"site",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(i){t.log(i),i.data&&(a.siteList=i.data,a.siteList.forEach((function(t){t.ID==e.data[0].siteId&&(a.site=t)})))}})},getWorders:function(){var e=this;uni.request({url:e.baseURL+"worker",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(a){t.log("workerList",a),e.workerList=a.data,e.workerList.forEach((function(t){t.check=!1}))}})},chooseWorker:function(e){var a=this.workerList[e];a.check=!this.workerList[e].check,t.log(a),this.workerList.splice(e,1,a)},chooseType:function(t){var e=this.worktypeOption[t];e.check=!this.worktypeOption[t].check,this.worktypeOption.splice(t,1,e)},chooseMachine:function(t){var e=this.machineOption[t];e.check=!this.machineOption[t].check,this.machineOption.splice(t,1,e)},toHome:function(){uni.navigateTo({url:"/pages/index/index"})},submit:function(){uni.showLoading({title:"加载中..."});var e=this,a=[];e.allPosition.forEach((function(t){t.workers.forEach((function(t){t.check&&a.push(t.ID)}))}));var i=[];e.worktypeOption.forEach((function(t){t.check&&i.push(t.name)}));var n=[];e.worktypeOption.forEach((function(t){t.check&&n.push(t.name)}));var o=[];e.machineOption.forEach((function(t){t.check&&o.push(t.name)}));var s=[];e.imgs.forEach((function(t){var e=t.base64.split("base64,")[1];s.push(e)}));var c={workerIds:a,siteId:this.attendenceData.siteId,supervisorId:parseInt(this.attendenceData.supervisorId),startTimestamp:this.attendenceData.startTimestamp,endTimestamp:this.attendenceData.endTimestamp,time:this.attendenceData.time,subcontract:this.attendenceData.subcontract?this.attendenceData.subcontract:" ",rporsubCRP:this.attendenceData.rporsubCRP,machine:o.join(),description:e.attendenceData.description,worktype:n.join(),base64Images:s,removeImageId:e.delImgs};t.log(c),uni.request({url:e.baseURL+"attendence/"+this.$route.query.id,method:"PUT",header:{Authorization:uni.getStorageSync("token")},data:c,success:function(e){t.log("编辑",e),e.data.error?uni.showToast({title:"編輯失敗",icon:"none"}):uni.navigateTo({url:"/pages/record/completeEdit"})},fail:function(){uni.showToast({title:"編輯失敗",icon:"none"})},complete:function(){uni.hideLoading()}})},chooseImg:function(){var e=this;uni.chooseImage({count:9,sourceType:["album","camera"],success:function(a){t.log(a);for(var i=a.tempFiles,n=function(n){var o=new FileReader;o.readAsDataURL(i[n]),o.onload=function(){e.imgs.push({src:a.tempFilePaths[n],file:i[n],base64:o.result})},o.onerror=function(e){t.log("Error: ",e)}},o=0;o<i.length;o++)n(o)}})},onChangeHead:function(e){t.log(e,this.head)}}};e.default=i}).call(this,a("5a52")["default"])},"5f55":function(t,e,a){"use strict";a.r(e);var i=a("fce0"),n=a("c60b");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("bc9c");var s,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"188c3524",null,!1,i["a"],s);e["default"]=r.exports},"6d48":function(t,e){t.exports="data:image/png;base64,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"},a7e6:function(t,e){t.exports="data:image/png;base64,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"},b8ec:function(t,e,a){t.exports=a.p+"static/img/Users-Worker-icon.427c988b.png"},bc9c:function(t,e,a){"use strict";var i=a("cd65"),n=a.n(i);n.a},c60b:function(t,e,a){"use strict";a.r(e);var i=a("4947"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},cd65:function(t,e,a){var i=a("1bbf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("05f756d6",i,!0,{sourceMap:!1,shadowMode:!1})},fce0:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Wrap sb la"},[i("Header"),i("v-uni-view",{staticClass:"flex10"},[i("v-uni-view",{staticClass:"title-padding mt25"},[i("div",{staticClass:"main"},[i("p",{staticClass:"title"},[t._v("編輯工作紀錄")]),i("div",{staticClass:"btn-color customize-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}},[t._v("返回")])]),i("hr",{staticClass:"hr-line"})]),i("v-uni-view",{staticClass:"body-padding"},[i("p",[t._v("工頭名稱: "+t._s(t.username))]),i("v-uni-picker",{attrs:{mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.startTime.apply(void 0,arguments)}}},[i("v-uni-view",[t._v("今日日期: "+t._s(t.start.name))])],1),t._v("時段:"),i("span",{staticClass:"selectpadding"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.attendenceData.time,expression:"attendenceData.time"}],staticStyle:{padding:"0rem!important"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.attendenceData,"time",e.target.multiple?a:a[0])}}},[i("option",{attrs:{value:"上午"}},[t._v("上午")]),i("option",{attrs:{value:"下午"}},[t._v("下午")]),i("option",{attrs:{value:"全日"}},[t._v("全日")])])]),i("p",{staticStyle:{display:"none"}}),i("p",[t._v("工程項目編號: "+t._s(t.site.project))]),i("p",[t._v("地盤(中文名): "+t._s(t.site.cname))]),i("p",[t._v("地盤(英文名): "+t._s(t.site.name))]),i("p",[t._v("Dis1 : "+t._s(t.site.siteCode1))]),i("p",[t._v("Dis2: "+t._s(t.site.siteCode3))]),i("p",[t._v("DMA : "+t._s(t.site.dma))]),i("p",[t._v("EMFM .Ref: "+t._s(t.site.emfm))]),i("p",[t._v("Site C. TO. : "+t._s(t.site.sitetoc))]),i("p",[t._v("Imple TO. : "+t._s(t.site.imple))]),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[t._v("工作記錄基本資料")])])]),i("v-uni-view",{staticClass:"body-padding"},[t._v("副項目編號(非必填):"),i("v-uni-input",{attrs:{placeholder:""},model:{value:t.attendenceData.subcontract,callback:function(e){t.$set(t.attendenceData,"subcontract",e)},expression:"attendenceData.subcontract"}})],1),i("v-uni-view",{staticClass:"body-padding"},[t._v("判頭:"),i("span",{},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.attendenceData.rporsubCRP,expression:"attendenceData.rporsubCRP"}],staticStyle:{padding:"0rem!important",width:"100%",border:"solid 1px lightgray"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.attendenceData,"rporsubCRP",e.target.multiple?a:a[0])},function(e){arguments[0]=e=t.$handleEvent(e),t.onChangeHead(e)}]}},[i("option",{attrs:{id:"1",value:"Renopipe"}},[t._v("Renopipe")]),i("option",{attrs:{id:"2",value:"Renopipe"}},[t._v("信雄")]),i("option",{attrs:{id:"3",value:"Renopipe"}},[t._v("信昌")]),i("option",{attrs:{id:"4",value:"Renopipe"}},[t._v("永富")]),i("option",{attrs:{id:"2",value:"Others"}},[t._v("其他")])])])]),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})]),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[t._v("工人列表")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("v-uni-view",{staticClass:"sb al"},[i("div",{staticClass:"tagpad"},[i("div",{staticClass:"jobTag"},[t._v("選擇工人")])]),i("v-uni-picker",{attrs:{mode:"selector",range:t.allPosition,"range-key":"position"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.choosePosition.apply(void 0,arguments)}}},[t.allPosition.length?i("v-uni-view",{staticClass:"selectPosition sb"},[i("v-uni-view",{staticClass:"whiteColor"},[t._v(t._s(t.allPosition[t.currentPositionIndex].position))]),i("v-uni-view",{staticClass:"positionIcon"})],1):t._e()],1)],1),i("v-uni-view",{staticClass:"border box scoll"},[t._l(t.workerList,(function(e,n){return i("div",{key:n,staticClass:"worker-main al"},[i("img",{staticClass:"worker-icon",attrs:{src:a("b8ec")}}),i("div",{staticClass:"worker-info-area"},[i("b",[t._v(t._s(e.cName)+" "+t._s(e.position))])]),i("v-uni-view",{class:["checkBox",{check:e.check}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseWorker(n)}}})],1)})),i("hr")],2),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[t._v("工作類型列表")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("v-uni-view",{staticClass:"border box scoll"},[t._l(t.worktypeOption,(function(e,a){return i("div",{key:a,staticClass:"worker-main"},[i("div",{staticClass:"worktype-info-area"},[i("p",{staticClass:"worktype"},[t._v(t._s(e.name))])]),i("div",{staticClass:"chk-box-area"},[i("v-uni-view",{class:["checkBox",{check:e.check}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseType(a)}}})],1)])})),i("hr")],2),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[t._v("使用機械列表")]),i("u",[t._v("請選擇今天有上使用的機械，如果找不到機械請致電Tesla Chong(60814693)。")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("v-uni-view",{staticClass:"border box scoll"},[t._l(t.machineOption,(function(e,a){return i("div",{key:a,staticClass:"worker-main"},[i("div",{staticClass:"worktype-info-area"},[i("p",{staticClass:"worktype"},[t._v(t._s(e.name))])]),i("div",{staticClass:"chk-box-area"},[i("v-uni-view",{class:["checkBox",{check:e.check}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseMachine(a)}}})],1)])})),i("hr")],2),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[t._v("工作描述")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("div",{staticClass:"textarea-padding"},[i("v-uni-textarea",{attrs:{placeholder:"請輸入工作描述..."},model:{value:t.attendenceData.description,callback:function(e){t.$set(t.attendenceData,"description",e)},expression:"attendenceData.description"}})],1),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])]),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[t._v("已上載傳圖片")])]),i("v-uni-view",{staticClass:"al"},[i("v-uni-view",{staticClass:"uploadBtn op",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImg.apply(void 0,arguments)}}},[t._v("選擇圖片")])],1),i("v-uni-view",{staticClass:"imgsWrap al"},t._l(t.attendenceData.images,(function(e,n){return i("v-uni-view",{key:n,staticClass:"imgBox"},[i("v-uni-image",{staticClass:"delImg",attrs:{src:a("6d48").replace(/^\./,""),mode:"widthFix"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.delImg2(e.ID,n)}}}),i("v-uni-image",{staticClass:"upLoadImg",attrs:{src:t.baseURL+e.filePath,mode:"aspectFill"}})],1)})),1)],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[t._v("上傳新圖片")])]),i("v-uni-view",{staticClass:"al"},[i("v-uni-view",{staticClass:"uploadBtn op",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImg.apply(void 0,arguments)}}},[t._v("選擇圖片")])],1),i("v-uni-view",{staticClass:"imgsWrap al"},t._l(t.imgs,(function(e,n){return i("v-uni-view",{key:n,staticClass:"imgBox"},[i("v-uni-image",{staticClass:"delImg",attrs:{src:a("6d48").replace(/^\./,""),mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delImg(n)}}}),i("v-uni-image",{staticClass:"upLoadImg",attrs:{src:e.base64,mode:"aspectFill"}})],1)})),1)],1),i("v-uni-view",{staticClass:"submit-padding"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("編輯記錄")])],1)],1),i("v-uni-view",{staticClass:"footer btmBorder"},[t._v("©RenoPipe Construction Co. Ltd. Copyright © 2020")])],1)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},ffac:function(t,e,a){t.exports=a.p+"static/img/logo.c71ee8a6.png"}}]);