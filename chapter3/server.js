process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');

var app = express().listen(3000);
//module.exports = app;