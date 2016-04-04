angular.module('mockdraft.draft', [])

.controller('DraftController', function ($scope, Draft) {
  $scope.draftlist = draftOrder;
})

.factory('Draft', function () {
  var draftSelections = [];
  
  return {

  };

});


// DELETE BELOW ONCE SERVER IS UP
var draftOrder = {
    "1": {
      "pick": "1",
      "round": "1",
      "team": "Tennessee Titans"
    },
    "2":{
      "pick": "2",
      "round": "1",      
      "team": "Cleveland Browns"
    },
    "3":{
      "pick": "3",
      "round": "1",      
      "team": "San Diego Chargers"
    },
    "4":{
      "pick": "4",
      "round": "1",       
      "team": "Dallas Cowboys"
    },
    "5":{
      "pick": "5",
      "round": "1", 
      "team": "Jacksonville Jaguars"
    },
    "6":{
      "pick": "6",
      "round": "1", 
      "team": "Baltimore Ravens"
    },
    "7":{
      "pick": "7",
      "round": "1",
      "team": "San Francisco 49ers"
    },
    "8":{
      "pick": "8",
      "round": "1",
      "team": "Philadelphia Eagles"
    },
    "9":{
      "pick": "9",
      "round": "1",
      "team": "Tampa Bay Bucanners"
    },
    "10":{
      "pick": "10",
      "round": "1",
      "team": "New York Giants"
    },
    "11":{
      "pick": "11",
      "round": "1",
      "team": "Chicago Bears"
    },
    "12":{
      "pick": "12",
      "round": "1",
      "team": "New Orleans Saints"
    },
    "13":{
      "pick": "13",
      "round": "1",
      "team": "Miami Dolphins"
    },
    "14":{
      "pick": "14",
      "round": "1",
      "team": "Oakland Raiders"
    },
    "15":{
      "pick": "15",
      "round": "1",
      "team": "Los Angeles Rams"
    },
    "16":{
      "pick": "16",
      "round": "1",
      "team": "Detroit Lions"
    },
    "17":{
      "pick": "17",
      "round": "1",
      "team": "Atlanta Falcons"
    },
    "18":{
      "pick": "18",
      "round": "1",
      "team": "Indianapolis Colts"
    },
    "19":{
      "pick": "19",
      "round": "1",
      "team": "Buffalo Bills"
    },
    "20":{
      "pick": "20",
      "round": "1",
      "team": "New York Jets"
    },
    "21":{
      "pick": "21",
      "round": "1",
      "team": "Washington Redskins"
    },
    "22":{
      "pick": "22",
      "round": "1",
      "team": "Houston Texans"
    },
    "23":{
      "pick": "23",
      "round": "1",
      "team": "Minnesota Vikings"
    },
    "24":{
      "pick": "24",
      "round": "1",
      "team": "Cincinnati Bengals"
    },
    "25":{
      "pick": "25",
      "round": "1",
      "team": "Pittsburgh Steelers"
    },
    "26":{
      "pick": "26",
      "round": "1",
      "team": "Seattle Seahawks"
    },
    "27":{
      "pick": "27",
      "round": "1",
      "team": "Green Bay Packers"
    },
    "28":{
      "pick": "28",
      "round": "1",
      "team": "Kansas City Chiefs"
    },
    "29":{
      "pick": "29",
      "round": "1",
      "team": "Arizona Cardinals"
    },
    "30":{
      "pick": "30",
      "round": "1",
      "team": "Carolina Panthers"
    },
    "31":{
      "pick": "31",
      "round": "1",
      "team": "Denver Broncos"
    },
    "32":{
      "pick": "32",
      "round": "2",
      "team": "Cleveland Browns"
    }
};