// 路由配置

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import subpage from '@/components/subpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/subpage',
      name: 'subpage',
      component: subpage
    }
  ]
})
