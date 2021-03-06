var express = require('express');
var router = require('../src/routes/routes');

var app = express();

app.use(express.json());

app.use(router);

module.exports = app;
