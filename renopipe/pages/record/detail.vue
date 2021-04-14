<template>
	<view class="Wrap sb la">
		<!--header!-->
		<Header></Header>
		<view class="flex10">
			<!--title!-->
			<view class="title-padding mt25">
				<div class="main">
					<p class="title">工作紀錄詳情</p>
					<!--return btn!-->
					<div class="btn-color customize-btn" @click="republish"> 重發whatsapp</div>
					<div class="btn-color customize-btn" @click="showModal"> 圖片補充</div>
					<div class="btn-color customize-btn" @click="toHome"> 返回</div>
				</div>
				<hr class="hr-line"/>
				<small>重發功能跟編輯功能沒有直接關係，請在編輯完成並儲存後再使用重發whatsapp，發出訊息。</small>
				<hr class="hr-line"/>
			</view>
			
			<!--body!-->
			<view class="body-padding">
				<p>工頭名稱: {{attendenceData.supervisors[0].cName}}</p>
				<!-- <p>日期: 2020-06-21 SS:MM:HHHH</p> -->
				<picker mode="date" @change="startTime">
					<view>工作日期: {{this.workingTime}}</view>
				</picker>
				<p>時段: {{attendenceData.time}}</p>
				<!--<span class="selectpadding">
					<select v-model="timeRange" style="padding:0rem!important;">
						<option value="上午">上午</option>
						<option value="下午">下午</option>
						<option value="全日">全日</option>
					</select>
				</span>!-->
				<p>工程項目編號: {{site.project}}</p>
				<p>地盤(中文名): {{site.cname}}</p>
				<p>地盤(英文名): {{site.name}}</p>
				<p>Dis1 : {{site.siteCode1}}</p>
				<p>Dis2: {{site.siteCode3}}</p>
				<p>DMA : {{site.dma}}</p>
				<p>EMFM .Ref: {{site.emfm}}</p>
				<p>Site C. TO. : {{site.sitetoc}}</p>	
				<p>Imple TO. : {{site.imple}}</p>		
			</view>
			<br/>
			
			<!--deatil entry!-->
			<view class="body-padding">
				<div class="">
					<p class="title">工作記錄基本資料</p>
				</div>
				<hr class="hr-line"/><br/>
			</view>

			<view class="body-padding">
				<p>副項目編號: {{attendenceData.subcontract}}</p> <!--<input  v-model="subcontract" placeholder="">!-->
			</view>

			<view class="body-padding">
				<p>判頭: {{attendenceData.rporsubCRP}}</p> <!--<span class="">
						<select @change="onChangeHead()" v-model="head" style="padding:0rem!important;width:100%;border: solid 1px lightgray;">
							<option id="1" value="Renopipe">Renopipe</option>
							<option id="2" value="Renopipe">信雄</option>
							<option id="3" value="Renopipe">信昌</option>
							<option id="4" value="Renopipe">永富</option>
							<option id="2" value="Others">其他</option>
						</select>
					</span>!-->

				
				<!--<input  v-model="rporsubCRP" placeholder="">!-->
			</view>
			
			<view class="body-padding">
				<p>使用機械: {{attendenceData.machine}}</p> <!--<input  v-model="subcontract" placeholder="">!-->
			</view>
			
			<view class="body-padding">
				<p>工作種類: {{attendenceData.worktype}}</p> <!--<input  v-model="subcontract" placeholder="">!-->
			</view>
			
			<!--<view class="body-padding">
				機械:<input v-model="machine" placeholder="">
					<select @change="onChangeHead()" v-model="head" style="padding:0rem!important;width:100%;border: solid 1px lightgray;">
							<option id="1" value="發電機">發電機</option>
							<option id="2" value="大電炮">大電炮</option>
							<option id="3" value="細電炮">細電炮</option>
							<option id="4" value="保路華">保路華</option>
							<option id="2" value="跳鎚">跳鎚</option>
							<option id="2" value="震船">震船</option>
							<option id="2" value="9噸吊雞">9噸吊雞</option>
							<option id="2" value="30噸吊雞">30噸吊雞</option>
							<option id="2" value="30噸吊雞">5.5噸車</option>
							<option id="2" value="30噸吊雞">水泵</option>
					</select>
			</view>!-->

			<div class="hr">
					<div class="blue-divider"></div>
			</div>

			<!--worker-list!-->
			<view class="body-padding">
				<div class="">
					<p  v-if="attendenceData.workers.length > 0" class="title">Renopipe當值工人: {{attendenceData.workers.length}} 人</p>
					<!--<u>請選擇今天有上班的工人，如果找不到工人請致電Tesla Chong(60814693)。</u>!-->
				</div>
				<hr class="hr-line"/><br/>
			</view>			
			
			<view v-if="attendenceData.workers.length > 0" class="body-padding mt20">

				<view class="border box scoll">
					<!--only need one worker-main when for loop!-->
					<div class="worker-main al" v-for="(item,i) in attendenceData.workers" :key="i">
						<img class="worker-icon" src="@/static/img/Users-Worker-icon.png"/>
						<div class="worker-info-area">
							<b>{{item.cName}} {{item.position}}</b>
						</div>
						<!--<view 
							:class="['checkBox',{ check:item.check }]"
							@click="chooseWorker(i)">
							< <image v-show="item.check" class="checkBoxIcon" src="../../static/img/check2.png" mode="widthFix"></image> 
						</view>!-->
					</div>
					<hr/>
				
				
				</view>
			</view>
			<br/><br/>
			
			
			<view v-if="remark2.length > 0" class="body-padding">
				<view class="title">其他判頭當值工人: </view>
				<hr class="hr-line"/><br/>
				<view style="background:#F7F7F7;border: 1px solid #E8E8E8;" v-for="(item,i) in remark2" :key="i">
					<view><h2>{{item.title}}:</h2></view>
					<view v-for="(attr,j) in item.list" :key="j">{{attr}}</view>
					<br>
				</view>
			</view>
				
			
			<view class="hr">
				<div class="blue-divider"></div>
			</view>
			


			<!--work description!-->
			<view class="body-padding">
				<div class="">
					<p class="title">工作描述</p>
				</div>
			</view>
			<view class="body-padding mt20">
				<div class="textarea-padding">
					<textarea v-model="attendenceData.description" placeholder="" disabled></textarea>
				</div>
				
				<div class="hr">
					<div class="blue-divider"></div>
				</div>
			</view>
			
			<!--photo upload!-->
			<view class="body-padding">
				<div class="">
					<p class="title">圖片</p>
				</div>
				<!--<view class="al"><view class="uploadBtn op" @click="chooseImg">選擇圖片</view></view>!-->
				<view class="imgsWrap al">
					<view class="imgBox" v-for="(item,i) in attendenceData.images" :key="i">
						<image class="upLoadImg" :src="baseURL + item.filePath" mode="aspectFill"></image>
						<!--<select class="selectType">
							<option >Trial Pits & Inspection Pits</option>
							<option >木工</option>
						</select>!-->
					</view>
				</view>
			</view>
				
			<!--submit button!--><br/>
			<view class="submit-padding">
				<button type="primary" @click="editNow"> 編輯紀錄</button>
			</view>
				
				
		</view>
		<!--footer!-->
		<view class="footer btmBorder">
			©RenoPipe Construction Co. Ltd. Copyright © 2020
		</view>
		<Modal ref="Modal">
			<view class="width500">
				<view class="blueBg">請選擇需要補充的圖片</view>
				<scroll-view scroll-y class="ModalBox">
					<view class="imgWrap ju al" v-for="(item,i) in attendenceData.images" :key="i" @click.stop="clickImg(item)">
						<image :src="baseURL + item.filePath" class="height100" mode="aspectFill"></image>
						<view :class="['radio', { check: item.check }]"></view>
					</view>
				</scroll-view>
				<view class="blueBg ju op" @click="rephoto">發送補充圖片</view>
			</view>
		</Modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				attendenceData:{supervisors:[""], workers:[],createdAt:""},
				workingTime:"123",
				imgs:[],
				images: [],  // 補充圖片使用
				selectIMG: {
					images: []
				},   // 選擇圖片存在此
				description: "",
				workerList: [],
				siteList: [],
				siteId: "",
				site: {},
				start: {
					name: "",
					timesamp: 0
				},
				end: {
					name: "",
					timesamp: 0
				},
				projectid:"",
				subcontract:"",
				rporsubCRP:"",
				machine:"",
				username: uni.getStorageSync('username'),
				supervisorId: uni.getStorageSync('userid'),
				selected: '',
				head:'Renopipe', //pre select Renopipe
				timeRange:'上午', //pre select 上午
				worktypeOption:[ //工作種類 worktype
					{name:"打路面",check:false},
					{name:"挖坑",check:false},
					{name:"打拆",check:false},
					{name:"駁水",check:false},
					{name:"裝水喉",check:false},
					{name:"還原",check:false},
					{name:"探坑",check:false},
					{name:"試制",check:false},
					{name:"雜務",check:false}
				],
				remark2: [],
				machineOption:[ //機械種類 machineOption
					{name:"發電機",check:false},
					{name:"大電炮",check:false},
					{name:"細電炮",check:false},
					{name:"保路華",check:false},
					{name:"跳鎚",check:false},
					{name:"震船",check:false},
					{name:"9噸吊雞",check:false},
					{name:"30噸吊雞",check:false},
					{name:"5.5噸車",check:false},
					{name:"水泵",check:false}
				],//發電機  大電炮 細電炮 保路華  跳鎚 震船 9噸吊雞 30噸吊雞 5.5噸車 水泵
				allPosition:[],      // 按工种分类好了的工人 
				currentPositionIndex:0,
				
			}
		},
		onLoad(val) {
			this.siteId = Number(val.siteId)
			this.getData()
			this.getAllPosition()
			// this.getWorders()
			//this.getSite()
			let D = new Date()
			let Y = D.getFullYear()
			let M = D.getMonth();
			let d = D.getDate()
			let str = Y + "-" + (M+1) + "-" + d
			this.start.name = str
			this.start.timesamp = new Date(str).getTime()/1000
			
			let D1 = new Date(Date.now() + 2592000000)
			let Y1 = D1.getFullYear()
			let M1 = D1.getMonth();
			let d1 = D1.getDate()
			let str1 = Y1 + "-" + (M1+1) + "-" + d1
			this.end.name = str1
			this.end.timesamp = new Date(str1).getTime()/1000
		},
		computed: {
			baseURL () { return this.$store.state.baseURL }
		},
		methods:{
			getData () {
				//console.log(this.$route.query.id)
				//this.$route.query.id
				
				let that = this
				uni.showLoading({
					title:"加载中..."
				})
				uni.request({ //grab supervisor id from localstorage
					url: that.baseURL + "attendence?id=" + this.$route.query.id,
					method:"GET",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					success (res) {
						console.log('报工记录',res.data[0])
						if(res){
							that.attendenceData = res.data[0]
							let dd= new Date(res.data[0].startTimestamp * 1000);
							console.log(res.data[0].startTimestamp);
							that.workingTime = dd.getFullYear()+"-"+(dd.getMonth()+1)+"-"+dd.getDate()
							
							that.getSite(res);
							let arr = []
							let remark = that.attendenceData.remark.split(";")
							remark.pop()
							console.log(remark)
							remark.forEach(item => {
								let obj = {}
								obj.title = item.split(":")[0]
								obj.list = (item.split(":")[1]).split(",")
								arr.push(obj)
							})
							that.remark2 = arr
							if (that.attendenceData.images) {
								that.images = that.attendenceData.images.map(img => {
									return that.$store.state.baseURL + img.filePath
								})
							}
						}else{
							alert("暫時未有記錄")
						}
					},
					complete () { uni.hideLoading() }
				})
			},
			startTime (e) {
				console.log(e)
				this.workingTime = e.detail.value
				this.start.timesamp = new Date(e.detail.value).getTime()/1000
			},
			endTime (e) {
				this.end.name = e.detail.value
				this.end.timesamp = new Date(e.detail.value).getTime()/1000
			},
			// 选择position
			choosePosition (e) {
				let that = this
				let num = Number(e.detail.value)
				
				this.currentPositionIndex = num
				console.log(that.currentPositionIndex)
				that.workerList = this.allPosition[this.currentPositionIndex].workers
			},
			clickImg (item) {
				item.check = !item.check
				this.attendenceData.images=[...this.attendenceData.images]
				// console.log(item.check)
				this.selectIMG.images = this.attendenceData.images.filter(img => img.check)
				console.log(this.selectIMG)
			},
			//获取所有工种(包括工人)
			getAllPosition () {
				let that = this
				uni.request({
					url:that.baseURL + "worker?action=byRole",
					method:"GET",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					success (res) {
						console.log(res)
						if (res.data) {
							that.allPosition = res.data
							that.allPosition.forEach(item => {
								item.workers.forEach(attr => {
									attr.check = false
								})
							})
							that.workerList = that.allPosition[0].workers
						}
					}
				})
			},
			// 獲取所以地盤
			getSite (e) {
				let that = this
				uni.request({
					url:that.baseURL + "site",
					method:"GET",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					success (res) {
						console.log(res)
						console.log("get site", e.data[0].siteId);
						if (res.data) {
							that.siteList = res.data
							that.siteList.forEach(item => {
								if (item.ID == e.data[0].siteId) {
									that.site = item
								}
							})
						}
					}
				})
			},
			//獲取所有工人
			getWorders () {
				let that = this
				uni.request({
					url: that.baseURL + "worker",
					method:"GET",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					success (res) {
						console.log("workerList",res)
						that.workerList = res.data
						that.workerList.forEach(item => {
							item.check = false
						})
					}
				})
			},
			//勾選工人
			chooseWorker (i) {
				// console.log(i)
				// this.workerList[i].check = !this.workerList[i].check
				let obj = this.workerList[i]
				obj.check = !this.workerList[i].check
				console.log(obj)
				this.workerList.splice(i,1,obj)
			},
			chooseType (i) {
				let obj = this.worktypeOption[i]
				obj.check = !this.worktypeOption[i].check
				this.worktypeOption.splice(i,1,obj)
			},
			chooseMachine(i) {
				let obj = this.machineOption[i]
				obj.check = !this.machineOption[i].check
				this.machineOption.splice(i,1,obj)
			},
			toHome() {
				uni.navigateTo({
					url: "/pages/index/index"
				})
			},
			submit() { //this shall be change to API for Create new record
				uni.showLoading({
					title:"加载中..."
				})
				let that = this
				let arr = []        // 已勾選工人
				that.allPosition.forEach(item => {
					item.workers.forEach(attr=> {
						if (attr.check) {
							arr.push(attr.ID)
						}
					})
				})
				let workType = []
				that.worktypeOption.forEach(item => {
					if (item.check) {
						workType.push(item.name)
					}
				})

				let arr2 = []        // 已勾選工作
				that.worktypeOption.forEach(item=> {
					if (item.check) {
						arr2.push(item.name)
					}
				})

				let arr3 = []        // 已勾選工作
				that.machineOption.forEach(item=> {
					if (item.check) {
						arr3.push(item.name)
					}
				})

				let base64 = []
				that.imgs.forEach(item => {
					let str = item.base64.split("base64,")[1]
					base64.push(str)
				})
				
				//data
				let data = {
							workerIds: arr,
							siteId: that.siteId,
							supervisorId:parseInt(this.supervisorId),
							startTimestamp: parseInt(Date.now()/1000) + "",
							endTimestamp:parseInt(Date.now()/1000) + 2592000 + "",
							//description: that.description,
							/*new fields*/
							time:this.timeRange,
							//projectid: "J1005",
							subcontract: this.subcontract,
							rporsubCRP: this.head,
							machine: arr3.join(),
							//district:"坪洲",
							//location:"離島坪洲，永東街",
							//workers:"{雜工:{黃錦江，鄭世杰，翁余川}}",
							description:that.description,
							worktype:arr2.join(),
							//smr:"",
							//smrref:"",
							//daywork:"",
							//dwref:"",
							//trialpit:"",
							//pipe:"",
							//chamber:"",
							//reinstatement:"",
							//workingrecordcol:"",
							//rockamh:"",
							//other:"",
							//rebate:"",
							//ce:"",
							//remark:"",
							base64Images: base64
				}
				console.log(data)
				
				//Submit request
				uni.request({
					url:that.baseURL + "attendence",
					method:"POST",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					data: data,
					success (res) {
						console.log("新增",res)
						if (!res.data.error) {
							uni.navigateTo({
								url: "/pages/record/complete"
							})
						} else {
							uni.showToast({
								title: "創建失敗",
								icon:"none"
							})
						}
					}, 
					fail () {
						uni.showToast({
							title: "網絡錯誤",
							icon:"none"
						})
					},
					complete () { uni.hideLoading() }
				})
				
			},
			chooseImg () {
				let that = this
				uni.chooseImage({
					count:9,
					sourceType:["album","camera"],
					success (res1) {
						console.log(res1)      //已選文件
						let Files = res1.tempFiles
						for(let i=0;i<Files.length;i++) {
							//轉base64格式
							let reader = new FileReader()
							reader.readAsDataURL(Files[i])
							reader.onload = () => {
								// console.log('file 转 base64结果：' + reader.result)
								that.imgs.push({
									src:res1.tempFilePaths[i],
									file: Files[i],
									base64: reader.result
								})
								
							}
							reader.onerror = function (error) {
								console.log('Error: ', error)
							}
						}
					}
				})
			},
			onChangeHead(){
				console.log(this.head)
				//console.log(e.target)
				//this.head = this.head;
			},
			republish(){
				//check group id
				let pjid = this.site.project
				let groupId = "";
				console.log(pjid)
				
				if(pjid == "J1005"){
					groupId = "1598237648";
				}else if(pjid == "J1003"){
					groupId = "1598237623";
				}else if(pjid == "J1008"){
					groupId = "1598237673";
				}else if(pjid == "J1009"){
					groupId = "1598237699";
				}else{
					groupId = "not found";
				}
				
				//update time
				let updateTime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString();
				let updateTimeReFine = updateTime.split(".")[0]
				
				console.log(updateTimeReFine)
				
				//token
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "rXrBTOucGWXF8YJdDVtnM9x1aRz0GM3TXVUOvk3OS4vzXfRLztcYDVHDzi4riiR6");
				myHeaders.append("Content-Type", "application/json");
					
				//workers
				let workerslisting = this.attendenceData.workers;
				let workerArr = [];
				
				for (let i = 0; i < this.attendenceData.workers.length; i++){
					workerArr.push("\n" + this.attendenceData.workers[i].cName + "-" + this.attendenceData.workers[i].position)
				}
				
				//supplier
				let supplierList = this.attendenceData.remark
				let supplierToArray = supplierList.split(";")
				const reducer = (accumulator, currentValue) => accumulator + currentValue
				let supplierArr = [];
				let supplierWorkerNums = [];
				let totalWorkers;
				
				
				for (let i = 0; i < supplierToArray.length; i++){
					if(supplierToArray[i] !== ""){
						let number = supplierToArray[i].match(/\d+/g).map(Number)
						supplierArr.push("\n" + supplierToArray[i] + " 總共人數:" + number.reduce(reducer))
						supplierWorkerNums.push(number.reduce(reducer))
					}
				}
				
				if(supplierWorkerNums.length > 0){
					totalWorkers = this.attendenceData.workers.length + supplierWorkerNums.reduce(reducer);
				}else{
					totalWorkers = this.attendenceData.workers.length
				}
				
				console.log(totalWorkers);

				var raw = JSON.stringify({
					"groupId":"1611035434",
					"phone":"85292631429",
					"message":
						"[報工記錄更新: 記錄編號 - " + this.attendenceData.ID + "]"+
						"\n" + "[舊紀錄發佈時間: " + this.attendenceData.createdAt.split("+")[0].replace("T", " ") + "]"+
						"\n\n" + "[報工記錄更新時間: " + updateTimeReFine.replace("T", " ") + "]"+
						"\n\n" + `工作日期 : ` + this.workingTime +
						"\n\n" + `時段 : ` + this.attendenceData.time +
						"\n\n" + `地盤項目編號 : ` + this.site.project +
						"\n\n" + `Imple To: ` + this.site.imple +
						"\n\n" + `Site C. To: ` + this.site.sitetoc +
						"\n\n" + `EMFM: ` + this.site.emfm +
						"\n\n" + `DMA: ` + this.site.dma +
						"\n\n" + `DIS(1)  :` + this.site.siteCode1 +
						"\n\n" + `DIS(2)  :` + this.site.siteCode3 +
						"\n\n" + `Loc. Name(Chi) 地盤地址: ` + this.site.cname + " " + this.site.name +
						"\n\n" + `判頭: ` + this.attendenceData.subcontract +
						"\n\n" + `創建者 : ` + this.attendenceData.supervisors[0].cName +
						"\n\n" + `*Renopipe工人總數：` + this.attendenceData.workers.length + `*`+
						"\n" + `Renopipe工人：`+ workerArr +
						"\n\n" + `*其他判頭工人:*` + supplierArr +
						"\n\n" + `總人數:` + totalWorkers +
						"\n\n" + `機械:  ` + this.attendenceData.machine +
						"\n\n" + `工作種類:` + this.attendenceData.worktype +
						"\n\n" + `工作內容:` + this.attendenceData.description + ""
					})
					
				console.log(raw)
				console.log(this.baseURL + "attendence/"+ this.$route.query.id + "/updateMsg")
				var requestOptions = {
				  method: 'POST',
				  headers: myHeaders,
				  body: raw,
				  redirect: 'follow'
				};
				
				let logUrl = this.baseURL + "attendence/"+ this.$route.query.id + "/updateMsg"
				
				fetch("https://selo.wablas.com/api/send-group", requestOptions)
				  .then(function(response) {
				    if(response.status === 200) {
						console.log(logUrl)
						uni.request({
						   	url:logUrl ,
						   	method:"PUT",
						   	header:{
						   		Authorization:uni.getStorageSync('token')
						   	},
						   	success: {},
						})
						uni.navigateTo({
							url: "/pages/record/completeResend"
						})
				    }else{
						alert("未能成功發送請再試!")
					}
				   })
				  .then(result => console.log(result))
				
			},
			showModal () {
				this.$refs.Modal.open()
			},
			loopImgAndSend () {
				this.attendenceData.images.forEach(img => {
					if (img.check) {
						
					}
				})
			},
			rephoto(){
				const imgUrl = "https://renopipe.co/"
				//imgUrl + this.attendenceData.images[i]filePath
				console.log(this.attendenceData.images)
				console.log(this.selectIMG.images)
				
				if(this.selectIMG.images){
					for (let i = 0; i < this.selectIMG.images.length; i++){
						console.log(i)
						console.log(imgUrl + this.selectIMG.images[i].filePath)
						let pjid = this.site.project
						let groupId = "";
						console.log(pjid)
						
						if(pjid == "J1005"){
							groupId = "1598237648";
						}else if(pjid == "J1003"){
							groupId = "1598237623";
						}else if(pjid == "J1008"){
							groupId = "1598237673";
						}else if(pjid == "J1009"){
							groupId = "1598237699";
						}else if(pjid =="J1010"){
							groupId = "1611035498";
						}else if(pjid =="J1011"){
							groupId = "1611035613";
						}else{
							groupId = "not found";
						}
						
						let updateTime = new Date().toJSON().slice(0,10);
						console.log(updateTime)
						
						var myHeaders = new Headers();
						myHeaders.append("Authorization", "rXrBTOucGWXF8YJdDVtnM9x1aRz0GM3TXVUOvk3OS4vzXfRLztcYDVHDzi4riiR6");
						myHeaders.append("Content-Type", "application/json");
						
						var raw = JSON.stringify({
								"groupId":groupId,
								"phone":"85292631429",
								"caption":"補充圖片"+ updateTime + this.site.cname + this.site.name,
								"image":imgUrl + this.selectIMG.images[i].filePath
							});
						
						var requestOptions = {
						  method: 'POST',
						  headers: myHeaders,
						  body: raw,
						  redirect: 'follow'
						};
						
						console.log(requestOptions)

						fetch("https://selo.wablas.com/api/send-image-group", requestOptions)
						  .then(response => response.text())
						  .then(result => console.log(result))
						  .catch(error => console.log('error', error));
					}
					uni.navigateTo({
						url: "/pages/record/completeResendIMG"
					})
				}else{
					uni.showToast({
						title: "本記錄沒有任何圖片",
						icon:"none"
					})
				}
			},
			editNow(){
				uni.navigateTo({
						url: "/pages/record/edit?id=" + this.$route.query.id
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	body{
		font-family: Abel;
	}
	/*header的style*/
	.nav-background{
		background: #5F98EC;
	}
	
	.mt25{
		margin-top: 25px;
	}
	/*header的button的css*/
	.menu-btn{
		width:0.9rem;
		height:0.9rem;
		padding:10px;
		cursor: pointer;
	}
	
	.logoBox {
		width: 40%;
		height: 150upx;
		background: url("../../static/img/logo.png") no-repeat;
		background-size: 100%;
		// border: solid black 1px;
		background-position: 40% 20%;
		margin-left: 0.5rem;
	}
	
	.title-padding{
		padding: 0 0.7rem;
		margin-bottom:0.4rem;
	}
	
	.body-padding{
		padding: 0 1rem;
	}
	
	.btn-color{
		background:#3A75BB;
		color: #fff;
	}
	
	.main{
		display: flex;
		justify-content: space-between;
	}
	
	.worker-main{
		display: flex;
		justify-content: space-between;
		padding:10px
	}
	
	.customize-btn{
		padding:0.3rem;
	}
	
	.hr-line{
		margin-top: 10px;
		color: #E9E8E8;
	}
	
	.title{
		font-size: 1rem;
		color:gray;
	}
	.scoll{
		overflow-x: scroll;
		overflow: -moz-scrollbars-vertical; 
		height:16rem;
	}
	h3{
		color:gray;
	}
	
	p{
		line-height: 1.5rem;
		color:gray;
	}
	
	select{
		padding:0.2rem;
	}

	table {
	  width: 100%;
	  margin-top:0.5rem;
	}
	table, th, td {
	  border: 1px solid black;
	  border-collapse: collapse;
	}
	th, td {
	  padding: 15px;
	  text-align: left;
	  font-size:0.5rem;
	}
	table#t01 tr:nth-child(even) {
	  background-color: #F8FCFF;
	}
	table#t01 tr:nth-child(odd) {
	 background-color: #F8FCFF;
	}
	table#t01 th {
	  background-color: #3A75BB;
	  color: white;
	  height:0.5rem;
	}
	tr#header{
		line-height: 0.1rem;
	}
	.loginWrap {
		min-height: 100vh;
		// border: solid black 1px;
		flex-direction: column;
	}
	
	.btmBorder{
		font-size: 0.6rem;
		border-bottom: solid 20px #5F98EC;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.Wrap {
		min-height: 100vh;
		// border: solid black 1px;
		flex-direction: column;
	}
	
	.blue-divider{
		border-bottom: 1px solid #5F98EC;
		display: flex;
		justify-content: center;
		width:100%;
	}
	.hr{
		padding: 0 8rem 0 8rem;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.border{
		border: 1px solid #E8E8E8;
		background: #F7F7F7;
	}
	b{
		font-size: 1.5rem;
	}
	.worker-info-area{
		padding:1rem;
	}
	.chk-box-area{
		padding:1.2rem;
	}
	.worker-icon{
		height:50px;
		width: 50px;
	}
	
	.worktype-info-area{
		padding:1.3rem 0.5rem;
	}
	
	.worktype{
		font-size:1.2rem;
	}
	
	hr{
		color: #E8E8E8;
		border: solid 1px;
	}
	
	.mt20{
		margin-top: 20px;
	}
	
	.jobTag{
		background:#007AFF;
		color:#FFF;
		display:flex;
		padding: 10upx 20upx;
		justify-content: center;
	}
	
	// .tagpad{
	// 	padding:0 13rem 0 0;
	// }
	
	.textarea-padding{
		width: 100%;
		border:solid 1px #E8E8E8;
	}
	
	.submit-padding{
		padding:0.5rem;
	}
	.uploadBtn {
		display: inline;
		padding: 10upx 20upx;
		background:#007AFF;
		border-radius:10upx;
		color: white;
		margin: 15upx 0;
	}
	.imgsWrap {
		flex-wrap: wrap;
	}
	.upLoadImg {
		width: 100%;
		height: 230upx;
		// border: solid red 1px;
	}
	.imgBox {
		width: 33%;
		border-right: solid 1px white;
	}
	.selectType {
		width: 100%;
	}
	.checkBox {
		border: solid #1296DB 1px;
		width: 40upx;
		height: 40upx;
	}
	.checkBoxIcon {
		width: 100%;
	}
	.check {
		background: url("~@/static/img/check2.png");
		background-position: center;
		background-size: cover;
	}
	.selectpadding{
		padding:0.3rem;
		position: relative;
    	top: 2px;
	}
	input{
		border:solid 1px lightgray;
		margin-bottom: 1rem;
	}
	.selectPosition {
		// border: solid red 1px;
		background: #007AFF;
		padding: 10upx 20upx;
		color: white;
		width: 50vw;
	}
	.positionIcon {
		width: 0;
		height: 0;
		border: solid 15upx transparent;
		border-top: 15upx white solid;
		transform: translateY(13upx);
	}
	.whiteColor {
		color: white;
	}
	.blueBg {
		padding: 15upx;
		background: #3A75BB;
		color: #FFF;
	}
	.width500 {
		width: 600upx;
		background: #FFF;
	}
	.ModalBox {
		padding: 20upx;
		height:500upx;
		overflow: auto;
	}
	.imgWrap {
		width: 28%;
		height: 150upx;
		border: solid #CCC 1px;
		position: relative;
		display: inline-block;
		margin: 9upx;
	}
	.height100 {
		height: 100%;
		width: 100%;
	}
	.radio {
		width: 25upx;
		height: 25upx;
		border: solid #CCC 2px;
		position: absolute;
		right:-10upx;
		top: -10upx;
		border-radius: 50%;background: #FFF;
	}
	.check {
		background: #93CE7E !important;
		border: solid #93CE7E 2px !important;
	}
</style>
