<template>
	<div class="main">
		<div class="head">
			<span style="text-align: center;font-size: 20px;">书影音</span>
			<span>
				<img src="../../assets/image/ic_group_search.png" width="30%"/>
				<img src="../../assets/image/group.png" width="30%"/></span>
		</div>
		<div class="top">
			<ul>
				<li>
					<router-link to="/book">电影</router-link>
				</li>
				<li>
					<router-link to="/booktv">电视</router-link>
				</li>
				<li>
					<router-link to="/bookread">读书</router-link>
				</li>
				<li>
					<router-link to="/bookcity">同城</router-link>
				</li>
				<li>
					<router-link to="/bookmusic">音乐</router-link>
				</li>
				<li>
					<router-link to="/bookmarket">市集</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">
	.main{
		width: 100%;
		height:90px;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 99;
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
		border-bottom: 1px solid gray;
	}
	.top>ul>li>a{
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
	a{
		text-decoration: none;
		color: black;
		letter-spacing: 1px;
		font-size: 18px;
		text-align: center;
	}
	.router-link-active{
		color: #42BD56;
	}
</style>