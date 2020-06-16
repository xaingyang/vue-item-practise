import Vue from 'vue'
import 'swiper/css/swiper.min.css' 
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'

import '@/mock/mockServer'  


// 注册全局组件
Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)

// Vue.prototype.$bus = new Vue()  

new Vue({
  // el: '#app',
  render: h => h(App),
  router, // 配置路由器  ==> 所有的组件都可以通过$router属性得到路由器对象
  store, // 注册vuex的store ==> 所有的组件都可以通过$store来得到store对象

  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')

/* eslint-disable no-unused-vars */