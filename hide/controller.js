
var app = angular.module('MiApp', []);

app.controller('PrimerControlador', function($scope, $http){

	$scope.posts = [];
	$scope.loading = true;
	$scope.nuevoPost = {};


		$http.get('http://jsonplaceholder.typicode.com/posts')
		
		.then( function(resp){


				$scope.posts = resp.data;


			//});

			$scope.loading = false;

		},
		function (error){


			$scope.loading = false;
		});


	$scope.anadirPost = function(){

		$http.post('http://jsonplaceholder.typicode.com/posts', {
			title: $scope.nuevoPost.title,
			body: $scope.nuevoPost.body,
			userId: 'Usuario de ejemplo',
		})

		.then( function(resp){

			$scope.posts.unshift( resp.data ); // Respuesta de web de ejemplo

			$scope.nuevoPost = {};   
		})
	}

	

});



