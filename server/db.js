var mongoose = require('mongoose');

// Link to Mongolab or Local db
mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/nfl_mock_draft';


mongoose.connect(mongoURI); 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection to data');
});

var mockDrafts = mongoose.Schema( {
  name: String,
  draft: [{
    personId: Number,
    firstName: String,
    lastName: String,
    pickAnalysis: String,
    hasAnalysis: String,
    video: String,
    pick: String,
    college: String,
    pos: String,
    height: String,
    weight: Number,
    armLength: String,
    handSize: String,
    expertGrade: Number,
    fanPick: Number,
    schoolYear: Number   
  }]
});

mockDrafts.set('validateBeforeSave', false); // NFL.com returns JSON null on some data

var MockDraft = mongoose.model('MockDraft', mockDrafts);

module.exports = MockDraft;