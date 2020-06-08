import {reqCategoryList} from '@/api'

export default {
    state:{
        categoryList:[],
        banners:[],
        floors:[]
    },
    mutations:{
        test1(state){

        },

        RECEIVE_BANNERS (state,banners){
            state.banners=banners
        },
        RECEIVE_FLOORS (state,floors){
            state.floors=floors
        },


        RECEIVE_CATEGORY_LIST (state, categoryList) {
            state.categoryList = categoryList
          } 
    },

    actions:{
        test3({commit,state}){

        },

        async getBanners({commit}){
            const result =await reqBanners()
            if( result.code === 200 ){
               const banners=result.data
               commit('RECEIVE_BANNERS',banners)
            }
        },

        async getFloors({commit}){
            const result=await reqFloors()
            if(result.code===200){
                const floors=result.data
                commit('RECEIVE_FLOORS',floors)
            }
        },




        async getCategoryList({commit}){
            const result =await reqCategoryList()
            console.log('result',result)

            if (result.code===200) {
                const categoryList = result.data.filter((item, index) => index<15)
                commit('RECEIVE_CATEGORY_LIST', categoryList)
            }
        
           }
        },
        getters: {
            test4 (state) { 
        
            }
          }
    }