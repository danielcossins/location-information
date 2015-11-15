app.controller("CTZCtrl", 
  ["$scope", "$http",
  function($scope, $http) {
    $scope.state = "AL";
    $scope.city = "";
    $scope.places = [];

    // runAjax();

    $scope.getLocation = function(){
      console.log($scope.state);
      console.log($scope.city);
      // $http.get("http://api.zippopotam.us/us/ks/spring hill/18950")
      $http.get("http://api.zippopotam.us/us/" + $scope.state + "/" + $scope.city)
      .then(function(data){
        console.log(data);
        var obj = {
          country: data.data.country,
          countryAbbr: data.data['country abbreviation'],
          city: data.data['place name'],
          state: data.data.state,
          stateAbbr: data.data['state abbreviation']
        };
        for(var i=0; i<data.data.places.length; i++){
          $scope.places.push(data.data.places[i]);
        }
        console.log(obj);
        $scope.ajax = obj;
      });
    };
  }
]);