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
    this.test = "My life is in shambles.";

    this.linearSearch = function(num, arr){
    		for (var i in arr){
    			if (num == arr[i]) {
    				return i;
    			}
    		}
    		return false;
    }


  });
