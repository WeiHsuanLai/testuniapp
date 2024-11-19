<template>
	<view>
		<view class="item">
			myitem自定義組件變動了
		</view>
	</view>
</template>

<script>
	export default {
		name: "myitem",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.item {
		width: 200rpx;
		height: 200rpx;
		background: pink;
		color: blue;
	}
</style>