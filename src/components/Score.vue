<template>
    <div class="score">
        <p>你所得到的分数{{score}}</p>
        <button v-on:click="show">按钮</button>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name:'score',
    data(){
        return {
            score:0,
            rightAnswer:[1,5,9,13,17]
        }
    },
    computed:{
        ...mapState(['answerid'])
    },
    created(){
        this.computedScore();
    },
    methods:{
        computedScore(){
            console.log(this.answerid)
            this.answerid.forEach((item,index) =>{
                if(item == this.rightAnswer[index]){
                    this.score+=20;
                }
            })
        },
        show(){
            console.log(this.answerid)
        }
    }
}
</script>

<style>


</style>


