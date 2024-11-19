<template>
	<view class="out">
		<pubTitle :title="test" subtitle="index page" :time="time" :list="[4,5,6]" :user="{name:'張三',gender:'男'}">
		</pubTitle>
		<!-- 父向子傳值 子組件通過 props 接受父組件傳過來的值-->
		<navigator url="/pages/list/list">新聞列表</navigator>
		<!--  
		reLaunch 关闭所有页面，打开到应用内的某个页面 
		跳转列表会刷新
		关闭所有页面，打开到应用内的某个页面。（可以跳转到tabBar 页面）
		但如果是列表的自定义表头有多个title的时候需要加参数才能返回到对应的列表
		-->
		<navigator url="/pages/list/list" open-type="reLaunch">新聞列表(reLaunch)</navigator>
		<!-- 
		switchTab 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。 
		uni.switchTab：
		跳转列表不会刷新
		跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
		-->
		<navigator url="/pages/list/list" open-type="switchTab">關於我們(switchTab)</navigator>
		<navigator url="/pages/about/about" open-type="switchTab">
			<image src="../../static/logo.png" mode=""></image>
		</navigator>
		<view class="box"></view>
		<view class="blue"></view>
		<view class="">uniapp</view>
		<view class="">web前端開發</view>
		<text>node.js</text>
		<text>vue.js</text>
		<scroll-view class="scroll" scroll-x="true" scroll-y="true">
			<view class="group">
				<view class="item">
					111
				</view>
				<view class="item">
					111
				</view>
				<view class="item">
					111
				</view>
				<view class="item">
					111
				</view>
				<view class="item">
					111
				</view>
				<view class="item">
					111
				</view>
			</view>
		</scroll-view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="1000" :duration="1000" class="swiper" circular>
			<swiper-item>
				<view class="swiper-item">1111</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">2222</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<navigator url="/pages/about/about">
						<image src="../../static/logo.png" mode="widthFix" lazy-load="true" class="img"></image>
					</navigator>
				</view>
			</swiper-item>
		</swiper>
		<!-- 		<image src="/static/logo.png" mode="aspectFit" class="img"></image>
		<image src="/static/logo.png" mode="aspectFill" class="img"></image>
		<image src="/static/logo.png" mode="widthFix" class="img"></image>
		<image src="/static/logo.png" mode="heightFix" class="img"></image> -->
		<button size="mini" type="primary" plain>確認提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				test: "承翊",
				time: Date.now()
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.out {
		.box {
			width: 750rpx;
			height: 200rpx;
			background-color: pink;
		}

		.blue {
			width: 200px;
			height: 200px;
			background-color: blue;
		}
	}

	.scroll {
		border: 3px solid red;
		box-sizing: border-box;

		.group {
			border: 2px solid green;
			height: 110rpx;
			white-space: nowrap;

			.item {
				width: 220rpx;
				height: 220rpx;
				border: 1px solid blue;
				background-color: #0080FF;
				display: inline-block;
				margin-right: 10rpx;
			}

			.image {
				width: 200rpx;
				height: 200rpx;
			}
		}
	}

	.swiper {
		border: 2px solid green;
		height: 300rpx;

		.swiper-item {
			height: 200rpx;
			border: 5px solid blue;
		}
	}

	.img {
		width: 200rpx;
		height: 500rpx;
	}
</style>