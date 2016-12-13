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

  describe("linearSearch", function(){

      it("should take two values, a number and an array, and return the index of that number in the array if it exists, or false if it doesn't", function(){
          var arr = [1, 5, 7, 6];
          expect(AlgoCtrl.algorithms[0].func(7, arr)).toBe("2");
          expect(AlgoCtrl.algorithms[0].func(14, arr)).toBe(false);
      })
  })

  describe("iSum", function(){
      it("should, given a value, return the sum of all integers up to and including that number", function(){
          AlgoCtrl.algorithms[1].func(5); 
          expect(AlgoCtrl.result).toBe(15);
      })
  });

  describe("iFactorial", function(){
      it("should, given a number, return the factorial of that number", function(){
          AlgoCtrl.algorithms[2].func(5);
          expect(AlgoCtrl.result).toBe(120);
      });
  });

  describe("rFactorial", function(){
      it("should calculate the factorial of a number recursively", function(){
          AlgoCtrl.algorithms[3].func(5);
          expect(AlgoCtrl.result).toBe(120);
      })
  })

  describe("iFibonacci", function(){
      it("should, when given a number greater than 1, calculate the correct value in the Fibonacci sequence", function(){
          AlgoCtrl.algorithms[4].func(6);
          expect(AlgoCtrl.result).toBe(8);
      });

      it("should, when given a number less than 2, return that number", function(){
          AlgoCtrl.algorithms[4].func(1);
          expect(AlgoCtrl.result).toBe(1);
      })
  }) 
  describe("rFibonacci", function(){
      it("should, when given a number greater than 1, calculate the correct value in the Fibonacci sequence", function(){
          AlgoCtrl.algorithms[5].func(6);
          expect(AlgoCtrl.result).toBe(8);
      });

      it("should, when given a number less than 2, return that number", function(){
          AlgoCtrl.algorithms[5].func(1);
          expect(AlgoCtrl.result).toBe(1);
      })
  })

  describe("rBS", function(){
    it("should, given a sorted array of odd length and a number in the array, return the index of that number if found", function(){
        var arr= [-90,-19,0,2,12,29,33,190,320];
        AlgoCtrl.algorithms[6].func(arr, 190);
        expect(AlgoCtrl.result).toBe(7);
    });
    it("should, given a sorted array of even length and a number in the array, return the index of that number if found", function(){
        var arr= [-90,-19,0,2,12,29,33,190,320,500];
        AlgoCtrl.algorithms[6].func(arr, -19);
        expect(AlgoCtrl.result).toBe(1);
    });

    it("should return false if the number is not in the array", function(){
        var arr = [-90,-19,0,2,12,29,33,190,320];
        AlgoCtrl.algorithms[6].func(arr, 2422);
        expect(AlgoCtrl.result).toBe(false);
    });
});
describe("iBS", function(){
    it("should, given a sorted array of odd length and a number in the array, return the index of that number if found", function(){
        var arr= [-90,-19,0,2,12,29,33,190,320];
        AlgoCtrl.algorithms[7].func(arr, 190);
        expect(AlgoCtrl.result).toBe(7);
    });
    it("should, given a sorted array of even length and a number in the array, return the index of that number if found", function(){
        var arr= [-90,-19,0,2,12,29,33,190,320,500];
        AlgoCtrl.algorithms[7].func(arr, -19);
        expect(AlgoCtrl.result).toBe(1);
    });

    it("should return false if the number is not in the array", function(){
        var arr = [-90,-19,0,2,12,29,33,190,320];
        AlgoCtrl.algorithms[7].func(arr, 2422);
        expect(AlgoCtrl.result).toBe(false);
    });

  })

describe("bubbleSort", function(){
    it("should bubble sort a given unsorted array", function(){
        var arr = [24, -9, 0, 245, 99, 10];
        //NOTE: toBe expects the exact same object, toEqual merely checks equivalence;
        expect(AlgoCtrl.algorithms[8].func(arr)).toEqual([-9, 0, 10, 24, 99, 245]);
        expect(AlgoCtrl.result).toEqual([-9, 0, 10, 24, 99, 245]);
    })
})
describe("selectionSort", function(){
    it("should selection sort a given unsorted array", function(){
        var arr = [24, -9, 0, 245, 99, 10, 42, -90, -90];
        AlgoCtrl.algorithms[9].func(arr);
        expect(AlgoCtrl.result).toEqual([-90, -90, -9, 0, 10, 24, 42, 99, 245]);
    })
})
describe("insertionSort", function(){
    it("should insertion sort a given unsorted array", function(){
        var arr = [24, -9, 0, 245, 99, 10, 42, -90, -90];
        AlgoCtrl.algorithms[10].func(arr);
        expect(AlgoCtrl.result).toEqual([-90, -90, -9, 0, 10, 24, 42, 99, 245]);
    })
})
describe("mergeSort", function(){
    it("should merge sort a two given sorted arrays", function(){
        var arr1 = [1, 4, 5, 7, 7, 9];
        var arr2 = [-9, 4, 6, 8];
        AlgoCtrl.algorithms[11].func(arr1, arr2);
        expect(AlgoCtrl.result).toEqual([-9, 1, 4, 4, 5, 6, 7, 7, 8, 9]);
    })
});

describe("convertStringToArray", function(){
    it("should, given a string of numbers separated by a comma and a space, convert it into a numerical array", function(){
        var stringArr= "4, 5, 6, 7";
        expect(AlgoCtrl.convertStringToArray(stringArr)).toEqual([4, 5, 6, 7])
    })
})





});
