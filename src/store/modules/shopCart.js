/* 
管理购物车相关数据的vuex子模块
*/
import {reqShopCart, reqAddToCart, reqCheckCartItem, reqDeleteCartItem} from '@/api'

const state = {
  cartList: [], 
}

const mutations = {
  
  RECEIVE_CART_LIST (state, cartList) {
    state.cartList = cartList
  }
}

const actions = {
  
  async getCartList ({commit}) {
    const result = await reqShopCart()
    if (result.code===200) {
      const cartList = result.data
      commit('RECEIVE_CART_LIST', cartList)
    }
  },

  
  async addToCart ({commit}, {skuId, skuNum, callback}) {
    const result = await reqAddToCart(skuId, skuNum)
    if (result.code===200) {
      callback()  
    } else {
      callback('添加购物车失败')
    }
  },

  async addToCart2 ({commit}, {skuId, skuNum}) {
    const result = await reqAddToCart(skuId, skuNum)
   
    if (result.code!==200) {
      throw new Error('添加购物车失败')  
    }
  },

  
  async addToCart3 ({commit}, {skuId, skuNum}) {
    const result = await reqAddToCart(skuId, skuNum)
   
    if (result.code!==200) {     
      return '添加购物车失败'  
    } else {  
      return undefined   
    }
  },

  
  async checkCartItem ({commit}, {skuId, isChecked}) {
   
    const result = await reqCheckCartItem(skuId, isChecked)
   
    if (result.code!==200) {
      throw new Error(result.message || '选中商品失败')
    }
  },

  
  async checkAllCartItems ({commit, state, dispatch}, checked) {
    
    const isChecked = checked ? '1' : '0'
    let promises = []

    state.cartList.forEach(item => {
     
      if (item.isChecked!=isChecked) {
    
        const promise = dispatch('checkCartItem', {skuId: item.skuId, isChecked})
        promises.push(promise)
      }
    })

    return Promise.all(promises) 
  },

  async deleteCartItem (context,skuId){
    const result =await reqDeleteCartItem(skuId)
    if(result.code!==200){
      throw new Error('删除失败')
    }
  },

  async deleteCheckedCartItems ({state,dispatch}){
    const promises = state.cartList.reduce((pre,item)=>{
      if(item.isChecked===1){
        pre.push(dispatch('deleteCheckedItems',item.skuId))
      }
      return pre
    },[])

    return Promise.all(promises)
  }
}

const getters = {

  totalCount (state) {
   
    return state.cartList.reduce((preTotal, item, index) => preTotal + (item.isChecked===1?item.skuNum:0) , 0) 
  },

  
  totalPrice (state) {
    return state.cartList.reduce((pre, item, index) => pre + item.skuNum*item.cartPrice , 0) 
  },


  isCheckAll (state) {
    return state.cartList.length>0 && state.cartList.every((item, index) => item.isChecked===1)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
