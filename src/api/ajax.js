
import axios from 'axios'
import NProgress from 'nprogress'
//配置通用基础路径与超时
const instance=axios.create({
    //解决跨域问题
    //第一种服务器处理了。可以直接使用
    // baseURL:'http://182.92.128.115/api',

    //第二种就是使用，代理服务器解决跨域 
    baseURL:'/api',
    timeout:15000,//设置请求超时时间
})

//注册请求拦截器
instance.interceptors.request.use(config=>{    
    //显示请求进度条
    NProgress.start()
    return config
})
//注册响应拦截器
instance.interceptors.response.use(
    response=>{
        //隐藏进度条
        NProgress.done()
        //响应直接返回数据，response.data
        return response.data
    },
    error=>{
        //隐藏进度条
        NProgress.done()
        //统一处理请求错误，具体请求可以选择处理或者不处理
        alert(error.message||'未知错误')
        return Promise.reject(error)
        // throw error  //要抛出错误
        // return error//不能return
    }
)



//向外暴露
export default instance