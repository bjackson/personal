var express = require('express');
var app = express();

var fs = require('fs');

fs.writeFileSync('/tmp/personal.pid', `${process.pid}`);

app.get('/', function (req, res) {
  res.send('Hello World TEST!');
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
