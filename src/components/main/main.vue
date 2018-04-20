<template>
    <div class="main">
        <ul>
            <li v-for="(list,i) in lists">
                <h1>{{i+1}}</h1>
                <p>{{list.title}}</p>
                <img class="author" :src="list.author.avatar_url" :alt="list.author.loginname">
                <div v-html="list.content"></div>
            </li>
        </ul>
        <el-button @click="show()">点击获取数据</el-button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                lists:[]
            }
        },
        methods: {
            show(){
                this.$store.dispatch("getList").then((res)=>{
                    if (res.data.success){
                        console.log(res,'res')
                        this.lists = res.data.data
                    }
                })
            }
        },
        mounted(){
        }
    }
</script>
<style lang="sass" scoped>
    .main
        line-height: 30px
        li
            background-color: #f2f2f2
            padding: 20px
            border-bottom: 1px solid #ddd

    .author
        width: 100px

</style>
<style lang="sass">
    img
        max-width: 300px
</style>