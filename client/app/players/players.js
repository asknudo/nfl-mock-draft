angular.module('mockdraft.players', [])

.controller('PlayersController', function ($scope, Players) {
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
      console.log(res.data.prospects);
      return res.data.prospects;
    });
  };

  return {
    getData: getData
  };
});


