var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // send HTTP 200 OK
  response.writeHead(200);
  // fs.readFileSync returns a buffer
  buf = fs.readFileSync('index.html');
  response.end(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
