import ajax from './ajax'

export function reqLogin(mobile,password){
    return ajax({
        url:'/user/passport/login',
        method:'POST',
        data:{mobile,password}
    })
}

export const reqCategoryList=()=>ajax('/product/getBaseCategpryList')