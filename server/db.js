var mongoose = require('mongoose');

// Link to Mongolab or Local db
mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/nfldb';


mongoose.connect(mongoURI); 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection to data');
});

module.exports = mongoose;