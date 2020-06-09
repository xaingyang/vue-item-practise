

import {reqProductList} from '@/api'

const state = {
  //这个 对象 里面包含搜索得到的相关信息
  productList: {},  
}
const mutations = {
  receive_productList (state, data) {
    state.productList = data
  }
}
const actions = {
  async getProductList ({commit},options) {
    const result = await reqProductList(options)
    if (result.code===200) {
      const productList = result.data
      commit('receive_productList', productList)
    }
  }
}
const getters = {
  trademarkList(state){
    return state.productList.trademarkList
  },
  attrsList(state){
    return state.productList.attrsList
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
