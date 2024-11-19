<template>
	<view>
		<view class="box" :style="{height:state?'300rpx':'0'}">彈出框</view>
		<button @click="onClose">關閉</button>
	</view>
</template>

<script>
	export default {
		name: "mypop",
		props: {
			state: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			onClose(e) {
				this.$emit("update:state", false)
			}
		}
	}
</script>

<style lang="scss">
	.box {
		width: 300rpx;
		height: 300rpx;
		background: pink;
	}
</style>