import axios from 'axios'
import NProgress from 'nprogress'

const instance = axios.create({
  baseURL: '/mock',  
  timeout: 15000 
})


instance.interceptors.request.use(config => { 
  NProgress.start()

  return config
})

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
