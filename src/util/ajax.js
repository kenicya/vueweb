/**
 * ajax.js
 * @description: 封装AJAX请求
 * @author: zengkp
 * @date: 2018/1/8
 */

import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;
import logger from './logger';
import { MessageBox, Loading } from 'element-ui';

let inited = false;
let $showErr = function (msg) {
    MessageBox.alert(msg.msg, msg.subtitle, {
        type: 'error',
        confirmButtonText: '确定'
    });
}
let loadingInstance;

/**
 * 初始化 axios 一些统一的配置,
 * 支持一些配置:
 * 如 {
 *  silent: 是否在请求失败的时候弹窗显示失败信息, true的时候不弹窗
 * }
 */
export function init () {
    if (inited) {
        return;
    }
    inited = true;
    window.axios = axios;
}

function setMask (options, isMask) {
    if (isMask) {
        options = options || {};
        loadingInstance = Loading.service({
            target: options.target || 'document.body',
            text: options.text || '加载中...',
            background: options.bg || ''
        });
    }else if (loadingInstance) {
        loadingInstance.close();
    }
}

axios.interceptors.request.use(function (config) {
    Object.assign(config.data || {}, {
        query_id: `Query_${new Date().getTime()}`
    });

    /*设置遮罩*/
    if (config.mask !== false) {
        setMask(config.mask, true);
    }
    return config;
});

Vue.prototype.$ajax = function (options, ...args) {
    return axios(options, ...args).catch(res => {
        res.jsonData = {
            success: false,
            msg: res.body || res.data || '网络异常，请检查网络后重试'
        };
        return res;
    }).then(res => res.jsonData);
};

let failureData = {
    success: false,
    msg: {
        subtitle: '网络错误',
        msg: '网络异常，请检查网络后重试'
    }
};

axios.interceptors.response.use(function (response) {
    let config = response.config;
    if (config.mask !== false) {
        setMask(config.mask, false);
    }

    if (response.data && response.data.data === 'need_login') {
        // 登陆重定向
        return;
    }

    if (!response.data || !response.data.success) { //没有返回success认为是失败
        if (!config.silent) {
            $showErr(response.data && response.data.msg ? {
                subtitle: '操作失败',
                msg: response.data.msg
            } : failureData.msg);
            logger.warn('[ajax] [response==>json] error: %o', response);
        }
        return Promise.reject(response);
    }
    return response.data;
}, function (error) {
    let response = error.response;
    if (response) {
        logger.warn('[ajax] [response==>json] error: %o. %o', response);
    }
    return Promise.reject(error);
});

