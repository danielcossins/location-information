var app = angular.module("Loc-Inf",[ 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/zip-to-city', {
        templateUrl: 'partials/ztc.html',
        controller: 'ZTCCtrl'
      })
      .when('/city-to-zip', {
        templateUrl: 'partials/ctz.html',
        controller: 'CTZCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);