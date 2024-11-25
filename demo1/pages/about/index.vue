<template>
	<view>
		<image :src="picurl" mode="aspectFill" @click="getPicUrl" @load="onImageLoad">
		</image>
		<view>
			<text>點擊圖片會換張</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picurl: "" // 圖片URL
			};
		},
		methods: {
			// 獲取圖片URL
			getPicUrl() {
				uni.showLoading({
					title: "數據加載中"
				});
				uni.request({
					url: "https://api.thecatapi.com/v1/images/search",
					success: res => {
						this.picurl = res.data[0].url; // 設定圖片URL
					},
					fail: err => {
						uni.hideLoading(); // 如果請求失敗，直接隱藏加載提示
						uni.showToast({
							title: '圖片加載失敗',
							icon: 'none'
						});
					}
				});
			},
			// 圖片加載完成後觸發
			onImageLoad() {
				uni.hideLoading(); // 圖片完全加載後隱藏加載提示
			}
		},
		onLoad() {
			this.getPicUrl(); // 頁面加載時請求圖片
		}
	};
</script>

<style lang="scss">

</style>