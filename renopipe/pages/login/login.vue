<style lang="scss" scoped>
	.loginWrap {
		min-height: 100vh;
		// border: solid black 1px;
		flex-direction: column;
	}
	.logoBox {
		width: 80%;
		height: 350upx;
		background: url("../../static/img/logo.png") no-repeat;
		background-size: 100%;
		// border: solid black 1px;
		background-position: 0 100%;
	}
	.formTitle {
		text-align: center;
		font-weight: bold;
		font-size: 40upx;
		padding-bottom:30upx;
	}
	.formBox {
		width: 75%;
		// border: solid red 1px;
		// padding-bottom: 40vh;
		position: relative;
		top: -20vh;
	}
	.loginInput {
		border: solid #CBD2D7 1upx;
		width: 100%;
		margin: auto;
		border-radius: 10upx;
		padding: 10upx 0;
		text-indent: 10upx;
		color: #768693;
		margin: 19upx 0;
		
	}
	.focus {
		box-shadow:  0 0 12upx #B5BEC5;
	}
	.forget {
		color: #3F8ACA;
		border-bottom: solid #3F8ACA 1upx;
		font-size: 28upx;
	}
	.showPwd {
		color: #6E7F8D;
		border-bottom: solid #6E7F8D 1upx;
		font-size: 28upx;
	}
	.logBtn {
		width: 100%;
		padding: 15upx 0;
		background: #0777CF;
		margin-top: 40upx;
		color: white;
		text-align: center;
		border-radius: 10upx;
	}
	.loginBottom {
		color: #464646;
	}
	
	.btmBorder{
		border-bottom: solid 20px #5F98EC;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	.mask-1 {
		width: 100vw;
		height: 100vh;
		background: rgba(0,0,0,0.5);
		position: fixed;
		left: 0;
		top: 0;
	}
	.m-main {
		width: 60vw;
		padding: 5vw 10vw;
		background: #FFF;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		text-align:center;
		font-size: 38upx;
		font-weight: bold;
		border: solid #3A75BB;
	}
	.man-img {
		width: 100%;
	}
	.size35 {
		font-size: 50upx;
	}
</style>

<template>
	<view class="loginWrap sb al" >
		<view class="logoBox"></view>
		<view class="formBox">
			<view class="formTitle">Renopipe 匯報工作系統</view>
			<input @focus="focus=0" @blur="focus=-1" 
				:class="['loginInput',{'focus':focus==0}]" 
				placeholder="輸入用戶名"
				type="text" v-model="username" />
			<input @focus="focus=1" 
				@blur="focus=-1" v-show="showPwd" :class="['loginInput',{'focus':focus==1}]" 
				placeholder="輸入密碼"
				type="text" v-model="password" />
			<input @focus="focus=1" 
				@blur="focus=-1" v-show="!showPwd" :class="['loginInput',{'focus':focus==1}]" 
				placeholder="輸入密碼"
				type="password" v-model="password" />
			<view class="sb">
				<text class="forget">忘記密碼請聯繫管理員</text>
				<text class="showPwd" @click="showPwd=!showPwd">顯示密碼</text>
			</view>
			<view class="logBtn op" @click="toHome">登陸</view>
			<!-- <view class="logBtn op" @click="demoWarning">登陸</view> -->
		</view>
		<view class="btmBorder">©RenoPipe Construction Co. Ltd. Copyright © 2020</view>
		
		<view class="mask-1" v-if="modal">
			<view class="m-main">
				<image class="man-img" src="../../static/img/man.png" mode="widthFix" alt=""></image>
				<view class="size35">試用期已過</view>
				<view class="size35">需要更新</view>
				<view class="size35">請盡快聯繫</view>
				<view class="size35">ALOFT TECH LTD</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "",
				password: "",
				showPwd: false,
				focus: -1,
				modal: false
			};
		},
		methods:{
			demoWarning () {
				this.modal = true
			},
			toHome () {
				let that = this
				if (!this.username.trim() || !this.password.trim()) {
					uni.showToast({
						title: "請填寫賬號密碼",
						icon: 'none'
					})
				} else {
					uni.request({
						url:that.$store.state.baseURL + "login/supervisor",
						method:"POST",
						data:{
							phone: that.username,
							password: that.password
						},
						success (res) {
							console.log(res)
							if (res.data.ID) {
								uni.setStorageSync("token","Bearer " + res.data.token)
								uni.setStorageSync("username" ,""+ res.data.cName)
								uni.setStorageSync("userid" ,""+ res.data.ID)
								uni.navigateTo({
									url: "/pages/index/index"
								})
							} else {
								uni.showToast({
									title:"賬號或密碼錯誤",
									icon:"none"
								})
							}
						},
						fail () {
							uni.showToast({
								title:"賬號或密碼錯誤",
								icon:"none"
							})
						}
					})
					// uni.navigateTo({
					// 	url: "/pages/index/index"
					// })
				}
			},
		}
	}
</script>


