<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	view {
		font-size: 30upx;
		color: gray;
	}
	.ju {
		display: flex;
		justify-content: center;
	}
	.al {
		display: flex;
		align-items: center;
	}
	.sb {
		display: flex;
		justify-content: space-between;
	}
	.sa {
		display: flex;
		justify-content: space-around;
	}
	.op:active {
		opacity:0.4;
	}
	.flex10 {
		flex:10;
	}
	.headerWrap {
		position: sticky;
		top: 0;
	}
	.imgBox {
		position: relative;

	}
	.delImg {
		position: absolute;
		right: 0;
		top: 0;
		width: 40upx;
		height: 40upx;
		z-index: 100;
	}
	.addSubBtn {
		width: 42upx;
		height: 45upx;
		border: solid #CCC 1px;
	}
	.delBtn {
		padding: 10upx 40upx;
		background: #007AFF;
		color:#FFF;
	}
	.input {
		padding: 10upx;
		margin: 5upx 0;
	}
</style>
