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
  }
]);