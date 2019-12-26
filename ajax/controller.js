
/* Se importan modulos en el array */
var app = angular.module('MiApp', []);

// $scope contiene la vista para pasar variables y mostrar datos
app.controller('PrimerControlador', function($scope, $http){

	/* Asincrono - promise
		.delete()
		.get()
		.head()
		.jsonp()
		.patch()
		.post()
		.put()
	*/

	$scope.datos = [];
	$scope.nuevoPost = {};

	var miExito = function(resp){

		/*
		resp
			.config  - the object used to generate the request.
			.data 	 - a string, or an object, carrying the response from the server.
			.headers - a function to use to get header information.
			.status  - a number defining the HTTP status.
			.statusText - a string defining the HTTP status.
		*/

		$scope.posts = resp.data;
	};

	$http.get('http://jsonplaceholder.typicode.com/posts')
	
	.then( 
		miExito,
		function miError(resp){}
	);

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



