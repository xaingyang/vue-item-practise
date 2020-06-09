import Vue from 'vue'
import VueRouter from 'vue-router'
// VueRouter.prototype.push().catch(()=>{})

//重复请求报错解决
let originPush=VueRouter.prototype.push
let originreplace=VueRouter.prototype.replace
VueRouter.prototype.push=function(location, onComplete, onAbort){
    if(onComplete||onAbort){
        originPush.call(this,location,onAbort)
    }else{
        //return 是为了继续让push可以调用。then方法
        //call是为了改变originpush的this指向
        return originPush.call(this,location).catch((err)=>{  
        })
    }
}
VueRouter.prototype.replace=function(location, onComplete, onAbort){
    if(onComplete||onAbort){
        originreplace.call(this,location,onAbort)
    }else{
        //return 是为了继续让push可以调用。then方法
        //call是为了改变originpush的this指向
        return originreplace.call(this,location).catch((err)=>{  
        })
    }
}


Vue.use(VueRouter)
import routes from './routers'
export default new VueRouter({
    mode: 'history',
    routes,
})