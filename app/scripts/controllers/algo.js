'use strict';

/**
 * @ngdoc function
 * @name algorithmsApp.controller:AlgoCtrl
 * @description
 * # AlgoCtrl
 * Controller of the algorithmsApp
 */
angular.module('algorithmsApp')
  .controller('AlgoCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 
 	this.number = 9;

 	var linearSearch = {
 		title: "Linear Search",
 		func: function (num, arr){
	    		for (var i in arr){
	    			if (num == arr[i]) {
	    				$scope.result = i;
	    				return i;
	    			}
	    		}
	    		$scope.result = false;
	    		return false;
	    	}
    	}
 	var iSum = {
 		title: "iSum",
 		func: function (num, arr){
	    		var sum = 0;
	    		for (var i = 1; i <= num; i++){
	    			sum+=i;
	    		}
	    		$scope.result = sum;
		}
    	}
 	


var iFactorial = {
	title: "iFactorial",
	func: function (num){
	    		var factorial = 1;
	    		for(var i = 1; i <= num; i++){
	    			factorial*=i;
	    		}
	    		$scope.result = factorial;
	    	}
    	}
function rFact(num){
	    		if (num < 2) {
	    			return 1
	    		}
	    		return num * rFact(num - 1);

    		}


var rFactorial = {
	title: "rFactorial",
	func: function(num){
		$scope.result = rFact(num);
	}
}

    
var iFibonacci = {
	title: "iFibonacci",
	func: function (num){
  		if (num < 2){
  			console.log(num);
  			return num;
  		}
  		var first = 0;
    		var second = 1;
    		var fib;
    		for (var i = 2; i <= num; i++){
    			fib = first + second;
    			first = parseInt(second);
    			second = parseInt(fib);
    		}

    		$scope.result = fib;
    }
}
    
    function rFib(num){
    		if (num < 2){
    			return num;
    		}
    		return rFib(num - 1) + rFib(num - 2);
    }
    var rFibonacci = {
    		title: "rFibonacci",
    		func: function(num){
    			$scope.result = rFib(num);
    		}
    }
    this.algorithms = [
    		linearSearch,
    		iSum,
    		iFactorial,
    		rFactorial,
    		iFibonacci,
    		rFibonacci
    ]

  });
