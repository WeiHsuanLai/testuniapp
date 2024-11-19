<template>
	<view>
		<view class="title" v-on:click="onclick">{{title}}</view>
		<button @click="clicknum" :class="{'clicked':isClicked}">數值:{{num}}</button>
		<view class="box" :style="{background:bgcolor}" @click="clickBg">
			{{random}}
		</view>
		<view class="block" :class="{myactive:state}" @click="clickBg2"></view>
		<view class="block2" :class="state2 ? 'myactive2':''" @click="clickBg3"></view>
		<view class="nav">
			<view class="item" :class="navIndex==index?'active':''" v-for="(item,index) in navArr" :key="item.id"
				@click="clickNav(index)">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "uni",
				num: 0,
				isClicked: true,
				bgcolor: "#0000E3",
				random: "#0000E3",
				state: false,
				state2: false,
				navArr: [{
						id: 1,
						title: "首頁"
					},
					{
						id: 2,
						title: "介紹"
					},
					{
						id: 3,
						title: "教程"
					},
					{
						id: 4,
						title: "組件"
					}
				],
				navIndex: 0
			};
		},
		methods: {
			onclick: function() {
				this.title = "Vue"
			},
			clicknum() {
				this.num++;
				this.isClicked = !this.isClicked; // 切換按鈕顏色
			},
			clickBg() {
				let color = "#" + String(Math.random()).substr(3, 6)
				this.random = color
				this.bgcolor = color
			},
			clickBg2() {
				this.state = !this.state
			},
			clickBg3() {
				this.state2 = !this.state2
			},
			clickNav(e) {
				console.log(e);
				this.navIndex = e
			}
		}
	}
</script>

<style lang="scss">
	button {
		background-color: lightgray;
	}

	/* 點擊後的樣式 */
	.clicked {
		background-color: lightblue;
		color: white;
	}

	.box {
		width: 200rpx;
		height: 200rpx;
		background-color: pink;
	}

	.block {
		width: 200rpx;
		height: 200rpx;
		background-color: green;
	}

	.block2 {
		width: 200rpx;
		height: 200rpx;
		background-color: red;
	}

	.myactive {
		width: 400rpx;
		background-color: yellowgreen;
		border-radius: 50%;
	}

	.myactive2 {
		width: 400rpx;
		background-color: seagreen;
		border-radius: 50%;
	}

	.nav {
		display: flex;
		justify-content: space-around;
		align-items: center;

		.item {
			flex: 1;
			line-height: 90rpx;
			background: #ccc;
			text-align: center;

			&.active {
				background: greenyellow;
				color: #fff;
			}
		}
	}
</style>