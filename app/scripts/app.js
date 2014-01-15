'use strict';

angular.module('steamcoopApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/compare/:playerOne&:playerTwo', {
        templateUrl: 'views/compare.html',
        controller: 'CompareCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
