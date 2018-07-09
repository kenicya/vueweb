<template>
    <div class="header-wrap">
        <div class="container">
            <el-row>
              <el-col :span="20">
                    <el-menu :default-active="activeIndex"
                        mode="horizontal"
                        :router="isRouter"
                        @select="handleSelect"
                        text-color="#fff"
                        background-color="#131e2a"
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
                <el-col :span="4" class="header-member">
                    <a href="#/login">登陆</a>|
                    <a href="">注册</a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style>
.header-wrap{
    background-color: #131e2a;
}
.header-wrap .el-menu--horizontal{
    border-bottom: none;
}
.header-member{
    line-height: 60px;
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
        text: '产品',
        name: 'prod',
        subnav: [{
            text: '性能压测',
            name: 'pressureTest'
        },{
            text: 'UI测试',
            name: 'UITest',
        },{
            text: '功能测试',
            name: 'SystemTest'
        }]
    }, {
        text: '专栏',
        name: 'columns'
    }, {
        text: '核心技术',
        name: 'tech',
    }, {
        text: '帮助中心',
        name: 'help',
    }, {
        text: '关于我们',
        name: 'aboutus',
    }];

export default {
    name: 'ComHeader',
    data() {
        return {
            activeIndex: 'home',
            isRouter: true
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
