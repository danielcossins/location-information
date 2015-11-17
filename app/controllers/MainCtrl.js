app.controller("MainCtrl", 
  ["$scope", "$http", "$location",
  function($scope, $http, $location) {
    console.log($location.path());

    
    $scope.$on('$routeChangeSuccess', function () {
      console.log($location.path());
      if($location.path() === "/zip-to-city"){
        console.log(1);
      }
      else if($location.path() === "/city-to-zip"){
        console.log(2);
      }else{
        console.log(0);
      }
    });
    // $scope.input;

    // // runAjax();

    // $scope.getLocation = function(){
    //   $http.get("http://api.zippopotam.us/us/ks/spring hill/18950")
    //   // $http.get("http://api.zippopotam.us/us/" + $scope.input)
    //   .then(function(data){
    //     console.log(data);
    //     $scope.ajax = data;
    //   })
    // }
  }
]);