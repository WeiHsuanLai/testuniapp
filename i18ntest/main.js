import App from './App'
//1.導入 i18n
import VueI18n from 'vue-i18n'
// 導入語言 json
import messages from '@/locale/index.js'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
// 2.使用 i18n
Vue.use(VueI18n)

// 3.創建 i18n對象
const i18n = new VueI18n({
	locale: uni.getLocale(), //獲取設置的語言
	messages
	// messages: {
	// 	en: {

	// 	},
	// 	tw: {

	// 	},

	// }
})

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n, // 4. i18n 掛載在實例
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif