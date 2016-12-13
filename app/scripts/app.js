'use strict';

/**
 * @ngdoc overview
 * @name algorithmsApp
 * @description
 * # algorithmsApp
 *
 * Main module of the application.
 */
angular
	.module('algorithmsApp', [
		'ngRoute'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.when('/algorithms', {
				templateUrl: 'views/algorithms.html',
				controller: 'AlgoCtrl',
				controllerAs: 'algos'
			})
			.when('/directives', {
				templateUrl: 'views/directives.html',
				controller: 'DirectiveCtrl',
				controllerAs: "dir"
			})
			.otherwise({
				redirectTo: '/'
			}); 
	});
