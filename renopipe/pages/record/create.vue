<template>
	<view class="Wrap sb la">
		<!--header!-->
		<Header></Header>
		<cpimg ref="cpimg" @result="cpimgOk"  :number="2" :fixOrientation="true" :size="500" :maxWidth="1000" :ql="0.5" :type="'url'" />
		<view class="flex10">
			<!--title!-->
			<view class="title-padding mt25">
				<div class="main">
					<p class="title">創建新工作紀錄</p>
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
					<view style="margin-top: 6px;margin-bottom: 6px;">選擇日期: <span style="border: solid 1px;padding: 1px 10px;">{{start.name}}</span></view>
				</picker>
				時段: &nbsp;&nbsp;
				<span class="selectpadding">
					<select v-model="timeRange" style="padding:0rem!important;">
						<option value="上午">上午</option>
						<option value="下午">下午</option>
						<option value="全日">全日</option>
					</select>
				</span>
				
				<p style="margin-top: 6px;">工程項目編號: {{site.project}}</p>
				<p>地盤(中文名): {{site.cname}}</p>
				<p>地盤(英文名): {{site.name}}</p>
				<p>Dis1 : {{site.siteCode1}}</p>
				<p>Dis2: {{site.siteCode3}}</p>
				<p>DMA : {{site.dma}}</p>
				<p>EMFM .Ref : {{site.emfm}}</p>
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
				副項目編號(非必填):<input  v-model="subcontract" placeholder="">
			</view>

			<view class="body-padding">
				判頭: <span class=""><!--Renopipe!-->
					 <select @change="onChangeHead()" v-model="head" style="padding:0rem!important;width:100%;border: solid 1px lightgray;font-size: 22px;">
							<option id="1" value="Renopipe">Renopipe</option>
							<option id="2" value="Others">外判</option>
						</select> 
					</span>

			</view>



			<div class="hr">
					<div class="blue-divider"></div>
			</div>

			<!--worker-list!-->
			<view class="body-padding" v-if="head=='Renopipe'">
				<div class="">
					<p class="title">工人列表</p>
					<u>請選擇今天有上班的工人，如果找不到工人請致電Tesla Chong(60814693)。</u>
				</div>
			</view>
			
			<view class="body-padding mt20" v-if="head=='Renopipe'">
				<view class="sb al">
					<div class="tagpad">
						<div class="jobTag">選擇工人</div>
					</div>
					<picker v-if="head=='Renopipe'" mode="selector" :range="allPosition" range-key="position" @change="choosePosition">
						<view class="selectPosition sb" v-if="allPosition.length">
							<view class="whiteColor">{{allPosition[currentPositionIndex].position}}</view>
							<view class="positionIcon"></view>
						</view>
					</picker>
				</view>
				<view>
					<input type="text" class="input" @input="searchWorker" placeholder="搜索工人" />
				</view>
				
				<view class="border box scoll" v-if="head=='Renopipe'">
					<!--only need one worker-main when for loop!-->
					<div class="worker-main al" v-for="(item,i) in workerList" :key="i" v-show="!item.hide">
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
				
				<!-- 选择职位 
				<view class="border box scoll" v-else>
					only need one worker-main when for loop
					<div class="worker-main al" v-for="(item,i) in allPosition" :key="i">
						<div class="worker-info-area">
							<b>{{item.position}}</b>
						</div>
						<view class="ju al">
							<view class="addSubBtn ju al op" @click="changePositionNum(true,i)">-</view>
							<input v-model="item.number" style="margin-bottom: 0;width: 80upx;text-align: center;" type="number" placeholder="1" step="1" />
							<view class="addSubBtn ju al op" @click="changePositionNum(false,i)">+</view>
						</view>
						
						<view 
							:class="['checkBox',{ check:item.check }]"
							@click="checkPosition(i)">
							 <image v-show="item.check" class="checkBoxIcon" src="../../static/img/check2.png" mode="widthFix"></image> 
						</view>
					</div>
					<hr/>
				</view>-->
				
				
				<div class="hr">
					<div class="blue-divider"></div>
				</div>
			</view>
			
			
			
			<!-- 副判头 -->
			<view v-for="(item,i) in otherHead" :key="i">
				<view class="body-padding">
					<view class="sb al">
						<view>副判頭（可多選）: </view>
						<view class="delBtn op" @click="delOtherHead(i)">刪除</view>
					</view>
					<span class="">
						<select @change="onChangeHead()" v-model="item.head" style="padding:0rem!important;width:100%;border: solid 1px lightgray;font-size: 22px;">
							<option id="2" value="信雄">信雄</option>
							<option id="3" value="信昌">信昌</option>
							<option id="4" value="永富">永富</option>
							<option id="5" value="平安地基">平安地基</option>
							<option id="6" value="六盛">六盛</option>
							<option id="7" value="英昌">英昌</option>
							<option id="8" value="江記">江記</option>
							<option id="9" value="安泰">安泰</option>
							<option id="10" value="洪興">洪興</option>
							<option id="11" value="Others">其他</option>
						</select>
					</span>
				</view>
				
				
				<view class="body-padding">
					<div class="">
						<p class="title">工人列表</p>
						<u>請選擇今天有上班的工人，如果找不到工人請致電Tesla Chong(60814693)。</u>
					</div>
				</view>
				<view class="body-padding mt20">
					<view class="sb al">
						<div class="tagpad">
							<div class="jobTag">選擇工人</div>
						</div>
					</view>
					<!-- 选择职位 -->
					<view class="border box scoll">
						<!--only need one worker-main when for loop!-->
						<div class="worker-main al" v-for="(p,j) in item.position" :key="j">
							<div class="worker-info-area">
								<b>{{p.position}}</b>
							</div>
							<view class="ju al">
								<view class="addSubBtn ju al op" @click="changePositionNum2(true,i,j)">-</view>
								<input v-model="p.number" style="margin-bottom: 0;width: 80upx;text-align: center;" type="number" placeholder="1" step="1" />
								<view class="addSubBtn ju al op" @click="changePositionNum2(false,i,j)">+</view>
							</view>
							
							<view 
								:class="['checkBox',{ check:p.check }]"
								@click="checkPosition2(i,j)">
							</view>
						</div>
						<hr/>
					</view>
					
					
					<div class="hr">
						<div class="blue-divider"></div>
					</div>
				</view>
			</view>
			
			
			<view class="centerBtn ju al op" @click="addOtherHeads">+增加其他判頭</view>
			
			
			
			
			
			<!-- Work Type - worktypeOption!-->
			<view class="body-padding">
				<div class="">
					<p class="title">工作類型列表</p>
				</div>
			</view>
			<view>
				<input type="text" class="input" @input="searchWorkeType" placeholder="搜索工作類型" />
			</view>
			<view class="body-padding mt20">
				<view class="border box scoll">
					<view class="ju" style="padding:30upx;" v-if="worktypeOption.length==0">暫無數據</view>
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
			<view>
				<input type="text" class="input" @input="searchMachine" placeholder="搜索器械" />
			</view>
			<view class="body-padding mt20">
				<view class="border box scoll">
					<view class="ju" style="padding:30upx;" v-if="machineOption.length==0">暫無數據</view>
					<div class="worker-main al" v-for="(item,i) in machineOption" :key="i">
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
					<textarea v-model="description" placeholder="請輸入工作描述..."></textarea>
				</div>
				
				<div class="hr">
					<div class="blue-divider"></div>
				</div>
			</view>
			
			<!--photo upload!-->
			<view class="body-padding">
				<div class="">
					<p class="title">圖片上傳</p>
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
				<button type="primary" @click="submit">+ 創建新記錄</button>
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
				imgs:[],
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
				allworktypeOption:[ //工作種類 worktype
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
				worktypeOption: [],
				machineOption: [],
				allmachineOption:[ //機械種類 machineOption
						{name:"雞頭(1噸)",number: 1, check:false},		
						{name:"雞頭(1.5噸)",number: 1, check:false},		
						{name:"雞頭(1.8噸)",number: 1,check:false},		
						{name:"雞頭(3噸)",number: 1,check:false},		
						{name:"雞頭(4噸)",number: 1,check:false},		
						{name:"雞頭(5噸)",number: 1,check:false},		
						{name:"雞頭(7噸)",number: 1,check:false},		
						{name:"雞頭(12噸)",number: 1,check:false},		
						{name:"雞頭(13噸)",number: 1,check:false},		
						{name:"雞頭(20噸)",number: 1,check:false},		
						{name:"5.5噸車",number: 1,check:false},		
						{name:"9噸吊雞",number: 1,check:false},		
						{name:"30噸夾車",number: 1,check:false},		
						{name:"30噸吊雞",number: 1,check:false},		
						{name:"30噸排卡",number: 1,check:false},		
						{name:"細電炮",number: 1,check:false},		
						{name:"大電炮",number: 1,check:false},		
						{name:"HILTI大電炮",number: 1,check:false},		
						{name:"HILTI充電式震鑽",number: 1,check:false},		
						{name:"細發電機",number: 1,check:false},		
						{name:"大發電機",number: 1,check:false},		
						{name:"震船",number: 1,check:false},		
						{name:"跳鎚",number: 1,check:false},		
						{name:"火轆",number: 1,check:false},		
						{name:"水泵",number: 1,check:false},		
						{name:"風車鋸",number: 1,check:false},		
						{name:"風煤",number: 1,check:false},		
						{name:"焊機",number: 1,check:false},		
						{name:"風機，風炮",number: 1,check:false},		
						{name:"保路華",number: 1,check:false},		
						{name:"石屎震機",number: 1,check:false},		
						{name:"田螺斗",number: 1,check:false},		
						{name:"自行填寫",number: 1,check:false,type:"custom"},
				],//發電機  大電炮 細電炮 保路華  跳鎚 震船 9噸吊雞 30噸吊雞 5.5噸車 水泵
				allPosition:[],      // 按工种分类好了的工人 
				currentPositionIndex:0,
				otherHead: [
					// {
					// 	head:"",
					// 	position:[]
					// }
				]
			}
		},
		onLoad(val) {
			this.machineOption = this.allmachineOption
			this.worktypeOption = this.allworktypeOption
			this.siteId = Number(val.siteId)
			this.getAllPosition()
			// this.getWorders()
			this.getSite()
			let D = new Date()
			let Y = D.getFullYear()
			let M = D.getMonth();
			let d = D.getDate()
			let str;
			
			if(d >= 10){
				str =  Y + "-" + (M+1)+ "-" + d
			}
			else{
				str =  Y + "-" + (M+1) + "-0" + d
			}
			
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
			searchMachine (e) {
				this.machineOption = this.allmachineOption.filter(item => {
					if (item.name.includes(e.target.value)) {
						return true
					}
				})
			},
			searchWorkeType (e) {
				this.worktypeOption = this.allworktypeOption.filter(item => {
					if (item.name.includes(e.target.value)) {
						return true
					}
				})
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
			changePositionNum2 (boo,i,j) {
				if (boo) {
					//減少
					this.otherHead[i].position[j].number--
				} else {
					//增加
					this.otherHead[i].position[j].number++
				}
				if (this.otherHead[i].position[j].number < 1) {
					this.otherHead[i].position[j].number = 1
				}
				this.otherHead = [...this.otherHead]
			},
			delImg(i) {
				this.imgs.splice(i,1)
			},
			startTime (e) {
				this.start.name = e.detail.value
				this.start.timesamp = new Date(e.detail.value).getTime()/1000
			},
			endTime (e) {
				this.end.name = e.detail.value
				this.end.timesamp = new Date(e.detail.value).getTime()/1000
			},
			checkPosition (i) {
				let obj = this.allPosition[i]
				obj.check = !obj.check
				this.allPosition.splice(i,1,obj)
			},
			checkPosition2 (i,j) {
				this.otherHead[i].position[j].check = !this.otherHead[i].position[j].check
				this.otherHead = [...this.otherHead]
			},
			// 选择position
			choosePosition (e) {
				let that = this
				let num = Number(e.detail.value)
				
				this.currentPositionIndex = num
				//console.log(that.currentPositionIndex)
				that.workerList = this.allPosition[this.currentPositionIndex].workers
			},
			searchWorker (e) {
				let arr = []
				this.allPosition.forEach(po => {
					po.workers.forEach(workers => {
						// console.log(worders.cName, e.target.value)
						if (String(workers.cName).includes(e.target.value)) {
							arr.push(workers)
						}
					})
				})
				this.workerList = arr
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
						//console.log(res)
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
						}
					}
				})
			},
			delOtherHead (i) {
				this.otherHead.splice(i,1)
			},
			//點擊添加復副判頭
			addOtherHeads () {
				if (!this.allPosition.length) {
					uni.showToast({
						title:"數據加載中，請稍後",
						icon:"none"
					})
				} else {
					let position = JSON.parse(JSON.stringify(this.allPosition))
					position.forEach(item => {
						item.number = 1
						item.check = false
					})
					this.otherHead.push({
						head:"",
						position
					})
				}
				
			},
			// 獲取所以地盤
			getSite () {
				let that = this
				uni.request({
					url:that.baseURL + "site",
					method:"GET",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					success (res) {
						//console.log(res)
						if (res.data) {
							that.siteList = res.data
							that.siteList.forEach(item => {
								if (item.ID == that.siteId) {
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
						//console.log("workerList",res)
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
				//console.log(obj)
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
				
				//console.log(this.machineOption.splice(i,1,obj));
				//console.log(i)
			},
			toHome() {
				uni.navigateTo({
					url: "/pages/index/index"
				})
			},
			submit() { //this shall be change to API for Create new record
				uni.showLoading({
					title:"處理中..."
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
						arr3.push(item.name +item.number + "部")
					}
				})

				let base64 = []
				that.imgs.forEach(item => {
					let str = item.base64.split("base64,")[1]
					base64.push(str)
				})
				
				let positions = ""
				// let num = 0
				// that.allPosition.forEach(item => {
				// 	if (item.check) {
				// 		num = num + Number(item.number)
				// 		positions = positions + item.position + item.number + "人,"
				// 	}
				// })
				// positions += "總人數" + num + "人,"
				
				
				let otherHead = this.otherHead.filter(p => p.head)
				otherHead = otherHead.filter(p => {
					let boo = p.position.every(key => !key.check)
					return !boo
				})
				
				otherHead.forEach(item => {
					positions += item.head + ":"
					let positionStr = ""
					item.position.forEach(p => {
						if (p.check) {
							positionStr += p.position + p.number + "人,"
						}
					})
					positions += positionStr.slice(0,-1) + ";"
				})
				
				// 職位拼接起來的string
				//console.log(positions.slice(0,-1))
				// return false
				
				//select Group ID
				let pjid = this.site.project
				let groupId = "";
				//console.log(pjid)
				
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
				
				//console.log(groupId)
				
				//data
				let data = {
							workerIds: arr,
							siteId: that.siteId,
							supervisorId:parseInt(this.supervisorId),
							startTimestamp: parseInt(new Date(this.start.name).getTime() / 1000) +"",
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
							//other:this.head,
							remark:positions,
							base64Images: base64,
							//for whatsapp
							groupId:groupId,
							phone:"85292631429",
							token:"rXrBTOucGWXF8YJdDVtnM9x1aRz0GM3TXVUOvk3OS4vzXfRLztcYDVHDzi4riiR6"
				}
				console.log(data)
				// return false
				
				/*if (!data.worktype) {
					uni.showToast({ title: "請選擇工作種類", icon: "none" })
				} 
				// else if (data.machine.length == 0) {
				// 	uni.showToast({ title: "請選擇機械", icon: "none" })
				// } 
				else if (!data.description) {
					uni.showToast({ title: "請填寫工作描述", icon: "none" })
				} else {*/
					uni.request({
						url:that.baseURL + "attendence",
						method:"POST",
						header:{
							Authorization:uni.getStorageSync('token')
						},
						data: data,
						success (res) {
							console.log("新增",res)
							if (res.statusCode == 200) {
								if(res.data.ID){
									uni.navigateTo({
										url: "/pages/record/complete"
									})
								}
								else{
									uni.showToast({
										title: "上傳錯誤，資料可能遺失請重新檢查",
										icon:"none"
									})
								}
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
						complete () { uni.hideLoading()}
					})
				//}
				
				
			},
			cpimgOk (e) {
				console.log(e)
				let that = this
				e.forEach(item => {
					if (item.includes("blob")) {
						//未压缩的图片
						
						let img = new Image()
						img.src = item
						// console.log(img)
						img.onload = function () {
							var canvas = document.createElement("canvas");  
							canvas.width = img.width;  
							canvas.height = img.height;  
							var ctx = canvas.getContext("2d");  
							ctx.drawImage(img, 0, 0, img.width, img.height);  
							var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();  
							var dataURL = canvas.toDataURL("image/"+ext)
							// console.log(dataURL)
							that.imgs.push({
								base64: dataURL
							})
						}
						
					} else {
						this.imgs.push({
							base64: item
						})
					}
					
				})
				
			},
			chooseImg () {
				let that = this
				that.$refs.cpimg._changImg()
				return false
				
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
				if(this.head == "Others"){
					this.addOtherHeads();
				}
				//console.log(e.target)
				//this.head = this.head;
			},
			/*groupIdSelector(e){
				console.log(this.site.project)
				
				e = this.site.project
				
				return
			}*/
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
	.centerBtn {
		width: 300upx;
		border: solid;
		background:#007AFF;
		margin:30upx auto;
		padding: 15upx;
		color:#FFF;
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
	
	.worktype-info-area-num{
		width:50%;
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
