angular.module('TodoList', [
	'LocalStorageModule'
])
.controller('TodoController', function($scope, localStorageService){

	if( localStorageService.get('angular-todoList') ){

		$scope.todo = localStorageService.get('angular-todoList');

	} else {

		$scope.todo = [];
	}

	// Refactorizacion del localStorageService
	$scope.$watchCollection('todo', function(newValue, oldValue){

		/* Disparada cuando carga, primera modificacion o submit */
		console.log(newValue);
		console.log(oldValue);

		localStorageService.set('angular-todoList', $scope.todo);
	});

	$scope.anadirLista = function(){

		$scope.todo.unshift( $scope.nuevaLista );

		$scope.nuevaLista = {};

		//localStorageService.set('angular-todoList', $scope.todo);
	}

	/* Limpiado directamente inline
	$scope.limpiarTodo = function(){

		$scope.todo = [];

		//localStorageService.set('angular-todoList', $scope.todo);
	}
	*/

});

/* Watch simple
	$scope.$watchCollection(
		function(){

			// Valor a observar
			return $scope.nuevaLista;

		}, function(newValue, oldValue){

			// Disparada cuando carga, primera modificacion o submit
			console.log(newValue);

			console.log(oldValue);


		}
	);
*/