
angular.module('componente.listas', [])
// angular.module('componente.listas', ['localStorageModule'])


.controller('listasControlador', function($scope, Fx, servicioListas){

	var vm = this;

	//this.titulo = Fx.bs_alert('Listado de listas', 'success');
	$scope.titulo = Fx.bs_alert('Listado de listas', 'success');

	$scope.listas = servicioListas.verTodos();
	$scope.nuevaLista = {};

	$scope.anadirLista = function(){

		servicioListas.anadir($scope.nuevaLista);

		$scope.nuevaLista = {};
	}

	$scope.eliminarLista = function(item){

		$scope.listas = servicioListas.eliminarItem(item);
	}

	$scope.limpiar = function(){

		$scope.listas = servicioListas.limpiar();
	}
})

/*.config( function($stateProvider){

	$stateProvider

		.state('listas', {
			url: '/listas',
			templateUrl: 'componentes/listas/listas.html',
			controller: 'listasControlador as lc',
		});
});*/
