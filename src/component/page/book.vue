<template>
	<main>
		<!--书影音的主页就是电影的主页-->
		<v-header></v-header>
	<div class="m">
		<div class="top-1">
			<span>今日推荐</span>
			<span>全部10></span>
		</div>
	  </div>	
			<!--可滑动图片 10张-->
		<div class="lunbo">
				<mt-swipe :auto="0">
				  <mt-swipe-item>
				  	<router-link to="watch"><img src="../../assets/image/book-lun.png" /></router-link>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<router-link to="watch"><img src="../../assets/image/book-lun-1.png" /></router-link>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<router-link to="watch"><img src="../../assets/image/book-lun-2.jpg" /></router-link>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<router-link to="watch"><img src="../../assets/image/book-lun-3.jpg" /></router-link>
				  </mt-swipe-item>
				</mt-swipe>
		</div>
		
		<div class="wrap">
			<ul>
				<li>
					<router-link to="index">
						<img src="../../assets/image/find.png"/>
						<h1>找电影</h1>
						<p>文艺/治愈/剧情</p>
						<span>></span>
					</router-link>
				</li>
				<li>
						<router-link to="index">
						<img src="../../assets/image/find-1.png"/>
						<h1>我的影视</h1>
						<p>0部</p>
						<span>></span>
					</router-link>
				</li>
			</ul>
		</div>
		
		<div class="top-1">
			<span>影视热映</span>
			<span>全部10></span>
		</div>
		
		<!--可滑动图片 10张-->
		<div class="lunbo-1">
			<ul>
				<li v-for="c in view">
					<img :src="c.src" />
					<p>{{c.title}}</p>
					<p>{{c.score}}</p>
				</li>
			</ul>
		</div>
		
		<div class="banner">
			<img src="../../assets/image/book-banner.png" />
		</div>
		
		<div class="top-1">
			<span>院线即将上映</span>
			<span>全部99+></span>
		</div>
		<div class="lunbo-1">
			<ul>
				<li v-for="d in wantr">
					<img :src="d.src" />
					<p>{{d.title}}</p>
					<p>{{d.want}}</p>
				</li>
			</ul>
		</div>
		<div class="banner">
			<img src="../../assets/image/book-banner.png" />
		</div>
	
	</main>
</template>

<script>
	import vheader from '../nav/header.vue';
	export default{
		components:{
			'v-header':vheader
		},
		data(){
			return{
				view:"",
				wantr:''
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res){
				this.view=res.body.result.data[5].context;
				this.wantr=res.body.result.data[6].context
				
			})
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
		margin-bottom: 50px;
	}
	.m{
		width: 100%;
		margin-top: 90px;
		width: 100%;
		overflow: hidden;
	}
	.top-1{
		width: 100%;
		height: 60px;
		background-color: #fff;
		position: relative;
	}
	.top-1>span:nth-of-type(1){
		font-size: 20px;
		position: absolute;
		top: 18px;
		left: 15px;
		letter-spacing: 1px;
	}
	.top-1>span:nth-of-type(2){
		font-size: 14px;
		color: gray;
		position: absolute;
		right: 5px;
		top: 25px;
		letter-spacing: 1px;
	}
	.lunbo{
		width: 60%;
		margin-left:80px;
		height: 175px;
	}
	.wrap{
		margin-top: 10px;
		width: 100%;
		height: 80px;
		background-color: #fff;
		border-top: 3px solid ghostwhite;
		border-bottom: 3px solid ghostwhite;
	}
	.wrap>ul{
		/*width: 100%;*/
		height: 60px;
		margin-top: 10px;
	}
	.wrap>ul>li{
		margin-left: 15px;
		width: 45%;
		height: 60px;
		float: left;
		position: relative;
	}
	.wrap>ul>li>a>img{
		position: absolute;
		top: 10px;
	}
	.wrap>ul>li>a>h1{
		position: absolute;
		left: 45px;
		top: 10px;
		letter-spacing: 1px;
	}
	.wrap>ul>li>a>p{
		position: absolute;
		left: 45px;
		top: 30px;
		color: gray;
		font-size: 10px;
		letter-spacing: 1px;
	}
	.wrap>ul>li>a>span{
		position: absolute;
		right: 1px;
		top: 15px;
		color: gray;
		font-size: 14px;
	}
	.lunbo-1{
		width: 100%;
		height: 180px;
	}
	.lunbo-1>ul{
		width: 99%;
		margin: 0 15px;
		height: 180px;
		background-color: white;
	}
	.lunbo-1>ul>li{
		float: left;
		margin-left:15px;
	}
	.lunbo-1>ul>li>p:nth-of-type(1){
		font-size: 14px;
	}
	.lunbo-1>ul>li>p:nth-of-type(2){
		font-size: 12px;
		color: red;
	}
	.banner{
		width: 100%;
		height: 150px;
		background-color: white;
	}
	.banner img{
		margin: 30px 33px;
	}
</style>