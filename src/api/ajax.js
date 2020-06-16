import axios from 'axios'
import NProgress from 'nprogress'
import store from '@/store'

const instance = axios.create({
  baseURL: '/api',  
  // baseURL: 'http://182.92.128.115/api',
  timeout: 15000 
})


instance.interceptors.request.use(config => { 
  NProgress.start()
  

  config.headers['userTempId']=store.state.user.userTempId

  return config
})

// 注册响应拦截器
instance.interceptors.response.use(
  response => { 
    NProgress.done()

    return response.data
  },

  error => { 
    
    NProgress.done()
    alert(error.message || '未知错误')

    return Promise.reject(error)

  }
)


// 向外暴露的必须是这个instance, 不能是axios
export default instance
