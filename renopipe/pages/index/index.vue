<template>
	<view class="Wrap sb la">
		<!--header!-->
		<Header class="headerWrap"></Header>
		<view class="flex10">
			<!--logo section!-->
			<view class="logoBox"></view>
			<!--title!-->
			<view class="title-padding">
				<div class="main">
					<p class="title">工作歷史紀錄</p>
				
					<div class="btn-color customize-btn" @click="toCreate"> + 新增記錄</div>
				</div>
				<hr class="hr-line"/>
			</view>
			
			<!--body!-->
			<view class="body-padding">
				<div class="main">
					<!--顯示前一天的所有記錄，做一個漂亮一點的箭嘴!-->
					<!--<span class="arrow" @click="yesterday"> &#8678; </span>!--
					<!--顯示當前日期改讓客戶透過picker選擇想要觀看的日期!-->
					<label  style="font-size: 20px;">選擇日期 : </label>
					<picker class="selectedDate" mode="date" @change="attendenceDate">
						<input style="font-size: 20px;" class="dateBox" type="date" disabled="disabled" v-model="start.name" />
					</picker>
					<!--<span class="arrow" @click="tomorrow"> &#8680; </span>!-->
					<!--顯示後一天的所有記錄，做一個漂亮一點的箭嘴!-->
				</div>
			</view>
			<!--table!-->
			<view class=" body-padding">
				<view class="box scoll">
					<table class="" id="t01">
					  <tr id="header">
						<!--<th>時段</th>!-->
						<th>地盤</th> 
						<th>工作</th>
						<th>訊息狀態</th>
					  </tr>
					  
					  <tr v-for="(item,i) in dataList" :key="i" v-bind:id="item.ID" @click="toDetail(item.ID)">
						<!--<td >{{item.time}}</td>!-->
						
						<td style="width: 40%;"><b style="color:#007AFF">{{item.siteName}}({{item.site}})</b>, {{item.sitecode1}}, {{item.sitecode3}}, {{item.sitetoc}}, {{item.imple}}, {{item.dma}}, {{item.emfm}}</td>
						<td style="width: 30%;">{{item.worktype}}</td>
		
						<td style="color:green" v-if="item.log && JSON.parse(item.log).message == 'successfully sent group text'">已送出</td>
						<td style="color:red" v-else-if="item.log && JSON.parse(item.log).message !== 'successfully sent group text'">whatsapp未發送，需要重發</td>
						<td style="color:red" v-else>Selo Whatsapp Gateway 發生錯誤，請聯絡Tesla Chong 60814693</td>
				
					 </tr>
					  
					</table>
					<view v-if="dataList.length==0" class="ju al noData">
						{{this.loaderMSG}}
					</view>
				</view>
			</view>
		</view>
		<!--footer!-->
		<view class="footer btmBorder">
			©RenoPipe Construction Co. Ltd. Copyright © 2020
		</view>
		
		<view class="searchBox sb al">
			<input class="searchInp" type="text" v-model="val" />
			<view class="searchbtn op" @click="search"> 搜索</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],    // 過濾後記錄
				siteList: [],     //地盘
				val:"",       // 搜索关键字
				allData:[],      // 所有記錄
				start: {
					name: "",
					id:null,
					timesamp: 0
				},
				end:null,
				loaderMSG:"讀取數據中...",
				abc:null
			}
		},
		onLoad() {
			// this.getSite()
			let str;
			let D = new Date()
			let Y = D.getFullYear()
			let M = D.getMonth();
			/*handle date*/
			let d = D.getDate()
			if(d <= 9){
				d = "0" + d.toString()
				console.log(d)
			}else{
				d = d
			}
			
			if((M+1) > 9){
				str = Y + "-" + (M+1) + "-" + d
			}else{
				str = Y + "-0" + (M+1) + "-" + d
			}
			
			this.start.name = str
			
			if((M+1) > 9){
				this.start.id = Y.toString()+(M+1).toString()+d
			}else{
				this.start.id = Y.toString()+"0"+(M+1).toString()+d
			}

			this.start.timesamp = new Date(str).getTime()/1000
			
			this.end = parseInt(this.start.id) - 1
			
		},
		onShow () {
			this.getSite()
		},
		computed: {
			baseURL () { return this.$store.state.baseURL }
		},
		methods:{
			search () {
				let that = this
				that.dataList = that.allData.filter(item => {
					for(let key in item) {
						if (typeof item[key] == "string") {
							if (item[key].indexOf(that.val) != -1) {
								return true
							}
						}
					}
				})
			},
			getData () {
				//console.log(parseInt(this.start.id)-1)
				this.end = parseInt(this.start.id) + 1 
				this.loaderMSG = "讀取數據中..."
				this.loaderMSG = "所選擇的日期沒有數據"
				let that = this
				uni.showLoading({
					title:"讀取數據中..."
				})
				uni.request({ //grab supervisor id from localstorage
					url: that.baseURL + "attendence?supervisorId=" + uni.getStorageSync('userid') + "&start="+this.start.id+"&end=" + this.end,
					method:"GET",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					success (res) {
						console.log(res)
						if(res.data.length > 0){
							that.allData = res.data
							res.data.forEach(item => {
								item.createdAt = item.createdAt.slice(0,16).replace("T"," ").split("-").join("/")
							})
							that.allData.forEach(item => {
								that.siteList.forEach(attr => {
									if (item.siteId == attr.ID) {
										item.site = attr.name
										item.sitecode1 = attr.siteCode1
										item.sitecode2 = attr.siteCode2
										item.sitecode3 = attr.siteCode3
										item.imple = attr.imple
										item.sitetoc = attr.sitetoc
										item.dma = attr.dma
										item.emfm = attr.emfm
										item.siteName = attr.cname
										item.project = attr.project
									}
								})
							})
							that.dataList = that.allData
							//get site data by site ID
						}else{
							//alert("暫時未有記錄")
							this.loaderMSG = "所選擇的日期沒有數據"
							console.log(this.loaderMSG);
							that.allData = []
							that.dataList = []
						}
					},
					fail () {
						that.allData = []
						that.dataList = []
					},
					complete () { uni.hideLoading() }
				})
			},
			// 獲取所有地盤
			getSite () {
				let that = this
				uni.request({
					url:that.baseURL + "site",
					method:"GET",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					success (res) {
						console.log(res)
						if (res.data) {
							that.siteList = res.data
							that.getData()
							
						}
					}
				})
			},
			toCreate() {
				uni.navigateTo({
					url: "/pages/record/selectsite"
				})
			},
			toDetail(e) {
				uni.navigateTo({
						url: "/pages/record/detail?id=" + e
					})
				},
			yesterday(){
				
				//this.start.name = parseInt(this.start.name) -1
				this.start.id = parseInt(this.start.id) -1
				this.end = parseInt(this.start.id) -2
				
				console.log(parseInt(this.start.name) -1)
				console.log(this.start.id)
				console.log(this.end)
				
				this.getData()
			},
			tomorrow(){
				
				//this.start.name = parseInt(this.start.name) + 1
				this.start.id = parseInt(this.start.id) +1
				this.end = parseInt(this.start.id) +2
				
				console.log(this.start.id)
				console.log(this.end)
				
				this.getData()
				
			},
			attendenceDate(e){
				//alert("所選那天的紀錄")
				console.log(e)
				let changedDate = e.detail.value
				this.start.name = changedDate
				
				let subStr = new RegExp('-','');
				let str = e.detail.value.replace(subStr,"")
				let changedDateId = str.replace(subStr,"")
				
				console.log(changedDateId)
				
				this.start.id = changedDateId
				this.end = parseInt(changedDateId) + 1
				
				console.log(this.start.id);
				console.log(this.end)
				
				this.getData()	
			}
		}
	}
</script>

<style lang="scss" scoped>
	body{
		font-family: Abel;
	}
	.arrow{
		color:#5F98EC;
		font-size: 1.3rem;
	}
	/*header的style*/
	.nav-background{
		background: #5F98EC;
	}
	.noData {
		padding: 250upx;
		background-color: #E8E8E8;
	}
	.searchBox {
		position: fixed;
		// border: solid red 1px;
		right: 0upx;
		top: 10upx;
		width: 85%;
		z-index:200;
		// padding-left: 90upx;
		padding-right: 20upx;
		box-sizing: border-box;
	}
	.searchInp {
		width: 78%;
		background-color: white;
		padding: 5upx 0;
	}
	.searchbtn {
		color: white;
		background: #3A75BB;
		padding: 10upx 30upx;
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
		// height:20rem;
	}
	h3{
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
	  padding: 8px;
	  text-align: center;
	  font-size:0.7rem;
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
	.dateBox{
		border: solid 1px;
	}
	
	
	
	.selectedDate{
		text-align: center;
		background-color: #5F98EC;
		color:#FFFFFF;
	}
</style>
