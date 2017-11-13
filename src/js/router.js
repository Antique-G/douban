import VueRouter from 'vue-router'

/*主页*/
import menu from '../component/page/index.vue'
/*大师电影*/
import movie from '../component/movie/movie.vue'
//详情
import watch from '../component/page/watch.vue'
//我的时间
import mytime from '../component/page/mytime.vue'

/*书影音*/
import book from '../component/page/book.vue'
//电视
import booktv from '../component/bookview/booktv.vue'
//读书
import bookread from '../component/bookview/bookread.vue'
//同城
import bookcity from '../component/bookview/bookcity.vue'
//音乐
import bookmusic from '../component/bookview/bookmusic.vue'
//市集
import bookmarket from '../component/bookview/bookmarket.vue'

/*广播*/
import broadcast from '../component/page/broadcast.vue'

/*小组*/
import group from '../component/page/group.vue'

/*我的*/
import my from '../component/page/my.vue'
/*登录*/
import login from '../component/page/login.vue'



export  default new VueRouter({
	routes:[
	//点击路由，跳到相应页面
	     {path:'*',redirect:'/menu'},
	     {path:'/menu',component:menu},
	     {path:'/watch',component:watch},
	     {path:'/mytime',component:mytime},
	     {path:'/book',component:book},
	     {path:'/booktv',component:booktv},
	     {path:'/bookread',component:bookread},
	     {path:'/bookcity',component:bookcity},
	     {path:'/bookmusic',component:bookmusic},
	     {path:'/bookmarket',component:bookmarket},
	     {path:'/broadcast',component:broadcast},
	     {path:'/group',component:group},
	     {path:'/my',component:my},
	     {path:'/movie',component:movie},
	     {path:'/login',component:login}
	]
})
