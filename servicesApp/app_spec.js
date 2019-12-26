'use strict';

describe('Modulo Services', function(){

	beforeEach( function(){

		module('moduloServicio');
		// module('moduloServicio', ['LocalStorageModule']);
	});

	/*
	describe('Servicio Lista', function(){

		var servicioListas, nuevaLista;

		beforeEach( function(){

			inject( ['servicioListas', function(servicio){

				servicioListas = servicio;
			}]);

			nuevaLista = { descripcion: "lista test", fecha: "2020-12-11T23:00:00.000Z" };
		
			spyOn(servicioListas, 'actualizarStorage').and.callThrough();

			// Anula el autentico test Limpiar listas
			spyOn(servicioListas, 'limpiar').and.returnValue([]);

			spyOn(servicioListas, 'verTodos').and.callFake( function(param){
				
				//console.log('spy Fake', this);	// Servicio
				//console.log('spy Fake', param); 	// undefined por función

				return this.listas;
			});

			servicioListas.invalidFunction = function(){ return true; }

			spyOn(servicioListas, 'invalidFunction').and.throwError('Error provocado');
		
		});

		afterEach( function(){

			servicioListas.eliminarItem(nuevaLista);

			expect(servicioListas.actualizarStorage).toHaveBeenCalled();
		});

		it('Invalid Function no existe', function(){

			expect( servicioListas.invalidFunction ).toThrowError('Error provocado');
		});
		

		it('Se inicializa correctamente', function(){

			expect(servicioListas.clave).toBe('angular-todoList');

			expect(servicioListas.listas).toBeDefined();
			
			expect(servicioListas.listas.length).toBe(0);
		});

		it('Actualiza BBDD', function(){

			servicioListas.listas[0] = nuevaLista;
			servicioListas.actualizarStorage();

			var bbdd = servicioListas.bbdd.get(servicioListas.clave);

			expect(bbdd[0].descripcion).toBe(nuevaLista.descripcion);
		});

		it('Añade lista a BBDD', function(){
			
			servicioListas.anadir(nuevaLista);

			expect(servicioListas.listas.length).toBe(1);
		});

		it('Obtiene las listas', function(){

			servicioListas.anadir(nuevaLista);
			
			var listas = servicioListas.verTodos()

			expect(listas.length).toBe(1);
		});

		it('Elimina lista', function(){
			
			servicioListas.anadir(nuevaLista);

			var listas = servicioListas.eliminarItem(nuevaLista);

			expect(listas.length).toBe(0);

			//expect(servicioListas.verTodos).toHaveBeenCalled();

		});

		it('Limpiar listas', function(){
			
			servicioListas.anadir(nuevaLista);

			servicioListas.anadir(nuevaLista);

			expect(servicioListas.listas.length).toBe(2);

			var listas = servicioListas.limpiar();

			expect(listas.length).toBe(0);
		});

	});

	describe( 'Controlador Servicio', function(){

		var servicioListas, nuevaLista, control, $controller, $rootScope, $scope;

		beforeEach( function(){

			inject( ['servicioListas', function(servicio){

				servicioListas = servicio;

			}]);

			nuevaLista = { descripcion: "lista test", fecha: "2020-12-11T23:00:00.000Z" };

			inject( function(_$controller_, _$rootScope_){

				$controller = _$controller_;
				$rootScope = _$rootScope_;

				$scope = $rootScope.$new();

				control = $controller('ServicesController', {
					$scope: $scope,
					servicioListas: servicioListas
				});
			});
		});

		afterEach( function(){

			servicioListas.eliminarItem(nuevaLista);
		});

		it('Inicialización correcta', function(){

			expect($scope.nuevaLista).toBeDefined();

			expect($scope.listas.length).toBe(0);
		});	

		it('Añade nueva lista', function(){

			$scope.nuevaLista = nuevaLista;
			$scope.anadirLista();

			expect($scope.listas.length).toBe(1);

			expect($scope.nuevaLista).toEqual({});

		});

		it('Eliminar lista', function(){

			$scope.nuevaLista = nuevaLista;
			$scope.anadirLista();

			$scope.eliminarLista(nuevaLista);

			expect($scope.listas.length).toBe(0);
		});


		it('Limpiar', function(){

			$scope.nuevaLista = nuevaLista;
			$scope.anadirLista();

			$scope.nuevaLista = nuevaLista;
			$scope.anadirLista();

			expect($scope.listas.length).toBe(2);

			$scope.limpiar();

			expect($scope.listas.length).toBe(0);
		});
	});

	describe( 'Controlador Servicio Html', function(){

		var servicioListas,
			nuevaLista,
			control,
			$controller,
			$rootScope,
			$scope;

		API = 'http://localhost/angularjs/services/';

		beforeEach( function(){

			inject( ['servicioListas', function(servicio){

				Servicio = servicio;

			}]);

			nuevaLista = { descripcion: "lista test", fecha: "2020-12-11T23:00:00.000Z" };

			inject( function(_$controller_, _$rootScope_, _$httpBackend_){

				$controller = _$controller_;
				$rootScope = _$rootScope_;
				$httpBackend = _$httpBackend_;

				console.log($controller);
				console.log($httpBackend);

				$scope = $rootScope.$new();

				control = $controller('ServicesController', {
					$scope: $scope,
					servicioListas: servicioListas
				});
			});
		});

		  // Inject $q and $httpBackend for testing HTTP requests
		  beforeEach(inject(function(_Pokemon_, _$q_, _$httpBackend_) {
		    Pokemon = _Pokemon_;
		    $q = _$q_;
		    $httpBackend = _$httpBackend_;
		  }));

		afterEach( function(){

			servicioListas.eliminarItem(nuevaLista);
		});

		it('deberiamos llegar', function(){

			$httpBackend.whenGET(API).respond(200);

			Servicio.verTodos()

			.then


		});
	});
*/
	
});