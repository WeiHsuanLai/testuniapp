<template>
	<view class="pubTitle">
		<view class="time">{{time}}</view>
		<view class="big">{{title}}</view>
		<view class="small">{{subtitle}}</view>
		<view>{{list}}</view>
		<view>姓名:{{user.name}}</view>
		<view>性別:{{user.gender}}</view>
		<view class="line"></view>
	</view>
</template>

<script>
	export default {
		name: "pubTitle",
		// props: ["title", "subtitle"],
		props: {
			title: {
				type: String,
				default: "默認標題"
			},
			subtitle: {
				type: String,
				default: "默認副標題"
			},
			time: {
				type: Number,
				default: Date.now()
			},
			list: {
				type: Array,
				// 如果是數組要用 default return
				default () {
					return [1, 2, 3]
				}
			},
			user: {
				// 如果是對象定義也要用 default return
				type: Object,
				default () {
					return {
						name: "匿名",
						gender: "不公開"
					}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.pubTitle {
		padding: 60rpx 30rpx;
		text-align: center;
		background: palegreen;

		.big {
			font-size: 50rpx;
			font-weight: 600;
			color: #333;
		}

		.small {
			font-size: 28rpx;
			color: #888;
		}

		.line {
			display: inline-block;
			width: 80rpx;
			height: 8rpx;
			background: #1AA034;
			border-radius: 10rpx;
		}
	}
</style>