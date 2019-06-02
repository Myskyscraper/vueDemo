<template>
    <div class="home">
            首页测试
            <p>{{mes}}</p>
            <button v-on:click='handle'>点击我</button>
            <p>{{count}}</p>
            <p>{{username}}</p>
            <p>{{nickname}}</p>
            <p>{{password}}</p>
            <p>{{message}}</p>
            <p>{{msg}}</p>

            <button v-on:click="changePassword({password:123456})"></button>
    </div>
</template>

<script>
import{mapState,mapGetters,mapMutations,mapActions}from'vuex';
export default {
    name:'home',
    data(){
        return {
            mes:'message'
        }
    },
    computed:{
        ...mapState(['count','number','username','nickname','password']),
        ...mapGetters(['message','msg'])
    },
    methods:{
        handle(){
            console.log('ok'); 
        },
        ...mapMutations(['increment','changePassword'])
    }
}
</script>
<style>


</style>

