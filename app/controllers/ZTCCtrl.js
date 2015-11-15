app.controller("ZTCCtrl", 
  ["$scope", "$http",
  function($scope, $http) {
    $scope.country = "US";
    $scope.input = "";

    // runAjax();

    $scope.getLocation = function(){
      console.log($scope.country);
      // $http.get("http://api.zippopotam.us/us/ks/spring hill/18950")
      $http.get("http://api.zippopotam.us/" + $scope.country + "/" + $scope.input)
      .then(function(data){
        console.log(data);
        var obj = {
          country: data.data.country,
          countryAbrev: data.data['country abbreviation'],
          zipCode: data.data['post code'],
          lat: data.data.places[0].latitude,
          lon: data.data.places[0].longitude,
          city: data.data.places[0]['place name'],
          state: data.data.places[0].state,
          stateAbrev: data.data.places[0]['state abbreviation']
        };
        console.log(obj);
      });
    };
  }
]);