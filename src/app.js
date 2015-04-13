var express = require('express');
var debug = require('debug')('app');

var app = express();
var routes = require('./routes/routes')(app);

debug('[Changement du message -- ]');

module.exports = app;