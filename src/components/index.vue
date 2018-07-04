<template>
    <el-container :style="{ height : offSetHeight }">
        <el-header class="blue" height="80px">
            <span class="headerTitle">{{$store.state.user.name || '请登录'}}</span>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col>
                        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                            <el-radio-button :label="false">展开</el-radio-button>
                            <el-radio-button :label="true">收起</el-radio-button>
                        </el-radio-group>
                        <el-menu
                                :collapse="isCollapse"
                                default-active="/index/main"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose"
                                text-color="#666"
                                active-text-color="#ffd04b"
                                router
                        >
                            <el-menu-item index="/index/main">
                                <i class="el-icon-document"></i>
                                <span slot="title">主页</span>
                            </el-menu-item>
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>有吃的</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/index/food">食物</el-menu-item>
                                    <el-menu-item index="/index/car">购物车</el-menu-item>
                                    <el-menu-item index="/index/order">订单</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title">有玩的</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/index/rim">周边</el-menu-item>
                                    <el-menu-item index="/index/peripheral">外设</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-submenu index="5">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>有身份</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="/index/food">资料</el-menu-item>
                                    <el-menu-item index="/index/car">设置</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <el-menu-item index="3">
                                <i class="el-icon-document"></i>
                                <span slot="title">骑手营</span>
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
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
<script>
    export default {
        data () {
            return {
                offSetHeight:'',
                isCollapse:false
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
            console.log(this)
            this.offSetHeight = window.innerHeight +'px'
        }
    }
</script>
<style scoped>
</style>