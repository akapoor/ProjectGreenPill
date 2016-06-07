/** var app = angular.module("instaFame", [])

app.controller("homeController", function($scope, $http){
	var redirect_uri = "localhost:3000/"
	var client_id = "ffc5807a4c0249058fc129e693ed123a"
	var loginUrl = "https://api.instagram.com/oauth/authorize/?client_id="+client_id+"&redirect_uri="+redirect_uri+"&response_type=token&callback=JSON_CALLBACK"
	$scope.testUrl = "https://api.instagram.com/v1/users/{user-id}/?access_token=ACCESS-TOKEN"
	
	$scope.login = function(){

		$http({method: "jsonp", url: loginUrl, responseType: "json"}).
        	then(function(response) {
          	$scope.status = response.status;
          	$scope.data = response.data;
          	console.log($scope.data)
        }, function(response) {
        	$scope.data = response.data || "Request failed";
        	$scope.status = response.status;
        	console.log(response.status);
      });

	}
	
}) */

'use strict';

angular.module('portfolioApp', [ 'ui.router', 'ui.bootstrap', 'ngAnimate'])
	.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				component: 'home'	
			})
	});