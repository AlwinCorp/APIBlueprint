var express = require('express');
var debug = require('debug')('app');

var app = express();
var kernel = require('./kernel')(app);

module.exports = app;