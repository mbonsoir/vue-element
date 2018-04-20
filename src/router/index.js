/**
 * Created by admin on 2018/4/17.
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Index = () => import('../components/index.vue')
const Main= () => import('../components/main/main.vue')
const Food= () => import('../components/food/food.vue')
const NotFound= () => import('../components/not-found/not-found.vue')

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
            },
            {
                path:'food',
                component:Food
            },
            {
                path:"*",
                component:NotFound
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