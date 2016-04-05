angular.module('mockdraft', [
  'mockdraft.draft',
  'mockdraft.players',
  'ui.router'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'playersView': {
          templateUrl: '/app/players/players.html',
          controller: 'PlayersController'
        },
        'draftView': {
          templateUrl: '/app/draft/draft.html',
          controller: 'DraftController'
        }
      }
    });
  $urlRouterProvider.otherwise('/');

}])
.controller('MainController', function ($scope, $rootScope, $http) {
  $scope.saveMockDraft = function (name, draft) {
    if (name.length) {
      $http.post('/mockdraft', {name: name, draft: draft});
    } else {
      console.log('Please provide a name');
    }
  };

});