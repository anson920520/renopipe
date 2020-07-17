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
			
			<!--body
			<view class="body-padding">
				<div class="main">
					<select>
						<option>地盤檢索</option>
					</select>
					<select>
						<option>工作種類檢索</option>
					</select>
					<select>
						<option>日期檢索</option>
					</select>
				</div>
			</view>!-->
			<!--table!-->
			<view class=" body-padding">
				<view class="box scoll">
					<table class="" id="t01">
					  <tr id="header">
						<th>創建日期</th>
						<th>上班人數</th> 
						<th>地盤</th>
						<th>工作</th>
					  </tr>
					  
					  <tr v-for="(item,i) in dataList" :key="i" v-bind:id="item.ID" @click="toDetail(item.ID)">
						<td>{{item.createdAt}}</td>
						<td style="width: 25%;">{{item.workers.length}}</td>
						<td>{{item.site}}</td>
						<td>{{item.worktype}}</td>
					  </tr>
					  
					</table>
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
			}
		},
		onLoad() {
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
				let that = this
				uni.showLoading({
					title:"加载中..."
				})
				uni.request({ //grab supervisor id from localstorage
					url: that.baseURL + "attendence?supervisorId=" + uni.getStorageSync('userid'),
					method:"GET",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					success (res) {
						console.log(res)
						if(res.data.length > 0){
							that.dataList = res.data
							res.data.forEach(item => {
								item.createdAt = item.createdAt.slice(0,16).replace("T"," ").split("-").join("/")
							})
							that.dataList.forEach(item => {
								that.siteList.forEach(attr => {
									if (item.siteId == attr.ID) {
										item.site = attr.name
									}
								})
							})
							that.allData = that.dataList
						}else{
							alert("暫時未有記錄")
						}
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

</style>
