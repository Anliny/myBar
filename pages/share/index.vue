<template>
	<view class="content" :style="{background:`url(${BGUrl})`}" style="background-size: 750upx;">
		<view class="header">
			<view class="goBack" @click="goBack">
				<image class="icon" src="./images/left.png" mode="scaleToFill"></image>
			</view>
			<view class="avatarWapper">
				<image class="avatar" :src="avatarList[0]" mode="scaleToFill"></image>
				<view class="name">Tonight</view>
				<image class="avatar" :src="avatarList[1]" mode="scaleToFill"></image>
			</view>
		</view>
		
		
		
		<swiper :loop="false" class="imageContainer" previous-margin="45rpx" next-margin="45rpx" >
			<swiper-item class="swiperitem" :style="{backgroundImage:'url('+item+')'}" v-for="(item,index) in imgList" :key="index">
				<view class="textWapper">
					<view class="icon">Live</view>
					<view class="text tk-acumin-pro">Current Songs</view>
				</view>
				<view class="shareBtn">
					<view class="icon">已将微信发送给你</view>
				</view>
				<image class="gift" src="./images/gift.png" mode="scaleToFill"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	import {userData} from "../users/mock.js"

	export default {
		components: {},
		data() {
			return {
				scrollTop:0,
				recharge:0,
				old: {
					scrollTop: 0
				},
				inputValue:'',
				info: [
					111,222,333
				],
				current: 0,
				mode: 'round',
				BGUrl: require('@/static/images/bg.jpg'),
				logo: '/static/images/logo.png',
				avatarList:['/static/images/avatar1.png','/static/images/avatar2.png'],
				tips:'/static/images/tips.png',
				imgList: [
					require('@/static/images/swiperBG2.jpg'),
					require('@/static/images/swiperBG1.png')
					// 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2294966447,248611631&fm=26&gp=0.jpg'
				],
				chatList:[
					{
						id:1,
						tableNumber:'799',
						userIcon:require('./images/user.png'),
						text:'真好听你撒范德萨范德萨你懂撒范德萨范德萨发，是否你懂撒范德萨发生的三废士大夫的萨芬你撒范德萨发撒范德萨发',
					},{
						id:2,
						tableNumber:'99',
						userIcon:require('./images/user.png'),
						text:'真好听',
					}
				]
			}
		},
		onLoad() {},
		methods: {
			goBack(){
				uni.navigateTo({url:'../photos/index'});
			},
			
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
		  scroll: function(e) {
					console.log(e)
					this.old.scrollTop = e.detail.scrollTop
			},
			
			change(e) {
				this.current = e.detail.current;
			},
			
			// 获取文本框内容
			getChat(event){
				this.inputValue = event.target.value
			},
			// 点击发送
			handleSubmit(){
				this.chatList = [
					...this.chatList,
					{
						id:this.chatList.length+1,
						tableNumber:'799',
						userIcon:require('./images/user.png'),
						text:this.inputValue,
					}
				]
				this.inputValue = ""
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./style.scss");
	.swiper-box1 .uni-swiper-slide-frame{
		width: 84% !important;
	}
	.imageContainer {
		width: 750rpx;
		margin-top: 10rpx;
		height: calc(100% - 200rpx);
		
	}
	
	.itemImg {
		width: 630rpx;
		height: 100%;
		border-radius: 10rpx;
	}
	
	.swiperitem {
		width: 630rpx;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-size: 630rpx 100%;
		background-repeat: no-repeat;
		padding-right: 40rpx;
		 box-sizing: border-box;
	}
</style>
