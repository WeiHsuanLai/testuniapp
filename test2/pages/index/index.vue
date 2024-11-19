<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="clickImg"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			<navigator url="/pages/demo1/demo1">跳轉到Demo1</navigator>
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

		},
		methods: {
			clickImg() {
				uni.showToast({
					title: "uniapp",
					image: "/static/logo.png"
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
</style>