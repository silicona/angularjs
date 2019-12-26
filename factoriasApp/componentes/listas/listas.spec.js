
'use strict';

describe('Factorias Comp Listas', function(){

	var mod;
	beforeEach( function(){

		mod = module('componente.listas');
	});

	it('ver', function(){
		console.log(module('componente.listas'))
	})	
	/*
	describe('Controlador listas', function(){

		var $scope, factoriaListas;

		beforeEach( function(){

			module( function($provide){

				// Mock
				$provide.value( 'MockedFactoriaListas', {

					verTodos: function(){ return this.listas; },

					limpiar: function(){ 

						this.listas = [];
						//todoService.actualizarStorage();

						return this.verTodos();
					},

					listas: [ {descripcion: "lista test", fecha: "2020-12-11T23:00:00.000Z"} ],
				});
			});
		});


		beforeEach( inject( function($rootScope){

			$scope = $rootScope.$new();
		}));

		it('Debe exponer las todas las listas', inject( function($controller, MockedFactoriaListas){

			$controller('listasController', {
				'$scope': $scope,
				'factoriaListas': MockedFactoriaListas
			});

			expect($controller).toBeDefined();

			expect(factoriaListas);

			expect($scope.listas.length).toBe(MockedFactoriaListas.verTodos().length);

			expect($scope.listas.length).toBeGreaterThan(0);
		}));


		xit('Debe borrar todas las listas', inject( function($controller, MockedFactoriaListas){

			$controller('FactoriasController', {
				'$scope': $scope,
				'factoriaListas': MockedFactoriaListas
			});

			expect($scope.listas.length).toBeGreaterThan(0);

			$scope.limpiar()

			expect($scope.listas.length).toBe(MockedFactoriaListas.verTodos().length);

			expect($scope.listas.length).toBe(0);
		}));
	});
	*/
});