/* 
路由器对象
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 声明使用vue插件
Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

// 给原型对象重新定义新的push方法
VueRouter.prototype.push = function (location, onComplete, onAbort) {

  console.log('push()', location, onComplete, onAbort)
  
  if (!onComplete && !onAbort) {
   
    return originPush.call(this, location).catch(error => {
      console.log('---push', error.message)
    })
  } else { 
    originPush.call(this, location, onComplete, onAbort)
  }
}

VueRouter.prototype.replace = function (location, onComplete, onAbort) {

  if (!onComplete && !onAbort) {
    return originReplace.call(this, location).catch(error => {
      console.log('---replace', error.message)
    })
  } else {
    originReplace.call(this, location, onComplete, onAbort)
  }
}


// 向外暴露路由器对象
export default new VueRouter({
  mode: 'history', 
  routes,

 
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})