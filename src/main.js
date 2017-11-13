import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import '../node_modules/_element-ui@2.0.1@element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import '../node_modules/_mint-ui@2.2.9@mint-ui/lib/style.css'


//定义vue使用VueRouter
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Mint)

import router from './js/router.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
