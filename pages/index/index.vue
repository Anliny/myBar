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
			<view class="text">Current Songs</view>
		</view>
		<view class="empetTop"></view>
		<view class="chatContanner">
			<view style="width: 100%;max-width: 100%;" v-for="item in chatList" :key="item.id">
				<view class="chatItem" >
					<view class="tableNumber" v-if="item.tableNumber">{{item.tableNumber}}</view>
					<image class="userIcon" :src="item.userIcon" mode="scaleToFill"></image>
					<view class="text">{{item.text}}</view>
				</view>
			</view>
			
		</view>
		<view class="empetBottom"></view>
		<view class="bottomWapper">
			<view class="line"></view>
			<view class="chatWapper">
				<input type="text" class="chatInput" @blur="getChat" :value="inputValue" />
				<view class="submit" @click="handleSubmit">发送</view>
				<!-- <view class="gave"></view> -->
				<image class="gave" src="./images/goodsBtn.png" @click="handleGoods" mode="scaleToFill"></image>
			</view>
		</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsItemActive:null,
				recharge:0,
				BGUrl: '/static/images/bg.jpg',
				logo: '/static/images/logo.png',
				avatarList:['/static/images/avatar1.png','/static/images/avatar2.png','/static/images/avatar3.png'],
				tips:'/static/images/tips.png',
				inputValue:'',
				chatList:[
					{
						id:1,
						tableNumber:'799',
						userIcon:require('./images/user.png'),
						text:'真好听',
					},{
						id:2,
						tableNumber:'99',
						userIcon:require('./images/user.png'),
						text:'真好听',
					},{
						id:3,
						tableNumber:'',
						userIcon:require('./images/user.png'),
						text:'真好听',
					}
				]
			}
		},
		onLoad:function (options) {
			 setTimeout(function () {
				 console.log('start pulldown');
			 }, 1000);
			uni.startPullDownRefresh();
		},
		 onPullDownRefresh() {
		        //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
		        console.log('refresh')
		        setTimeout(function () {
		            uni.stopPullDownRefresh();  //停止下拉刷新动画
		        }, 1000);
		    },

		methods: {
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
			},
			// 跳转商品购买 (这种跳转方式在H5上只能用相对路径)
			handleGoods(){
				uni.navigateTo({url:'../goods/index'});
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
