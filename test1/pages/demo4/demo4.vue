<template>
	<view>
		<myitem></myitem>

		------------------------------------------

		<view>
			<button type="button" @click="goBack">返回上一頁</button>
		</view>

		<form @submit="onSubmit">
			<!-- 輸入框 -->
			<view class="row">
				<input type="text" name="username">
			</view>
			<!-- 文本 -->
			<view>
				<textarea name="content"></textarea>
			</view>
			<!-- 單選框,checked是預設選擇-->
			<view>
				<radio-group name="gender">
					<radio value="man" checked />男
					<radio value="woman" />女
					<radio value="secrecy" />不公開
				</radio-group>
			</view>

			<view class="row">
				<picker :range="options" name="school" :value="selectValue" @change="clickSchool">
					<view>
						點擊選擇學歷:{{options[selectValue]}}
					</view>
				</picker>
			</view>
			<!-- 提交按鈕，重製按鈕 -->
			<view>
				<button form-type="submit" type="primary">提交表單</button>
				<button form-type="reset">重置</button>
			</view>
			{{obj}}
		</form>

		<input type="text" v-model="title" class="row">
		<view>原文:{{title}}</view>
		<view>轉換大寫後:{{change}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj: null,
				options: [
					"高中", "大學", "碩士", "博士"
				],
				selectValue: 1,
				title: "",
				text: "承翊"
			}
		},
		methods: {
			onSubmit(e) {
				this.obj = e.detail.value
				this.obj.school = this.options[this.selectValue]
				console.log(this.obj);
			},
			clickSchool(e) {
				this.selectValue = e.detail.value
			},
			goBack() {
				uni.navigateBack({
					success(e) {
						console.log(e);
					}
				})
			}
		},
		computed: {
			demo() {
				return this.text + "uniapp學習"
			},
			change() {
				return this.title.toLocaleUpperCase()
			}
		},
		// mounted() {
		// 	// query 為挾帶參數 wd 為參數名稱
		// 	console.log("this.$route=", this.$route.query.wd);
		// }
		onLoad(e) {
			console.log(e);
			console.log("getCurrentPages=", getCurrentPages())
		}
	}
</script>

<style lang="scss">
	input,
	textarea {
		border: 1px solid #eee;
	}

	.row {
		margin: 20rpx 0;
	}
</style>