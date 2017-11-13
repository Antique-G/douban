<template>
	<main>
	<div class="m">
		<div class="head" >
			<span style="text-align: center;font-size: 20px;">小组</span>
			<span>
				<img src="../../assets/image/ic_group_search.png" width="30%"/>
				<img src="../../assets/image/group.png" width="30%"/></span>
		</div>
	</div>
		<hr />
		<div class="top">
           <img src="../../assets/image/group-1.jpg" width="100%"/>
           <div class="top-1">
	           	<p style="font-size: 20px;">423766个小组等你来玩</p>
	           	<br />
	           	<p style="color: gray;">立刻选择进入吧</p>
           </div>
		</div>
		<p style="margin: 2px 15px;">根据你的兴趣推荐</p>
		<div class="banner">
			<p>书影音</p>
			<img src="../../assets/image/group-2.png" />
		</div>
		
		<p class="view">影视</p>
		
		<!--数据-->
		<ul class="view-1">
			<li v-for="v in msg">
				<img :src="v.src" >
			    <router-link to="watch"><h1>{{v.title}}</h1></router-link>
			    <p>{{v.tag}}</p>
			    <p>
			    	<mt-button @click.native="handleClick"></mt-button>
			    	<mt-popup v-model="popupVisible"  position="bottom" modal=fals>
					  <child></child>
					</mt-popup>
			    </p>
			</li>
		</ul>
		
		<p class="view">读书</p>
		<ul class="view-1">
			<li v-for="s in list">
				<img :src="s.src" >
			    <router-link to="watch"><h1>{{s.title}}</h1></router-link>
			    <p>{{s.tag}}</p>
			    <p>
			    	<mt-button @click.native="handleClick"></mt-button>
			    	<mt-popup v-model="popupVisible"  position="bottom" modal=fals>
					  <child></child>
					</mt-popup>
			    </p>
			</li>
		</ul>
		
		<img src="../../assets/image/last.png"style="margin-top: 20px;margin-left: 60px;" />
		
		
		<p class="view">旅行</p>
		<ul class="view-1">
			<li v-for="a in arr">
				<img :src="a.src" >
			    <router-link to="watch"><h1>{{a.title}}</h1></router-link>
			    <p>{{a.tag}}</p>
			    <p>
			    	<mt-button @click.native="handleClick"></mt-button>
			    	<mt-popup v-model="popupVisible"  position="bottom" modal=fals>
					  <child></child>
					</mt-popup>
			    </p>
			</li>
		</ul>
		
	</main>
</template>


<script>
	export default{
		data(){
			return{
				msg:[],
				list:'',
				arr:'',
				popupVisible:false
			}
		},
		mounted(){
			this.$http.get("my.json").then(function(res){
				this.msg=res.body.result.data[1].context;
				this.list=res.body.result.data[2].context;
				this.arr=res.body.result.data[3].context;
			})
		},
		methods:{
			handleClick:function(){
				this.popupVisible=true
			}
		},
		components:{
			child:{
				template:"<h1>选好了，去玩小组</h1>"
			}
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
		width: 100%;
		overflow: hidden;
	}
	.m{
		position: fixed;
		width: 100%;
		height: 50px;
		background-color: ghostwhite;
		z-index: 999;
	}
	.head{
		position: relative;
		width: 100%;
		height: 50px;
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
	.top{
		width: 100%;
		margin-top: 50px;
		position: relative;
	}
	.top-1{
		position: absolute;
		top: 70px;
		left: 100px;
		text-align: center;
	}
	.banner{
		width: 95%;
		height: 50px;
		background-color: #42bd56;
		margin: 0 auto;
		position: relative;
	}
	.banner p{
		position: absolute;
		left: 0;
		bottom: 0;
		color: white;
		letter-spacing: 3px;
	}
	.banner img{
		position: absolute;
		right: 20px;
	}
	.view{
		display: block;
		width: 100%;
		font-size: 20px;
		margin: 15px 160px;
		color: red;
	}
	.view-1{
		width: 100%;
		margin-top: 20px;
	}
	.view-1 li{
		margin-left: 15px;
		margin-top: 15px;
		position: relative;
	}
	.view-1 li a h1{
		position: absolute;
		left: 80px;
		top: -1px;
		font-size: 18px;
		letter-spacing: 1px;
	}
	.view-1 li p:nth-of-type(1){
		position: absolute;
		left: 80px;
		top: 22px;
		font-size: 14px;
		color: gray;
	}
	.view-1 li p:nth-of-type(2) {
		position: absolute;
		left: 320px;
		top: 50px;
	}
    .mint-popup-buttom{
    	color: red !important;
    }
    .mint-button--normal{
    	background: url('../../assets/image/watch-3.png');
    	background-size: 20px 20px;
    	color: red;
    	width: 20px;
    	height: 20px;
    }
</style>