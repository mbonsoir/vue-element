<template>
    <el-container :style="{ height : offSetHeight }">
        <el-header class="blue" height="80px">
            <span class="headerTitle">饿了呀</span>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col>
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose"
                                text-color="#666"
                                active-text-color="#ffd04b"
                                router
                        >
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>有吃的</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/index/main">主页</el-menu-item>
                                    <el-menu-item index="/index/food">食物</el-menu-item>
                                    <el-menu-item index="/index/car">购物车</el-menu-item>
                                    <el-menu-item index="/index/order">订单</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">生活馆</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/index/rim">周边</el-menu-item>
                                    <el-menu-item index="/index/peripheral">外设</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-menu-item index="3">
                                <i class="el-icon-document"></i>
                                <span slot="title">加入我们</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">体验</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-container>
                <el-main>
                    <el-collapse-transition>
                        <router-view></router-view>
                    </el-collapse-transition>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
<style lang="scss" scoped>
    .headerTitle{
        height: 80px;
        float: left;
        color: #fff;
        font-size: 20px;
    }
    .el-header {
        background-color: #48a3f4;
        color: #333;
        text-align: center;
        line-height: 80px;
    }
    .el-aside {
        background-color: #fff;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
    .el-menu-vertical-demo{
        text-align: left;
    }
</style>
<script>
    export default {
        data () {
            return {
                offSetHeight:''
            }
        },
        components:{
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created(){
            this.offSetHeight = window.innerHeight +'px'
            console.log(window.innerHeight)
        }
    }
</script>
<style scoped>
</style>