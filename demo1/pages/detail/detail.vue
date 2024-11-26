<template>
	<view class="detail">
		<view class="title">{{ objData.title }}</view>
		<view class="content">{{ objData.body }}</view>
		<view class="comment">
			<view class="text">評論</view>
			<view class="row">
				<view class="top">
					<view class="name">名稱</view>
					<view class="mail">郵件</view>
				</view>
				<view class="body">主要內容</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				objData: {}, // 用於存儲 API 獲取的數據
				id: 1,
			};
		},
		onLoad(e) {
			this.id = e.id
			// 生命周期：頁面加載時調用
			this.getDetail(); // 調用方法獲取數據
		},
		methods: {
			getDetail() {
				uni.request({
					url: "https://jsonplaceholder.typicode.com/posts/" + this.id, // API 地址
					success: (res) => {
						console.log(res);
						this.objData = res.data; // 更新數據
					},
					fail: (err) => {
						uni.showToast({
							title: "加載失敗123",
							icon: "none",
						});
					},
				});
			},
		},
	};
</script>

<style lang="scss">
	.detail {
		padding: 30rpx;

		.title {
			font-size: 46rpx;
			color: #000;
			padding-bottom: 20rpx;
		}

		.content {
			font-size: 30rpx;
			color: #666;
		}
	}

	.comment {
		padding: 30rpx;
		background: #666;

		.text {
			font-size: 46rpx;
			margin-bottom: 30rpx;
		}

		.row {
			.top {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>