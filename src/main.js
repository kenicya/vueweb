// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 所有页面的总入口

import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './components/mod_common/style/common.css';
import ComHeader from './components/mod_common/header/header.vue';
import router from './router';
import * as Ajax from './util/ajax';

Vue.use(ElementUI);
// 初始化 ajax
Ajax.init();

Vue.config.productionTip = false

/* eslint-disable no-new */

let app;

function initApp () {
    app = new Vue({
        router,
        template: `<div id="page"><com-header/><router-view/></div>`,
        components: {
            ComHeader
        }
    });
    app.$mount('#app');

}

async function checkLogin () {

    axios.post(window.dev.url + '/checklogin')
    .then(function(res){
        if (res.state == 1 ) {
            window.dev.username =  res.username
        } else {
          window.location.hash="/home"
        }
        initApp();
    })
}

function init() {
     window.dev = {
        url: '',
        username: ''
    }
}

init();
checkLogin();