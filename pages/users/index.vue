<template>
	<view class="content" :style="{background:`url(${BGUrl})`}" style="background-size: 750upx;">
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode">
		    <swiper class="swiper-box" @change="change">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="swiper-item" >
						<view class="avatar" v-for="(content,index) in item.content" v-if="content !== null "  :key="index" >
							<view class="number" v-if="(index+1)%12 == 0">{{content.total}}+</view>
							<image :src="content.src || ''" mode="scaleToFill" :class="{shadow:content.isSide}"></image>
						</view>
						<view class="avatar" v-else></view>
		            </view>
		        </swiper-item>
		    </swiper>
		</uni-swiper-dot>
		
		<view class="textWapper">
			<view class="icon">BEEHIVE</view>
			<view class="text tk-acumin-pro">Current Songs</view>
		</view>
		<view class="bottles">
			<image src="./images/bottles.png" mode="scaleToFill"></image>
		</view>
		
		<view class="table">
			<view class="tableLeft">
				<view class="tableItem" v-for="(table,index) in tableList.tableLeft" :key= "table.id">
					<image 
						v-for="(user,index) in table.users" 
						:key="user.id" 
						:style="{transform: `rotateZ(${(360/table.users.length)*index}deg) translateY(80px)`}"
						:class="{shadow:user.isShadow,zIndex:user.isShadow}" 
						class="user" 
						:src="user.userUrl" 
						mode="scaleToFill">
					</image>
					<view class="number">{{table.tabelNumber}}</view>
				</view>
			</view>
			<view class="tableRight">
				<view class="tableItem" v-for="table in tableList.tableRight" :key= "table.id">
					<view class="number">{{table.number}}</view>
					<image class="seat redius" :class="{shadow:table.isShadow}" :src="table.tabelUrl" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from "@/components/uni-swiper-dot/uni-swiper-dot.vue"
    import {userData,tableList} from "./mock.js"
	export default {
		components: {uniSwiperDot},
		data() {
			return {
				BGUrl: require('@/static/images/bg.jpg'),
				info: userData,
				tableList:tableList,
				current: 0,
				mode: 'round',
			}
		},
		onLoad() {
		},
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
