var express = require('express');
var app = express();
var path = require("path");
var fs = require('fs');

app.set('trust proxy', 'loopback');

app.get('/', function (req, res) {
  let currentTime = new Date().toISOString().
    replace(/T/, ' ').      // replace T with a space
    replace(/\..+/, '');

  console.log(`${req.ip} — ${currentTime}`);

  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/avatar', function (req, res) {
  res.sendFile(path.join(__dirname, '/facetranspo.png'))
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
