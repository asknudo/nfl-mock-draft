var express = require('express');

var app = express();

// Port is either Heroku port or 8000
var port = process.env.PORT || 8000;
app.listen(port);
console.log('Server now listening on port ' + port);


module.exports = app;

