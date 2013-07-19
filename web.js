var express = require('express');
var fs = require('fs');
var myFile = 'index.html';
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // send HTTP 200 OK
  response.writeHead(200);
  // fs.readFileSync returns a buffer
  buf = fs.readFileSync(myFile);
  // response.end() will stringify the buffer, saving us a call to toString()
  response.end(buf);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
