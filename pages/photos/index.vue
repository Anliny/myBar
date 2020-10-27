<template>
	<view class="content" :style="{background:`url(${BGUrl})`}" style="background-size: 750upx;">
		<view class="header">
			<view class="goBack" @click="handleGoBack">
				<image class="icon" src="./images/left.png" mode="scaleToFill"></image>
				回现场
			</view>
			
			<view class="avatar">
				<view class="item" @click="goShare" v-for="(item,index) in avatarList" :key="index">
					<image :src="item" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		
		<swiper :loop="false" class="imageContainer" previous-margin="45rpx" next-margin="45rpx" >
			<swiper-item class="swiperitem" :style="{backgroundImage:'url('+item.bgUrl+')'}" v-for="(item,index) in imgList" :key="index">
				<view class="textWapper">
					<view class="icon">{{item.song.icon}}</view>
					<view class="text tk-acumin-pro">{{item.song.name}}</view>
				</view>
				<view class="chatContanner">
					<view class="chatView" style="">
						<scroll-view ref="refScollView" :scroll-top="item.scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
						                @scroll="scroll">
							<view  v-for="item in item.chatList" :key="item.id" style="margin-bottom: 10upx;">
								<view class="chatItem">
									<view class="tableNumber" v-if="item.tableNumber">{{item.tableNumber}}</view>
									<image class="userIcon" :src="item.userIcon" mode="scaleToFill"></image>
									<view class="text">{{item.text}}</view>
								</view>
							</view>
						 </scroll-view>
					</view>
				</view>
				<view class="bottomWapper">
					<view class="line"></view>
					<view class="chatWapper">
						<input type="text" class="chatInput" @focus="getIndex(index)" @blur="getChat" :value="item.inputValue" />
						<view class="submit" @click="handleSubmit(index)">发送</view>
						<image class="gave" src="./images/goodsBtn.png" @click="handleGoods" mode="scaleToFill"></image>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import {userData} from "../users/mock.js"
export default {
	data() {
		return {
			
			recharge:0,
			old: {
				scrollTop: 0
			},
			info: [
				111,222,333
			],
			current: 0,
			index:null,
			mode: 'round',
			BGUrl: '/static/images/bg.jpg',
			logo: '/static/images/logo.png',
			avatarList:['/static/images/avatar1.png','/static/images/avatar2.png','/static/images/avatar3.png'],
			tips:'/static/images/tips.png',
			imgList: [
				{
					bgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3687173686,831911132&fm=26&gp=0.jpg',
					scrollTop:0,
					id:1,
					inputValue:'',
					song:{icon:'GOOD',name:'往事与如何'},
					chatList:[
						{
							id:1,
							tableNumber:'799',
							userIcon:require('./images/user.png'),
							text:"真好听",
						}
					]
				},{
					bgUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2601388974,2460884874&fm=26&gp=0.jpg',
					scrollTop:0,
					song:{icon:'LIVE',name:'Current Songs'},
					id:1,
					inputValue:'',
					chatList:[]
				},{
					bgUrl:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2294966447,248611631&fm=26&gp=0.jpg',
					scrollTop:0,
					song:{icon:'NEW',name:'下山'},
					id:1,
					inputValue:'',
					chatList:[]
				}
			],
			
		}
	},
	onLoad() {},
	methods: {
		// 去分享
		goShare(){
			uni.navigateTo({url:'../share/index'});
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
		
	
		getIndex(index){
			this.index = index
		},
		// 获取文本框内容
		getChat(event){
			console.log(event)
			this.imgList[this.index].inputValue = event.target.value
		},
		// 点击发送
		handleSubmit(number){
			console.log(number)
			this.imgList[number].chatList = [
				...this.imgList[number].chatList,
				{
					id:this.imgList[number].chatList.length+1,
					tableNumber:'799',
					userIcon:require('./images/user.png'),
					text:this.imgList[number].inputValue,
				}
			]
			// console.log(this.)
			this.imgList[number].inputValue = ""
			this.index = null
			this.$nextTick(()=>{
				console.log(this.$refs.refScollView[number].$refs.content.offsetHeight)
				this.imgList[number].scrollTop = this.$refs.refScollView[number].$refs.content.offsetHeight
			})
		},
		// 返回聊天页面
		handleGoBack(){
			uni.navigateTo({url:'../index/index'});
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
