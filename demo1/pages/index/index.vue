<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
			<button @click="clean">清除張三</button>
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

			// 儲存資料到本地 (異步)
			// uni.setStorage({
			// 	key: "demo",
			// 	data: "123123",
			// 	success: (res) => {
			// 		console.log(res);
			// 	}
			// })

			// 儲存資料到本地 (同步)
			uni.setStorageSync('mykey1', 'hello')
			// 下一個代碼會覆蓋上面的代碼
			uni.setStorageSync('mykey2', 'vue')
			uni.setStorageSync('mykey3', {
				name: '張三',
				age: 22
			})

			// let mykey = uni.getStorageSync("mykey")
			// console.log("mykey=", mykey);
		},
		methods: {
			clean() {
				uni.removeStorage({
					key: 'mykey3',
					success: function(res) {
						console.log('清除成功');
					}
				});
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