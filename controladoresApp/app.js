
/* Se importan modulos en el array */
var app = angular.module( 'moduloControladores', []);

// $scope contiene la vista para pasar variables y mostrar datos
app.controller('PrimerControlador', function($scope){

	var vm = this;

	vm.mode = 'fun';
	
	$scope.nombre = 'Nombre de test';

});

/* Equivalente
angular.module('MiApp', [])
	.controller('PrimerControlador', function($scope){

		$scope.nombre = 'Nombre de test';
	})
	.controller('OtroControlador', function($scope){

		$scope.otro_nombre = 'Otro nombre';
	});

// Posible poner el controlador inyectado directamente en el html

*/