import Vue from 'vue'
import App from './App.vue'
import 'swiper/css/swiper.min.css'//如果查找不是包的主模块，必须指定具体路径
Vue.config.productionTip = false
import router from './router'
import store from './store'
//引入mock
import mockServer from '@/mock/mockServer'

//注册全局组件
import TypeNav from './components/TypeNav'
Vue.component('TypeNav',TypeNav)
import Carousel from './components/Carousel'
Vue.component('Carousel',Carousel)

new Vue({
  render: h => h(App),
  router,//配置路由 $router路由器对象比如push     $route当前路由相关信息的对象
  store
}).$mount('#app')
