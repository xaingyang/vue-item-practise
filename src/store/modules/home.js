import reqCategoryList from '@/api'

export default {
    state:{
        categoryList:[],
        xxx:{},
        yyy:'atgui'
    },
    mutations:{
        test1(state){

        },
        RECEIVE_CATEGORY_LIST (state, categoryList) {
            state.categoryList = categoryList
          } 
    },
    actions:{
        test3({commit,state}){

        },
        async getCategoryList({commit}){
            const result =await reqCategoryList()
            console.log('result',result)
        }
    }
}