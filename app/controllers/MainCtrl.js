app.controller("MainCtrl", 
  ["$scope", "$http",
  function($scope, $http) {
    $scope.input;

    // runAjax();

    $scope.runAjax = function(){
      $http.get("http://api.zippopotam.us/us/" + $scope.input)
      .then(function(data){
        console.log(data);
        $scope.ajax = data;
      })
    }
  }
]);