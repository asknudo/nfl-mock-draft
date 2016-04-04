angular.module('mockdraft.players', [])

.controller('PlayersController', function ($scope, Players) {
  angular.extend($scope, Players);
  $scope.currentPlayers = prospects;
  $scope.showPlayers = function () {
    // $scope.currentPlayers = Players.getCurrent();
  };
  
})

.factory('Players', function () {
  var players = prospects; // ToDo: Grab from Players.JSON when built
  var getCurrent = function () {
    return players;
  };






  // FOR WHEN SERVER IS SET UP. USE LOCAL FILES FOR NOW
  // var getCurrent = function () {
  //   return $http({
  //     method: 'GET',
  //     url: ''
  //   })
  //   .then(function(resp) {
  //     return resp.data;
  //   });
  // };
  return {
    getCurrent: getCurrent
  };
});



// ONLY FOR WHEN SERVER IS NOT SET UP: TESTING LOCAL CLIENT ONLY

var prospects = {  
      "2555498":{  
         "personId":2555498,
         "firstName":"Mehdi",
         "lastName":"Abdesmad",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":22,
         "pos":"DE",
         "height":"6'6\"",
         "weight":284,
         "armLength":"33 3/8",
         "handSize":"9 3/4",
         "expertGrade":5.05,
         "fanPick":null,
         "schoolYear":null
      },
      "2555311":{  
         "personId":2555311,
         "firstName":"Jerell",
         "lastName":"Adams",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":85,
         "pos":"TE",
         "height":"6'5\"",
         "weight":247,
         "armLength":"34 3/8",
         "handSize":"9 3/4",
         "expertGrade":5.46,
         "fanPick":null,
         "schoolYear":null
      },
      "2555428":{  
         "personId":2555428,
         "firstName":"Vernon",
         "lastName":"Adams",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":48,
         "pos":"QB",
         "height":"5'11\"",
         "weight":200,
         "armLength":"30 1/4",
         "handSize":"9 1/8",
         "expertGrade":4.95,
         "fanPick":null,
         "schoolYear":null
      },
      "2555390":{  
         "personId":2555390,
         "firstName":"Bralon",
         "lastName":"Addison",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":48,
         "pos":"WR",
         "height":"5'9\"",
         "weight":197,
         "armLength":"29 1/2",
         "handSize":"9 1/8",
         "expertGrade":5.09,
         "fanPick":null,
         "schoolYear":null
      },
      "2555408":{  
         "personId":2555408,
         "firstName":"Roberto",
         "lastName":"Aguayo",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":3,
         "pos":"K",
         "height":"6'0\"",
         "weight":207,
         "armLength":"31 3/4",
         "handSize":"9 7/8",
         "expertGrade":5.5,
         "fanPick":null,
         "schoolYear":null
      },
      "2555192":{  
         "personId":2555192,
         "firstName":"Siaosi",
         "lastName":"Aiono",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":80,
         "pos":"C",
         "height":"6'2\"",
         "weight":312,
         "armLength":"",
         "handSize":"",
         "expertGrade":4.75,
         "fanPick":null,
         "schoolYear":null
      },
      "2555519":{  
         "personId":2555519,
         "firstName":"Dominique",
         "lastName":"Alexander",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":17,
         "pos":"ILB",
         "height":"6'0\"",
         "weight":232,
         "armLength":"32 1/4",
         "handSize":"9",
         "expertGrade":5.49,
         "fanPick":null,
         "schoolYear":null
      },
      "2555177":{  
         "personId":2555177,
         "firstName":"Mackensie",
         "lastName":"Alexander",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":1,
         "pos":"CB",
         "height":"5'10\"",
         "weight":190,
         "armLength":"31 3/8",
         "handSize":"9 1/8",
         "expertGrade":5.98,
         "fanPick":null,
         "schoolYear":null
      },
      "2555146":{  
         "personId":2555146,
         "firstName":"Vadal",
         "lastName":"Alexander",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":91,
         "pos":"OG",
         "height":"6'5\"",
         "weight":326,
         "armLength":"35 1/4",
         "handSize":"10 1/2",
         "expertGrade":5.42,
         "fanPick":null,
         "schoolYear":null
      },
      "2555365":{  
         "personId":2555365,
         "firstName":"Brandon",
         "lastName":"Allen",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":89,
         "pos":"QB",
         "height":"6'1\"",
         "weight":217,
         "armLength":"31 1/4",
         "handSize":"8 7/8",
         "expertGrade":5.45,
         "fanPick":null,
         "schoolYear":null
      },
      "2555183":{  
         "personId":2555183,
         "firstName":"Jack",
         "lastName":"Allen",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":34,
         "pos":"C",
         "height":"6'1\"",
         "weight":294,
         "armLength":"32 1/4",
         "handSize":"10 1/8",
         "expertGrade":5.51,
         "fanPick":null,
         "schoolYear":null
      },
      "2555211":{  
         "personId":2555211,
         "firstName":"Geronimo",
         "lastName":"Allison",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":30,
         "pos":"WR",
         "height":"6'3\"",
         "weight":196,
         "armLength":"32 7/8",
         "handSize":"9 1/2",
         "expertGrade":4.86,
         "fanPick":null,
         "schoolYear":null
      },
      "2555407":{  
         "personId":2555407,
         "firstName":"Robby",
         "lastName":"Anderson",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":27,
         "pos":"WR",
         "height":"6'3\"",
         "weight":190,
         "armLength":"",
         "handSize":"",
         "expertGrade":4.93,
         "fanPick":null,
         "schoolYear":null
      },
      "2555410":{  
         "personId":2555410,
         "firstName":"Stephen",
         "lastName":"Anderson",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":47,
         "pos":"TE",
         "height":"6'2\"",
         "weight":230,
         "armLength":"32",
         "handSize":"9 1/4",
         "expertGrade":5,
         "fanPick":null,
         "schoolYear":null
      },
      "2556211":{  
         "personId":2556211,
         "firstName":"Danny",
         "lastName":"Anthrop",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":39,
         "pos":"WR",
         "height":"6'0\"",
         "weight":193,
         "armLength":"",
         "handSize":"",
         "expertGrade":4.7,
         "fanPick":null,
         "schoolYear":null
      },
      "2555277":{  
         "personId":2555277,
         "firstName":"Eli",
         "lastName":"Apple",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":37,
         "pos":"CB",
         "height":"6'1\"",
         "weight":199,
         "armLength":"31 3/8",
         "handSize":"9 3/8",
         "expertGrade":6,
         "fanPick":null,
         "schoolYear":null
      },
      "2555253":{  
         "personId":2555253,
         "firstName":"Ugonna",
         "lastName":"Awuruonye",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":6926,
         "pos":"DE",
         "height":"6'4\"",
         "weight":252,
         "armLength":"",
         "handSize":"",
         "expertGrade":4.8,
         "fanPick":null,
         "schoolYear":null
      },
      "2555465":{  
         "personId":2555465,
         "firstName":"DeMarcus",
         "lastName":"Ayers",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":58,
         "pos":"WR",
         "height":"5'9\"",
         "weight":182,
         "armLength":"31 1/4",
         "handSize":"9 1/4",
         "expertGrade":5.02,
         "fanPick":null,
         "schoolYear":null
      },
      "2555499":{  
         "personId":2555499,
         "firstName":"Sterling",
         "lastName":"Bailey",
         "pickAnalysis":null,
         "hasAnalysis":false,
         "video":null,
         "pick":null,
         "college":83,
         "pos":"DE",
         "height":"6'4\"",
         "weight":285,
         "armLength":"33 3/8",
         "handSize":"10 1/4",
         "expertGrade":5.18,
         "fanPick":null,
         "schoolYear":null
      }
    };
  var order = {
  "order": [
    {
      "pick": "1",
      "round": "1",
      "team": "Tennessee Titans"
    },
    {
      "pick": "2",
      "round": "1",      
      "team": "Cleveland Browns"
    },
    {
      "pick": "3",
      "round": "1",      
      "team": "San Diego Chargers"
    },
    {
      "pick": "4",
      "round": "1",       
      "team": "Dallas Cowboys"
    },
    {
      "pick": "5",
      "round": "1", 
      "team": "Jacksonville Jaguars"
    },
    {
      "pick": "6",
      "round": "1", 
      "team": "Baltimore Ravens"
    },
    {
      "pick": "7",
      "round": "1",
      "team": "San Francisco 49ers"
    },
    {
      "pick": "8",
      "round": "1",
      "team": "Philadelphia Eagles"
    },
    {
      "pick": "9",
      "round": "1",
      "team": "Tampa Bay Bucanners"
    },
    {
      "pick": "10",
      "round": "1",
      "team": "New York Giants"
    },
    {
      "pick": "11",
      "round": "1",
      "team": "Chicago Bears"
    },
    {
      "pick": "12",
      "round": "1",
      "team": "New Orleans Saints"
    },
    {
      "pick": "13",
      "round": "1",
      "team": "Miami Dolphins"
    },
    {
      "pick": "14",
      "round": "1",
      "team": "Oakland Raiders"
    },
    {
      "pick": "15",
      "round": "1",
      "team": "Los Angeles Rams"
    },
    {
      "pick": "16",
      "round": "1",
      "team": "Detroit Lions"
    },
    {
      "pick": "17",
      "round": "1",
      "team": "Atlanta Falcons"
    },
    {
      "pick": "18",
      "round": "1",
      "team": "Indianapolis Colts"
    },
    {
      "pick": "19",
      "round": "1",
      "team": "Buffalo Bills"
    },
    {
      "pick": "20",
      "round": "1",
      "team": "New York Jets"
    },
    {
      "pick": "21",
      "round": "1",
      "team": "Washington Redskins"
    },
    {
      "pick": "22",
      "round": "1",
      "team": "Houston Texans"
    },
    {
      "pick": "23",
      "round": "1",
      "team": "Minnesota Vikings"
    },
    {
      "pick": "24",
      "round": "1",
      "team": "Cincinnati Bengals"
    },
    {
      "pick": "25",
      "round": "1",
      "team": "Pittsburgh Steelers"
    },
    {
      "pick": "26",
      "round": "1",
      "team": "Seattle Seahawks"
    },
    {
      "pick": "27",
      "round": "1",
      "team": "Green Bay Packers"
    },
    {
      "pick": "28",
      "round": "1",
      "team": "Kansas City Chiefs"
    },
    {
      "pick": "29",
      "round": "1",
      "team": "Arizona Cardinals"
    },
    {
      "pick": "30",
      "round": "1",
      "team": "Carolina Panthers"
    },
    {
      "pick": "31",
      "round": "1",
      "team": "Denver Broncos"
    },
    {
      "pick": "32",
      "round": "2",
      "team": "Cleveland Browns"
    }
  ]
};

