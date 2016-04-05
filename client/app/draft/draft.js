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
    return $http({
      method: 'GET',
      url: 'draftorder.json' // Points to /server/ -> draftorder.json
    })
    .then(function(res) {
      return res.data.order;
    });
  };

  return {
    getData: getData
  };

});

