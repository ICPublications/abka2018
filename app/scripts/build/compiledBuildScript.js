'use strict';

var express = require('express'); //get the express module
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express(); //create a new instance of that class
var config = require('../../../webpack.config.js');
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, function () {
    return console.log('Example app listening on port 3000!');
});
