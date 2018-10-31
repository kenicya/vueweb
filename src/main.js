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
import uploader from 'vue-simple-uploader'
import { ftruncate } from 'fs';
//import App from './App.vue'

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
    //console.log('>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<')
    console.log(window.location.href)
    var url = window.location.href
    var splitCodes = url.split('code=')
    console.log(splitCodes)
    if(splitCodes.length == 2){
        var fd = new FormData()
        fd.append('code',splitCodes[1])
        let config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'            
              }
        }
        axios.post(window.dev.url + "/api" + '/ssologin',fd,config)
        .then(function(res){
            console.log(res)
            var stateObject = {};
            var title = "lttest";
            var newUrl = "http://192.168.129.33:8100/#/home";
            history.pushState(stateObject,title,newUrl);
            window.dev.username =  res.username
            // window.location.hash="#/home"
           
            initApp();
        })
    }else{
        axios.post(window.dev.url + "/api" +  '/checklogin')
        .then(function(res){
            if (res.state == 1 ) {
                window.dev.username =  res.username
            } else {
              window.location.hash="/home"
            }
            initApp();
        })
    }
    
}

function init() {
     window.dev = {
        url: '',
        username: ''
    }
}

init();
checkLogin();