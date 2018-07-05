<template>
    <div id="hd-nav">
        <ul>
            <li class="hd-nav-item" v-for="nav in navs"
                v-if="!nav.admin || auth === 'admin'">
                <router-link :to="nav.path"
                             :class="{active: nav.actived}" >{{nav.text}}</router-link>
            </li>
        </ul>

    </div>
</template>
<style lang="stylus" scoped>
    /* 导航样式 */
    #hd-nav{
        width:100%;
        line-height: 70px;
        padding-left: 300px;
    }
    #hd-nav > ul{
        list-style:none;
        padding:0;
        margin:0 auto;
        width:auto;
    }
    #hd-nav .hd-nav-item{
        display:inline-block;
        text-align center
        padding:0;
        width:120px;
    }
    .hd-nav-item > a {
        display: block;
        height:72px;
        opacity: 0.6;
        line-height: 72px;
        border-bottom :2px solid transparent;
    }
    .hd-nav-item > a,
    .hd-nav-item > a:visited,
    .hd-nav-item > a:hover{
        font-size:15px !important;
        color:#ffffff;
        text-decoration: none;
    }
    .hd-nav-item > a:hover{
        color: #fff;
        opacity: 1.0 !important;
    }
    .hd-nav-item > a.active{
        opacity: 1.0 !important;
        background: linear-gradient(rgba(31,45,83,.6),rgba(43,76,128,.6));
        color: #fff;
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
</style>
<script>
    /**
     * 导航条
     */

    import NAV_DATA from '../data/nav';

    export default{

        props: {
            activeTab: String
        },
        data () {
            return {
                auth: MSSP.auth
            };
        },
        computed: {
            navs () {
                let me = this;
                return NAV_DATA.map(function (nav) {
                    nav.actived = me.activeTab === (nav.name || nav.path);
                    return nav;
                });
            }
        }
    };
</script>
