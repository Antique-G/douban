<template>
	<main>
		<div class="head">
		  <!--<button  @click="back"><</button>-->
		  	<router-link to="/index"><p><</p></router-link>
		  <span>豆瓣时间</span>
		</div>
		
		<div class="title">
			<ul>
				<li style="border-bottom: 1px solid gray;">
					<router-link to="movie">时间首页</router-link>
				</li>
				<li><router-link to="index">我的时间</router-link></li>
			</ul>
		</div>
		
		<div class="wrap">
			<span>我订阅的专栏</span> <span style="color: gray;font-size: 14px;">0</span>
			<br/>
			<br/>
			<span>还未订阅过专栏</span> 
			<router-link to="movie"><span>去首页看看吧</span></router-link>
			<br/>
			<br/>
			<span>已下载的专栏</span> <span style="color: gray;font-size: 14px;">0</span>
			<br/>
			<br/>
			<span style="color: gray;font-size: 14px;">暂无离线内容</span>
		</div>
	
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:[]
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.head{
		width: 100%;
		height: 30px;
		background-color: ghostwhite;
	}
	.head>a>p{
		border: none;
		float: left;
		background-color: ghostwhite;
		color: #42bd56;
		font-size: 20px;
		margin-top: 2px;
		/*margin-left: 1px;*/
	}
	.head>span{
		margin-left: 125px;
		letter-spacing: 2px;
	}
	.title ul{
		width: 100%;
		height: 40px;
		background-color: ghostwhite;
	}
	.title ul li a{
		width: 50%;
		height: 40px;
		line-height: 40px;
		letter-spacing: 2px;
		text-align: center;
		float: left;
		text-decoration: none;
		color: black;
	}
	.wrap{
		margin:20px 20px;
		position: relative;
	}
	a{
		text-decoration: none;
	}
	.wrap>span{
		font-size: 16px;
		letter-spacing: 1px;
	}
</style>