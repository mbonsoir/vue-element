import util from '../util/index.js'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    'user':{
        'name':'',
        'age':'',
        'sex':'',
        'city':''
    },
    'login':false
}
const mutations = {
    setName(state,name){
        state.user.name = name
    },
    setAge(state,age){
        state.user.age = age
    },
    setSex(state,sex){
        state.user.sex = sex
    },
    setCity(state,city){
        state.user.city = city
    },
    changeLogin(state,login){
        state.login = login
    }
}
const actions = {
    setName({ commit },name){
        commit('setName',name)
    },
    setAge({ commit },age){
        commit('setAge',age)
    },
    setSex({ commit },sex){
        commit('setSex',sex)
    },
    setCity({ commit },city){
        commit('setCity',city)
    },
    changeLogin({ commit },login){
        commit('changeLogin',login)
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        util
    }
})
export default store