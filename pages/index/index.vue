<template>
	<view class="content" :style="{backgroundImage:`url(${BGUrl})`}" >
		<view class="header">
			<view class="logo">
				<image :src="logo"   mode="scaleToFill"></image>
			</view>
			<view class="nameWapper">
				<view class="title">上海双人舞酒吧</view>
				<view class="number">当晚人数：769</view>   
			</view>
			<view class="avatar">
				<view class="item" v-for="(item,index) in avatarList" :key="index" @click="handleGoUsers">
					<image :src="item" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
		<view class="textWapper">
			<view class="icon">Live</view>
			<view class="text tk-acumin-pro">Current Songs</view>
		</view>
		<view class="empetTop"></view>
		<view class="chatContanner" style="position: relative;">
			<view class="chatView" style="">
				<scroll-view ref="refScollView" :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				                @scroll="scroll">
					<view  v-for="item in chatList" :key="item.id" style="margin-bottom: 10upx;">
							<view class="chatItem">
								<view class="tableNumber" v-if="item.tableNumber">{{item.tableNumber}}</view>
								<image class="userIcon" :src="item.userIcon" mode="scaleToFill"></image>
								<view class="text">{{item.text}}</view>
							</view>
					</view>
				 </scroll-view>
			</view>
		</view>
		<view class="empetBottom"></view>
		<view class="bottomWapper">
			<view class="line"></view>
			<view class="chatWapper">
				<input adjust-position type="text" class="chatInput" @focus="handleFocus" @blur="getChat" :value="inputValue" />
				<view class="submit" @click="handleSubmit">发送</view>
				<image class="gave" src="./images/goodsBtn.png" @click="handleGoods" mode="scaleToFill"></image>
			</view>
		</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop:200,
				recharge:0,
				old: {
					scrollTop: 0
				},
				BGUrl: '/static/images/bg.jpg',
				logo: '/static/images/logo.png',
				avatarList:['/static/images/avatar1.png','/static/images/avatar2.png','/static/images/avatar3.png'],
				tips:'/static/images/tips.png',
				inputValue:'',
				chatList:[
					/* {
						id:1,
						tableNumber:'799',
						userIcon:require('./images/user.png'),
						text:'真好听你撒范德萨范德萨你懂撒范德萨范德萨发，是否你懂撒范德萨发生的三废士大夫的萨芬你撒范德萨发撒范德萨发',
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
					},{
						id:4,
						tableNumber:'',
						userIcon:require('./images/user.png'),
						text:'真好听',
					},{
						id:5,
						tableNumber:'799',
						userIcon:require('./images/user.png'),
						text:'真好听你撒范德萨范德萨你懂撒范德萨范德萨发，是否你懂撒范德萨发生的三废士大夫的萨芬你撒范德萨发撒范德萨发',
					},{
						id:6,
						tableNumber:'799',
						userIcon:require('./images/user.png'),
						text:'真好听你撒范德萨范德萨你懂撒范德萨范德萨发，是否你懂撒范德萨发生的三废士大夫的萨芬你撒范德萨发撒范德萨发',
					} */
				]
			}
		},
		onLoad:function (options) {
			 setTimeout(function () {
				 console.log('start pulldown');
			 }, 1000);
			this.getClientHight()
			this.$nextTick(()=>{
				console.log(this.$refs.refScollView)
			})
			// console.log(document.querySelector("#idScollView"))
			// uni.startPullDownRefresh();
		},
		 onPullDownRefresh() {
		        //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
		        console.log('refresh')
		        setTimeout(function () {
		            uni.stopPullDownRefresh();  //停止下拉刷新动画
					// 跳转商品购买 (这种跳转方式在H5上只能用相对路径)
					uni.navigateTo({url:'../camera/index'});
		        }, 1000);
		    },

		methods: {
// 			scrollToBottom () {
// 				let query = uni.createSelectorQuery();
// 				//这个是你所有渲染的view 的高度 下面自己添加样式的 边距之类的数据
// 				query.in(this).selectAll('.main-item').boundingClientRect();
// 				//这个是id
// 				query.in(this).select('#scrollview').boundingClientRect();
// 				query.exec((res) => {
// 					let mitemHeight = 0;
// 					//累加所有元素的高度和边距
// 					res[0].forEach((rect) => mitemHeight = mitemHeight + rect.height + 40)  
// 					//只有大于 滚动条的高度 再设置
// 					if (mitemHeight > that.solHeight) {  
// 							that.scrollTop = (mitemHeight + 100)
// 					}
// 				})
// 　　　　		},

			
			
			// 获取屏幕高度
			getClientHight() {
				let that = this;
				uni.getSystemInfo({
					success(res) {
						console.log(res.screenHeight); //获取手机设备屏幕高度
						// that.clientHight = res.screenHeight;
						// that.footerHight = that.clientHight * 0.1;
					}
				})
			},
			
			
			
			upper: function(e) {
				// console.log(e)
			},
			lower: function(e) {
				// console.log(e)
			},
			scroll: function(e) {
					// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			
			
			// 文本框焦点事件
			handleFocus(e){
				// 获取键盘高度， H5上无法获取
				// alert(e.detail.height)
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
				// this.$refs.refScollView.scrollTop=50
				this.$nextTick(()=>{
					this.scrollTop = this.$refs.refScollView.$refs.content.offsetHeight
					// console.log(this.$refs.refScollView.$refs.content.offsetHeight)
				})
				
			},
			handleGoods(){
				// 跳转商品购买 (这种跳转方式在H5上只能用相对路径)
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
			},
			// 跳转到用户列表
			handleGoUsers(){
				uni.navigateTo({url:'../users/index'});
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("./style.css");
</style>
