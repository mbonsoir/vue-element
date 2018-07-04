<template>
    <div>
        欢迎：{{$store.state.user.name}}
        <!--<input type="text" :value="$store.state.user.name" @input="setName($event)">-->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                age:18,
                userName:''
            }
        },
        methods: {
            setName(e){
                this.$store.dispatch('setName',e.target.value)
            }
        },
        created(){
            this.userName  = this.$store.state.user.name
        }
    }
</script>
<style scoped>
</style>