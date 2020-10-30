<template>
	<view class="container" v-show="showMask">
		<view class="mask" :style="{'opacity': maskVal}" @click="hide"></view>
		<view class="main" :style="{transform: `translateY(${transY}rpx)`,'transition-timing-function': speed,'height': height+'rpx'}" @transitionend="onTransitionend">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		/**
		 *  @ speed [String] {运动曲线}
		 *  @ height [Number] {弹框高度 单位：rpx}
		 *  @ maskVal [Number] {蒙层透明度}
		 */
		props:{
			speed:{
				type:String,
				default: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)'
			},
			height: {
				type:Number,
				default: 500
			},
			maskVal:{
				type: Number,
				default: 0.4
			}
		},
		data () {
			return {
				showMask: false,
				transY: this.height
			}
		},
		methods: {
			show () {
				this.showMask = true
				setTimeout(() => {
					this.transY = 0
				},17)
				
			},
			hide () {
				this.transY = 500
			},
			onTransitionend () {
				if(!this.transY) return;
				this.showMask = false
			}
		}
	}
</script>

<style scoped lang="scss">
.mask {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgb(0,0,0);
	z-index: 20;
}

.main {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	background-color: #FFFFFF;
	border-radius: 20rpx 20rpx 0 0;
	transition: transform 0.4s;
	z-index: 21;
}
</style>
