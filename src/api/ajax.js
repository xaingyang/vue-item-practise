import axios from 'axios'
import NProgress from 'nprogress'

const instance = axios.create({
  baseURL: '/api',  
  timeout: 15000 
})

instance.interceptors.request.use(config => { 
  NProgress.start()

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


export default instance
