<template>
	<view class="content">
		<view>
			<radio-group @change="localeChange">
				<label v-for="item in locales" :key="item.code">
					<radio :checked="applicationLocal === item.code" :value="item.code" /><text>{{item.text}}</text>
				</label>
			</radio-group>
		</view>
		<!-- $t(key) -->
		<view>{{$t('index.hello')}}</view>
		<button size="mini" type="primary" @tap="showModal">{{$t('showModal')}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				applicationLocal: '',
				locales: [{
						text: this.$t('locale.tw'),
						code: 'tw'
					},
					{
						text: this.$t('locale.en'),
						code: 'en'
					},
					{
						text: this.$t('locale.jp'),
						code: 'jp'
					}
				]
			}
		},
		onLoad() {
			this.applicationLocal = uni.getLocale();
			uni.onLocaleChange(e => {
				console.log(e);
				this.applicationLocal = e.locale
			})
		},
		computed: {
			locales() {
				return [{
						text: this.$t('locale.tw'),
						code: 'tw'
					},
					{
						text: this.$t('locale.en'),
						code: 'en'
					}, {
						text: this.$t('locale.jp'),
						code: 'jp'
					}
				];
			}
		},
		methods: {
			localeChange(e) {
				// console.log(e);
				// 設置語言
				uni.setLocale(e.detail.value)
				// 注意:在 vue 介面中，還需要調用 this.$i18n.locale = 值
				this.$i18n.locale = e.detail.value
			},
			showModal() {
				uni.showModal({
					title: this.$t('index.hello'),
					content: "content"
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>