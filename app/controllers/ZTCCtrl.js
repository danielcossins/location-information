app.controller("ZTCCtrl", 
  ["$scope", "$http",
  function($scope, $http) {
    $scope.input = "";

    // runAjax();

    $scope.getLocation = function(){
      console.log("clicked");
      // $http.get("http://api.zippopotam.us/us/ks/spring hill/18950")
      $http.get("http://api.zippopotam.us/us/" + $scope.input)
      .then(function(data){
        console.log(data);
        $scope.ajax = data;
      });
    };
  }
]);