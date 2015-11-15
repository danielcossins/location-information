app.controller("CTZCtrl", 
  ["$scope", "$http",
  function($scope, $http) {
    $scope.state = "";
    $scope.city = "";

    // runAjax();

    $scope.getLocation = function(){
      console.log($scope.state);
      console.log($scope.city);
      // $http.get("http://api.zippopotam.us/us/ks/spring hill/18950")
      $http.get("http://api.zippopotam.us/us/" + $scope.state + "/" + $scope.city)
      .then(function(data){
        console.log(data);
        $scope.ajax = data;
      });
    };
  }
]);