angular.module('assessment')
  .directive('productsDir', function(){

    return {
      restrict: 'E',
      templateUrl: './views/productsDir.html',
      controller: 'shopCtrl'
    }

  })
