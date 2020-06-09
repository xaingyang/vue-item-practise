//包含所有接口的ajax请求函数
//返回值是promise，函数内部调用ajax模块

import ajax from './ajax'
import mockAjax from './mockAjax'

//登录接口
export function reqLogin(mobile, password) {
    // return retajax({
    //     url:'/user/passport/login',
    //     mothod:'post',
    //     data:{
    //         mobile,
    //         password
    //     }
    // })
    return ajax.post('/user/passport/login', {
        mobile,
        password
    })
}

//商品三级分类
export const reqCategorys = () => ajax('/product/getBaseCategoryList')
//search商品列表
export const reqProductList = (options) => ajax.post('/list', options)

//访问mock接口的请求
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')
export const reqTodayImgs = () => mockAjax('/todayimgs')