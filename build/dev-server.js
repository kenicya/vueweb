var path = require('path');
var fs = require('fs');
var https = require('https');
var http = require('http');
var config = require('../config');
if (!process.env.NODE_ENV) process.env.NODE_ENV = config.dev.env;
var express = require('express');
var webpack = require('webpack');
var opn = require('opn');
var webpackConfig =require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port;
var host = process.env.HOST || config.dev.host;
// Define HTTP proxies to your custom API backend

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' });
        cb();
    })
});


// 请求代码与数据mock
app.use(require('@self/mock-plugin')({
    target: 'http://192.168.131.78:5000'
}));
  

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
app.use(hotMiddleware);

var server = http.createServer(app);

module.exports = server.listen(port, host, function (err) {
    if (err) {
        console.log(err);
        return
    }
    var uri = (config.dev.https ? 'https://' : 'http://') + (host || 'localhost') + ':' + port;
    console.log('Listening at ' + uri + '\n');
    opn(uri);
});
