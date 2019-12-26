
app.controller('ReposController', function($scope, $http){

	$scope.repos = [];
	$scope.nombres = [];
		console.log($scope)

	//$http.get('https://api.github.com/users/silicona/repos')
	$http.get('https://api.github.com/users/twitter/repos')

	.then( function(resp){

		$scope.repos = resp.data;

		for( var i = resp.data.length - 1; i >= 0; i-- ){

			var repo = resp.data[i];

			$scope.nombres.push(repo.name);
		}

	}, function(error){});

	$scope.seleccionarOpcion = function(nombre_repo){

		$scope.$apply( function(){

			$scope.main_repo = nombre_repo;
		})
	}

	$scope.limpiarBuscador = function(e){

		$('.aa').val(null);
		
		$scope.main_repo = '';	
	}
});

app.controller('RepoController', function($scope, $http, $routeParams){

	$scope.repo = {};

	$http.get('https://api.github.com/repos/twitter/' + $routeParams.name)

	.then( function(resp){

		$scope.repo = resp.data;


	}, function(error){});



});


