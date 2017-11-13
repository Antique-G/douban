<template>
	<main>
		<button @click="back">x</button>
		<h1>欢迎来到豆瓣</h1>
		<input type="text" placeholder="手机号/邮箱" />
		<input type="password" placeholder="密码" />
		<input type="button" value="登录" />
		<span>注册豆瓣</span>
		<span>|</span>
		<span>忘记密码</span>
		<div class="bottom">
			<div class="bot">
				<span><img src="../../assets/image/login.png" width="40%"/></span>
				<span>微博登录</span>
		        <span>|</span>
				<span><img src="../../assets/image/login-1.png" width="40%"/></span>
				<span>微信登录</span>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:''
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
	*{
		margin: 0;
		padding: 0;
	}
	button{
		background-color: white;
		border: none;
		font-size: 20px;
		margin-left: 10px;
		color: gray;
		outline: none;
	}
	h1{
		width: 100%;
		color: #42BD56;
		font-size: 32px;
		margin: 50px 85px;
		letter-spacing: 4px;
	}
	input{
		width: 300px;
		height: 40px;
		border: 2px solid ghostwhite;
		margin-left: 30px;
		letter-spacing: 2px;
		outline: none;
		border-radius: 2px;
	}
	input:nth-last-of-type(1){
		width: 300px;
		height: 40px;
		margin:10px 30px;
		letter-spacing: 2px;
		outline: none;
		border-radius: 5px;
		background-color: #42BD56;
		color: white;
	}
	span:nth-of-type(1){
		position: absolute;
		left: 100px;
		color: #42BD56;
		top: 315px;
		letter-spacing: 1px;
	}
	span:nth-of-type(2){
		position: absolute;
		left: 180px;
		color: gray;
		top: 315px;
	}
	span:nth-of-type(3){
		position: absolute;
		left: 200px;
		color: gray;
		top: 315px;
		letter-spacing: 1px;
	}
	.bottom{
		width: 100%;
		height: 50px;
		background-color: #fff;
		bottom: 0;
		left: 0;
		position: absolute;
		z-index: 10;
	}
	.bot{
		width: 100%;
		height: 50px;
		position: relative;
	}
	.bot>span:nth-of-type(1){
		position: absolute;
		left: 53px;
		top: 10px;
	}
	.bot>span:nth-of-type(2){
		position: absolute;
		left: 85px;
		top: 10px;
		letter-spacing: 1px;
		color: gray;
	}
	.bot>span:nth-of-type(3){
		position: absolute;
		left: 170px;
		top: 10px;
	}
	.bot>span:nth-of-type(4){
		position: absolute;
		left: 195px;
		top: 10px;
	}
	.bot>span:nth-of-type(5){
		position: absolute;
		left: 225px;
		top: 10px;
		letter-spacing: 1px;
		color: gray;
	}
</style>