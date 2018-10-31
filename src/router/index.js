// 路由配置

import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/mod_home/index'
import pressurettest from '@/components/mod_home/pressurettest'
import clienttest from '@/components/mod_home/clienttest'
import nettest from '@/components/mod_home/nettest'
import prottotest from '@/components/mod_home/prottotest'
import prodIndex from '@/components/mod_prod/index'
import prodDetail from '@/components/mod_prod/detail'
import columns from '@/components/mod_columns/index'
import login from '@/components/mod_login/index'
import register from '@/components/mod_register/index'
import user from '@/components/mod_user/index'
import addprod from '@/components/mod_user/addprod'
import creatprod from '@/components/mod_user/creatprod'
import amendprod from '@/components/mod_user/amendprod'
import report from '@/components/mod_user/report'
import robot from '@/components/mod_robot/index'



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
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/robot',
      name: 'robot',
      component: robot
    },
    {
      path: '/clienttest',
      name: 'clienttest',
      component: clienttest
    },
    {
      path: '/nettest',
      name: 'nettest',
      component: nettest
    },
    {
      path: '/prottotest',
      name: 'prottotest',
      component: prottotest
    },
    {
      path: '/pressurettest',
      name: 'pressurettest',
      component: pressurettest
    }
  ]
})
