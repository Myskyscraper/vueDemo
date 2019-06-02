<template>
  <div class="list">
    <mt-header fixed title="信息搜索"></mt-header>
    <mt-search>搜索</mt-search>
    
    <ul>
        <li><span>姓名</span> <i>{{username}}</i></li>
        <li><span>电话</span> <i>{{number}}</i></li>
        <li><span>密码</span> <i>{{password}}</i></li>
        <li><span>邮箱</span> <i>{{count}}</i></li>
        <li><span>地址</span> <i>{{msg}}</i></li>
    </ul>

    <mt-button type="danger" v-on:click="increment">default</mt-button>
    <mt-button type="primary" v-on:click="asnyAdd">default</mt-button>
    <button v-on:click="changePassword({password:123456})">查看</button>
    <button v-on:click='changeNickname({nickname: "jerry"})'>改变</button>
  </div>
 
</template>
<script>
import { Toast, Indicator } from "mint-ui";
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
  name: "home",
  data(){
      return {
          
      }
  },
  computed:{
    ...mapState(['count','username','number','password']),
    ...mapGetters(['msg'])
  },
  methods: {
    ...mapMutations(['increment','changePassword','asnyAdd','changeNickname']),
    aler() {
      
    }
  }
};
</script>
<style>
  .list{
    color:#666;
  }
  ul{
    padding: 0 10px;
  }
  li{
      line-height:40px;
      font-size: 14px;
      border-bottom:1px solid #ccc;
    }
  .mint-search{height: 100%;}
  i{font-style: normal;}
</style>

