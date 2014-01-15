'use strict';

describe('Service: Steamids', function () {

  // load the service's module
  beforeEach(module('steamcoopApp'));

  // instantiate service
  var Steamids;
  beforeEach(inject(function (_Steamids_) {
    Steamids = _Steamids_;
  }));

  it('should do something', function () {
    expect(!!Steamids).toBe(true);
  });

});
