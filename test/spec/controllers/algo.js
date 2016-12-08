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

  // describe("linearSearch", function(){

  //     it("should take two values, a number and an array, and return the index of that number in the array if it exists, or false if it doesn't", function(){
  //         var arr = [1, 5, 7, 6];
  //         expect(AlgoCtrl.linearSearch(7, arr)).toBe("2");
  //         expect(AlgoCtrl.linearSearch(14, arr)).toBe(false);
  //     })
  // })

  describe("iSum", function(){
      it("should, given a value, return the sum of all integers up to and including that number", function(){
          AlgoCtrl.algorithms[1].func(5); 
          expect(scope.result).toBe(15);
      })
  });

  describe("iFactorial", function(){
      it("should, given a number, return the factorial of that number", function(){
          expect(AlgoCtrl.iFactorial(5)).toBe(120);
      });
  });

  // describe("rFactorial", function(){
  //     it("should calculate the factorial of a number recursively", function(){
  //         expect(AlgoCtrl.rFactorial(5)).toBe(120);
  //     })
  // })

  // describe("iFibonacci", function(){
  //     it("should, when given a number greater than 1, calculate the correct value in the Fibonacci sequence", function(){
  //         expect(AlgoCtrl.iFibonacci(6)).toBe(8);
  //     });

  //     it("should, when given a number less than 2, return that number", function(){
  //         expect(AlgoCtrl.iFibonacci(1)).toBe(1);
  //         expect(AlgoCtrl.iFibonacci(0)).toBe(0);
  //     })
  // }) 
  // describe("rFibonacci", function(){
  //     it("should, when given a number greater than 1, calculate the correct value in the Fibonacci sequence", function(){
  //         expect(AlgoCtrl.rFibonacci(6)).toBe(8);
  //     });

  //     it("should, when given a number less than 2, return that number", function(){
  //         expect(AlgoCtrl.rFibonacci(1)).toBe(1);
  //         expect(AlgoCtrl.rFibonacci(0)).toBe(0);
  //     })
  // })
});
