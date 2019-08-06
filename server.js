const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

// 生产express 实例用
const app = express();
const config = require('./webpack.config');
// 使用webpack 编译配置文件
const compiler = webpack(config);
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// 告诉express 使用 webpack开放中间件模块和 config
// 配置文件作为一个基础使用
app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}));

// 注册监听端口
app.listen(3000,function () {
    console.log('Example app listening on port 3000!\n');
});

