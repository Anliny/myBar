<!-- 
	有前后间距的轮播图
	不支持nvue，
	实现方式：uni-app previous-margin，next-margin属性控制
		默认外层宽度750rpx 需要显示的图片尺寸为630rpx,需要显示两边轮播图漏出的间距为30rpx
		计算方式:1.计算两边间距和750-630=120
				2.计算两个图片之间的间距，两边间距一半减去漏出尺寸120/2-30=30
				3.图片间距两部分，拆成两部分，为图片外边距：30/2=15
				4.最后的previous-margin和next-margin为30+15=45
 -->
<template>
	<swiper :loop="false" class="imageContainer" previous-margin="45rpx" next-margin="45rpx" circular>
		<swiper-item class="swiperitem" v-for="(item,index) in imgList" :key="index">
			<image class="itemImg" :src="item" lazy-load></image>
		</swiper-item>
	</swiper>
</template>
<script>
	export default {
		data() {
			return {
				imgList: [
					'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3687173686,831911132&fm=26&gp=0.jpg',
					'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2601388974,2460884874&fm=26&gp=0.jpg',
					'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2294966447,248611631&fm=26&gp=0.jpg'
				]
			}
		}
	}
</script>
<style scoped>
	.imageContainer {
		width: 750rpx;
		height: 350rpx;
	}

	.itemImg {
		width: 630rpx;
		height: 350rpx;
		border-radius: 10rpx;
	}

	.swiperitem {
		width: 630rpx;
		height: 350rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
