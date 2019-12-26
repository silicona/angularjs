'use strict';

describe('Modulo Controladores', function(){

	beforeEach( module('moduloControladores') );

	describe('Primer controlador', function(){

		var control, $controller, $rootScope, $scope;
		
		beforeEach( inject( function(_$controller_, _$rootScope_){

			$controller = _$controller_;
			$rootScope = _$rootScope_;

			$scope = $rootScope.$new();

			control = $controller('PrimerControlador', {
				$scope: $scope,
			});
		}));
		

		it('Tiene nombre correcto', function(){

			expect($scope.nombre).toBe('Nombre de test');

			expect(control.mode).toBe('fun');
		});	
	});
})