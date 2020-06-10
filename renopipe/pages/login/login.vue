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
	padding-bottom: 50upx;
	color: #464646;
}
</style>

<template>
	<view class="loginWrap sb al" >
		<view class="logoBox"></view>
		<view class="formBox">
			<view class="formTitle">Log in</view>
			<input @focus="focus=0" @blur="focus=-1" 
				:class="['loginInput',{'focus':focus==0}]" 
				placeholder="Email / Username"
				type="text" v-model="username" />
			<input @focus="focus=1" 
				@blur="focus=-1" v-show="showPwd" :class="['loginInput',{'focus':focus==1}]" 
				placeholder="Enter password"
				type="text" v-model="password" />
			<input @focus="focus=1" 
				@blur="focus=-1" v-show="!showPwd" :class="['loginInput',{'focus':focus==1}]" 
				placeholder="Enter password"
				type="password" v-model="password" />
			<view class="sb">
				<text class="forget">Forgot Password?</text>
				<text class="showPwd" @click="showPwd=!showPwd">Show Password</text>
			</view>
			<view class="logBtn op" @click="toHome">Log in</view>
		</view>
		<view class="loginBottom">©RenoPipe Construction Co. Ltd. Copyright © 2020</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: "lwz",
				password: "123456",
				showPwd: false,
				focus: -1,
			};
		},
		methods:{
			toHome () {
				if (!this.username.trim() || !this.password.trim()) {
					uni.showToast({
						title: "請填寫賬號密碼",
						icon: 'none'
					})
				} else {
					uni.navigateTo({
						url: "/pages/index/index"
					})
				}
			},
		}
	}
</script>


