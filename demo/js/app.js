angular.module( "DemoApp", [
	"lumx",
	"ngRoute"
] )

	.filter('tel', function(a, b){
		console.log(a);
		console.log(b);
	})

	.config( function($routeProvider){

		$routeProvider

			.when('/', {
				controller: 'MainController',
				templateUrl: 'templates/home.html'
			})
	})

