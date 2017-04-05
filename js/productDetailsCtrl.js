angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams){

  $scope.getProducts = function() {
    shopService.getProducts().then(function(response) {
      $scope.items = response;
      for (var i = 0; i < $scope.items.length; i++) {
        if ($scope.items[i].id == $stateParams.id){

        $scope.item = $scope.items[i]
      }
      }
    })
  }
  $scope.getProducts();

})
