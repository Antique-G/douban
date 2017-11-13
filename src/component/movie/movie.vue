<template>
	<main>
	<div class="m">
		<div class="head">
		  <button  @click="back"><</button>
		  <span>豆瓣时间</span>
		</div>
		
		<div class="title">
			<ul>
				<li style="border-bottom: 1px solid gray;">
					<router-link to="movie">时间首页</router-link>
				</li>
				<li><router-link to="mytime">我的时间</router-link></li>
			</ul>
		</div>
	</div>
	
		<!--轮播-->
		<div class="block" style="margin-top: 50px;width: 100%;height:190px;">
		    <mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/image/movie.jpg" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/image/movie-1.png" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/image/movie-2.png" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/image/movie-5.jpg" width="100%"/></mt-swipe-item>
			</mt-swipe>
		</div>
		
		
		<div class="bottom">
            <p>限时特惠</p>
            <ul>
            	<li v-for="b in abs">
            		<img :src="b.src" width="100%"/>
            		<p>{{b.title}}</p>
            		<p style="color: red;">{{b.price}}</p>
            		<p style="text-decoration:line-through; font-size: 10px;">{{b.oldprice}}</p>
            	</li>
            </ul>
		</div>
		
		<div class="bottom-one">
			<h2>小王子的故事</h2>
			
			<img src="../../assets/image/movie-1.jpg" width="50%" />
			<span style="font-size: 10px;">作者:（法）圣埃克苏佩里</span>
			<h1>简介：</h1>
			<p>
				这一年，安德烈・纪德在布鲁塞尔一次会议上宣称：“当今文学土地的面貌可以说是一片沼泽。”
				1900年，圣埃克苏佩里诞生。净化沼泽的意愿和能力历史地落在这个“世纪儿”的身上，圣埃克苏佩里是尼采式的第二代法国作家，
				拿但业的儿子，琐罗亚斯德的孙子，这个飞行员受到极大的遗传影响。灾种影响使他在探索、忧虑和英雄主义的道路上走到尽头。
				如尼采所说：“你应该超截止自己，走得更远，登得更高，直至群星在你脚下。”尼采成为他座舱中想象的伙伴。这个飞越沙漠和海
				洋的年轻驾驶员同样也遵循着纪德的教诲：“与其过宁静的生活，不如过悲怆的生活。”圣埃克苏佩里在他整个的一生中都在反复思
				考力量和热诚的真谛。\n圣埃克苏佩里（AntoinedeSaiot-Exupery），1900年出生于法国里昂，1921-1923年在法国空
				军中服役，曾是后备飞行员，后来又成为民用航空驾驶员，参加了开辟法国――非洲――南美国际航线的工作，其间他还从事文学写作，
				作品有《南线班机》（1930），《夜航》（1931）等等。\n1939年德国法西斯入侵法国，鉴于圣埃克苏佩里曾多次受伤，医生认
				为他不能再入伍参战；但经他坚决要求，参加了抗德战争，被编入2\/33空军侦察大队。1940年法国在战争中溃败，他所在的部队
				损失惨重，该部被调往阿尔及尔，随后即被复员，他只身流亡美国。在美国期间，他继续从事写作，1940年发表了《战斗飞行员》，
				1943年发表了《给一个人质的信》以及《小王子》。\n1943年，在他的强烈要求下，他回到法国在北非的抗战基地阿尔及尔。他
				的上级考虑到他的身体和年龄状况，只同意他执行五次飞行任务，他却要求到八次，1944年7月31日上午，他出航执行第八次任务，
				从此再也没有回来，牺牲时，年仅44岁。\n在欧洲某地的一个湖中，发现了圣・德克旭贝里的飞机残骸。这次搜索是经过对他最后一
				次出航的线路和德军当时的空军记录研究以后进行的，经过认证确认是那架失踪了半个世纪的侦察机。为了纪念这位伟大的战士和文
				学家，当地决定为这架飞机的残骸建立一个博物馆，以他的名字命名，陈列他的作品和遗物。","summary":"小王子驾到！大家好，
				我是小王子，生活在B612星球，别看我是王子出生，我要做的事也不少，有时给花浇水，有时我还得耐心地把火山口通一通。实在闷
				得发慌的时候，为了找些事做，学点东西，我也访问一些其他的星球，像325号、326号、327号之类的。当然，我经历的事情也不少
				有开心的，也有不开心的。这些事我通常会向地球上一个叫圣埃克苏佩里的人倾诉。对了，你可不要小瞧他，他是拿但业的儿子，琐罗
				亚斯德的孙子。他还被人们认为尼采式的第二代法国作家。他一生有两大爱好：飞行和写作。我之所以能够这样受欢迎也是他的功劳。
				因为他把我在其他星球的所见所闻编成了一本小书，也就是你们即将看到的这一本。它不但被誉为有史以来阅读仅次于《圣经》的书，
				全球发行的语言更是超过100种。可惜的是，在这本书出版后没多久，他在一次架机执行任务时一去不复返了，没有人知道他去了哪里。
				今天我第一次来到中国，还希望大家同样能够喜欢我。在这本书里他收藏了很多我在其他星球的精美彩图，而且，值得一提的是，中国著
				名的评论家周国平先生也特意为我作序。可以说，这本书不仅小朋友们爱不释手，就连大人们也会看得如痴如醉。糟糕，我还忘了告诉你，
				你只有在卓越网（www.joyo.com）才能找到我。有缘的话，我们很快就能相见了。\n尼采、纪德、圣埃克苏佩里是同一家庭的成员，
				由无可否认的联系连在一起。圣埃克苏佩里热爱尼采。纪德热爱圣埃克苏佩里。\n1945年2月1日《费加罗报》上，他谈到这位飞行
				员：\"他无论在何处着陆，都是为了带去欢乐。\"\n但是圣埃克苏佩里将公正置于友谊之上。他在《札记》中写道：\"纪德评价，
				却不曾体验。\"确切的见解。这是行动者面对思想者所感到的骄傲。尼采和纪德孕育了一种道德，并用美妙的文学冲动表现出来。
				只有圣埃克苏佩里一人在危险和充实中体验了这种道德。他是翱翔于九天的琐罗亚斯德，是乘风飞去的拿但业。他的书房便是机舱。
				他的格言：事事体验。他的作品：生活。圣埃克苏佩里对尼采的力量和纪德的热诚做作了合理的总结：他的冒险为职业，把写作当嗜好，
				他在飞行员的位置上实现着克尔桤郭尔的愿望：\"做一个思想家和做一个人，二者尽量不要区别开来，这样才是明智的。\"--（法）
				玛雅·戴斯特莱姆
			</p>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:[],
				abs:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res){
				this.abs=res.body.result.data[4].context
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
		width: 100%;
		box-sizing: border-box;
		background-color: ghostwhite;
	}
	.m{
		width: 100%;
		height: 70px;
		position: fixed;
		left: 0;
		top: 0;
		background-color: ghostwhite;
		z-index: 99;
	}
	.head{
		width: 100%;
		height: 30px;
	}
	.head>button{
		border: none;
		background-color: ghostwhite;
		color: #42bd56;
		font-size: 20px;
		float: left;
		margin: 3px 6px;
	}
	.head>span{
		margin-left: 125px;
		letter-spacing: 2px;
	}
	.title ul{
		width: 100%;
		height: 40px;
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
	.bottom{
		width: 100%;
		height: 200px;
		margin: 20px 5px;
	}
	.bottom>p{
		letter-spacing: 2px;
	}
	.bottom ul{
		width: 100%;
	}
	.bottom ul li{
		width: 30%;
		height: 170px;
		background-color: #fff;
		border: 1px solid ghostwhite;
		margin-left: 5px;
		float: left;
		text-align: center;
	}
	.bottom-one{
		width: 100%;
		margin: 10px 10px;
		overflow: hidden;
		margin-bottom: 50px;
		/*background-color: pink*/
	}
	.bottom-one>h2{
		text-align: center;
		color: pink;
		letter-spacing: 2px;
	}
	.bottom-one>p{
		text-indent: 1em;
		width: 100%;
		overflow: hidden;
		letter-spacing: 2px;
	}
</style>