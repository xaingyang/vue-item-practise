/* 
包含项目中所有接口的ajax请求函数
函数的返回值是promise, 函数内部调用ajax模块发请求
*/
import ajax from './ajax'
import mockAjax from './mockAjax'


export function reqLogin (mobile, password) {
  // 将ajax作为函数使用
  /* return ajax({
    url: '/user/passport/login',
    method: 'POST',
    data: {mobile, password}
  }) */

  // 将ajax作为对象使用
  return ajax.post('/user/passport/login', {mobile, password})
}


export const reqCategoryList = () => ajax('/product/getBaseCategoryList')

/* 
定义访问mock接口的接口请求函数
*/
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')
export const reqRecommends = () => mockAjax('/recommends')


export const reqProductList = (options) => ajax.post('/list', options)

export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)

export const reqShopCart = () => ajax.get('/cart/cartList')

export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)

export const reqCheckCartItem = (skuId, isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)

export const reqDeleteCartItem = (skuId) => ajax.delete(`/cart/deleteCart/${skuId}`)

// export function reqLogin (mobile, password) { 
//   return ajax.post('/user/passport/login', {mobile, password})
// }

export const reqRegister = (userInfo) => ajax.post('/user/passport/register', userInfo)

export const reqLogout = () => ajax('/user/passport/logout')