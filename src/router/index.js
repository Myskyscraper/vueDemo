import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import List from '@/components/List'
import Survey from '@/components/Survey'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '5', 
      component: Survey
    },
    {
      path: '/',
      name: 'List', 
      component: List
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
    
  ]
})
