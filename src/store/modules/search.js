/* 
管理搜索模块相关数据的vuex子模块
*/
import {reqProductList} from '@/api'

const state = {
  productList: {}, // 包含 trademarkList / attrsList / goodsList / total的对象
}
const mutations = {
  RECEIVE_PRODUCT_LIST (state, productList) {
    state.productList = productList
  }
}
const actions = {
  async getProductList ({commit}, options) {
    options = {...options}  

    Object.keys(options).forEach(key => {
      if (options[key]==='' || (Array.isArray(options[key]) && options[key].length===0)) {
        delete options[key]
      }
    })

    const result = await reqProductList(options)
    if (result.code===200) {
      const productList = result.data
      commit('RECEIVE_PRODUCT_LIST', productList)
    }
  }

}

const getters = {
  
  trademarkList (state) {
    return state.productList.trademarkList || []
  },


 attrsList (state) {
   return state.productList.attrsList || []
 }
}

export default {
  state,
  mutations,
  actions,
  getters
}