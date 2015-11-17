app.controller("MainCtrl", 
  ["$scope", "$http", "$location",
  function($scope, $http, $location) {
    console.log($location.path());

    
    $scope.$on('$routeChangeSuccess', function () {
      console.log($location.path());
      if($location.path() === "/zip-to-city"){
        angular.element('#ztcB').css("border-color", "#F07444");
        angular.element('#ztcB').css("color", "#F07444");

        angular.element('#ctzB').css("border-color", "grey");
        angular.element('#ctzB').css("color", "grey");
      }
      else if($location.path() === "/city-to-zip"){
        angular.element('#ctzB').css("border-color", "#F07444");
        angular.element('#ctzB').css("color", "#F07444");

        angular.element('#ztcB').css("border-color", "grey");
        angular.element('#ztcB').css("color", "grey");
      }else{
        console.log(0);
        angular.element('#ctzB').css("border-color", "grey");
        angular.element('#ctzB').css("color", "grey");
        angular.element('#ztcB').css("border-color", "grey");
        angular.element('#ztcB').css("color", "grey");
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