angular.module('mockdraft.draft', ['mockdraft.players'])

.controller('DraftController', function ($scope, $rootScope, Draft) {
  // $scope.draftlist = draftOrder;
  
  

  $scope.getDraftlist = function () {
    Draft.getData()
      .then(function (data) {
        $scope.draftlist = data;
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  $scope.draftMe = function (playerObj) {
    Draft.addPlayer(playerObj);
    $rootScope.draft = Draft.getAllPicks(); // Give draft selection access to templates
  };
  
  // Grab pick from draft selections collection
  $scope.getPick = function ($scope, currentRound) {
    Draft.getCurrentPick(currentRound);
  };

  // Initialize
  $scope.draftviewcollection = Draft.getAllPicks();
  $scope.getDraftlist();
})

.factory('Draft', function ($http) {

  // Save draft selections here
  var draftSelections = [];


  var getData = function () {
    return $http({
      method: 'GET',
      url: 'draftorder.json' // Points to /server/ -> draftorder.json
    })
    .then(function(res) {
      return res.data.order;
    });
  };

  var getCurrentPick = function (i) {
    return draftSelections[i];
  };

  var addPlayer = function (player) {
    draftSelections.push(player);
    
  };

  var getAllPicks = function() {
    return draftSelections;
  };

  return {
    getData: getData,
    getCurrentPick: getCurrentPick,
    addPlayer: addPlayer,
    getAllPicks: getAllPicks
  };

});

