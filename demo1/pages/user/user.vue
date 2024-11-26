<template>
	<view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		onLoad() {
			uni.setTabBarBadge({
				index: 2,
				text: "3"
			})
			uni.setTabBarBadge({
				index: 1,
			})

			let mykey = uni.getStorageSync("mykey")
			console.log("用戶=", mykey);



		}
	}
</script>

<style>

</style>