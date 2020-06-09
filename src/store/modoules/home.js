
//ajax
import {reqCategorys,reqBanners,reqFloors,reqTodayImgs} from '@/api'


export default {
    state:{
        categoryList:[],
        banner:[],
        floors:[],
        todayimgs:[]
    },
    mutations:{
        receive_category_list(state,data){
            state.categoryList=data
        },
        receive_banner(state,data){
            state.banner=data
        },
        receive_floors(state,data){
            state.floors=data
        },
        receive_todayimgs(state,data){
            state.todayimgs=data
        }
    },
    actions:{
        async getCategoryList({commit}){
            //调用接口函数请求三级列表内容 数据保存到state
            const result=await reqCategorys()
            // console.log(result)
            if(result.code==200){
                const categoryList=result.data.filter((item,index)=>index<15)
                commit('receive_category_list',categoryList)
            } 
        },
        async getBanner({commit}){
            //调用接口函数请求三级列表内容 数据保存到state
            const result=await reqBanners()
            // console.log(result)
            if(result.code==200){
                const categoryList=result.data
                commit('receive_banner',categoryList)
            } 
        },
        async getFloors({commit}){
            //调用接口函数请求三级列表内容 数据保存到state
            const result=await reqFloors()
            // console.log(result)
            if(result.code==200){
                const categoryList=result.data
                commit('receive_floors',categoryList)
            } 
        },
        async getTodayImgs({commit}){
            const result=await reqTodayImgs() 
            if(result.code==200){
                const categoryList=result.data
                console.log('store',categoryList)
                commit('receive_todayimgs',categoryList)
            } 
        }
    },
    getters:{

    }
}