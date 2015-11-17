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
          Country: data.data.country  + " (" + data.data['country abbreviation'] + ")",
          // 'Country Abbreviation': data.data['country abbreviation'],
          'Zip Code': data.data['post code'],
          Latitude: data.data.places[0].latitude,
          Longitude: data.data.places[0].longitude,
          City: data.data.places[0]['place name'],
          State: data.data.places[0].state + " (" + data.data.places[0]['state abbreviation'] + ")"
          // 'State Abbreviation': data.data.places[0]['state abbreviation']
        };
        console.log(obj);
        $scope.ajax = obj;
      });
    };
  }
]);