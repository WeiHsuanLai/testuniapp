<template>
	<view>
		<pubTitle title=" 關於我們" subtitle="about page">
		</pubTitle>
		<navigator url="/pages/index/index" open-type="reLaunch">首頁</navigator>
		<navigator url="/pages/list/list" open-type="reLaunch">新聞列表</navigator>
		---------------------------------------------------------------------
		<!-- 想在自定義事件 @input 後面使用原生 @click 需要在後面加上 .native -->
		<myevent title="組件間的傳值" @myenv="onmyenv" @click.native="onClick"></myevent>
		---------------------------------------------------------------------
		<!-- 由父組件傳值給子組件，在由子組件傳給父組件自行修改 state -->
		<view class="state" :style="{ color: mystate ? 'blue' : 'red' }">狀態:{{mystate}}</view>
		<button @click="clickBtn">開啟</button>
		<!-- 傳遞 mystate 到 mypop 組件 -->
		<!-- <mypop :state="mystate" @stateEnv="onStateEnv"></mypop> -->
		<mypop :state.sync="mystate"></mypop>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 父組件的狀態初始為 false
				mystate: false
			};
		},
		methods: {
			onmyenv(value) {
				console.log(value); // 這裡的值來自於 myevent 組件的傳值
			},
			onClick() {
				console.log(123456); // 點擊事件
			},
			clickBtn() {
				// 點擊按鈕時更改 mystate
				this.mystate = true;
				console.log(this.mystate); // 確認 mystate 的變化
			},
			// state(e) {
			// 	// 接收到子組件傳來的事件，更新 mystate 的值
			// 	console.log(e);
			// 	this.mystate = e; // 更新狀態
			// }
			interval() {
				console.log("自定義函數");
			}
		},
		created() {
			this.interval()
		},
		mounted() {
			console.log("about 的 mounted");
		},
		onLoad() {
			console.log("about 的 onload");
		}
	}
</script>

<style lang="scss">
	.state {
		text-align: center;
		font-size: 50rpx;
	}
</style>