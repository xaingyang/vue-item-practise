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
  router, 
  store, 

  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')

/* eslint-disable no-unused-vars */
