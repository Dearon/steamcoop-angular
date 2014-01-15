'use strict';

angular.module('steamcoopApp')
  .controller('CompareCtrl', ['$scope', '$routeParams', '$http', '$location', 'games', 'player', 'errors', function ($scope, $routeParams, $http, $location, games, player, errors) {
    $scope.games = [];
    $scope.platforms = [];
    $scope.categories = [];
    $scope.genres = [];
    $scope.filters = {'platforms': {}, 'categories': {}, 'genres': {}, 'players': {}};
    $scope.players = [];

    var handleGamesSuccess = function(data) {
      $scope.games = data.games;

      $scope.platforms = data.platforms;
      for (var platformIndex in data.platforms) {
        var platform = data.platforms[platformIndex];
        $scope.filters.platforms[platform] = false;
      }

      $scope.categories = data.categories;
      for (var categoryIndex in data.categories) {
        var category = data.categories[categoryIndex];
        $scope.filters.categories[category] = false;
      }

      $scope.genres = data.genres;
      for (var genreIndex in data.genres) {
        var genre = data.genres[genreIndex];
        $scope.filters.genres[genre] = false;
      }
    };

    var handlePlayerSuccess = function(data) {
      var player = {'steamID': data.steamID, 'steamID64': data.steamID64};
      $scope.players.push(player);

      for (var game in $scope.games) {
        if (data.games.indexOf($scope.games[game].appid) !== -1) {
          $scope.games[game].players.push(data.steamID64);
        }
      }

      $scope.filters.players[data.steamID64] = true;
    };

    var handlePlayerFailure = function(player) {
      if (player === 'playerOne') {
        errors.playerOne.notFound = true;
      }

      if (player === 'playerTwo') {
        errors.playerTwo.notFound = true;
      }

      $location.path('/');
    };

    games.getGames().success(handleGamesSuccess);
    player.getPlayer($routeParams.playerOne).success(handlePlayerSuccess).error(function() { handlePlayerFailure('playerOne'); });
    player.getPlayer($routeParams.playerTwo).success(handlePlayerSuccess).error(function() { handlePlayerFailure('playerTwo'); });
  }]);
