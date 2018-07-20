// 路由配置

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/mod_home/index'
import prodIndex from '@/components/mod_prod/index'
import prodDetail from '@/components/mod_prod/detail'
import columns from '@/components/mod_columns/index'
import login from '@/components/mod_login/index'
import register from '@/components/mod_register/index'
import user from '@/components/mod_user/index'
import addprod from '@/components/mod_user/addprod'
import creatprod from '@/components/mod_user/creatprod'
import amendprod from '@/components/mod_user/amendprod'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },{
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
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/addprod',
      name: 'addprod',
      component: addprod
    },
    {
      path: '/creatprod',
      name: 'creatprod',
      component: creatprod
    },
    {
      path: '/amendprod',
      name: 'amendprod',
      component: amendprod
    } 
  ]
})
