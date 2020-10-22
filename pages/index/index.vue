<template>
	<view class="content" :style="{background:`url(${BGUrl})`}">
		<view class="text-area">
			<text class="title fontSize">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				BGUrl: '/static/images/bg.jpg'
			}
		},
		onLoad() {},
		methods: {}
	}
</script>

<style>
	/* @import url("../../static/style.css"); */
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		/* color: #8f8f94; */
	}
</style>
