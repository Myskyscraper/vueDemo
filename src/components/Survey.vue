<template>
    <div class="survey">
        <h3>{{level}}测试</h3>
        <p>第{{itemNum}}题</p>
        <ul>
            <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" v-on:click='choosedAns(index,item.topic_answer_id)'>
                <span v-bind:class="{'has_chosed':choosedNum==index}" class="chosetype">{{index|computType}}</span>
                <span>{{item.answer_name}}</span>
            </li>
        </ul>
        <mt-button size="small" v-on:click='nextStep' v-if="itemNum<itemDetail.length">下一题</mt-button>
        <mt-button size="small" v-else v-on:click="submit">提交</mt-button>
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
        choosedAns(type,val){
            this. choosedNum = type;
            this.choosedId = val;
            console.log(val)
        },
        nextStep(){
            this. choosedNum=null;
            
            if(this.choosedId==null){
                alert('请填写')
            }else{
                this.addNum(this.choosedId);
                this.choosedId=null
            }
        },
        submit(){
            if(this.choosedNum !== null){
                this.addNum(this.choosedId);//在提交的时候进行
                this.$router.push('Score');
            }else{
                alert('您还没有选择答案哦')
            }
        }
        
    }
}
</script>

<style>
.has_chosed{
    background: blue;
     color: #fff;
}
    

  li{
      border-bottom: 1px solid #666;
      line-height: 36px;
      padding-left: 10px;
  }
    p{
        padding: 10px;
    font-size: 19px;
    }
  ul{
      padding:  10px;
  }
.chosetype{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    font-size: 16px;
}
</style>
