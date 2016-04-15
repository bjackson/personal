var express = require('express');
var app = express();
var path = require("path");
var fs = require('fs');

app.get('/', function (req, res) {
  console.log('New visitor.');
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/avatar', function (req, res) {
  res.sendFile(path.join(__dirname, '/facetranspo.png'))
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
