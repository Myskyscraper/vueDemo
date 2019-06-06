import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import List from '@/components/List'

import Survey from '@/components/Survey'
import Score from '@/components/Score'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/Survey',
      name: 'Survey', 
      component: Survey
    },
    {
      path: '/Score',
      name: 'Score', 
      component: Score
    },
    {

      path: '/Home',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
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
