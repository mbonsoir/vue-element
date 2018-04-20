/**
 * Created by admin on 2018/4/19.
 */
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const url = 'https://cnodejs.org/api/v1/'
const actions = {
    getList(){
        return axios.get('topics')
    }
}
axios.defaults.baseURL = url;
axios.defaults.headers.common['Accept'] = 'text/plain;Accept-Ranges';
axios.defaults.headers.post['Content-Type'] = 'text/plain;charset=UTF-8';
axios.defaults.headers.head['Access-Control-Allow-Headers'] = 'Accept-Ranges';
export default {
    actions
}
