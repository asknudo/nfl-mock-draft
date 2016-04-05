var express = require('express');
var path = require('path');
var app = express();
var parse = require('body-parser');
var MockDraft = require('./db.js');

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
  var name = req.body.name;
  var savedDraft = req.body.draft;

  MockDraft.findOne({name: name})
    .then(function(found) {
      if (found) {
        console.log("Name already exists in DB");
      } else {
        var current = new MockDraft({
          name: name,
          draft: savedDraft
        });
        current.save(function(err, newMock) {
          console.log(newMock + " is saved");
        });
      }
    });

});


module.exports = app;
