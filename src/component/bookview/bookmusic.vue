<template>
	<main>
	   <v-header></v-header>
	 <div class="m">
	   <div class="wrap">
			<ul>
				<li>
					<router-link to="index">
						<img src="../../assets/image/find.png"/>
						<h1>找音乐</h1>
						<p>华语/摇滚/独立</p>
						<span>></span>
					</router-link>
				</li>
				<li>
					<router-link to="index">
						<img src="../../assets/image/find-1.png"/>
						<h1>我的音乐</h1>
						<p>0张</p>
						<span>></span>
					</router-link>
				</li>
			</ul>
		</div>
     </div>
		
		<div class="top-1">
			<span>华语新碟榜</span>
			<span>全部29></span>
		</div>
		
		
		<div class="lunbo-1">
			<ul>
				<li v-for="i in yy">
					<img :src="i.src" />
					<p>{{i.title}}</p>
					<p>{{i.name}}</p>
				</li>
			</ul>
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
				yy:""
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res){
				this.yy=res.body.result.data[11].context
			})
		}
	}
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	.m{
		margin-top: 90px;
	}
	.wrap{
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
		/*color: red;*/
	}
</style>