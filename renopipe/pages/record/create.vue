<template>
	<view class="Wrap sb la">
		<!--header!-->
		<view class="nav-background">
			<img class="menu-btn" src="@/static/img/hamburger-btn.png" />
		</view>
		<view class="">
			<!--title!-->
			<view class="title-padding">
				<div class="main">
					<p class="title">創建新工作紀錄</p>
					<!--return btn!-->
					<div class="btn-color customize-btn" @click="toHome"> 返回</div>
				</div>
				<hr class="hr-line"/>
			</view>
			
			<!--body!-->
			<view class="body-padding">
				<p>工頭名稱: 張志強</p>
				<p>日期: 2020-06-21 SS:MM:HHHH</p>
				<p>地盤: 西營盤 - POINTA1</p>
				<!--<div class="main">
					<select>
						<option>地盤檢索</option>
					</select>
					<select>
						<option>工作種類檢索</option>
					</select>
					<select>
						<option>日期檢索</option>
					</select>
				</div>!-->
				<div class="hr">
					<div class="blue-divider"></div>
				</div>
			</view>
			
			<!--worker-list!-->
			<view class="body-padding">
				<div class="">
					<p class="title">工人列表</p>
				</div>
			</view>
			
			<view class="body-padding mt20">
				<div class="tagpad">
					<div class="jobTag">電工</div>
				</div>
				<view class="border box scoll">
					<div class="worker-main">
						<img class="worker-icon" src="@/static/img/Users-Worker-icon.png"/>
						<div class="worker-info-area">
							<b>飛龍</b>
						</div>
						<div class="chk-box-area">
							<checkbox-group>
							    <label>
							        <checkbox value="cb" />
							    </label>
							</checkbox-group>
						</div>
					</div>
					<hr/>
					<div class="worker-main">
						<img class="worker-icon" src="@/static/img/Users-Worker-icon.png"/>
						<div class="worker-info-area">
							<b>飛龍</b>
						</div>
						<div class="chk-box-area">
							<checkbox-group>
							    <label>
							        <checkbox value="cb" />
							    </label>
							</checkbox-group>
						</div>
					</div>
					<hr/>
					<div class="worker-main">
						<img class="worker-icon" src="@/static/img/Users-Worker-icon.png"/>
						<div class="worker-info-area">
							<b>飛龍</b>
						</div>
						<div class="chk-box-area">
							<checkbox-group>
							    <label>
							        <checkbox value="cb" />
							    </label>
							</checkbox-group>
						</div>
					</div>
				</view>
			</view>
			
			<!--work type!-->
		
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
				
			}
		},
		onLoad() {
			
		},
		methods:{
			toCreate() {
					uni.navigateTo({
						url: "/pages/index/index"
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
		height:11rem;
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
		justify-content: center;
	}
	
	.tagpad{
		padding:0 13rem 0 0;
	}
</style>
