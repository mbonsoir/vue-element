/* eslint-disable */
/**
 * Created by admin on 2018/4/17.
 */
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import elementUi from 'element-ui'
import router from './router'
import store from './vuex'
import App from './app.vue'
import '../assets/less/base.less'
Vue.use(elementUi)
new Vue({
    el:'#app',
    router,
    store,
    render: h => h(App)
})