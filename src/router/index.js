// 路由配置

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/mod_home/index'
import prodIndex from '@/components/mod_prod/index'
import prodDetail from '@/components/mod_prod/detail'
import columns from '@/components/mod_columns/index'
import login from '@/components/mod_login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/prodIndex',
      name: 'prodIndex',
      component: prodIndex
    },
    {
      path: '/prodDetail',
      name: 'prodDetail',
      component: prodDetail
    },
    {
      path: '/columns',
      name: 'columns',
      component: columns
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
