
angular.module('componente.home', [])

.controller('homeControlador', [

	'$scope',
	function($scope){

		$scope.secciones = [
			{ icono: 'eye', nombre: 'Listados', href: '#listas' },

			//{ icono: 'user', nombre: 'Warzone',	href: '#warzone' }
		];
	}
])

.config( function($stateProvider){

	$stateProvider

		.state('inicio', {

			url: '/inicio',
			templateUrl: 'componentes/home/home.html',
			controller: 'homeControlador as hc'
		})

});