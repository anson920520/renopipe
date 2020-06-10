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
</style>
