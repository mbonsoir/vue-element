/**
 * Created by admin on 2018/4/17.
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = () => import('../components/index.vue')
const Main= () => import('../components/main/main.vue')

const routes = [
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'/index',
        component:Index,
        children:[
            {
                path:'main',
                component:Main
            }
        ]
    },
    {
        path:'/main',
        component:Main
    }
]

const router = new Router({
    mode: 'hash',
    routes
})
export default router