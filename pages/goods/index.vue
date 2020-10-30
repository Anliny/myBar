<template>
	<view class="content" :style="{background:`url(${BGUrl})`}" style="background-size: 750upx;">
		<view class="header">
			<view class="logo">
				<image :src="logo"   mode="scaleToFill"></image>
			</view>
			<view class="nameWapper">
				<view class="title">上海双人舞酒吧</view>
				<view class="number">当晚人数：769</view>
			</view>
			<view class="avatar">
				<view class="item" v-for="(item,index) in avatarList" :key="index">
					<image :src="item" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="textWapper">
			<view class="icon">Live</view>
			<view class="text tk-acumin-pro">Current Songs</view>
			<!-- <image :src="tips" mode="scaleToFill"></image> -->
		</view>
		<view class="bottomWapper">
			<view class="goodsWapper" >
				<view class="goodsItem" @click="handleGoodsItem(item)" v-for="item in bottomList" :key="item.id">
					<view class="icon" :class="[item.id == goodsItemActive ? 'iconHover' : '']">
						<image :src="item.icon" mode="scaleToFill"></image>
					</view>
					<view class="name">{{item.name}}</view>
					<view class="price">{{item.price}}</view>
				</view>
			</view>
			<view class="payment">
				<view class="recharge">
					{{recharge}}   充值＞
				</view>
				<view class="btnGroup" >
					<view class="number" @click="handleConut">{{number}} ＞</view>
					<view class="submit" @click="handleSubmit">送给他</view>
				</view>
			</view>
		</view>
		<image class="fillImage" v-if="isShowFillImage"  :src="isShowFillImage ? 'https://atour-1300409046.cos.ap-shanghai.myqcloud.com/APNG/%E5%9B%9B%E5%8F%B6%E8%8D%89.png':''" mode="scaleToFill"></image>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowFillImage:false,
				goodsItemActive:null,
				recharge:0,
				number:0,
				BGUrl: require('@/static/images/bg.jpg'),
				logo: '/static/images/logo.png',
				avatarList:['/static/images/avatar1.png','/static/images/avatar2.png','/static/images/avatar3.png'],
				tips:'/static/images/tips.png',
				bottomList:[
					{
						id:1,
						icon: '/static/images/alcohol1.png',
						name:'四叶草',
						price: 60
					},{
						id:2,
						icon: '/static/images/alcohol2.png',
						name:'四叶草',
						price: 123
					},{
						id:3,
						icon: '/static/images/alcohol3.png',
						name:'四叶草',
						price: 76
					},{
						id:6,
						icon: '/static/images/alcohol4.png',
						name:'四叶草',
						price: 79
					},{
						id:4,
						icon: '/static/images/alcohol5.png',
						name:'四叶草',
						price: 80
					},{
						id:5,
						icon: '/static/images/alcohol6.png',
						name:'四叶草',
						price: 123
					},{
						id:7,
						icon: '/static/images/alcohol7.png',
						name:'四叶草',
						price: 45
					},{
						id:8,
						icon: '/static/images/alcohol8.png',
						name:'四叶草',
						price: 79
					}
				]
			}
		},
		
		onLoad() {},
		methods: {
			handleSubmit(){
				this.isShowFillImage = true
				setTimeout(() =>{
					this.isShowFillImage = false
				},4000)
			},
			
			handleConut(){
				this.number ++
			},
			
			// 点击商品
			handleGoodsItem(data){
				this.goodsItemActive = data.id
				this.recharge = data.price
				this.number = 1
			},
			//调用摄像头或选择文件上传
			chooseImage() {
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择、摄像头
					success: function(res) {
						console.log(JSON.stringify(res.tempFilePaths));
					}
				});
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./style.css");
</style>
