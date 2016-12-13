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
 	this.number
 	this.convertStringToArray = function(string){
 		this.result = string.split(", ").map(Number);;
 		return string.split(", ").map(Number);
 	}

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
    			// stop at the value before the last value in the array
    			for (var j = arr.length-1; j > 0; j--) {
	    			for (var i = 0; i < j; i++) {
	    				if (arr[i] > arr[i+1]){
	    					var temp = arr[i];
	    					//swap
	    					arr[i] = arr[i+1];
	    					arr[i+1] = temp;
	    				}
	    			}
    			}
    			_this.result = arr;
    			return arr;
    		}
    	}

    	var selectionSort = {
    		title: "Selection Sort",
    		func: function(arr){
    			var i = 0;
    			while (i < arr.length-1) {
    				//find the min value
    				var min = i;
    				for (var j = i+1; j < arr.length; j++){
    					if (arr[j] < arr[min]) {
    						min = j;
    					}
    				}
    				//swap the minimum with the first value in the unsorted portion of the array;
    				var temp = arr[i];
    				arr[i] = arr[min];
    				arr[min] = temp;
    				i++;
    			}
    			_this.result = arr;
    			return arr;
    		}
    	}
    	var insertionSort = {
    		title: "Insertion Sort",
    		func: function(arr){
    			for (var i = 1; i < arr.length; i++) {
    				var toInsert = arr[i];
    				var j = i;
    				while (arr[j-1] > toInsert && j>0) {
    					arr[j] = arr[j-1];
    					j--;
    				}
    				arr[j] = toInsert;
    			}
    			_this.result = arr;
    			return arr;
    		}

    	}
    	var mergeSort = {
    		title: "Merge Sort",
    		func: function(arr1, arr2) {
    			var sortedArr = [];
    			var i = 0,
    				j = 0;
    			while (i < arr1.length && j < arr2.length){
    				if (arr1[i] < arr2[j]) {
    					sortedArr.push(arr1[i]);
    					i++;
    				} else if (arr1[i] > arr2[j]) {
    					sortedArr.push(arr2[j]);
    					j++;
    				} else {
    					sortedArr.push(arr1[i]);
    					sortedArr.push(arr2[j]);
    					i++;
    					j++;
    				}
    			}
    			// check to see if all values have been pushed.
    			if (arr1.length + arr2.length == sortedArr.length) {
    				_this.result = sortedArr;
    				return sortedArr;
    			}
    			if (i < arr1.length){
    				var idx = i;
    				var leftOver = arr1;
    			} else {
    				var idx = j;
    				var leftOver = arr2;
    			}
    			for (idx; idx < leftOver.length; idx++){
    				sortedArr.push(leftOver[idx]);
    			}
    			_this.result = sortedArr;
    			return sortedArr;
    		}
    	}
    	// consider passing in a list of params
    this.algorithms = [
    		linearSearch, //0
    		iSum, // 1
    		iFactorial, // 2
    		rFactorial, // 3
    		iFibonacci, // 4
    		rFibonacci, // 5
    		rBinarySearch, // 6
    		iBinarySearch, // 7
    		bubbleSort, // 8 compare adjacent values, putting the largest number to the right, repeat til sorted
    		selectionSort, // 9 find the min, place it at the beginning, move the beginning index one to the right, repeat tili sorted
    		insertionSort, //10
    		mergeSort, //11
    ]

  });
