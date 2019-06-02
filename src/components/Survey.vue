<template>
    <div class="survey">
        <h3>{{level}}测试</h3>
        <p>第{{itemNum}}题</p>
        <ul>
            <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" v-on:click='choosedAns(item.topic_answer_id)'>
                <span>{{index|computType}}</span>
                <span>{{item.answer_name}}</span>
            </li>
        </ul>
        <mt-button size="small" v-on:click='nextStep'>下一题</mt-button>
         <mt-button size="small">提交</mt-button>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
    name:'survey',
    data(){
        return {
            itemId:null,//题目ID
            choosedNum:null,//选中答案索引
            choosedId:null//选中答案id
        }
    },
    filters:{
        computType(value){
            switch(value){
                case 0: return 'A';
                case 1: return 'B';
                case 2: return 'C';
                case 3: return 'D';
            }
        }
    },
    computed:{
       ...mapState(['itemNum','level','itemDetail']) 
    },
    methods:{
        ...mapActions([
            'addNum'
        ]),
        choosedAns(val){
            this.choosedId = val;
        },
        nextStep(){
            if(this.choosedId=null){
                alert('请填写')
            }else{
                // this.itemNum= this.itemNum+1;
                this.addNum(this.choosedId);
            }
        }
    }
}
</script>

<style>


</style>
