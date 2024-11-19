<template>
	<view>
		{{title}}
		<view>
			<!-- 想在自定義事件 @input 後面使用原生 @click 需要在後面加上 .native -->
			<input type="text" placeholder="請輸入資料..." @input="oninput">
		</view>
	</view>
</template>

<script>
	export default {
		name: "myevent",
		data() {
			return {

			};
		},
		props: {
			title: {
				type: String,
				default: "默認標題"
			}
		},
		methods: {
			oninput(e) {
				// console.log(e.detail.value);
				this.$emit("myenv", {
					value: e.detail.value,
					time: Date.now()
				})
			}
		}
	}
</script>

<style lang="scss">

</style>