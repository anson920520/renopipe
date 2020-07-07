<style lang="scss" scoped>
.menu-btn{
	width:0.9rem;
	height:0.9rem;
	padding:10px;
	cursor: pointer;
}
.nav-background{
	background: #5F98EC;
	position: relative;
	
}
.dropMenu {
	width: 40vw;
	max-height: 0;
	overflow: hidden;
	transition: 0.3s;
	background:#F0F0F0;
	position: absolute;
	left: 0;
	top: 100%;
	border-radius: 0 0 30upx 0;
}
.menuList {
	padding: 10upx 20upx;
	border-top: solid #CCC 1px;
}
.menuList:last-child {
	margin-bottom: 30upx;
}
.show {
	max-height: 40vh !important;
}
.headerWrap {
	position: sticky;
	top: 0;
	z-index:100;
}
</style>


<template>
	<view class="headerWrap">
		<view class="nav-background">
			<img class="menu-btn op" @click="show=!show" src="@/static/img/hamburger-btn.png" />
			<view :class="['dropMenu', { show: show }]">
				<view class="menuList ju al">你好, {{username}}</view>
				<view class="menuList op ju al" @click="toIndex">我的報工記錄</view>
				<view class="menuList ju al op" @click="loginOut">登出</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				username: uni.getStorageSync('username')
			};
		},
		methods:{
			toIndex () {
				uni.navigateTo({
					url:"/pages/index/index"
				})
			},
			loginOut () {
				uni.showModal({
					title:"登出",
					content: "確定退出登錄?",
					success (e) {
						if (e.confirm) {
							uni.reLaunch({
								url:"/pages/login/login"
							})
						}
					}
				})
			}
		}
	}
</script>

