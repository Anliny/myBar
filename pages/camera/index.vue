<template>
	<view class="content" style="background-color: #000000">
		<image class="contentCamera" src="./images/cameraIcon.png" mode="scaleToFill"></image>
		<view class="textWapper">
			<view class="icon">Live</view>
			<view class="text">Current Songs</view>
		</view>
		<image class="down" src="./images/down.png" mode="scaleToFill"></image>
		<view class="cameraBtn" @click="handleGoPhotos">
			<view class="article"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {},
		methods: {
			handleGoPhotos(){
				// 跳转商品购买 (这种跳转方式在H5上只能用相对路径)
				uni.navigateTo({url:'../photos/index'});
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	/*每个页面公共css */
	.content {
		height: 100%;
		background-size:750upx;
		position: relative;
	}
	.content .contentCamera{
		position: absolute;
		width: 46rpx;
		height: 38rpx;
		right: 53rpx;
		top: 114rpx;
	}
	.textWapper{
		padding: 5px 20px;
		width: 437rpx;
		height: 208rpx;
		position: absolute;
		top: 346rpx;
		left: 31rpx;
		
	}
	.textWapper image{
		width: 100%;
		height: 100%;
	}
	.textWapper .icon{
		height: 20px;
		width: 50px;
		text-align: center;
		line-height: 20px;
		background-color: #5555ff;
		transform: skewX(-20deg);
	}
	.textWapper .text{
		font-size: 30px;
		color: #fff;
	}
	.down{
		width: 49rpx;
		height: 49rpx;
		position: absolute;
		bottom: 171rpx;
		left: 119rpx;
	}
	.cameraBtn{
		width: 179rpx;
		height: 179rpx;
		background-color: rgb(67,19,53);
		border-radius: 50%;
		margin: auto;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 107rpx;
	}
	.cameraBtn .article{
		width: 126rpx;
		height: 126rpx;
		background-color: rgb(191,114,172);
		border-radius: 50%;
		transform: translate(26.5rpx,26.5rpx);
	}
</style>
