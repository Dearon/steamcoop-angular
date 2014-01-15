'use strict';

angular.module('steamcoopApp')
  .filter('gamesFilter', function () {
    var hasPlayer = function(players, playerFilter) {
      for (var player in playerFilter) {
        if (playerFilter[player]) {
          if (players.indexOf(player) === -1) {
            return false;
          }
        }
      }

      return true;
    };

    var hasPlatform = function(platforms, platformFilter) {
      var allFalse = true;

      for (var platform in platformFilter) {
        if (platformFilter[platform]) {
          allFalse = false;
          if (platforms.indexOf(platform) !== -1) {
            return true;
          }
        }
      }

      if (allFalse) {
        return true;
      } else {
        return false;
      }
    };

    var hasCategory = function(categories, categoriesFilter) {
      var allFalse = true;

      for (var category in categoriesFilter) {
        if (categoriesFilter[category]) {
          allFalse = false;

          if (categories.indexOf(category) !== -1) {
            return true;
          }
        }
      }

      if (allFalse) {
        return true;
      } else {
        return false;
      }
    };

    var hasGenre = function(genres, genreFilter) {
      var allFalse = true;

      for (var genre in genreFilter) {
        if (genreFilter[genre]) {
          allFalse = false;

          if (genres.indexOf(genre) !== -1) {
            return true;
          }
        }
      }

      if (allFalse) {
        return true;
      } else {
        return false;
      }
    };

    return function (input, filters) {
      return input.filter(function(val) {
        var player = hasPlayer(val.players, filters.players);
        var platform = hasPlatform(val.platforms, filters.platforms);
        var category = hasCategory(val.categories, filters.categories);
        var genre = hasGenre(val.genres, filters.genres);

        if (player && platform && category && genre) {
          return true;
        } else {
          return false;
        }
      });
    };
  });
