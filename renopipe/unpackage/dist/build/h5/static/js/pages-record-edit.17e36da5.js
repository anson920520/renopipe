(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-edit"],{"0d93":function(e,t,a){"use strict";var i=a("91f1"),n=a.n(i);n.a},"1de5":function(e,t,a){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},3031:function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"Wrap sb la"},[i("Header"),i("v-uni-view",{staticClass:"flex10"},[i("v-uni-view",{staticClass:"title-padding mt25"},[i("div",{staticClass:"main"},[i("p",{staticClass:"title"},[e._v("編輯工作紀錄")]),i("div",{staticClass:"btn-color customize-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toHome.apply(void 0,arguments)}}},[e._v("返回")])]),i("hr",{staticClass:"hr-line"})]),i("v-uni-view",{staticClass:"body-padding"},[i("p",[e._v("工頭名稱: "+e._s(e.username))]),i("v-uni-picker",{attrs:{mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.startTime.apply(void 0,arguments)}}},[i("v-uni-view",[e._v("今日日期: "+e._s(e.start.name))])],1),e._v("時段:"),i("span",{staticClass:"selectpadding"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.attendenceData.time,expression:"attendenceData.time"}],staticStyle:{padding:"0rem!important"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.attendenceData,"time",t.target.multiple?a:a[0])}}},[i("option",{attrs:{value:"上午"}},[e._v("上午")]),i("option",{attrs:{value:"下午"}},[e._v("下午")]),i("option",{attrs:{value:"全日"}},[e._v("全日")])])]),i("p",{staticStyle:{display:"none"}}),i("p",[e._v("工程項目編號: "+e._s(e.site.project))]),i("p",[e._v("地盤(中文名): "+e._s(e.site.name))]),i("p",[e._v("地盤(英文名): "+e._s(e.site.siteCode3))]),i("p",[e._v("Dis1 : "+e._s(e.site.siteCode1))]),i("p",[e._v("Dis2: "+e._s(e.site.siteCode2))]),i("p",[e._v("Site C. TO. : "+e._s(e.site.region))]),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("工作記錄基本資料")])])]),i("v-uni-view",{staticClass:"body-padding"},[e._v("副項目編號(非必填):"),i("v-uni-input",{attrs:{placeholder:""},model:{value:e.attendenceData.subcontract,callback:function(t){e.$set(e.attendenceData,"subcontract",t)},expression:"attendenceData.subcontract"}})],1),i("v-uni-view",{staticClass:"body-padding"},[e._v("判頭:"),i("span",{},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.attendenceData.rporsubCRP,expression:"attendenceData.rporsubCRP"}],staticStyle:{padding:"0rem!important",width:"100%",border:"solid 1px lightgray"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.attendenceData,"rporsubCRP",t.target.multiple?a:a[0])},function(t){arguments[0]=t=e.$handleEvent(t),e.onChangeHead(t)}]}},[i("option",{attrs:{id:"1",value:"Renopipe"}},[e._v("Renopipe")]),i("option",{attrs:{id:"2",value:"Renopipe"}},[e._v("信雄")]),i("option",{attrs:{id:"3",value:"Renopipe"}},[e._v("信昌")]),i("option",{attrs:{id:"4",value:"Renopipe"}},[e._v("永富")]),i("option",{attrs:{id:"2",value:"Others"}},[e._v("其他")])])])]),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})]),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("工人列表")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("v-uni-view",{staticClass:"sb al"},[i("div",{staticClass:"tagpad"},[i("div",{staticClass:"jobTag"},[e._v("選擇工人")])]),i("v-uni-picker",{attrs:{mode:"selector",range:e.allPosition,"range-key":"position"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.choosePosition.apply(void 0,arguments)}}},[e.allPosition.length?i("v-uni-view",{staticClass:"selectPosition sb"},[i("v-uni-view",{staticClass:"whiteColor"},[e._v(e._s(e.allPosition[e.currentPositionIndex].position))]),i("v-uni-view",{staticClass:"positionIcon"})],1):e._e()],1)],1),i("v-uni-view",{staticClass:"border box scoll"},[e._l(e.workerList,(function(t,n){return i("div",{key:n,staticClass:"worker-main al"},[i("img",{staticClass:"worker-icon",attrs:{src:a("b8ec")}}),i("div",{staticClass:"worker-info-area"},[i("b",[e._v(e._s(t.cName)+" "+e._s(t.group))])]),i("v-uni-view",{class:["checkBox",{check:t.check}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseWorker(n)}}})],1)})),i("hr")],2),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("工作類型列表")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("v-uni-view",{staticClass:"border box scoll"},[e._l(e.worktypeOption,(function(t,a){return i("div",{key:a,staticClass:"worker-main"},[i("div",{staticClass:"worktype-info-area"},[i("p",{staticClass:"worktype"},[e._v(e._s(t.name))])]),i("div",{staticClass:"chk-box-area"},[i("v-uni-view",{class:["checkBox",{check:t.check}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseType(a)}}})],1)])})),i("hr")],2),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("使用機械列表")]),i("u",[e._v("請選擇今天有上使用的機械，如果找不到機械請致電Tesla Chong(60814693)。")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("v-uni-view",{staticClass:"border box scoll"},[e._l(e.machineOption,(function(t,a){return i("div",{key:a,staticClass:"worker-main"},[i("div",{staticClass:"worktype-info-area"},[i("p",{staticClass:"worktype"},[e._v(e._s(t.name))])]),i("div",{staticClass:"chk-box-area"},[i("v-uni-view",{class:["checkBox",{check:t.check}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseMachine(a)}}})],1)])})),i("hr")],2),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("工作描述")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("div",{staticClass:"textarea-padding"},[i("v-uni-textarea",{attrs:{placeholder:"請輸入工作描述..."},model:{value:e.attendenceData.description,callback:function(t){e.$set(e.attendenceData,"description",t)},expression:"attendenceData.description"}})],1),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])]),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("已上載傳圖片")])]),i("v-uni-view",{staticClass:"al"},[i("v-uni-view",{staticClass:"uploadBtn op",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImg.apply(void 0,arguments)}}},[e._v("選擇圖片")])],1),i("v-uni-view",{staticClass:"imgsWrap al"},e._l(e.attendenceData.images,(function(t,n){return i("v-uni-view",{key:n,staticClass:"imgBox"},[i("v-uni-image",{staticClass:"delImg",attrs:{src:a("6d48"),mode:"widthFix"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.delImg2(t.ID,n)}}}),i("v-uni-image",{staticClass:"upLoadImg",attrs:{src:e.baseURL+t.filePath,mode:"aspectFill"}})],1)})),1)],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("上傳新圖片")])]),i("v-uni-view",{staticClass:"al"},[i("v-uni-view",{staticClass:"uploadBtn op",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImg.apply(void 0,arguments)}}},[e._v("選擇圖片")])],1),i("v-uni-view",{staticClass:"imgsWrap al"},e._l(e.imgs,(function(t,n){return i("v-uni-view",{key:n,staticClass:"imgBox"},[i("v-uni-image",{staticClass:"delImg",attrs:{src:a("6d48"),mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delImg(n)}}}),i("v-uni-image",{staticClass:"upLoadImg",attrs:{src:t.base64,mode:"aspectFill"}}),i("select",{staticClass:"selectType"},[i("option",[e._v("Trial Pits & Inspection Pits")]),i("option",[e._v("木工")])])],1)})),1)],1),i("v-uni-view",{staticClass:"submit-padding"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("編輯記錄")])],1)],1),i("v-uni-view",{staticClass:"footer btmBorder"},[e._v("©RenoPipe Construction Co. Ltd. Copyright © 2020")])],1)},o=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}))},3186:function(e,t,a){var i=a("24fb"),n=a("1de5"),o=a("ffac"),s=a("a7e6");t=i(!1);var c=n(o),r=n(s);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */body[data-v-17ebac8b]{font-family:Abel}\r\n/*header的style*/.nav-background[data-v-17ebac8b]{background:#5f98ec}.mt25[data-v-17ebac8b]{margin-top:25px}\r\n/*header的button的css*/.menu-btn[data-v-17ebac8b]{width:.9rem;height:.9rem;padding:10px;cursor:pointer}.logoBox[data-v-17ebac8b]{width:40%;height:%?150?%;background:url('+c+") no-repeat;background-size:100%;background-position:40% 20%;margin-left:.5rem}.title-padding[data-v-17ebac8b]{padding:0 .7rem;margin-bottom:.4rem}.body-padding[data-v-17ebac8b]{padding:0 .7rem}.btn-color[data-v-17ebac8b]{background:#3a75bb;color:#fff}.main[data-v-17ebac8b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.worker-main[data-v-17ebac8b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:10px}.customize-btn[data-v-17ebac8b]{padding:.3rem}.hr-line[data-v-17ebac8b]{margin-top:10px;color:#e9e8e8}.title[data-v-17ebac8b]{font-size:1rem;color:grey}.scoll[data-v-17ebac8b]{overflow-x:scroll;overflow:-moz-scrollbars-vertical;height:16rem}h3[data-v-17ebac8b]{color:grey}p[data-v-17ebac8b]{line-height:1.5rem;color:grey}select[data-v-17ebac8b]{padding:.2rem}table[data-v-17ebac8b]{width:100%;margin-top:.5rem}table[data-v-17ebac8b], th[data-v-17ebac8b], td[data-v-17ebac8b]{border:1px solid #000;border-collapse:collapse}th[data-v-17ebac8b], td[data-v-17ebac8b]{padding:15px;text-align:left;font-size:.5rem}table#t01 tr[data-v-17ebac8b]:nth-child(even){background-color:#f8fcff}table#t01 tr[data-v-17ebac8b]:nth-child(odd){background-color:#f8fcff}table#t01 th[data-v-17ebac8b]{background-color:#3a75bb;color:#fff;height:.5rem}tr#header[data-v-17ebac8b]{line-height:.1rem}.loginWrap[data-v-17ebac8b]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.btmBorder[data-v-17ebac8b]{font-size:.6rem;border-bottom:solid 20px #5f98ec;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.Wrap[data-v-17ebac8b]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.blue-divider[data-v-17ebac8b]{border-bottom:1px solid #5f98ec;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%}.hr[data-v-17ebac8b]{padding:0 8rem 0 8rem;margin-top:20px;margin-bottom:20px}.border[data-v-17ebac8b]{border:1px solid #e8e8e8;background:#f7f7f7}b[data-v-17ebac8b]{font-size:1.5rem}.worker-info-area[data-v-17ebac8b]{padding:1rem}.chk-box-area[data-v-17ebac8b]{padding:1.2rem}.worker-icon[data-v-17ebac8b]{height:50px;width:50px}.worktype-info-area[data-v-17ebac8b]{padding:1.3rem .5rem}.worktype[data-v-17ebac8b]{font-size:1.2rem}hr[data-v-17ebac8b]{color:#e8e8e8;border:solid 1px}.mt20[data-v-17ebac8b]{margin-top:20px}.jobTag[data-v-17ebac8b]{background:#007aff;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% %?20?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.textarea-padding[data-v-17ebac8b]{width:100%;border:solid 1px #e8e8e8}.submit-padding[data-v-17ebac8b]{padding:.5rem}.uploadBtn[data-v-17ebac8b]{display:inline;padding:%?10?% %?20?%;background:#007aff;border-radius:%?10?%;color:#fff;margin:%?15?% 0}.imgsWrap[data-v-17ebac8b]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.upLoadImg[data-v-17ebac8b]{width:100%;height:%?230?%}.imgBox[data-v-17ebac8b]{width:33%;border-right:solid 1px #fff}.selectType[data-v-17ebac8b]{width:100%}.checkBox[data-v-17ebac8b]{border:solid #1296db 1px;width:%?40?%;height:%?40?%}.checkBoxIcon[data-v-17ebac8b]{width:100%}.check[data-v-17ebac8b]{background:url("+r+");background-position:50%;background-size:cover}.selectpadding[data-v-17ebac8b]{padding:.3rem;position:relative;top:2px}uni-input[data-v-17ebac8b]{border:solid 1px #d3d3d3;margin-bottom:1rem}.selectPosition[data-v-17ebac8b]{background:#007aff;padding:%?10?% %?20?%;color:#fff;width:50vw}.positionIcon[data-v-17ebac8b]{width:0;height:0;border:solid %?15?% transparent;border-top:%?15?% #fff solid;-webkit-transform:translateY(%?13?%);transform:translateY(%?13?%)}.whiteColor[data-v-17ebac8b]{color:#fff}",""]),e.exports=t},4947:function(e,t,a){"use strict";(function(e){a("a4d3"),a("e01a"),a("4160"),a("a15b"),a("a434"),a("a9e3"),a("e25e"),a("ac1f"),a("1276"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{attendenceData:"",imgs:[],description:"",workerList:[],siteList:[],siteId:"",site:{},start:{name:"",timesamp:0},end:{name:"",timesamp:0},projectid:"",subcontract:"",rporsubCRP:"",machine:"",username:uni.getStorageSync("username"),supervisorId:uni.getStorageSync("userid"),selected:"",head:"Renopipe",timeRange:"上午",worktypeOption:[{name:"打路面",check:!1},{name:"挖坑",check:!1},{name:"打拆",check:!1},{name:"駁水",check:!1},{name:"裝水喉",check:!1},{name:"還原",check:!1},{name:"探坑",check:!1},{name:"試制",check:!1},{name:"雜務",check:!1}],machineOption:[{name:"發電機 1",check:!1},{name:"發電機 2",check:!1},{name:"發電機 3",check:!1},{name:"大電炮 1",check:!1},{name:"大電炮 2",check:!1},{name:"細電炮",check:!1},{name:"保路華",check:!1},{name:"跳鎚",check:!1},{name:"震船",check:!1},{name:"9噸吊雞",check:!1},{name:"30噸吊雞",check:!1},{name:"5.5噸車",check:!1},{name:"水泵",check:!1}],allPosition:[],currentPositionIndex:0,delImgs:[]}},onLoad:function(e){this.siteId=Number(e.siteId),this.getAllPosition(),this.getData();var t=new Date,a=t.getFullYear(),i=t.getMonth(),n=t.getDate(),o=a+"-"+(i+1)+"-"+n;this.start.name=o,this.start.timesamp=new Date(o).getTime()/1e3;var s=new Date(Date.now()+2592e6),c=s.getFullYear(),r=s.getMonth(),d=s.getDate(),l=c+"-"+(r+1)+"-"+d;this.end.name=l,this.end.timesamp=new Date(l).getTime()/1e3},computed:{baseURL:function(){return this.$store.state.baseURL}},methods:{delImg2:function(e,t){this.delImgs.push(e),this.attendenceData.images.splice(t,1)},delImg:function(e){this.imgs.splice(e,1)},checkData:function(){var e=this;setTimeout((function(){e.attendenceData.workers.forEach((function(t){var a=t.ID;e.allPosition.forEach((function(e){e.workers.forEach((function(e){a==e.ID&&(e.check=!0)}))}))})),e.attendenceData.worktype.split(",").forEach((function(t){e.worktypeOption.forEach((function(e){e.name==t&&(e.check=!0)}))})),e.attendenceData.machine.split(",").forEach((function(t){e.machineOption.forEach((function(e){e.name==t&&(e.check=!0)}))}))}),500)},getData:function(){var e=this;uni.showLoading({title:"讀取中..."}),uni.request({url:e.baseURL+"attendence?id="+this.$route.query.id,method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(t){t?(e.attendenceData=t.data[0],e.getSite(t),e.checkData()):alert("記錄不存在")},complete:function(){uni.hideLoading()}})},startTime:function(e){this.start.name=e.detail.value,this.start.timesamp=new Date(e.detail.value).getTime()/1e3},endTime:function(e){this.end.name=e.detail.value,this.end.timesamp=new Date(e.detail.value).getTime()/1e3},choosePosition:function(t){var a=this,i=Number(t.detail.value);this.currentPositionIndex=i,e.log(a.currentPositionIndex),a.workerList=this.allPosition[this.currentPositionIndex].workers},getAllPosition:function(){var t=this;uni.request({url:t.baseURL+"worker?action=byRole",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(a){e.log(a),a.data&&(t.allPosition=a.data,t.allPosition.forEach((function(e){e.workers.forEach((function(e){e.check=!1}))})),t.workerList=t.allPosition[0].workers)}})},getSite:function(t){var a=this;uni.request({url:a.baseURL+"site",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(i){e.log(i),i.data&&(a.siteList=i.data,a.siteList.forEach((function(e){e.ID==t.data[0].siteId&&(a.site=e)})))}})},getWorders:function(){var t=this;uni.request({url:t.baseURL+"worker",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(a){e.log("workerList",a),t.workerList=a.data,t.workerList.forEach((function(e){e.check=!1}))}})},chooseWorker:function(t){var a=this.workerList[t];a.check=!this.workerList[t].check,e.log(a),this.workerList.splice(t,1,a)},chooseType:function(e){var t=this.worktypeOption[e];t.check=!this.worktypeOption[e].check,this.worktypeOption.splice(e,1,t)},chooseMachine:function(e){var t=this.machineOption[e];t.check=!this.machineOption[e].check,this.machineOption.splice(e,1,t)},toHome:function(){uni.navigateTo({url:"/pages/index/index"})},submit:function(){uni.showLoading({title:"加载中..."});var t=this,a=[];t.allPosition.forEach((function(e){e.workers.forEach((function(e){e.check&&a.push(e.ID)}))}));var i=[];t.worktypeOption.forEach((function(e){e.check&&i.push(e.name)}));var n=[];t.worktypeOption.forEach((function(e){e.check&&n.push(e.name)}));var o=[];t.machineOption.forEach((function(e){e.check&&o.push(e.name)}));var s=[];t.imgs.forEach((function(e){var t=e.base64.split("base64,")[1];s.push(t)}));var c={workerIds:a,siteId:this.attendenceData.siteId,supervisorId:parseInt(this.attendenceData.supervisorId),startTimestamp:this.attendenceData.startTimestamp,endTimestamp:this.attendenceData.endTimestamp,time:this.attendenceData.time,subcontract:this.attendenceData.subcontract?this.attendenceData.subcontract:" ",rporsubCRP:this.attendenceData.rporsubCRP,machine:o.join(),description:t.attendenceData.description,worktype:n.join(),base64Images:s,removeImageId:t.delImgs};e.log(c),uni.request({url:t.baseURL+"attendence/"+this.$route.query.id,method:"PUT",header:{Authorization:uni.getStorageSync("token")},data:c,success:function(t){e.log("编辑",t),t.data.error?uni.showToast({title:"編輯失敗",icon:"none"}):uni.navigateTo({url:"/pages/record/completeEdit"})},fail:function(){uni.showToast({title:"編輯失敗",icon:"none"})},complete:function(){uni.hideLoading()}})},chooseImg:function(){var t=this;uni.chooseImage({count:9,sourceType:["album","camera"],success:function(a){e.log(a);for(var i=a.tempFiles,n=function(n){var o=new FileReader;o.readAsDataURL(i[n]),o.onload=function(){t.imgs.push({src:a.tempFilePaths[n],file:i[n],base64:o.result})},o.onerror=function(t){e.log("Error: ",t)}},o=0;o<i.length;o++)n(o)}})},onChangeHead:function(t){e.log(t,this.head)}}};t.default=i}).call(this,a("5a52")["default"])},"5f55":function(e,t,a){"use strict";a.r(t);var i=a("3031"),n=a("c60b");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("0d93");var s,c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"17ebac8b",null,!1,i["a"],s);t["default"]=r.exports},"6d48":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAI5klEQVR4Xu2dachWRRTHtdVsIWkjaIMiMiKiRSg1MyoyJAq0yDLbxbAiWyCSUEpo1xYrLEMqw4L2sgy1svxgG/TBPvglhGj7EIQQZVj9/73PteddnvfO3NnOmTsDB+/jnTln7pnfPTNz731nRo4oqXgAHhhZvFA8QA8UEAoH/3mggFBAKCAUBv73QIkIhYYSEQoDJSIUBgZ4wKVr2Be6zoaMgxwD2Q+yFfItZB1kc/F2EA+Mh9ZJkGMhh0J+hmyBfAr5pKnFJiCMgrG7IHdCeNwrbcKJ2ZBvmlaulOvngen49TDkiGH88iPO3QFZaes7WxAOh4EPIccZGtqBfLdAlhrmL9kGe2A3/NfLEIJgml5Hxssg200L2IBwFJTyLj/YVHlXvidwfHODcm0vshcc8B5kcgNHfGxTzhQEVugryNgGFaqKPN6JDg4qWlV0NK52DWSCw1UzEs81KW8KwoNQxr7HNT0LBTe4KmlBed54ayFneLhWgrSxTo8JCAdByS91iizOG1NqoTOnrITgfQhnBj7SBhNdJiDMgqIVPmrUpaNEhqEd6jMSVBb+wcEYyG/DtaEJCMug4HrPIFBdiQz9neo7EnRrn4ofHHT2TCYgvIXSFwYAgSpLZOhzbIhI0N1kN+HHk64grIaCKYFAKJGhDwLODiYG9PF86F7kCsLzUHB1wEq2OTKEjgRVs3Gmxujr1DXwUfIDgUGg+qchN0awI8VEjEhQXeuZOOC7CCcQTkTpWO8L2jJmiBUJ2PCcLRwA4eN+JxBY+EvIKZFupdwjQ8xIwCZbDJlX13YmswbqOBXyRZ0yj+dznVruDR9xYMhXyTHSDzDCF4Tb6oyZgkA9fIu4pE6hx/O5dRMxuwM2w18QPl7+3KRNbECgvscgMd8i5tJN7NOJBD7eHZi0K/PwNfQq08y2IFDvU5A5pgY85NMeGQjBeshpHnxhouJvZLoSYvVxShMQCgwmzdGXRwUErGhTEFLBwE/f+BJFQ1IDgSsIKWB4AUavUgCDKgh8gFBgGByb1EHgCwTqWQ65JmK8lhoZYkPAbnKm7cBwqHZyGSN066Oe51oOQwoIroPP+VLQOfkCoYoubYVBNQQ+u4aKyDZGBvUQhAChbZEhCwhCgdAWGLKBICQIucOQFQShQaj0v4iDy52HteYKQk8tY0PAK7/W1+yglxt9zhp62dgFJ9g4OcCQAgJ+vse3sEFTDBB4ATnAwPUf+Gdosd4i0m9RIIjRNXRTrBkGQsBFKE4Kelv2Vx4NgtggaI0M2UOQAgRtMLQCglQgaIGhNRCkBKGC4RUcTIvY75pOLVsFQWoQaH9XCD+wlARDCghuhQ9ifiE+6N6LNX0c7qaXBEMrIZAQESpAJMDQWggkgZCqm2C3NAPCxUNjPydI3h10h2kJXcPAboMDyEsiDyBPgL2TI9q8HbYeiWiv1pREENhNcMHIUKu01DolcAZRkaC6VokgsG5cbfS1DGEQCYG0McLAGzE3GMRCIB2EnCIDFzG/P3CX46ReatfQfVHaI4N4CDREhAoIrTCogEATCBq7CTUQaAOhguEdHJzv1CGGL6wKAo0gsM57QLgarFQY1EGgFQTJMCxE5RaEDzj+LWiYNfS6ammRgdNDRgOVSTMIkiKDagg0dw3dd13qyKAeglxAqCIDdz3hPpQxUxYQ5ATC7rgYbkxxbkwKYIv7MPrY6ypytQeb0z5G4BXtCeGzhdgQVN7MAgbtIBCCDyBnJb6l1MOgGQQpEGQRGbSCIA0C9TBoBEEqBKph0AaCdAgqGLijGndWU5M0gaAFApUwaAFBGwTqYNAAglYIVMEgHQTtEKiBQTIIuUCgAgapIOQGgXgYJIKQKwSiYZAIwkeR3x1wqXvuvhZzvwlxzxkkgRA7EnDTi2q/gxSryouCQQoIKSGoQnarYZAAAndIXR25O+i1tjH9EXvtaBGRITUIsbfJ5d1ft6JpihVik8OQEgSJEFTdROtgSAWCZAhaCUMKEDRA0DoYYoOgCYKUMETfGD0mCBoh6IYh9nLBUWGIBYJmCCoYUiwKGg2GGCCkgCDUwlXZwhAahJwgyDoyhAQhRwiyhSEUCDlDkCUMIUBoAwTZweAbhDZB0A1D7LWjvc8mfILQRggqGFKsA+kVBl8gtBmCLGDwAQK3yV3T+dyrckrof6UuYac2MriCkGKvZKkQqI4MLiAUCHrHPXWRoSkIBYL6zk8VDE1AKBDUQ9DdTcReO5qzidkQfqVtnGxBKBAYu3ZnxhTrQJrueLuzkrYgfIaS4+190bjEQpRc0Li0rIJc/u+CiFV6BrbmmNqzAeFVKJ1uqthDvmwWs+z4IkVkqPti2zoiXIQSb3hoXFMVuUFQXXdsGLbD8JGQn+ocbxoRNkPR8XXKPJ1fBD3zPemSqoZ/0DMlUuWWws7cOlsmIEyEkg11ijydzzUSDHQPI0OstaO3wdaBEEaHnskEhIdQmlvYhk5tgaDy4ygcvA2JsXQwbax1BSHGXs1tg6AbBs4mQq8qz9kDZxFOEYEvlM4LGA64WXaMiBPwEpxUMzLwodM5TlqGL3wPTt/rCsJKKJgRqJJLoJdfHLc9EYaQkYGLf/IPbZ0iwn0ofXeAlnoUOm8LoFerypAwTO2A5gTCZJRe79m7JRIM7dAQMHC2MAbyu2tEYHk+kDjEEwyLoWeeJ105qiEM3INikqeLexN6Lq7TZTJ9pI4rIFxJxDWVSGDmwdHIxkH6BLPsPXP9iTNjId/V6TEFgXpWQS6tUzjM+QKBnfN8wDATJl8yMWsDAvXxCSOfNNqmMjC09VhffsLwLoTjNNtk9ajeFgRWZjnEZk1Cjgc4LiipuQdWoOgsi+L8MGWZRf4RTUCgfhJK4k4fxtgmnONr0K9tKlTy9vTAtM4NdViPHH90ogcfzm219WNTECo7++NgHORoSDWr+BXH6yB8Y1mSfw+wa+YgkmtT7oB8D9kC2ehiyhUEF9ulrCAPFBAENUbKqhQQUnpfkO0CgqDGSFmVAkJK7wuyXUAQ1Bgpq1JASOl9QbYLCIIaI2VV/gUdZcmS1QxVlQAAAABJRU5ErkJggg=="},"91f1":function(e,t,a){var i=a("3186");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("3ca1c52f",i,!0,{sourceMap:!1,shadowMode:!1})},a7e6:function(e,t){e.exports="data:image/png;base64,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"},b8ec:function(e,t,a){e.exports=a.p+"static/img/Users-Worker-icon.427c988b.png"},c60b:function(e,t,a){"use strict";a.r(t);var i=a("4947"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},ffac:function(e,t,a){e.exports=a.p+"static/img/logo.c71ee8a6.png"}}]);