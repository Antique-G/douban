<template>
	<div class="wrap">
		<div class="head-head">
			<div class="search">
				<select name="" style="text-align: center; border: none;">
					<option value="">全部</option>
					<option value="">电影</option>
					<option value="">图书</option>
					<option value="">唱片</option>
					<option value="">用户</option>
					<option value="">小组</option>
					<option value="">群聊</option>
					<option value="">游戏</option>
					<option value="">同城</option>
					<option value="">舞台剧</option>
				</select>
			<input type="search"  placeholder="影视 图书 唱片 小组等" style="outline: none;">
			</div>
			<img src="../../assets/image/6.png" />
	   </div>
	   
			<!--轮播-->
		<div class="block" style="margin-top: 50px;width: 100%;height:200px;">
		    <mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/image/index-4.jpg" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/image/index-2.jpg" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/image/index-3.jpg" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/image/index-1.jpg" width="100%"/></mt-swipe-item>
			</mt-swipe>
		</div>
		
		
		<div class="fix">
			<ul>
				<li>
					<router-link to="movie">
						<p><img src="../../assets/image/fix-1.png" /></p>
						<p>大师电影</p>
					</router-link>
				</li>
				<li>
					<router-link to="movie">
					<p><img src="../../assets/image/fix-2.png" /></p>
					<p>豆瓣日历</p>
					</router-link>
				</li>
				<li>
					<router-link to="movie">
					<p><img src="../../assets/image/fix-3.png" /></p>
					<p>豆瓣书店</p>
					</router-link>
				</li>
				<li>
					<router-link to="movie">
					<p><img src="../../assets/image/fix-4.png" /></p>
					<p>豆瓣视频</p>
					</router-link>
				</li>
			</ul>
		</div>
		
		<div class="bottom">
			<ul>
				<li v-for="v in msg">
					<router-link to="watch">
						<span>{{v.title}}</span>
						<span><img :src="v.src"/></span>
						<span>{{v.tag}}</span>
					    <span><img :src="v.src1"/></span>
					    <span>{{v.author}}</span>
				    </router-link>
				</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				msg:""
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res){
				this.msg=res.body.result.data[0].context
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
	.wrap{
		width: 100%;
		background-color: ghostwhite;
		box-sizing: border-box;
	}
	.head-head{
		width: 100%;
		height: 50px;
		background-color: #42bd56;
		box-sizing: border-box;
		position: fixed;
		z-index: 99;
		left: 0;
		top: 0;
	}
	.search{
		width: 82%;
		margin-left: 10px;
		position: relative;
		background-color: #fff;
		border-radius: 10px;
		top: 5px;
		outline: none;
	}
	.search>select{
		width: 55px;
		height: 20px;
		position: absolute;
		border-radius: 10px;
		top: 5px;
		border: 0;
	}
	.search input{
		width: 82%;
		height: 30px;
		border: none;
		border-radius: 10px;
		margin-left: 55px;
	}
	.head-head img{
		width: 30px;
		position: absolute;
		right: 8px;
		top: 10px;
	}
	.hot{
		width: 200px;
		border-left: 2px solid gainsboro;
		height: 20px;
		line-height: 20px;
		margin: 15px 15px;
	}
	.hot>h4{
		margin-left: 20px;
	}
	.hot-talk{
		width: 90%;
		height: 120px;
		text-align: center;
		margin: auto;
		background-color: ghostwhite
	}
	.hot-talk>p{
		font-size: 14px;
		color: gainsboro;
	}
	.hot-talk>p,.hot-talk>h3{
		margin-top: 10px;
	}
	.hot-talk>p>img{
		width: 15px;
		border-radius: 50%;
	}
	.head>p{
		margin: 15px 15px;
	}
	.head>p>img{
		width: 18px;
		border-radius: 50%;
	}
	.fix{
		width: 100%;
		height: 100px;
		background-color: #fff;
		margin-top: 20px;
	}
	.fix ul{
		width: 100%;
		height: 100px;
	}
	.fix>ul>li>a{
		width: 25%;
		height: 100px;
		text-align: center;
		margin-top: 20px;
		line-height: 25px;
		float: left;
	}
	a{
		text-decoration: none;
		color:black;
	}
	.fix>ul>li>a>p>img{
		width: 30px;
		height: 30px;
	}
	.bottom{
		width: 100%;
		height: 500px;
		background-color: ghostwhite;
		margin-top: 20px;
		margin-bottom: 130px;
		z-index: 100;
	}
	.bottom>ul{
		width: 100%;
		background-color: ghostwhite;
	}
	.bottom>ul>li{
		width: 100%;
		height: 115px;
		position: relative;
		margin-top: 15px;
		background-color: #fff;
	}
	.bottom>ul>li>a>span:nth-of-type(1){
		position: absolute;
		width: 70%;
		height: 50px;
		top: 4px;
		left: 10px;
		color: gray;
		font-size: 16px;
		letter-spacing: 2px;
	}
	.bottom>ul>li>a>span:nth-of-type(2){
		position: absolute;
		top: 15px;
		right: 35px;
	}
	.bottom>ul>li>a>span:nth-of-type(3){
		position: absolute;
		width: 70%;
		top: 40px;
		color: gray;
		left: 10px;
		font-size: 14px;
	}
	.bottom>ul>li>a>span:nth-of-type(4){
		position: absolute;
		top: 90px;
		left: 10px;
	}
	.bottom>ul>li>a>span:nth-of-type(5){
		position: absolute;
		top: 90px;
		color: gray;
		left: 40px;
		font-size: 12px;
	}
</style>