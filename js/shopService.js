angular.module('assessment').service('shopService', function($http){

var baseUrl = "http://practiceapi.devmounta.in/products/"

this.getProducts = function() {
  return $http.get(baseUrl).then(function(response){
    console.log(response.data);
    return response.data;
  })
}



})
