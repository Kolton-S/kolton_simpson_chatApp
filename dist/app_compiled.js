'use strict';

var express = require('express'); // just like an include or require with PHP
var app = express(); // create an instance of our application via simpleExpress
var logger = require('./myModule');

var something = "somethingElse";

app.get('/', function (req, res) {
  logger.logIt('hit main route');
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (req, res) {
  logger.logIt('hit contact route');
  res.sendFile(__dirname + '/contact.html');
});

app.get('/users', function (req, res) {
  res.sendFile(__dirname + '/users.html');
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});
