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
          // controller: ''
        }
      }
    });
  $urlRouterProvider.otherwise('/');

}]);