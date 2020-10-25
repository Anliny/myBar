<template>
	<view class="content" :style="{background:`url(${BGUrl})`}" style="background-size: 750upx;">
		<view class="header">
			<view class="goBack">
				<image class="icon" src="./images/left.png" mode="scaleToFill"></image>
				回现场
			</view>
			
			<view class="avatar">
				<view class="item" v-for="(item,index) in avatarList" :key="index">
					<image :src="item" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
		    <swiper class="swiper-box" @change="change">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="swiper-item" :style="{background:`#f5${index}`}">{{item}}</view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		<!-- <view class="textWapper">
			<image :src="tips" mode="scaleToFill"></image>
		</view> -->
		
	</view>
</template>

<script>
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	import {userData} from "../users/mock.js"
	export default {
		components: {
		    FontAwesome
		},
		data() {
			return {
				info: [
					111,222,333
				],
				current: 0,
				mode: 'round',
				BGUrl: '/static/images/bg.jpg',
				logo: '/static/images/logo.png',
				avatarList:['/static/images/avatar1.png','/static/images/avatar2.png','/static/images/avatar3.png'],
				tips:'/static/images/tips.png',
			}
		},
		onLoad() {},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./style.scss");
</style>
