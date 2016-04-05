angular.module('mockdraft.players', ['mockdraft.draft'])

.controller('PlayersController', function ($scope, Players) {
  // $scope.currentPlayers = prospects;
  $scope.drafted = false;
  $scope.getCurrentPlayers = function () {
    Players.getData()
    .then( function (data) {
      $scope.currentPlayers = data;
    })
    .catch(function (err) {
      console.error(err);
    });
  };
  $scope.showProfile = function (player) {
    $scope.currentProfile = player;
  };
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


