'use strict';

angular.module('steamcoopApp')
  .factory('games', function ($http) {
    return {
      getGames: function () {
        return $http.get('/games');
      }
    };
  });
