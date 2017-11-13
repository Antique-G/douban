<template>
	<main>
		<router-link to="/menu">
			<p><img src="../../assets/image/1.png" width="25px"></p>
			<p>主页</p>
		</router-link>
		<router-link to="/book">
			<p><img src="../../assets/image/2.png" width="25px"></p>
			<p>书影音</p>
		</router-link>
		<router-link to="/broadcast">
			<p><img src="../../assets/image/3.png" width="25px"></p>
			<p>广播</p>
		</router-link>
		<router-link to="/group">
			<p><img src="../../assets/image/4.png" width="25px"></p>
			<p>小组</p>
		</router-link>
		<router-link to="/my">
			<p><img src="../../assets/image/5.png" width="25px"></p>
			<p>我的</p>
		</router-link>
	</main>
</template>


<style lang="less" scoped>
	*{
		margin: 0;
		padding: 0;
	}
	main{
		width: 100%;
		height: 50px;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #fff;
	}
	main a{
		float: left;
		text-decoration: none;
		width: 20%;
		height: 50px;
		text-align: center;
		font-size: 10px;
		color: #949494;
	}
	.router-link-active{
		color: #42BD56;
	}
</style>