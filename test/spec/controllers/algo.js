'use strict';

describe('Controller: AlgoCtrl', function () {

  // load the controller's module
  beforeEach(module('algorithmsApp'));

  var AlgoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlgoCtrl = $controller('AlgoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AlgoCtrl.awesomeThings.length).toBe(3);
  });

  it('should initialize with a test variable attached that contains "My life is in shambles"', function(){
    expect(AlgoCtrl.test).toBe("My life is in shambles.");
  });

  it("linearSearch should take two values, a number and an array, and return the index of that number in the array if it exists, or false if it doesn't", function(){
      var arr = [1, 5, 7, 6];
      expect(AlgoCtrl.linearSearch(7, arr)).toBe("2");
      expect(AlgoCtrl.linearSearch(14, arr)).toBe(false);
  })
});
