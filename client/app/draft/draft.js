angular.module('mockdraft.draft', [])

.controller('DraftController', function ($scope, Draft) {
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

  // Initialize
  $scope.getDraftlist();
})

.factory('Draft', function ($http) {
  var draftSelections = [];
  var getData = function () {
    console.log('getData is activated (19)');
    return $http({
      method: 'GET',
      url: 'http://localhost:8000/draftorder.json'
    }).
    then(function(res) {
      console.log(res.data.order);
      return res.data.order;
    });
  };

  return {
    getData: getData
  };

});

