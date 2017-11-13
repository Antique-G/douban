<template>
	<main>
	<v-header></v-header>
	<div class="head">
	    <ul>
	      <li>
	        <span>当前城市：</span>
	        <button>定位</button>
	        <span>></span>
	      </li>
	      <li>
	        <span>类型 时间 地点</span>
	        <span>></span>
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
		}
	}
</script>

<style scoped="scoped">
    .head{
    	width: 100%;
    	height: 50px;
    	margin-top: 90px;
    }
    .head>ul{
    	width: 90%;
    	height: 50px;
    	line-height: 50px;
    	/*background-color: pink;*/
    	margin: 0 auto;
    }
    .head>ul>li{
    	width: 48%;
    	height: 50px;
    	float: left;
    	margin-left: 3px;
    	/*background-color: yellow;*/
    }
    .head>ul>li>button{
    	border: none;
    	background-color: #fff ;
    	text-align: center;
    	font-size: 14px;
    	outline: none;
    }
    .head>ul>li>span{
    	color: gray;
    }
    .head>ul>li>span:nth-of-type(2){
    	float: right;
    }
    
</style>