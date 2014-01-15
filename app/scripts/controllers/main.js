'use strict';

angular.module('steamcoopApp')
  .controller('MainCtrl', ['$scope', '$location', 'steamids', 'errors', function ($scope, $location, steamids, errors) {
    $scope.steamids = steamids;
    $scope.errors = errors;

    $scope.comparePlayers = function() {
      if (steamids.playerOne === '') {
        errors.playerOne.empty = true;
      } else {
        errors.playerOne.empty = false;
      }

      if (steamids.playerTwo === '') {
        errors.playerTwo.empty = true;
      } else {
        errors.playerTwo.empty = false;
      }

      errors.playerOne.notFound = false;
      errors.playerTwo.notFound = false;

      if (! errors.playerOne.empty && ! errors.playerTwo.empty) {
        $location.path('/compare/' + steamids.playerOne + '&' + steamids.playerTwo);
      }
    };
  }]);
