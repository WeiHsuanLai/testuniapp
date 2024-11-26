<template>
	<view class="detail">
		<view class="title">{{ objData.title }}</view>
		<view class="content">{{ objData.body }}</view>
		<view class="comment">
			<view class="text">評論</view>
			<view class="row" v-for="item in comment" :key="item.id">
				<view class="top">
					<view class="name">{{item.name}}</view>
					<view class="mail">{{item.email}}</view>
				</view>
				<view class="body">{{item.body}}</view>
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
				comment: []
			};
		},
		onLoad(e) {
			this.id = e.id
			// 生命周期：頁面加載時調用
			this.getDetail(); // 調用方法獲取數據
			this.getComment()
		},
		methods: {
			getDetail() {
				uni.showLoading({
					title: "數據加載中...",
					mask: true
				})
				uni.request({
					url: "https://jsonplaceholder.typicode.com/posts/" + this.id, // API 地址
					success: (res) => {
						console.log(res);
						this.objData = res.data; // 更新數據
					},
					complete: () => {
						uni.hideLoading()
					},
					fail: (err) => {
						uni.showToast({
							title: "加載失敗123",
							icon: "none",
						});
						uni.hideLoading()
					},
				});
			},
			getComment() {
				uni.request({
					url: `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`,
					success: (res) => {
						console.log(res);
						this.comment = res.data; // 更新數據
					},
					complete: () => {
						uni.hideLoading()
					},
					fail: (err) => {
						uni.showToast({
							title: "加載失敗123",
							icon: "none",
						});
						uni.hideLoading()
					},
				})
			}
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
		background: #f4f4f4;

		.text {
			font-size: 46rpx;
			margin-bottom: 30rpx;
		}

		.row {
			border-bottom: 1px solid #e8e8e8;
			padding: 20rpx 0;

			.top {
				display: flex;
				justify-content: space-between;
				font-size: 22rpx;
				color: #999;
				padding-bottom: 15rpx;
			}
		}
	}
</style>