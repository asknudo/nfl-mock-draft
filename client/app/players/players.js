angular.module('mockdraft.players', ['mockdraft.draft'])

.controller('PlayersController', function ($scope, $rootScope, Players, Draft) {
  // $scope.currentPlayers = prospects;
  $scope.getCurrentPlayers = function () {
    Players.getData()
    .then( function (data) {
      $scope.currentPlayers = data;
    })
    .catch(function (err) {
      console.error(err);
    });
  };
    // Add player to draft selections collection
  $scope.draftMe = function (playerObj) {
    console.log(playerObj);
    Draft.addPlayer(playerObj);
    $rootScope.testVariable = Draft.getAllPicks();
  };

  // Initialize 
  $scope.getCurrentPlayers();
  
})

.factory('Players', function ($http) {
  // var players = prospects; // ToDo: Grab from Players.JSON when built
  var getData = function () {
    console.log('Player.getData is ran (24)');
    return $http({
      method: 'GET',
      url: 'players.json'
    })
    .then(function (res) {
      return res.data.prospects;
    });
  };

  return {
    getData: getData
  };
});


