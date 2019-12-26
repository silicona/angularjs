
var app = angular.module('DirApp', [
	
	'ngRoute'

]);

app.config( function($routeProvider){
console.log($routeProvider)
	$routeProvider
		
		.when('/', {
			controller: 'ReposController',
			templateUrl: 'templates/home.html'
		})

		.when('/repos/:name', {
			controller: 'RepoController',
			templateUrl: 'templates/repo.html'
		})

		.otherwise('/')

});

