<template>
	<main>
		<v-header></v-header>
		
	<div class="m">
		<div class="top-1">
			<span>正在热议</span>
			<span>更多></span>
		</div>
	</div>
	
		<div class="head">
			<ul>
				<li>
					<router-link to="watch">
					<span>29</span>
					<span>人讨论《漂亮的房子》</span>
					<span>4.9分</span>
					<hr />
					<span><img src="../../assets/image/booktv.png" width="50%"/></span>
					<span>每一个村子都需要一所《漂亮的房子》</span>
					<span><img src="../../assets/image/one.png" width="40%"/></span>
					<span>大片最爱</span>
					<span>2017-10-30</span>
					</router-link>
				</li>
				<li>
					<router-link to="watch">
						<span>388</span>
						<span>人讨论《付岩洞复仇者们》</span>
						<span>9.1分</span>
						<hr />
						<span><img src="../../assets/image/booktv.png" width="50%"/></span>
						<span>第6集的几处不合理</span>
						<span><img src="../../assets/image/one.png" width="40%"/></span>
						<span>Orangedietc</span>
						<span>2017-10-30</span>
					</router-link>
				</li>
			</ul>
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
			<span>近期热门国产剧</span>
			<span>全部99+></span>
		</div>
		
		<div class="lunbo-1">
			<ul>
				<li v-for="e in ds">
					<img :src="e.src" />
					<p>{{e.title}}</p>
					<p>{{e.score}}</p>
				</li>
			</ul>
		</div>
		
		<div class="top-1">
			<span>近期热门综艺节目</span>
			<span>全部99+></span>
		</div>
		
		<div class="lunbo-1">
			<ul>
				<li v-for="f in zyi">
					<img :src="f.src" />
					<p>{{f.title}}</p>
					<p>{{f.score}}</p>
				</li>
			</ul>
		</div>
		
		<div class="top-1">
			<span>近期热门综艺节目</span>
			<span>全部99+></span>
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
				ds:"",
				zyi:""
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res){
				this.ds=res.body.result.data[7].context;
				this.zyi=res.body.result.data[8].context
				
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
	.top-1{
		width: 100%;
		height: 50px;
		position: relative;
	}
	.top-1>span:nth-of-type(1){
		font-size: 20px;
		position: absolute;
		top: 15px;
		left: 15px;
		letter-spacing: 1px;
	}
	.top-1>span:nth-of-type(2){
		font-size: 14px;
		color: gray;
		position: absolute;
		right: 10px;
		top: 25px;
		letter-spacing: 2px;
	}
	.head{
		width: 100%;
	}
	.head>ul{
		width: 90%;
		margin: 0 auto;
	}
	.head>ul>li{
		width: 100%;
		height: 120px;
		border: 1px solid gray;
		position: relative;
		margin-top: 10px;
	}
	.head>ul>li>a>span:nth-of-type(1){
		position: absolute;
		left: 13px;
		top: 5px;
		color: red;
	}
	.head>ul>li>a>span:nth-of-type(2){
		position: absolute;
		left: 43px;
		top: 5px;
	}
	.head>ul>li>a>span:nth-of-type(3){
		position: absolute;
		left: 250px;
		top: 10px;
		color: gray;
		font-size: 12px;
	}
	.head>ul>li>a>hr{
		display: block;
		width: 90%;
		height: px;
		top: 40px;
		left: 20px;
		position: absolute;
		color: pink;
	}
	.head>ul>li>a>span:nth-of-type(4){
		position: absolute;
		left: 10px;
		top: 50px;
	}
	.head>ul>li>a>span:nth-of-type(5){
		position: absolute;
		left: 48px;
		top: 52px;
		color: gainsboro;
		letter-spacing: 1px;
	}
	.head>ul>li>a>span:nth-of-type(6){
		position: absolute;
		left: 45px;
		top: 85px;
	}
	.head>ul>li>a>span:nth-of-type(7){
		position: absolute;
		left: 75px;
		top: 85px;
		font-size: 12px;
	}
	.head>ul>li>a>span:nth-of-type(8){
		position: absolute;
		left: 255px;
		top: 85px;
		font-size: 12px;
		color: gray;
	}
	.wrap{
		margin-top: 20px;
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
</style>