var express = require('express');
var path = require('path');

var app = new express();
var port = 3003;

app.use(express.static(path.join(__dirname)));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname) + 'index.html');
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
