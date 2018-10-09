// 路由配置

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/mod_home/index'
import prodIndex from '@/components/mod_prod/index'
import prodDetail from '@/components/mod_prod/detail'
import columns from '@/components/mod_columns/index'
import login from '@/components/mod_login/index'
import register from '@/components/mod_register/index'
import admin from '@/components/mod_admin/index'
import adminReport from '@/components/mod_admin/adminReport'
import adminUpFiled from '@/components/mod_admin/adminUpFiled'
import clientReport from '@/components/mod_admin/clientReport'


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
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/adminReport',
      name: 'adminReport',
      component: adminReport
    },
    {
      path: '/adminUpFiled',
      name: 'adminUpFiled',
      component: adminUpFiled
    },
    {
      path: '/clientReport',
      name: 'clientReport',
      component: clientReport
    }    
  ]
})
