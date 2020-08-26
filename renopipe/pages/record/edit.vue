<template>
	<view class="Wrap sb la">
		<!--header!-->
		<Header></Header>
		<view class="flex10">
			<!--title!-->
			<view class="title-padding mt25">
				<div class="main">
					<p class="title">編輯工作紀錄</p>
					<!--return btn!-->
					<div class="btn-color customize-btn" @click="toHome"> 返回</div>
				</div>
				<hr class="hr-line"/>
			</view>
			
			<!--body!-->
			<view class="body-padding">
				<p>工頭名稱: {{username}}</p>
				<!-- <p>日期: 2020-06-21 SS:MM:HHHH</p> -->
				<picker mode="date" @change="startTime">
					<view>今日日期: {{start.name}}</view>
				</picker>
				時段: &nbsp;&nbsp;
				<span class="selectpadding">
					<select v-model="attendenceData.time" style="padding:0rem!important;">
						<option value="上午">上午</option>
						<option value="下午">下午</option>
						<option value="全日">全日</option>
					</select>
				</span>
				<p style="display: none;"></p>
				<p>工程項目編號: {{site.project}}</p>
				<p>地盤(中文名): {{site.cname}}</p>
				<p>地盤(英文名): {{site.name}}</p>
				<p>Dis1 : {{site.siteCode1}}</p>
				<p>Dis2: {{site.siteCode3}}</p>
				<p>DMA : {{site.dma}}</p>
				<p>EMFM .Ref: {{site.emfm}}</p>
				<p>Site C. TO. : {{site.sitetoc}}</p>	
				<p>Imple TO. : {{site.imple}}</p>	
			
				<div class="hr">
					<div class="blue-divider"></div>
				</div>
			</view>
			
						<!--deatil entry!-->
			<view class="body-padding">
				<div class="">
					<p class="title">工作記錄基本資料</p>
				</div>
			</view>

			<view class="body-padding">
				副項目編號(非必填):<input  v-model="attendenceData.subcontract" placeholder="">
			</view>

			<view class="body-padding">
				判頭: <span class="">
						<select @change="onChangeHead($event)" v-model="attendenceData.rporsubCRP" style="padding:0rem!important;width:100%;border: solid 1px lightgray;font-size: 22px;">
							<option id="1" value="Renopipe">Renopipe</option>
							<option id="2" value="信雄">信雄</option>
							<option id="3" value="信昌">信昌</option>
							<option id="4" value="永富">永富</option>
							<option id="2" value="Others">其他</option>
						</select>
					</span>

				
				<!--<input  v-model="rporsubCRP" placeholder="">!-->
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
					<p class="title">工人列表</p>
					<!--<u>請選擇今天有上班的工人，如果找不到工人請致電Tesla Chong(60814693)。</u>!-->
				</div>
			</view>
			
			<view class="body-padding mt20">
				<view class="sb al">
					<div class="tagpad">
						<div class="jobTag">選擇工人</div>
					</div>
					<picker  mode="selector" :range="allPosition" range-key="position" @change="choosePosition">
						<view class="selectPosition sb" v-if="allPosition.length">
							<view class="whiteColor">{{allPosition[currentPositionIndex].position}}</view>
							<view class="positionIcon"></view>
						</view>
					</picker>
				</view>
				
				<view class="border box scoll" v-if="attendenceData.rporsubCRP=='Renopipe'">
					<!--only need one worker-main when for loop!-->
					<div class="worker-main al" v-for="(item,i) in workerList" :key="i">
						<img class="worker-icon" src="@/static/img/Users-Worker-icon.png"/>
						<div class="worker-info-area">
							<b>{{item.cName}} {{item.position}}</b>
						</div>
						<view 
							:class="['checkBox',{ check:item.check }]"
							@click="chooseWorker(i)">
							<!-- <image v-show="item.check" class="checkBoxIcon" src="../../static/img/check2.png" mode="widthFix"></image> -->
						</view>
					</div>
					<hr/>
				</view>
				
				<!-- 选择职位 -->
				<view class="border box scoll" v-else>
					<!--only need one worker-main when for loop!-->
					<div class="worker-main al" v-for="(item,i) in allPosition" :key="i">
						<div class="worker-info-area">
							<b>{{item.position}}</b>
						</div>
						<view class="ju al">
							<view class="addSubBtn ju al op" @click="changePositionNum(true,i)">-</view>
							<input v-model="item.number" disabled style="margin-bottom: 0;width: 80upx;text-align: center;" type="number" placeholder="1" step="1" min="0" max="5"/>
							<view class="addSubBtn ju al op" @click="changePositionNum(false,i)">+</view>
						</view>
						
						<view 
							:class="['checkBox',{ check:item.check }]"
							@click="checkPosition(i)">
							<!-- <image v-show="item.check" class="checkBoxIcon" src="../../static/img/check2.png" mode="widthFix"></image> -->
						</view>
					</div>
					<hr/>
				</view>
				
				
				<div class="hr">
					<div class="blue-divider"></div>
				</div>
			</view>
			
			<!-- Work Type - worktypeOption!-->
			<view class="body-padding">
				<div class="">
					<p class="title">工作類型列表</p>
				</div>
			</view>
			
			<view class="body-padding mt20">
				<view class="border box scoll">
					<div class="worker-main" v-for="(item,i) in worktypeOption" :key="i">
						<div class="worktype-info-area">
							<p class="worktype">{{item.name}}</p>
						</div>
						<div class="chk-box-area">
							<view
								:class="['checkBox',{ check:item.check }]"
								@click="chooseType(i)">
								<!-- <image v-show="item.check" class="checkBoxIcon" src="../../static/img/check2.png" mode="widthFix"></image> -->
							</view>
						</div>
					</div>
					<hr/>
				</view>
				<div class="hr">
					<div class="blue-divider"></div>
				</div>
			</view>

			<!--Machine selection!-->
			<view class="body-padding">
				<div class="">
					<p class="title">使用機械列表</p>
					<u>請選擇今天有上使用的機械，如果找不到機械請致電Tesla Chong(60814693)。</u>
				</div>
			</view>

			<view class="body-padding mt20">
				<view class="border box scoll">
					<div class="worker-main" v-for="(item,i) in machineOption" :key="i">
						<div class="worktype-info-area">
							<input style="margin: 0" placeholder="自行填寫" v-if="item.type=='custom'" class="worktype" v-model='item.name' />
							<p v-else class="worktype">{{item.name}}</p>
						</div>
						<div class="ju al" style="padding: 1.3rem 0.5rem;width: 30%;" >
							<view class="addSubBtn ju al op" @click="addSub(true,i)">-</view>
							<input v-model="item.number" disabled style="margin-bottom: 0;width: 80upx;text-align: center;" type="number" placeholder="1" step="1" min="0" max="5"/>
							<view class="addSubBtn ju al op" @click="addSub(false,i)">+</view>
						</div>
						<div class="chk-box-area">
							<view
								:class="['checkBox',{ check:item.check }]"
								@click="chooseMachine(i)">
								<!-- <image v-show="item.check" class="checkBoxIcon" src="../../static/img/check2.png" mode="widthFix"></image> -->
							</view>
						</div>
					</div>
					<hr/>
				</view>
				<div class="hr">
					<div class="blue-divider"></div>
				</div>
			</view>
			

			<!--work description!-->
			<view class="body-padding">
				<div class="">
					<p class="title">工作描述</p>
				</div>
			</view>
			<view class="body-padding mt20">
				<div class="textarea-padding">
					<textarea v-model="attendenceData.description" placeholder="請輸入工作描述..."></textarea>
				</div>
				
				<div class="hr">
					<div class="blue-divider"></div>
				</div>
			</view>
			<!--uploaded photo!-->
			<view class="body-padding">
				<div class="">
					<p class="title">已上載傳圖片</p>
				</div>
				<view class="al"><view class="uploadBtn op" @click="chooseImg">選擇圖片</view></view>
				<view class="imgsWrap al">
					<view class="imgBox" v-for="(item,i) in attendenceData.images" :key="i">
						<image src="../../static/img/close.png" class="delImg" @click="delImg2(item.ID,i)" mode="widthFix"></image>
						<image class="upLoadImg" :src="baseURL + item.filePath" mode="aspectFill"></image>
						<!--<select class="selectType">
							<option >Trial Pits & Inspection Pits</option>
							<option >木工</option>
						</select>!-->
					</view>
				</view>
			</view>
			
			<!--photo upload!-->
			<view class="body-padding">
				<div class="">
					<p class="title">上傳新圖片</p>
				</div>
				<view class="al"><view class="uploadBtn op" @click="chooseImg">選擇圖片</view></view>
				<view class="imgsWrap al">
					<view class="imgBox" v-for="(item,i) in imgs" :key="i">
						<image src="../../static/img/close.png" class="delImg" @click="delImg(i)" mode="widthFix"></image>
						<image class="upLoadImg" :src="item.base64" mode="aspectFill"></image>
						<!--<select class="selectType">
							<option >Trial Pits & Inspection Pits</option>
							<option >木工</option>
						</select>!-->
					</view>
				</view>
			</view>
				
			<!--submit button!-->
			<view class="submit-padding">
				<button type="primary" @click="submit">編輯記錄</button>
			</view>

		</view>
		<!--footer!-->
		<view class="footer btmBorder">
			©RenoPipe Construction Co. Ltd. Copyright © 2020
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				attendenceData:"",
				imgs:[],
				description: "",
				workerList: [],
				siteList: [],
				siteId:"",
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
					{name:"代工(試制)",check:false},
					{name:"代工(開井蓋)",check:false},
					{name:"代工(其他)",check:false},
					{name:"打路面",check:false},
					{name:"挖窿",check:false},
					{name:"打拆",check:false},
					{name:"駁水",check:false},
					{name:"裝水喉",check:false},
					{name:"還原",check:false},
					{name:"探坑",check:false},
					{name:"試制",check:false},
					{name:"雜務",check:false},
					{name:"其他",check:false},
				],
				machineOption:[ //機械種類 machineOption
					// {name:"發電機1部",check:false},
					// {name:"發電機2部",check:false},
					// {name:"發電機3部",check:false},
					// {name:"大電炮1部",check:false},
					// {name:"大電炮2部",check:false},
					// {name:"細電炮",check:false},
					// {name:"保路華",check:false},
					// {name:"跳鎚",check:false},
					// {name:"震船",check:false},
					// {name:"9噸吊雞",check:false},
					// {name:"30噸吊雞",check:false},
					// {name:"5.5噸車",check:false},
					// {name:"水泵",check:false},
					{name:"發電機",number: 1, check:false},
					{name:"大電炮",number: 1,check:false},
					{name:"細電炮",number: 1,check:false},
					{name:"保路華",number: 1,check:false},
					{name:"跳鎚",number: 1,check:false},
					{name:"震船",number: 1,check:false},
					{name:"9噸吊雞",number: 1,check:false},
					{name:"30噸吊雞",number: 1,check:false},
					{name:"5.5噸車",number: 1,check:false},
					{name:"水泵",number: 1,check:false},
					{name:"自行填寫",number: 1,check:false,type:"custom"},
				],//發電機  大電炮 細電炮 保路華  跳鎚 震船 9噸吊雞 30噸吊雞 5.5噸車 水泵
				allPosition:[],      // 按工种分类好了的工人 
				currentPositionIndex:0,
				delImgs:[],
			}
		},
		onLoad(val) {
			this.siteId = Number(val.siteId)
			this.getAllPosition()
			// this.getWorders()
			
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
			checkPosition (i) {
				let obj = this.allPosition[i]
				obj.check = !obj.check
				this.allPosition.splice(i,1,obj)
			},
			changePositionNum (boo,i) {
				let obj = this.allPosition[i]
				if (boo) {
					// 减
					obj.number = Number(obj.number) - 1
				} else{
					// 加
					obj.number = Number(obj.number) + 1
				}
				if (obj.number < 1) {
					obj.number = 1
				}
				this.allPosition.splice(i,1,obj)
			},
			addSub (boo, i) {
				if (boo) {
					// 减
					this.machineOption[i].number--
				} else{
					// 加
					this.machineOption[i].number++
				}
				if (this.machineOption[i].number < 1) {
					this.machineOption[i].number = 1
				}
				if (this.machineOption[i].number > 5) {
					this.machineOption[i].number = 5
				}
			},
			delImg2 (id,i) {
				this.delImgs.push(id)
				this.attendenceData.images.splice(i,1)
			},
			delImg(i) {
				this.imgs.splice(i,1)
			},
			checkData () {
				setTimeout(() => {
					// 勾选已存在工人
					// console.log(this.attendenceData)
					this.attendenceData.workers.forEach(item => {
						// console.log(item)
						let worderId = item.ID
						this.allPosition.forEach(workType => {
							// console.log(workType)
							workType.workers.forEach(man => {
								// console.log(worderId, man.ID)
								if (worderId == man.ID) {
									man.check = true
								}
							})
						})
					})
					
					this.attendenceData.worktype.split(",").forEach(item => {
						this.worktypeOption.forEach(type => {
							if (type.name == item) {
								type.check = true
							}
						})
					})
					
					this.attendenceData.machine.split(",").forEach(item => {
						let b = this.machineOption.every(mach => {
							console.log(mach.name, item.split(/[\d+]/)[0])
							return mach.name != item.split(/[\d+]/)[0]
						})
						console.log(b)
						if (b) {
							this.machineOption.splice(this.machineOption.length-1, 1, {name: item.split(/[\d+]/)[0],number: 1,check:false,type:"custom"},)
						}
						
						this.machineOption.forEach((type,i) => {
							if (item.indexOf(type.name) != -1) {
								type.check = true
								// type.name = item.split(/[\d+]/)[0]
								// let number = item.slice(-2,-1) * 1
								let number = item.match(/[\d+]/) * 1
								if (number) {
									this.machineOption[i].number = number
								} else {
									this.machineOption[i].number = 1
								}
							}
						})
					})
					let remarkList = this.attendenceData.remark.split(',')
					remarkList.forEach((item,i) => {
						this.allPosition.forEach(position => {
							console.log(position,item)
							if (item.includes(position.position)) {
								position.check = true
								let re = /[\D+]/g
								let num = item.replace(re,"")
								position.number = num * 1
							}
						})
					})
				},500)
			},
			getData () {
				let that = this
				uni.showLoading({
					title:"讀取中..."
				})
				uni.request({ //grab supervisor id from localstorage
					url: that.baseURL + "attendence?id=" + this.$route.query.id,
					method:"GET",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					success (res) {
						if(res){
							that.attendenceData = res.data[0]
							that.getSite(res);
							// console.log(this.attendenceData);
							that.checkData()
						}else{
							alert("記錄不存在")
						}
					},
					complete () { uni.hideLoading() }
				})
			},
			startTime (e) {
				this.start.name = e.detail.value
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
								item.number = 1
								item.check = false
							})
							that.workerList = that.allPosition[0].workers
							that.getData()
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
						// console.log("get site", e.data[0].siteId);
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
						// console.log(attr.ID,attr.check)
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
						arr3.push(item.name +item.number + "部")
					}
				})

				let base64 = []
				that.imgs.forEach(item => {
					let str = item.base64.split("base64,")[1]
					base64.push(str)
				})
				
				let positions = ""
				that.allPosition.forEach(item => {
					if (item.check) {
						positions = positions + item.position + item.number + "人,"
					}
				})
				// 職位拼接起來的string
				console.log(positions.slice(0,-1))
				// return false
				
				let data = {
							workerIds: arr,
							siteId: this.attendenceData.siteId,
							supervisorId:parseInt(this.attendenceData.supervisorId),
							startTimestamp: this.attendenceData.startTimestamp,
							endTimestamp:this.attendenceData.endTimestamp,
							time:this.attendenceData.time,
							subcontract: this.attendenceData.subcontract ? this.attendenceData.subcontract : " ",
							rporsubCRP: this.attendenceData.rporsubCRP,
							machine: arr3.join(),
							description:that.attendenceData.description,
							worktype:arr2.join(),
							base64Images: base64,
							remark:positions.slice(0,-1),
							removeImageId: that.delImgs
				}
				console.log(data)
				if (!data.worktype) {
					uni.showToast({ title: "請選擇工作種類", icon: "none" })
				} else if (!data.description) {
					uni.showToast({ title: "請填寫工作描述", icon: "none" })
				} else {
					
					// console.log(uni.getStorageSync('token'))
					// return false
					//Submit request
					uni.request({
						url:that.baseURL + "attendence/" + this.$route.query.id,
						method:"PUT",
						header:{
							Authorization:uni.getStorageSync('token')
						},
						data: data,
						success (res) {
							console.log("编辑",res)
							// that.getData()
							if (!res.data.error) {
								uni.navigateTo({
									url: "/pages/record/completeEdit"
								})
							} else {
								uni.showToast({
									title: "編輯失敗",
									icon:"none"
								})
							}
						}, 
						fail () {
							uni.showToast({
								title: "編輯失敗",
								icon:"none"
							})
						},
						complete () { uni.hideLoading() }
					})
					
				}
				
				
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
			onChangeHead(e){
				
				console.log(e,this.head)
				//console.log(e.target)
				//this.head = this.head;
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
		padding: 0 0.7rem;
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
</style>
