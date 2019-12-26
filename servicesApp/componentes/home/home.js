
angular.module('componente.home', [])

.controller('homeControlador', function($scope){

	$scope.secciones = [
		{ icono: 'eye', nombre: 'Listados', href: '#listas' },

		{ icono: 'user', nombre: 'Warzone',	href: '#warzone' }
	];

});

