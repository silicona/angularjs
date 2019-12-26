
angular.module('componente.listas', [])

.controller( 'listasController', [
	'$scope', 
	'factoriaListas',
	function($scope, ListasFactoria){


		$scope.listas = ListasFactoria.verTodos();
		$scope.nuevaLista = {};

		$scope.anadirLista = function(){

			ListasFactoria.anadir($scope.nuevaLista);

			$scope.nuevaLista = {};
		}

		$scope.eliminarLista = function(item){

			$scope.listas = ListasFactoria.eliminarItem(item);
		}

		$scope.limpiar = function(){

			$scope.listas = ListasFactoria.limpiar();
		}

	}
])

.config( function($stateProvider){

	$stateProvider

		.state('listas', {

			url: '/listas',
			templateUrl: 'componentes/listas/listas.html',
			controller: 'listasController as lc'
		})

});