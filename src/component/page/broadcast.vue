<template>
	<main>
		<div class="head">
			<span>广播</span>
			<span>
				<img src="../../assets/image/broadcast.png" width="40%"/>
				<img src="../../assets/image/group.png" width="40%"  />
			</span>
		</div>
		<hr />
		
		<div class="top">
			<span><img src="../../assets/image/user.png" width="20%"/></span>
			<span>分享生活点滴...</span>
			<span>
				<img src="../../assets/image/broadcast-1.png" width="35%"/>
				<img src="../../assets/image/broadcast-2.png" width="35%" />
			</span>
		</div>
		
		
		<div class="wrap">
			<img src="../../assets/image/broadcast-4.jpg"  width="100%"/>
		</div>
		
			   
	</main>
</template>

<script>
</script>

<style scoped="scoped">
	*{
		margin: 0;
		padding: 0;
	}
	main{
		background-color: ghostwhite;
		margin-bottom: 50px;
	}
	.head{
		width: 100%;
		height: 50px;
		position: relative;
	}
	.head>span:nth-of-type(1){
		position: absolute;
		left: 170px;
		top: 13px;
		font-size: 18px;
		letter-spacing: 2px;
	}
	.head>span:nth-of-type(2){
		position: absolute;
		left: 290px;
		top: 13px;
		font-size: 18px;
		letter-spacing: 5px;
	}
	.top{
		width: 100%;
		height: 50px;
		background-color: white;
		position: relative;
	}
	.top>span:nth-of-type(1){
		position: absolute;
		left: 10px;
		top: 2px;
	}
	.top>span:nth-of-type(2){
		position: absolute;
		left: 70px;
		width: 200px;
		height: 20px;
		top: 13px;
		background-color: white;
		border: none;
		outline: none;
		font-size: 14px;
		letter-spacing: 1px;
	}
	.top>span:nth-of-type(3){
		position: absolute;
		left: 290px;
		top: 10px;
		letter-spacing: 10px;
	}
	.wrap{
		width: 100%;
		height: 300px;
		background-color: ghostwhite;
	}
</style>