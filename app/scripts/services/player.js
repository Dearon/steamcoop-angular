'use strict';

angular.module('steamcoopApp')
  .factory('player', function ($http) {
    return {
      getPlayer: function (player) {
        return $http.get('/players/' + player);
      }
    };
  });
