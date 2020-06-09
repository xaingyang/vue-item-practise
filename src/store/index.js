import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const mutations={}

const actions={}

const getters={}

import home from './modoules/home'
import user from './modoules/user'
import search from './modoules/search'

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
       home, 
       user,
       search
    }
    
})