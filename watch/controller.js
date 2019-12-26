angular.module('mainModule', [])

	.controller('WatchController', function($scope){

		$scope.nombre = 'Nombre de controller';

		setTimeout( function(){

			//$scope.nombre = 'Nombre cambiado';

			//$scope.$digest(); // Forma no adecuada

			// Actualizar la vista - mantiene el contexto de angular
			$scope.$apply( function(){

				$scope.nombre = 'Nombre cambiado';
			});
		}, 2000);

		document.querySelector('#boton_sin_jquery').addEventListener("click", function(){
			
			$scope.$apply( function(){

				$scope.nombre = 'Nombre desde Botón sin JQuery'
			})
		})

		$scope.cambiarNombre = function(){

			var nom = 'Nombre cambiado desde Controller';

			this.nombre = nom;
		};
	})

/*

Apply -> Digest -> Watcher

Apply
	Los eventos capturados de Angular llaman Apply.

	Apply llama a Digest

Digest
	Actualiza o no la vista si el watcher ha registrado un cambio.

	Digest ejecuta un Watcher - Angular crea un watcher ¿once? en cada atributo de angular de la vista


Watcher 

	Lista de atributos y espera a que cambie

*/