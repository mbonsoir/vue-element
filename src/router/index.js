/**
 * Created by admin on 2018/4/17.
 */
import Vue from 'vue'
import Router from 'vue-router'
import vuex from '../vuex/index'

Vue.use(Router)
const Index = () => import('../components/index.vue')
const Main= () => import('../components/main/main.vue')
const Food= () => import('../components/food/food.vue')
const NotFound= () => import('../components/not-found/not-found.vue')
const Login= () => import('../components/login/login.vue')

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
                path:'/',
                redirect:'/index/login'
            },
            {
                path:'main',
                component:Main,
                name:'main'
            },
            {
                path:'food',
                component:Food,
                name:'food',
                meta:{
                    requireAuth:true
                },
                beforeEnter:(to,from,next)=>{
                    console.log("进入food的路由守卫")
                    next()
                }
            },
            {
                path:'login',
                component:Login,
                name:'login'
            },
            {
                path:"*",
                component:NotFound,
                name:'*'
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
router.beforeEach((to,from,next)=>{
    if (to.meta.requireAuth){
        if (vuex.state.login){
            next()
        } else {
            next({
                path:'/index/login'
            })
        }
    } else {
        next()
    }
    console.log('进入'+to.name)
})
router.afterEach((to,from)=>{
    console.log('离开'+from.name)
})
export default router