<template>
	<view class="Wrap sb la">
		<!--header!-->
		<Header></Header>
		<view class="">
			<!--logo section!-->
			<view class="logoboxpad">
				<view class="logoBox"></view>
			</view>
			<!--body!-->
			
			<!--tick!-->
			<view class="main">
				<img class="chklogo" src="@/static/img/check.png"/>
			</view>
			<!--message!-->
			<view class="messager">
				<view class="main">
					<b class="title">編輯記錄成功!</b>
				</view>
				<!--<view class="main">
					<b class="sub-title">並已經把本記錄自動上傳了Whatsapp</b>
				</view>!-->
			</view>
			<!--go home-->
			<view class="body-padding">
				<div class="main">
					<div class="btn-color customize-btn" @click="toHome"> <span class="word-in-btn">返回主頁</span></div>
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
				val:""
			}
		},
		onLoad() {
			
		},
		mounted() {
			
		},
		methods:{
			toCreate() {
					uni.navigateTo({
						url: "/pages/index/index"
					})
			},
			//获取扫码控件
			getScanCode(val){
				console.log(val)
			},
			toHome () {
				uni.reLaunch({
					url:"/pages/index/index"
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
		width: 100%;
		height: 350upx;
		background: url("../../static/img/logo.png") no-repeat;
		background-size: 100%;
		// border: solid black 1px;
		background-position: 0 100%;
	}
	
	.logoboxpad{
		padding:0 2rem;
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
		justify-content: center;
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
	.chklogo{
		width:6rem;
		height:6rem;
	}
	
	.messager{
		padding:3.5rem 0;
	}
	
	.title{
		color:#3A75BB;
		font-size:1.5rem;
	}
	.sub-title{
		color:gray;
		font-size:0.7rem;
	}
</style>
