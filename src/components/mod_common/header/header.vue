<template>
    <div class="header-wrap">
        <div class="container">
            <el-row>
                <el-col :span="5">
                   <img src="/static/img/home.png" alt="">     
                </el-col>                
              <el-col :span="15">
                    <el-menu :default-active="activeIndex"
                        mode="horizontal"
                        :router="isRouter"
                        @select="handleSelect"
                        text-color="#fff"
                        background-color="#020001"
                        active-text-color="#ffd04b">
                        <el-menu-item v-for="nav in navs" v-if="!nav.subnav" :index="nav.name">
                            {{nav.text}}
                        </el-menu-item> 
                        <el-submenu v-else :index="nav.name">
                            <template slot="title">{{nav.text}}</template>
                            <el-menu-item v-for="subnav in nav.subnav" :index="subnav.name">{{subnav.text}}</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-col>
                <el-col v-if="username" :span="4" class="header-member">
                    <a href="#/user">当前用户:{{username}}</a>
                </el-col>
                <el-col v-else :span="4" class="header-member">
                    <a href="#/login">登陆</a>
                    <a> | </a>
                    <a href="#/register">注册</a>
                </el-col>
            </el-row>
        </div> 
    </div>
</template>
<style>
.header-wrap{
    background-color: #020001;
}
.header-main {
    background-color: #020001;
}
.header-wrap .el-menu--horizontal{
    border-bottom: none;
}
.header-member{
    line-height: 65px;
}
.header-member a{
    color: #fff;
}
</style>
<script>
/**
 * 页面头部入口，导航、登录信息等
 */


/**
 * name: 作为当前导航选中状态的标志,并且作为点击跳转的路由，和router/index.js中的path保持一致
 * text: 文字
 */

let navs = [{
        text: '首页',
        name: 'home'
    }, {
        text: '专项测试',
        name: 'prod',
        subnav: [{
            text: '压力测试',
            name: 'prottotest'
        },{
            text: '协议测试',
            name: 'prottotest',
        },{
            text: '弱网测试',
            name: 'nettest'
        },{
            text: '客户端性能测试',
            name: 'clienttest'
        }]
    }, {
        text: '下载中心',
        name: 'columns'
    }, {
        text: '用户反馈',
        name: 'tech',
    }];

export default {
    name: 'ComHeader',
    data() {
        return {
            activeIndex: 'home',
            isRouter: true,
            username: window.dev && window.dev.username || ''
        };
    },
    methods: {
        handleSelect(active) {
            this.activeIndex = active;
        }
    },
    computed: {
        navs () {
            let me = this;
            return navs.map(function (nav) {
                return nav;
            });
        }
    }
}

</script>
