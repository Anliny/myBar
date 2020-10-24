<template>
	<view class="content" :style="{background:`url(${BGUrl})`}" style="background-size: 750upx;">
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
		    <swiper class="swiper-box" @change="change">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="swiper-item">
						<view class="avatar" v-for="content in item.content"  :key="content.id"  >
							<view class="number" v-if="content.id%12 == 0">{{content.total}}+</view>
							<image :src="content.src || ''" mode="scaleToFill" :class="{shadow:content.isSide}"></image>
						</view>
		            </view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		
		<view class="table">
			<view class="tableLeft">
				<view class="tableItem">
					<image class="user user1" src="./images/user1.png" mode="scaleToFill"></image>
					<image class="user user2" src="./images/user2.png" mode="scaleToFill"></image>
					<image class="user shadow user3" src="./images/user1.png" mode="scaleToFill"></image>
					<view class="number">799</view>
				</view>
				<view class="tableItem"></view>
			</view>
			<view class="tableRight">
				<view class="tableItem"></view>
				<view class="tableItem"></view>
				<view class="tableItem"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
    import {userData} from "./mock.js"
	export default {
		components: {uniSwiperDot},
		data() {
			return {
				
				BGUrl: '/static/images/bg.jpg',
				info: userData,
				current: 0,
				mode: 'round',
				
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

<style lang="scss">
	/*每个页面公共css */
	@import url("./style.scss");
</style>
