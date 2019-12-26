
/* Se importan modulos en el array */
var app = angular.module('MiApp', [
	//'ngResource',	// Crear objeto REST - Modelo?
]);

// $scope contiene la vista para pasar variables y mostrar datos
app.controller('PrimerControlador', function($scope){

	$scope.nombre = 'Nombre de test';

	$scope.comentarios = [
		{
			comentario: "Quosque, Catilina?",
			username: 'Usuario',
		},
		{
			comentario: "Oh, mero!",
			username: 'Otro usuario',
		},
	];

	$scope.nuevoComentario = {
		comentario: 'Nuevísimo comentario'
	}

	$scope.agregarComentario = function(){

		$scope.comentarios.push( $scope.nuevoComentario );

		// Reinicio del formulario
		$scope.nuevoComentario = {};
	};

});

app.controller('OtroControlador', function($scope){
			
	$scope.nombre = 'Otro nombre';
});

/* Equivalente
angular.module('MiApp', [])
	.controller('PrimerControlador', function($scope){

		$scope.nombre = 'Nombre de test';
	})
	.controller('OtroControlador', function($scope){

		$scope.otro_nombre = 'Otro nombre';
	});

Para minimizar, importante pasar las funciones como un array, con $scope como string previo

// $scope contiene la vista para pasar variables y mostrar datos

app.controller('PrimerControlador', [
	"$scope", 
	"$http",
	function(s, h){

	s.nombre = 'Nombre de test';

	s.comentarios = [
		{
			comentario: "Quosque, Catilina?",
			username: 'Usuario',
		},
		{
			comentario: "Oh, mero!",
			username: 'Otro usuario',
		},
	];

	s.nuevoComentario = {
		comentario: 'Nuevísimo comentario'
	}

	s.agregarComentario = function(){

		s.comentarios.push( m.nuevoComentario );

		// Reinicio del formulario
		s.nuevoComentario = {};
	};

}]);

app.controller('OtroControlador', ['$scope', function(g){
			
	g.nombre = 'Otro nombre';
}]);
*/
