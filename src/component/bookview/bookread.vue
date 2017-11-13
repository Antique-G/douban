<template>
	<main>
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
			  	<router-link to="watch"><img src="../../assets/image/read-1.jpg" width="100%"/></router-link>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<router-link to="watch"><img src="../../assets/image/read-2.jpg"  width="100%"/></router-link>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<router-link to="watch"><img src="../../assets/image/read-3.jpg" width="100%" /></router-link>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<router-link to="watch"><img src="../../assets/image/bookread.png" width="100%" /></router-link>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		
		<div class="wrap">
			<ul>
				<li>
					<router-link to="index">
						<img src="../../assets/image/find.png"/>
						<h1>找图书</h1>
						<p>传记/青春/随笔</p>
						<span>></span>
					</router-link>
				</li>
				<li>
					<router-link to="index">
						<img src="../../assets/image/find-1.png"/>
						<h1>我的图书</h1>
						<p>0本</p>
						<span>></span>
					</router-link>
				</li>
			</ul>
		</div>
		
		<div class="top-1">
			<span>新书速递</span>
			<span>全部40></span>
		</div>
		
		
		<div class="lunbo-1">
			<ul>
				<li v-for="g in xshu">
					<img :src="g.src" />
					<p>{{g.title}}</p>
					<p>{{g.score}}</p>
				</li>
			</ul>
		</div>
		
		<div class="top-1">
			<span>图书资讯</span>
			<span>更多></span>
		</div>
		<div class="banner">
			<router-link to="watch">
				<p>左右脑测试玩的不过瘾，心理测试都是伪科学么？</p>
				<p>最近“这个男人的眼睛在一条直线上吗？”的心理测试，引发朋友圈的热传。测试内含几何题、代数题、文字...</p>
				<span><img src="../../assets/image/bookread-4.png"/></span>
			    <p>作者： 时代华语国际</p>
		    </router-link>
		</div>
		
		<div class="top-1">
			<span>最受关注的虚构类图书</span>
			<span>全部99+ ></span>
		</div>
		
		
		<div class="lunbo-1">
			<ul>
				<li v-for="h in zix">
					<img :src="h.src" />
					<p>{{h.title}}</p>
					<p>{{h.score}}</p>
				</li>
			</ul>
		</div>
		
		<div class="bottom">
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
				xshu:"",
				zix:""
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res){
				this.xshu=res.body.result.data[9].context;
				this.zix=res.body.result.data[10].context
				
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
	}
	.head{
		position: relative;
		width: 100%;
		height: 50px;
		background-color: ghostwhite;
	}
	.head span:nth-of-type(1){
		position: absolute;
		left: 160px;
		top: 10px;
		letter-spacing: 2px;
	}
	.head span:nth-of-type(2){
		position: absolute;
		left: 280px;
		top: 10px;
		letter-spacing: 10px;
	}
	.top,.top>ul{
		width: 100%;
		height: 40px;
		background-color: #fff;
	}
	.top>ul>li{
		width: 16.6%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		float: left;
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
		width: 100%;
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
		margin-left: 15px;
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
		position: relative;
	}
	a{
		text-decoration: none;
	}
	.banner>a>p:nth-of-type(1){
		width: 60%;
		font-size: 18px;
		color: black;
		margin-left: 15px;
	}
	.banner>a>p:nth-of-type(2){
		width: 60%;
		font-size: 12px;
		color: gray;
		margin-left: 15px;
	}
	.banner>a>span{
		position: absolute;
		right: 25px;
		top: 20px;
	}
	.banner>a>p:nth-of-type(3){
		width: 60%;
		font-size: 12px;
		color: gray;
		margin:10px 15px;
	}
	.bottom{
		width: 100%;
		height: 50px;
		border-top: 2px solid gainsboro;
	}
</style>