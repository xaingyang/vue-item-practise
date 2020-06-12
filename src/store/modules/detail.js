import {reqDetailInfo} from '@/api'

const state ={
    detailInfo:{}
}

const mutations ={
    receive_detail_info(state,detailInfo){
        state.detailInfo=detailInfo
    }
}

const actions ={
    async getDetailInfo({commit},skuId){
        const result =await reqDetailInfo(skuId)
        if(result.code===200){
            const detailInfo=result.data
            commit('receive_detail_info',detailInfo)
        }
    }
}

const getters ={
    categoryView(state){
        return state.detailInfo.categoryView?state.detailInfo.categoryView : {}
    },
    skuInfo(state){
            return state.detailInfo.skuInfo? state.detailInfo.skuInfo:{}
    },
    skuImageList (state) {
        const skuInfo = state.detailInfo.skuInfo
        return skuInfo ? skuInfo.skuImageList : []
    } 
}



export default {
    state,
    actions,
    mutations,
    getters
}