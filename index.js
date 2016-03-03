var express = require('express');
var app = express();
var path = require("path");
var fs = require('fs');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
