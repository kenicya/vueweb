/**
 * Created by ued on 2016/11/7.
 */

/**
 * UI 日志接口封装
 * @param   {String}   type 日志类型
 * @returns {Function}      返回实际接口
 * @private
 */
function _logger (type) {
    return function (...args) {
        if (process.env.NODE_ENV === 'development' && window.console) {
            if (window.console[type]) {
                window.console[type].apply(window.console, args);
            }
        }
    };
}

let debug = _logger('debug');
let info = _logger('info');
let log = _logger('log');
let warn = _logger('warn');
let error = _logger('error');
let table = _logger('table');

export default {
    debug,
    info,
    log,
    warn,
    error,
    table
};
