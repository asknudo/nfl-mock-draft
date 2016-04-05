var express = require('express');
var path = require('path');
var app = express();
var parse = require('body-parser');

// Port is either Heroku port or 8000
var port = process.env.PORT || 8000;
app.listen(port);
console.log('Server now listening on port ' + port);



app.use('/', express.static(__dirname + '/../client/'));



// Serve up Players list
app.get('/players.json', function (req, res) {
  // res.writeHead(200, { "Content-Type": "text/html" });
  res.sendFile(path.join(__dirname + '/players.json'));

});


// Serve up the Draft Order
app.get('/draftorder.json', function (req, res) {
  // res.writeHead(200, { "Content-Type": "text/html" });
  res.sendFile(path.join(__dirname + '/draftorder.json'));

});

var jsonParse = parse.json();

app.post('/mockdraft', jsonParse, function (req, res) {
  console.log(req.body);

});


module.exports = app;
