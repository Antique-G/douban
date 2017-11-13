<template>
	<main>
		<div class="head">
			<span style="text-align: center;font-size: 20px;">我的</span>
			<div class="head1" @click="showit">
				<img src="../../assets/image/ic_settings.png" width="80%"/>
			</div>
		</div>
		
		<!--显示与隐藏设置-->
		<transition name="fade">
		<div class="m" v-if="show">
		<div class="head2">
			<span @click="back"><</span>
			<span>设置</span>
		</div>
		<ul class="ul">
			<li>
				<span>推送</span>
				<span>></span>
			</li>
		</ul>
		<ul class="ul">
			<li>
				<span>清理存储空间</span>
				<span >></span>
			</li>
		</ul>
		<ul class="ul">
			<li>
				<span>帮助与反馈</span>
				<span>></span>
			</li>
			<li>
				<span>网络诊断</span>
				<span>></span>
			</li>
		</ul>
		<ul class="ul">
			<li>
				<span>给应用评分</span>
				<span>></span>
			</li>
			<li>
				<span>新功能介绍</span>
				<span>></span>
			</li>
		</ul>
		<ul class="ul">
			<li>
				<span>关于</span>
				<span>></span>
			</li>
		</ul>
	</div>	
	</transition>
	
		<div class="banner">
			<img src="../../assets/image/user.png" />
			<router-link to="login">
			<input type="button" value="登录/注册"/>
			</router-link>
		</div>
		
		<ul class="wrap">
			<li style="border-bottom: 2px solid ghostwhite;">
				<span><img src="../../assets/image/mine.png"/></span>
				<span>提醒</span>
				<span>></span>
			</li>
			<li>
				<span style="margin:10px 150px; color: gray;font-size: 12px;">暂无新提醒</span>
			</li>
		</ul>
		
		<ul class="wrap">
			<li style="border-bottom: 2px solid ghostwhite;">
				<span><img src="../../assets/image/mine-2.png"/></span>
				<span>喜欢</span>
				<span>></span>
			</li>
			<li style="border-bottom: 2px solid ghostwhite;">
				<span><img src="../../assets/image/mine-3.png"/></span>
				<span>日记</span>
				<span>></span>
			</li>
			<li style="border-bottom: 2px solid ghostwhite;">
				<span><img src="../../assets/image/mine-4.png"/></span>
				<span>相册</span>
				<span>></span>
			</li>
		</ul>
		
		<ul class="wrap">
			<li style="border-bottom: 2px solid ghostwhite;">
				<span><img src="../../assets/image/mine-5.png"/></span>
				<span>电影·电视</span>
				<span>></span>
			</li>
			<li style="border-bottom: 2px solid ghostwhite;">
				<span><img src="../../assets/image/mine-6.png"/></span>
				<span>读书</span>
				<span>></span>
			</li>
			<li style="border-bottom: 2px solid ghostwhite;">
				<span><img src="../../assets/image/mine-7.png"/></span>
				<span>音乐</span>
				<span>></span>
			</li>
		</ul>
		<ul class="wrap">
			<li style="border-bottom: 2px solid ghostwhite;">
				<span><img src="../../assets/image/mine-8.png"/></span>
				<span>钱包</span>
				<span>></span>
			</li>
		</ul>
		<ul class="wrapp">
		</ul>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				show:false
			}
		},
		methods:{
			showit(){
				this.show=true;
			},
			back(){
				this.show=false;
			}
		}
	}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
		list-style: none;
	}
	main{
		background-color: ghostwhite;
		margin-bottom: 50px;
		width: 100%;
		overflow: hidden;
	}
	.head{
		width: 100%;
		height: 50px;
		position: fixed;
		background-color: ghostwhite;
		left: 0;
		top: 0;
		z-index: 999;
	}
	.head span{
		position: absolute;
		left: 160px;
		top: 10px;
		letter-spacing: 1px;
		color: black;
	}
	.head1{
		position: absolute;
		width: 35px;
		height: 35px;
		left: 320px;
		top: 10px;
	}
	.banner{
		width: 100%;
		height: 130px;
		background-color: #42BD56;
		position: relative;
		margin-top: 50px;
	}
	.banner img{
		position: absolute;
		width: 20%;
		margin: 20px 20px;
	}
	.banner input{
		width: 200px;
		height: 40px;
		background-color: #42BD56;
		border: 1px solid white;
		position: absolute;
		left: 140px;
		top: 40px;
		border-radius: 2px;
		color: white;
		letter-spacing: 2px;
		outline: none;
	}
	.wrap{
		width: 100%;
		margin-top: 10px;
		background-color: white
	}
	.wrap li{
		width: 100%;
		height: 50px;
		position: relative;
		margin-left: 15px;
	}
	.wrap>li>span>img{
		width: 45%;
	}
	.wrap>li>span:nth-of-type(1){
		position: absolute;
		left: 0;
		top: 5px;
	}
	.wrap>li>span:nth-of-type(2){
		position: absolute;
		left: 50px;
		top: 12px;
		font-size: 18px;
		letter-spacing: 2px;
	}
	.wrap>li>span:nth-of-type(3){
		position: absolute;
		right: 30px;
		top: 10px;
		font-size: 22px;
		color: gray;
	}
	.wrapp{
		width: 100%;
		height: 30px;
		background-color: ghostwhite;
	}
	.ul{
		width: 100%;
		margin-top: 30px;
	}
	.ul>li{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid pink;
		border-top: 1px solid pink;
		position: relative;
		background-color: #fff;
	}
	.ul>li>span:nth-of-type(1){
		height: 40px;
		line-height:40px ;
		font-size: 18px;
		letter-spacing: 2px;
		margin-left: 15px;
	}
	.ul>li>span:nth-of-type(2){
		height: 40px;
		line-height:40px ;
		font-size: 22px;
		letter-spacing: 2px;
		position: absolute;
		right:20px ;
	}
	/*显示与隐藏*/
	.m{
		width: 100%;
		background-color: ghostwhite;
		position: fixed;
		z-index: 999;
		height: 100%;
	}
	.head2{
		width: 100%;
		height: 40px;
		border-bottom: 2px solid gray;
		position: relative;
	}
	.head2>span:nth-of-type(1){
		font-size: 22px;
		color: #42BD56;
		position: absolute;
		top: 5px;
	}
	.head2>span:nth-of-type(2){
		font-size: 22px;
		position: absolute;
		top: 5px;
		left: 170px;
	}
	/*动画*/
	.fade-enter-active,.fade-leave-active{
		transition: all 1s;
	}
	.fade-enter,.fade-leave-to{
		opacity: 0;
		background-color: powderblue;
	}
	/*结束状态：回归初始状态 保持一帧的效果*/
	.fade.enter-to,.fade-leave{
		opacity: 1;
	}
</style>