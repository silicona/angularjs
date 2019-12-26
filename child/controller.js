angular.module('MiApp', [])

	.run( function($rootScope){

		$rootScope.nombre = 'Codigo facilito';

	})
	.controller( 'MiController', function($scope){

		$scope.nombre = 'Nombre sobreescrito por scope';

		setTimeout( function(){
			$scope.$apply( function(){
				$scope.nombre = 'Nombre transfigurado';
			})
		}, 1000);
	})
	.controller( 'HijoController', function($scope){

		// scope se crea del scope del padre
	})



/* Equivalente
angular.module('MiApp', [])

	.run( function($rootScope){
	
		// Se ejecuta cuando instacia el modulo, al detectar el atributo ng-app de html
	})
	.controller( 'MiController', function($scope,){

	})
*/