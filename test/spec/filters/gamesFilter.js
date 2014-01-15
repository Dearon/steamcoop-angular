'use strict';

describe('Filter: gamesFilter', function () {

  // load the filter's module
  beforeEach(module('steamcoopApp'));

  // initialize a new instance of the filter before each test
  var gamesFilter;
  beforeEach(inject(function ($filter) {
    gamesFilter = $filter('gamesFilter');
  }));

  it('should return the input prefixed with "gamesFilter filter:"', function () {
    var text = 'angularjs';
    expect(gamesFilter(text)).toBe('gamesFilter filter: ' + text);
  });

});
