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
 	var _this = this;
 	this.number = 9;

 	var linearSearch = {
 		title: "Linear Search",
 		func: function (num, arr){
	    		for (var i in arr){
	    			if (num == arr[i]) {
	    				_this.result = i;
	    				return i;
	    			}
	    		}
	    		_this.result = false;
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
	    		_this.result = sum;
	    		return sum;
		}
    	}
 	


var iFactorial = {
	title: "iFactorial",
	func: function (num){
	    		var factorial = 1;
	    		for(var i = 1; i <= num; i++){
	    			factorial*=i;
	    		}
	    		_this.result = factorial;
	    		return factorial;
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
		_this.result = rFact(num);
		return rFact(num);
	}
}

    
var iFibonacci = {
	title: "iFibonacci",
	func: function (num){
  		if (num < 2){
  			_this.result = num;
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

    		_this.result = fib;

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
    			_this.result = rFib(num);
    			return rFib(num);
    		}
    }

    function rBS(arr, num, beg, end){
    	// you want to exit the recursive function when you've found the number, or when there are no values remaining to search
    		if (!beg) {
	    		beg = 0;
    		}
    		if (!end) {
    			end = arr.length-1;
    		}
    		var mid = Math.floor((beg + end)/2);
    		if (arr[mid] == num) {
    			return mid;
    		}
    		if (beg == end) {
    			return false;
    		}
    		if (arr[mid] < num) {
    			return rBS(arr, num, mid + 1, end);
    		}
    		if (arr[mid] > num) {
    			return rBS(arr, num, beg, mid - 1);
    		}

    }
    var rBinarySearch = {
    		title: "Recursive Binary Search",
    		func: function(arr, num){
    			_this.result = rBS(arr, num);
    			return rBS(arr, num);
    		}
    }

    var iBinarySearch = {
    		title: "Iterative Binary Search",
    		func: function(arr, num){
    			var beg = 0,
    				end = arr.length-1,
    				mid;
    			while (beg != end) {
    				mid = Math.floor((beg+end)/2);
    				if (arr[mid] == num) {
    					_this.result = mid;
    					return mid;
    				}
    				if (num > arr[mid]) {
    					beg = mid + 1;
    				}
    				if (num < arr[mid]) {
    					end = mid - 1;
    				}
    			}
    			_this.result = false;
    			return false;
    		}
    }

    var bubbleSort = {
    		title: "Bubble Sort",
    		func: function(arr) {

    		}
    }

    this.algorithms = [
    		linearSearch, //0
    		iSum, // 1
    		iFactorial, // 2
    		rFactorial, // 3
    		iFibonacci, // 4
    		rFibonacci, // 5
    		rBinarySearch, // 6
    		iBinarySearch, // 7
    		bubbleSort // 8
    ]

  });
