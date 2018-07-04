<template>
    <div>
        <div style="width: 500px;line-height: 50px;text-align: right">
        <el-input v-model="name" placeholder="姓名"></el-input>
        <el-input type="password" v-model="psd" placeholder="密码"></el-input>
        <el-button type="primary" @click="login">登录</el-button>
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                name:'',
                psd:''
            }
        },
        methods: {
            login(){
                if ( this.name && this.psd ){
                    this.$store.dispatch('setName',this.name)
                    this.$store.dispatch('changeLogin',true)
                    this.$router.push({
                        path:'/index/food'
                    })
                }
            }
        }
    }
</script>
<style scoped>
</style>