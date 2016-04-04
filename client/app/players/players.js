angular.module('mockdraft.players', [])

.controller('PlayersController', function ($scope, Players) {


})

.factory('Players', function () {
  var players = {}; // ToDo: Grab from Players.JSON when built







  // FOR WHEN SERVER IS SET UP. USE LOCAL FILES FOR NOW
  // var currentPlayers = function () {
  //   return $http({
  //     method: 'GET',
  //     url: ''
  //   })
  //   .rthen(function(resp) {
  //     return resp.data;
  //   });
  // };

});