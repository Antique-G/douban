<template>
	<main>
		<div class="top">
			<span  @click="back"><</span>
			<span @click="xs">
				<img src="../../assets/image/watch-2.png" width="8%" />
			</span>
			<span>
				<img src="../../assets/image/watch-3.png" width="8%"/>
			</span>
			<span>
				<img src="../../assets/image/watch-4.png" width="8%"/>
			</span>
			<span>
				<img src="../../assets/image/watch-5.png" width="8%"/>
			</span>
		</div>
		
		<!--奖励-->
		<div class="none" v-if="findit">
			<div class="nn">
				<p @click="backb">X</p>
				<span><img src="../../assets/image/watch-1.png" width="350%"/></span>
				<span >1元</span>
				<span >2元</span>
				<span >5元</span>
				<span >10元</span>
				<span >15元</span>
				<span>好，赏了</span>
			</div>
		</div>
		
		
		<div class="wrap">
			<p>买公版书不看版本，真让人着急！</p>
			<span><img src="../../assets/image/watch-1.png" width="10%"/></span>
			<span>艾窝窝 <span style="color: gray;">的日记</span></span>
			<span>2017-10-22</span>
		</div>
		<div class="container">
			<p>
				一早看到某公号在团购一套书，点进去一看，竟然又是波特小姐的“彼得兔”。公号文写得其实和其他版本的彼得兔也没什么区别
				：全球销量过亿、波特小姐生平回顾、再加上许多书中插画……
				<img src="../../assets/image/watch.png" width="100%"/><br />
				然而，这篇文中提到的这些吸引人之处，其他版本也有啊！只要是彼得兔就一定如此啊！人们为什么非要买你这个版本呢？
				又大又厚？你确定彼得兔适合这么出版？放了线稿当涂色卡片？这如同鸡肋的赠品能增加多少价值？译文最经典？这个可真不是
				自己说了算啊！彼得兔作为业内知名公版书，市面上有各种各样的版本。然而，买公版书不看版本的大有人在。
			</p>
			<p>今早看到这个团购文之后我再也坐不住了，赶紧写篇文来教教大家如何购买公版书。公版书是指版权过了版权期保护的内容出版的书。
				在大部分国家，作者内容的版权期保护是50年，即作者去世后50年，其作品内容就进入公共领域，出版机构可以出版作品，同时不用支付
				版权费，也就是稿酬。因此，知名作者的作品一旦进入公共领域，就会出现很多版本的书，有好有坏。经典作品做得糟糕，在公版书里比比皆是。
			</p>
			<p>幼年时妈妈把秫秫杆（高粱）剪小段用针线串起来教我数数。这大概算是我能记起最早的早期数学启蒙教育。而我的早期语言教育多是在妈妈哼唱
			的各种童谣中完成的。到四五岁我进了村小学的学前班（当时仍叫做“育红班”，取培育红色革命接班人的含义，大概也是文革的产物）正式的启蒙教育
			才算开始。</p>
			
			<br />
			<p style="color: gray;letter-spacing: 1px;font-size: 12px;">本文版权归有鱼所有，任何形式转载请联系作者。</p>
			<br />
			<h1 style="color: pink;font-size: 18px;">评论区</h1>
			<br />
			<div class="pl">
				<ul>
					<li>
						<span><img src="../../assets/image/gg-32.png" width="5%"/></span>
						<span><strong>五月雪</strong></span>
						<span>10月24日</span>
						<p>写得真好 我们那也是叫学前班 现在还记得我姐握着我的手教我写字</p>
						<hr />
					</li>
					<li>
						<span><img src="../../assets/image/gg-31.png" width="5%"/></span>
						<span><strong>西草飒飒</strong></span>
						<span>10月24日</span>
						<p>嗯呢</p>
						<hr />
					</li>
					<li>
						<span><img src="../../assets/image/gg-3.png" width="5%"/></span>
						<span><strong>多米</strong></span>
						<span>7天前</span>
						<p>很温暖呀</p>
						<hr />
					</li>
				</ul>
			</div>
		</div>
		<div id="app">
			<img src="../../assets/image/z.png" width="110%"/>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:[],
				findit:false
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			xs(){
				this.findit=true;
			},
			backb(){
				this.findit=false;
			}
		}
	}
</script>

<style scoped="scoped">
	main{
		width: 100%;
	}
	.top{
		width: 100%;
		height: 40px;
		background-color: ghostwhite;
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
	}
	.top>span:nth-of-type(1){
		color: #42BD56;
		font-size: 26px;
	}
	.top>span:nth-of-type(2){
		margin-left: 200px;
		letter-spacing: 10px;
	}
	.wrap,.container{
		width: 95%;
		margin: 60px auto;
		position: relative;
	}
	.wrap>p{
		font-size: 24px;
		letter-spacing: 3px;
	}
	.wrap>span:nth-of-type(2){
		position: absolute;
		left: 40px;
		letter-spacing: 1px;
	}
	.wrap>span:nth-of-type(3){
		position: absolute;
		left: 40px;
		font-size: 12px;
		top: 80px;
		color: gray;
	}
	.container{
		margin-bottom: 50px;
	}
	.container>p{
		letter-spacing: 2px;
		line-height: 22px;
		text-indent: 2em;
	}
	.pl{
		width: 95%;
		margin-bottom: 30px;
		margin-left: 10px;
	}
	.pl>ul>li>span:nth-of-type(3){
		color: gray;
		font-size: 12px;
	}
	.pl>ul>li>p{
		margin-left: 20px;
		letter-spacing: 1px;
	}
	#app{
		/*width: 100%;
		height: 50px;*/
		background-color: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 999;
	}
	.none{
		width: 100%;
		background-color: rgba(0,0,0,0.3);
		position: fixed;
		z-index: 9999;
		height: 100%;
	}
	.nn{
		width: 280px;
		height: 370px;
		margin: 40px 50px;
		background-color: #fff;
	}
	.nn>p{
		float: right;
		color: gray;
		font-size: 22px;
		margin-top: 10px;
		margin-right: 10px;
	}
	.nn>span:nth-of-type(1){
		float: left;
        margin: 20px 100px;
	}
	.nn>span:nth-of-type(2){
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
		border: 1px solid orange;
		color: orange;
		float: left;
		margin: 30px 20px;
	}
	.nn>span:nth-of-type(3){
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
		border: 1px solid orange;
		color: orange;
		margin:30px 7px;
		float: left;
	}
	.nn>span:nth-of-type(4){
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
		border: 1px solid orange;
		color: orange;
		margin:30px 20px;
		float: left;
	}
	.nn>span:nth-of-type(5){
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
		border: 1px solid orange;
		color: orange;
		margin:1px 60px;
		float: left;
	}
	.nn>span:nth-of-type(6){
		width: 60px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 10px;
		border: 1px solid orange;
		color: orange;
		margin:-35px 160px;
		float: left;
	}
	.nn>span:nth-of-type(7){
		width: 200px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background-color: #42BD56;
		float: left;
		margin:30px 50px;
		color: #fff;
	}
</style>