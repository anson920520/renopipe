<template>
	<view class="Wrap sb la">
		<!--header!-->
		<Header></Header>
		<!-- <view class="nav-background">
			<img class="menu-btn" src="@/static/img/hamburger-btn.png" />
		</view> -->
		<view class="selectsiteWrap flex10">
			<!--logo section!-->
			<view class="logoBox"></view>
			<!--title!-->
			<view class="title-padding">
				<div class="main">
					<p class="title">掃描QR code或選擇地盤</p>
				</div>
				<hr class="hr-line"/>
			</view>
			<p class="error">{{ error }}</p>
			<!--body!-->
			
			<!--cam!-->
			<view  class="qrWrap">
				<qrcode-stream @init="onInit" class="qrView" @decode="onDecode"></qrcode-stream>
			</view>
			<br/>
			<hr/>
			<br/>
			<!--手動選擇地盤!-->
			<p style="text-align: center;">如未能使用QR code，可選擇手動輸入</p>
			<br/>
			<view class="body-padding">
				<view>
					<view>地盤項目編號搜索:</view>
					<select v-model="pro">
						<option value="">全部</option>
						<option v-for="(item,i) in proList" :value="item">{{item}}</option>
					</select>
				</view>
				<view>
					<view>地盤地區搜索:</view>
					<select v-model="dis1" >
						<option value="">全部</option>
						<option v-for="(item,i) in disList1" :value="item">{{item}}</option>
					</select>
				</view>
				<view>
					<view>地盤地址搜索:</view>
					<select v-model="dis2" >
						<option value="">全部</option>
						<option v-for="(item,i) in sitename" :value="item">{{item}}</option>
					</select>
				</view>
				<view class="ju al" style="padding: 20upx 0;">
					<view style="border-top:dashed #333333 2px;flex:10;"></view>
					<view style="padding:0 20upx">或</view>
					<view style="border-top:dashed #333333 2px;flex:10;"></view>
				</view>
				<view>
					<view>關鍵字搜索</view>
					<input class="keywordSearch" v-model="keyword" type="text" placeholder="搜索地盤" />
					<small style="color:red">所有關鍵字大小不可以寫錯以及必須要以繁體字輸入<br/>(e.g:可輸入"T0050", "AKK-DMA10A", "王屋村", 等等)</small>
				</view>
				
				<br/>
				<div class="btn-color customize-btn" @click="search" long> <span class="word-in-btn">搜索</span></div>
				<!-- <view>選擇地盤</view>
				<div class="main">
					
					<select @change="chooseSite" v-model="val">
						<option v-for="(item,i) in siteList" :key="i" :value="item.ID">{{item.name}}</option>
					</select>
				</div> -->
			</view>
			
			<br />
			<!-- <div class="btn-color customize-btn" @click="toCreate"> <span class="word-in-btn">下一步</span></div> -->
			<br/>
			<view class="body-padding scrollSection">
				<view class="ju" style="padding: 20upx;" v-if="noData">暫無數據</view>
				<view class="siteBorder op" v-for="(item,i) in siteList" :key="i" :value="item.ID" @click="toCreate(item)">
					<b style="color:#007AFF">{{item.name}} | {{item.cname}} </b> <br/>
					{{item.siteCode1}}({{item.siteCode2}}) | {{item.siteCode3}} <br/>
					{{item.dma}}<br/>
					{{item.emfm}}
				</view>
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
				val:"",             //  所選地盤的 ID
				site:{},
				siteList: [],
				allData: [],
				error:null,
				// 过滤
				proList: [],
				disList1:[],
				sitename:[],
				pro:"",
				dis1:"",
				dis2:"",
				keyword:"",
				noData: false,
			}
		},
		onLoad() {
			this.getSite()
		},
		watch:{
			pro (val) {
				this.search()
				let that=this
				that.disList1 = []
				that.sitename = []
				that.allData.forEach(item => {
					// console.log(item.project,val)
					if (item.project.indexOf(val) != -1) {
						// that.proList.push(item.project)
						that.disList1.push(item.siteCode2)
						that.sitename.push(item.cname)
					}
				})
				that.dis1 = ""
				// that.proList = [...new Set(that.proList)]
				that.disList1 = [...new Set(that.disList1)]
				that.sitename = [...new Set(that.sitename)]
			},
			dis1 (val) {
				let that=this
				that.sitename = []
				that.allData.forEach(item => {
					console.log(item.siteCode1,val)
					if (item.siteCode2.indexOf(val) != -1) {
						that.sitename.push(item.cname)
					}
				})
				that.dis2 = ""
				// that.proList = [...new Set(that.proList)]
				// that.disList1 = [...new Set(that.disList1)]
				that.sitename = [...new Set(that.sitename)]
				// that.dis2 = ""
				this.search()
			},
			dis2 (val) {
				this.search()
			},
		},
		computed: {
			baseURL () { return this.$store.state.baseURL }
		},
		methods:{
			async onInit (promise) {
			      try {
			        await promise
			      } catch (error) {
			        if (error.name === 'NotAllowedError') {
			          this.error = "錯誤: 需要權限使用手機上的相機"
			        } else if (error.name === 'NotFoundError') {
			          this.error = "錯誤: 本設備沒有發現具備相機功能"
			        } else if (error.name === 'NotSupportedError') {
			          this.error = "錯誤: 從不合法渠道訪問請重新登陸"
			        } else if (error.name === 'NotReadableError') {
			          this.error = "錯誤: 偵測到相機正在被其他程式佔用"
			        } else if (error.name === 'OverconstrainedError') {
			          this.error = "錯誤: 相機現在無法啟用"
			        } else if (error.name === 'StreamApiNotSupportedError') {
			          this.error = "錯誤: 本瀏覽器不支援QR code掃描，如果是Iphone請使用safari，如果是安卓手機請使用Chorme或Firefox"
			        }
			      }
			    },
			search () {
				let that = this
				that.siteList = that.allData.filter(item => { 
					for(let key in item) {
						if (typeof item[key] == 'string') {
							if (item[key].indexOf(that.pro) != -1) {
								return true
							} 
						}
					}
				})
				
				that.siteList = that.siteList.filter(item => {
					for(let key in item) {
						if (typeof item[key] == 'string') {
							if (item[key].indexOf(that.dis1) != -1) {
								return true
							} 
						}
					}
				})
				
				that.siteList = that.siteList.filter(item => {
					for(let key in item) {
						if (typeof item[key] == 'string') {
							if (item[key].indexOf(that.dis2) != -1) {
								return true
							} 
						}
					}
				})
				that.siteList = that.siteList.filter(item => {
					for(let key in item) {
						if (typeof item[key] == 'string') {
							if (item[key].indexOf(that.keyword) != -1) {
								return true
							} 
						}
					}
				})
				if (that.siteList.length == 0) {
					that.noData = true
				} else {
					that.noData = false
				}
				
				// that.getFilterData()
				// that.proList = []
				// that.disList1 = []
				// that.sitename = []
				// that.siteList.forEach(item => {
				// 	// that.proList.push(item.project)
				// 	that.disList1.push(item.siteCode2)
				// 	that.sitename.push(item.cname)
				// })
				// // that.proList = [...new Set(that.proList)]
				// that.disList1 = [...new Set(that.disList1)]
				// that.sitename = [...new Set(that.sitename)]
			},
			toCreate(item) {
				this.val = item.ID
				uni.navigateTo({
					url: "/pages/record/create?siteId=" + this.val
				})
			},
			QRtoCreate(e) {
				uni.navigateTo({
					url: "/pages/record/create?siteId=" + e
				})
			},
			onDecode (data) {
				let that= this
				//alert(data);
			    //alert('二维码数据',data)
			   that.siteList.forEach(item => {
				   // console.log(item.uuid, data)
				   
				   if (item.uuid == data) {
					   that.val = String(item.ID)
					   that.QRtoCreate(that.val)
				   }
			   })
			},
			chooseSite (e) {
				// console.log(e, this.val)
				
			},
			// 獲取所以地盤
			getSite () {
				let that = this
				uni.request({
					url:that.baseURL + "site",
					header:{
						Authorization:uni.getStorageSync('token')
					},
					method:"GET",
					success (res) {
						console.log(res)
						if (res.data) {
							that.siteList = res.data
							that.allData = res.data
							that.val = that.siteList[0].ID
							that.getFilterData()
							
						}
					}
				})
			},
			getFilterData () {
				let that = this
				that.proList = []
				that.disList1 = []
				that.sitename = []
				that.siteList.forEach(item => {
					that.proList.push(item.project)
					that.disList1.push(item.siteCode2)
					that.sitename.push(item.cname)//+ " | "+ item.name
				})
				that.proList = [...new Set(that.proList)]
				that.disList1 = [...new Set(that.disList1)]
				that.sitename = [...new Set(that.sitename)]
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
	
	.scrollSection{
		height:350px;
		overflow-x: auto;
		border:solid 2px lightgray;
		background: #e8e8e8;
		overflow-y: auto;
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
		width:5rem;
	}
	
	.main{
		display: flex;
		justify-content: space-between;
	}
	
	.customize-btn{
		padding:0.7rem;
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
		height:20rem;
	}
	h3{
		color:gray;
	}
	
	select{
		padding:0.6rem;
		width:100%;
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
	.keywordSearch {
		border: solid #666 1px;
		padding: 10upx;
	}
	.Wrap {
		min-height: 100vh;
		// border: solid black 1px;
		flex-direction: column;
	}
	
	.word-in-btn{
		padding: 0px;
		display: flex;
		justify-content: center;
		font-size: 0.9rem;
	}
	.qrWrap {
		width: 100%;
		height: 750upx;
	}
	.qrView {
		border: solid #CCC 1px;
		box-sizing: border-box;
	}
	.selectsiteWrap {
		// border: solid green 1px;
		// flex:1;
	}
	.siteBorder{
		margin: 5px;
		padding:10px;
		border:solid 1px #5F98EC;
		background: white;
	}
</style>
