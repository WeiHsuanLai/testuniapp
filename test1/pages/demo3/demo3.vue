<template>
	<view>
		<view @click="onclick"> 標題:{{ title }}</view>
		<input type="text" v-model="title">

		-----------案例-------------

		<view class="out">
			<view class="row">
				<input class="border" type="text" placeholder="請輸入姓名..." v-model="message.username">
			</view>

			<view class="row">
				<input class="border" type="text" placeholder="請輸入電話..." v-model="message.tel">
			</view>

			<view class="row">
				<textarea class="border" placeholder="請輸入留言..." v-model="message.content"></textarea>
			</view>

			<view class="row">
				<button type="primary" @click="onSubmit">提交留言</button>
			</view>
			{{message}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "承翊系統",
				message: {
					username: "",
					tel: "",
					content: ""
				}
			};
		},
		methods: {
			onclick() {
				this.title = Math.random()
			},
			onSubmit() {
				console.log(this.message);
			}
		}
	}
</script>

<style lang="scss">
	.out {
		padding: 30rpx;

		.row {
			margin-bottom: 10rpx;
		}

		.border {
			border: 1px solid #eee;
			width: 100%;
			min-height: 80rpx;
			padding: 0 20rpx;
			box-sizing: border-box;
		}
	}
</style>