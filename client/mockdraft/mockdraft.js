angular.module('list', [
  'ui.router'
  ])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('mockdrafts', {
      url: '/',
      views: {
        'listview': {
          templateUrl: '/mockdraft/listview.html',
          controller: 'MockController'
        },
        'draftview': {
          templateUrl: '/mockdraft/draftview.html',
          controller: 'MockController'
        }
      }
    });
  $urlRouterProvider.otherwise('/');

}])
.controller('MockController', function($scope, $rootScope, Lists, Orders) {
  $scope.getCurrentList = function () {
    Lists.getData()
    .then(function (data) {
      $scope.currentList = data;
    })
    .catch(function (err) {
      console.error(err);
    });
  };
  $scope.getOrder = function () {
    Orders.getData()
    .then(function (data) {
      $scope.draftlist = data;
    })
    .catch(function (err) {
      console.error(err);
    });

  };
  $scope.grabMock = function (mockObj) {
    console.log(mockObj);
    $rootScope.saved = mockObj;
  };


  // Initialize
  $scope.getCurrentList();
  $scope.getOrder();


})

.factory('Lists', function($http) {

  var getData = function () {
    return $http({
      method: 'GET',
      url: 'savedLists'
    })
    .then(function (res) {
      return res.data;
    });
 
  };

  return {
    getData: getData
  };
})

.factory('Orders', function($http) {

  var getData = function () {
    return $http({
      method: 'GET',
      url: '../draftorder.json'
    })
    .then(function (res) {
      return res.data.order;
    });
  };

  return {
    getData: getData
  };

});
