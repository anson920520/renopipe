(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-record-detail"],{"0b22":function(e,t,a){"use strict";a.r(t);var i=a("179f"),n=a("221d");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("a5f5");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3597eb20",null,!1,i["a"],s);t["default"]=c.exports},"179f":function(e,t,a){"use strict";var i,n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"Wrap sb la"},[i("Header"),i("v-uni-view",{staticClass:"flex10"},[i("v-uni-view",{staticClass:"title-padding mt25"},[i("div",{staticClass:"main"},[i("p",{staticClass:"title"},[e._v("工作紀錄詳情")]),i("div",{staticClass:"btn-color customize-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toHome.apply(void 0,arguments)}}},[e._v("返回")])]),i("hr",{staticClass:"hr-line"})]),i("v-uni-view",{staticClass:"body-padding"},[i("p",[e._v("工頭名稱: "+e._s(e.attendenceData.supervisors[0].cName))]),i("v-uni-picker",{attrs:{mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.startTime.apply(void 0,arguments)}}},[i("v-uni-view",[e._v("今日日期: "+e._s(e.attendenceData.createdAt))])],1),i("p",[e._v("時段: "+e._s(e.attendenceData.time))]),i("p",[e._v("工程項目編號: "+e._s(e.site.project))]),i("p",[e._v("地盤(中文名): "+e._s(e.site.name))]),i("p",[e._v("地盤(英文名): "+e._s(e.site.siteCode3))]),i("p",[e._v("Dis1 : "+e._s(e.site.siteCode1))]),i("p",[e._v("Dis2: "+e._s(e.site.siteCode2))]),i("p",[e._v("Site C. TO. : "+e._s(e.site.region))])],1),i("br"),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("工作記錄基本資料")])]),i("hr",{staticClass:"hr-line"}),i("br")]),i("v-uni-view",{staticClass:"body-padding"},[i("p",[e._v("副項目編號: "+e._s(e.attendenceData.subcontract))])]),i("v-uni-view",{staticClass:"body-padding"},[i("p",[e._v("判頭: "+e._s(e.attendenceData.rporsubCRP))])]),i("v-uni-view",{staticClass:"body-padding"},[i("p",[e._v("使用機械: "+e._s(e.attendenceData.machine))])]),i("v-uni-view",{staticClass:"body-padding"},[i("p",[e._v("工作種類: "+e._s(e.attendenceData.worktype))])]),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})]),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("當值工人: "+e._s(e.attendenceData.workers.length)+" 人")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("v-uni-view",{staticClass:"border box scoll"},[e._l(e.attendenceData.workers,(function(t,n){return i("div",{key:n,staticClass:"worker-main al"},[i("img",{staticClass:"worker-icon",attrs:{src:a("b8ec")}}),i("div",{staticClass:"worker-info-area"},[i("b",[e._v(e._s(t.cName)+" "+e._s(t.group))])])])})),i("hr")],2),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])],1),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("工作描述")])])]),i("v-uni-view",{staticClass:"body-padding mt20"},[i("div",{staticClass:"textarea-padding"},[i("v-uni-textarea",{attrs:{placeholder:"",disabled:!0},model:{value:e.attendenceData.description,callback:function(t){e.$set(e.attendenceData,"description",t)},expression:"attendenceData.description"}})],1),i("div",{staticClass:"hr"},[i("div",{staticClass:"blue-divider"})])]),i("v-uni-view",{staticClass:"body-padding"},[i("div",{},[i("p",{staticClass:"title"},[e._v("圖片")])]),i("v-uni-view",{staticClass:"imgsWrap al"},e._l(e.attendenceData.images,(function(t,a){return i("v-uni-view",{key:a,staticClass:"imgBox"},[i("v-uni-image",{staticClass:"upLoadImg",attrs:{src:e.baseURL+t.filePath,mode:"aspectFill"}})],1)})),1)],1),i("br"),i("v-uni-view",{staticClass:"submit-padding"},[i("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.editNow.apply(void 0,arguments)}}},[e._v("編輯紀錄")])],1)],1),i("v-uni-view",{staticClass:"footer btmBorder"},[e._v("©RenoPipe Construction Co. Ltd. Copyright © 2020")])],1)},o=[];a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}))},"1de5":function(e,t,a){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"221d":function(e,t,a){"use strict";a.r(t);var i=a("2a2e"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"2a2e":function(e,t,a){"use strict";(function(e){a("a4d3"),a("e01a"),a("4160"),a("a15b"),a("a434"),a("a9e3"),a("e25e"),a("ac1f"),a("1276"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{attendenceData:{supervisors:[""],workers:[]},imgs:[],description:"",workerList:[],siteList:[],siteId:"",site:{},start:{name:"",timesamp:0},end:{name:"",timesamp:0},projectid:"",subcontract:"",rporsubCRP:"",machine:"",username:uni.getStorageSync("username"),supervisorId:uni.getStorageSync("userid"),selected:"",head:"Renopipe",timeRange:"上午",worktypeOption:[{name:"打路面",check:!1},{name:"挖坑",check:!1},{name:"打拆",check:!1},{name:"駁水",check:!1},{name:"裝水喉",check:!1},{name:"還原",check:!1},{name:"探坑",check:!1},{name:"試制",check:!1},{name:"雜務",check:!1}],machineOption:[{name:"發電機",check:!1},{name:"大電炮",check:!1},{name:"細電炮",check:!1},{name:"保路華",check:!1},{name:"跳鎚",check:!1},{name:"震船",check:!1},{name:"9噸吊雞",check:!1},{name:"30噸吊雞",check:!1},{name:"5.5噸車",check:!1},{name:"水泵",check:!1}],allPosition:[],currentPositionIndex:0}},onLoad:function(e){this.siteId=Number(e.siteId),this.getData(),this.getAllPosition();var t=new Date,a=t.getFullYear(),i=t.getMonth(),n=t.getDate(),o=a+"-"+(i+1)+"-"+n;this.start.name=o,this.start.timesamp=new Date(o).getTime()/1e3;var s=new Date(Date.now()+2592e6),r=s.getFullYear(),c=s.getMonth(),d=s.getDate(),l=r+"-"+(c+1)+"-"+d;this.end.name=l,this.end.timesamp=new Date(l).getTime()/1e3},computed:{baseURL:function(){return this.$store.state.baseURL}},methods:{getData:function(){var e=this;uni.showLoading({title:"加载中..."}),uni.request({url:e.baseURL+"attendence?id="+this.$route.query.id,method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(t){t?(e.attendenceData=t.data[0],e.getSite(t)):alert("暫時未有記錄")},complete:function(){uni.hideLoading()}})},startTime:function(e){this.start.name=e.detail.value,this.start.timesamp=new Date(e.detail.value).getTime()/1e3},endTime:function(e){this.end.name=e.detail.value,this.end.timesamp=new Date(e.detail.value).getTime()/1e3},choosePosition:function(t){var a=this,i=Number(t.detail.value);this.currentPositionIndex=i,e.log(a.currentPositionIndex),a.workerList=this.allPosition[this.currentPositionIndex].workers},getAllPosition:function(){var t=this;uni.request({url:t.baseURL+"worker?action=byRole",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(a){e.log(a),a.data&&(t.allPosition=a.data,t.allPosition.forEach((function(e){e.workers.forEach((function(e){e.check=!1}))})),t.workerList=t.allPosition[0].workers)}})},getSite:function(t){var a=this;uni.request({url:a.baseURL+"site",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(i){e.log(i),e.log("get site",t.data[0].siteId),i.data&&(a.siteList=i.data,a.siteList.forEach((function(e){e.ID==t.data[0].siteId&&(a.site=e)})))}})},getWorders:function(){var t=this;uni.request({url:t.baseURL+"worker",method:"GET",header:{Authorization:uni.getStorageSync("token")},success:function(a){e.log("workerList",a),t.workerList=a.data,t.workerList.forEach((function(e){e.check=!1}))}})},chooseWorker:function(t){var a=this.workerList[t];a.check=!this.workerList[t].check,e.log(a),this.workerList.splice(t,1,a)},chooseType:function(e){var t=this.worktypeOption[e];t.check=!this.worktypeOption[e].check,this.worktypeOption.splice(e,1,t)},chooseMachine:function(e){var t=this.machineOption[e];t.check=!this.machineOption[e].check,this.machineOption.splice(e,1,t)},toHome:function(){uni.navigateTo({url:"/pages/index/index"})},submit:function(){uni.showLoading({title:"加载中..."});var t=this,a=[];t.allPosition.forEach((function(e){e.workers.forEach((function(e){e.check&&a.push(e.ID)}))}));var i=[];t.worktypeOption.forEach((function(e){e.check&&i.push(e.name)}));var n=[];t.worktypeOption.forEach((function(e){e.check&&n.push(e.name)}));var o=[];t.machineOption.forEach((function(e){e.check&&o.push(e.name)}));var s=[];t.imgs.forEach((function(e){var t=e.base64.split("base64,")[1];s.push(t)}));var r={workerIds:a,siteId:t.siteId,supervisorId:parseInt(this.supervisorId),startTimestamp:parseInt(Date.now()/1e3)+"",endTimestamp:parseInt(Date.now()/1e3)+2592e3+"",time:this.timeRange,subcontract:this.subcontract,rporsubCRP:this.head,machine:o.join(),description:t.description,worktype:n.join(),base64Images:s};e.log(r),uni.request({url:t.baseURL+"attendence",method:"POST",header:{Authorization:uni.getStorageSync("token")},data:r,success:function(t){e.log("新增",t),t.data.error?uni.showToast({title:"創建失敗",icon:"none"}):uni.navigateTo({url:"/pages/record/complete"})},fail:function(){uni.showToast({title:"網絡錯誤",icon:"none"})},complete:function(){uni.hideLoading()}})},chooseImg:function(){var t=this;uni.chooseImage({count:9,sourceType:["album","camera"],success:function(a){e.log(a);for(var i=a.tempFiles,n=function(n){var o=new FileReader;o.readAsDataURL(i[n]),o.onload=function(){t.imgs.push({src:a.tempFilePaths[n],file:i[n],base64:o.result})},o.onerror=function(t){e.log("Error: ",t)}},o=0;o<i.length;o++)n(o)}})},onChangeHead:function(){e.log(this.head)},editNow:function(){uni.navigateTo({url:"/pages/record/edit?id="+this.$route.query.id})}}};t.default=i}).call(this,a("5a52")["default"])},6484:function(e,t,a){var i=a("24fb"),n=a("1de5"),o=a("ffac"),s=a("a7e6");t=i(!1);var r=n(o),c=n(s);t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */body[data-v-3597eb20]{font-family:Abel}\r\n/*header的style*/.nav-background[data-v-3597eb20]{background:#5f98ec}.mt25[data-v-3597eb20]{margin-top:25px}\r\n/*header的button的css*/.menu-btn[data-v-3597eb20]{width:.9rem;height:.9rem;padding:10px;cursor:pointer}.logoBox[data-v-3597eb20]{width:40%;height:%?150?%;background:url('+r+") no-repeat;background-size:100%;background-position:40% 20%;margin-left:.5rem}.title-padding[data-v-3597eb20]{padding:0 .7rem;margin-bottom:.4rem}.body-padding[data-v-3597eb20]{padding:0 1rem}.btn-color[data-v-3597eb20]{background:#3a75bb;color:#fff}.main[data-v-3597eb20]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.worker-main[data-v-3597eb20]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:10px}.customize-btn[data-v-3597eb20]{padding:.3rem}.hr-line[data-v-3597eb20]{margin-top:10px;color:#e9e8e8}.title[data-v-3597eb20]{font-size:1rem;color:grey}.scoll[data-v-3597eb20]{overflow-x:scroll;overflow:-moz-scrollbars-vertical;height:16rem}h3[data-v-3597eb20]{color:grey}p[data-v-3597eb20]{line-height:1.5rem;color:grey}select[data-v-3597eb20]{padding:.2rem}table[data-v-3597eb20]{width:100%;margin-top:.5rem}table[data-v-3597eb20], th[data-v-3597eb20], td[data-v-3597eb20]{border:1px solid #000;border-collapse:collapse}th[data-v-3597eb20], td[data-v-3597eb20]{padding:15px;text-align:left;font-size:.5rem}table#t01 tr[data-v-3597eb20]:nth-child(even){background-color:#f8fcff}table#t01 tr[data-v-3597eb20]:nth-child(odd){background-color:#f8fcff}table#t01 th[data-v-3597eb20]{background-color:#3a75bb;color:#fff;height:.5rem}tr#header[data-v-3597eb20]{line-height:.1rem}.loginWrap[data-v-3597eb20]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.btmBorder[data-v-3597eb20]{font-size:.6rem;border-bottom:solid 20px #5f98ec;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.Wrap[data-v-3597eb20]{min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.blue-divider[data-v-3597eb20]{border-bottom:1px solid #5f98ec;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%}.hr[data-v-3597eb20]{padding:0 8rem 0 8rem;margin-top:20px;margin-bottom:20px}.border[data-v-3597eb20]{border:1px solid #e8e8e8;background:#f7f7f7}b[data-v-3597eb20]{font-size:1.5rem}.worker-info-area[data-v-3597eb20]{padding:1rem}.chk-box-area[data-v-3597eb20]{padding:1.2rem}.worker-icon[data-v-3597eb20]{height:50px;width:50px}.worktype-info-area[data-v-3597eb20]{padding:1.3rem .5rem}.worktype[data-v-3597eb20]{font-size:1.2rem}hr[data-v-3597eb20]{color:#e8e8e8;border:solid 1px}.mt20[data-v-3597eb20]{margin-top:20px}.jobTag[data-v-3597eb20]{background:#007aff;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% %?20?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.textarea-padding[data-v-3597eb20]{width:100%;border:solid 1px #e8e8e8}.submit-padding[data-v-3597eb20]{padding:.5rem}.uploadBtn[data-v-3597eb20]{display:inline;padding:%?10?% %?20?%;background:#007aff;border-radius:%?10?%;color:#fff;margin:%?15?% 0}.imgsWrap[data-v-3597eb20]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.upLoadImg[data-v-3597eb20]{width:100%;height:%?230?%}.imgBox[data-v-3597eb20]{width:33%;border-right:solid 1px #fff}.selectType[data-v-3597eb20]{width:100%}.checkBox[data-v-3597eb20]{border:solid #1296db 1px;width:%?40?%;height:%?40?%}.checkBoxIcon[data-v-3597eb20]{width:100%}.check[data-v-3597eb20]{background:url("+c+");background-position:50%;background-size:cover}.selectpadding[data-v-3597eb20]{padding:.3rem;position:relative;top:2px}uni-input[data-v-3597eb20]{border:solid 1px #d3d3d3;margin-bottom:1rem}.selectPosition[data-v-3597eb20]{background:#007aff;padding:%?10?% %?20?%;color:#fff;width:50vw}.positionIcon[data-v-3597eb20]{width:0;height:0;border:solid %?15?% transparent;border-top:%?15?% #fff solid;-webkit-transform:translateY(%?13?%);transform:translateY(%?13?%)}.whiteColor[data-v-3597eb20]{color:#fff}",""]),e.exports=t},"7dc7":function(e,t,a){var i=a("6484");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("6bbe225b",i,!0,{sourceMap:!1,shadowMode:!1})},a5f5:function(e,t,a){"use strict";var i=a("7dc7"),n=a.n(i);n.a},a7e6:function(e,t){e.exports="data:image/png;base64,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"},b8ec:function(e,t,a){e.exports=a.p+"static/img/Users-Worker-icon.427c988b.png"},ffac:function(e,t,a){e.exports=a.p+"static/img/logo.c71ee8a6.png"}}]);