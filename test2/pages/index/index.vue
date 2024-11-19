<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="clickImg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			<navigator url="/pages/demo1/demo1">跳轉到Demo1</navigator>
		</view>
		<view class="box" @click="showModal">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			uni.showLoading({
				title: "數據加載中",
				mask: true
			})
			setTimeout(() => {
				uni.hideLoading()
			}, 300)
		},
		methods: {
			clickImg() {
				uni.showToast({
					title: "成功",
					icon: "success",
					mask: true,
					duration: 1000,
					// duration 延遲時間最好設比下方跳轉時間長，因為跳轉也需要時間，設太短連續點可能會變成多次觸發跳轉

					// success() {
					// 	uni.navigateTo({
					// 		url: "/pages/demo1/demo1"
					// 	})
					// }
				})
				setTimeout(() => {
					uni.navigateTo({
						url: "/pages/demo1/demo1",
						animationType: 'slide-in-right', // 動畫類型
						animationDuration: 900 // 動畫持續時間，單位：毫秒
					})
				}, 500)
			},
			showModal() {
				uni.showModal({
					title: "是否繼續操作?",
					// cancelText: "不要",
					// confirmText: "要",
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
					// success: res => {
					// 	console.log(res);
					// },
					// fail: err => {
					// 	console.log(err);
					// }
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.box {
		width: 200rpx;
		height: 200rpx;
		background: pink;
	}
</style>