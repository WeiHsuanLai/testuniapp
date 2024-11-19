<template>
	<view>
		<view class="box">當前標題:{{title}}</view>
		<view class="num">{{num}} <text class="zzz">zzz</text></view>
		<view class="">{{arr}}</view>
		<view class="">{{obj.name}}{{obj.age}}</view>

		---------------------------------------------------

		<view v-if="state">uniapp</view>
		<view v-else>vue</view>

		----------------------v-if----------------------------

		<view v-if="day==1">周一</view>
		<view v-else-if="day==2">周二</view>
		<view v-else-if="day==3">周三</view>
		<view v-else-if="day==4">周四</view>
		<view v-else-if="day==5">周五</view>
		<view v-else-if="day==6">周六</view>
		<view v-else-if="day==7">周日</view>
		<view v-else>格式錯誤</view>

		-----------------------v-show-------------------------------
		<view v-show="state">uniapp</view>
		<view v-show="!state">vue</view>

		-----------------------------------------------------------
		<view v-for="(item,index) in arr" class="out" :key="index">
			<view class="row">
				{{index+1}}-{{item}}
			</view>
		</view>

		------------------------v-for-------------------------------
		<view v-for="(item,index) in goods" class="goods" :key="item.id">
			<view>
				商品名稱:{{item.title}} -
				價格: {{item.price}}
			</view>
		</view>

		--------------------------v-for-object----------------------
		<view v-for="(value,name,index) in obj" :key="index">
			<!-- {{name+":"+value}} -->
			{{name}}:{{value}}
		</view>

		--------------------------v-html----------------------------
		<view v-html="code" class="code"></view>

		-------------------------
		<view>{{code}}</view>

		-------------v-bind------------
		<view>
			<image :src="img" mode="" :title="title" class="logo"></image>
		</view>
		<image :src="`../../static/pic${item}.png`" mode="" v-for="(item,index) in [1,2,3]" :key="index"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: '../../static/logo.png',
				title: 'uniapp學習',
				code: '<h1>快樂學習</h1><em>Vue</em>',
				num: 124,
				arr: ["aaa", "bbb", 1, 2, 3],
				obj: {
					name: "張三",
					age: 29
				},
				state: false,
				day: 4,
				goods: [{
						id: 1,
						title: "Vue",
						price: 20
					},
					{
						id: 2,
						title: "React",
						price: 40
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	.logo {
		width: 50px;
		height: 50px;
	}

	.num {
		color: red;

		.zzz {
			color: blue;
		}
	}

	.out {
		.row {
			font-size: 50rpx;
		}
	}

	.code {
		color: pink;
	}
</style>