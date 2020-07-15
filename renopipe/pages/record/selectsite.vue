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
			
			<!--body!-->
			
			<!--cam!-->
			<view  class="qrWrap">
				<qrcode-stream class="qrView" @decode="onDecode"></qrcode-stream>
			</view>
			<!--手動選擇地盤!-->
			<view class="body-padding">
				<div class="main">
					<select @change="chooseSite" v-model="val">
						<option v-for="(item,i) in siteList" :key="i" :value="item.ID">{{item.name}}</option>
					</select>
					<div class="btn-color customize-btn" @click="toCreate"> <span class="word-in-btn">下一步</span></div>
				</div>
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
				
			}
		},
		onLoad() {
			this.getSite()
		},
		computed: {
			baseURL () { return this.$store.state.baseURL }
		},
		methods:{
			toCreate() {
				uni.navigateTo({
					url: "/pages/record/create?siteId=" + this.val
				})
			},
			onDecode (data) {
				let that= this
				alert(data);
			   // console.log('二维码数据',data)
			   that.siteList.forEach(item => {
				   // console.log(item.uuid, data)
				   
				   if (item.uuid == data) {
					   that.val = String(item.ID)
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
							that.val = that.siteList[0].ID
						}
					}
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
		width:12rem;
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
</style>
