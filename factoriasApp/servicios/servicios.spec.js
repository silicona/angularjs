'use strict';

describe('Factorias Servicios', function(){

	beforeEach( function(){

		module('servicios.app');
	});


	it('ver', function(){
		console.log(module('servicios.app'))
	})	

	describe('Factoria Coches', function(){

		var factoriaCoches;

		beforeEach( function(){

			inject( ['factoriaCoches', function(factoria){
								
				factoriaCoches = factoria;

			}]);
		});

		it('Debe devolver Factoria con varias listas', function(){

			var coches = factoriaCoches.getAll();

			expect(coches).toBeDefined();
			expect(coches.length).toBe(2);
		})
	});

	
	describe('Factoria Listas', function(){

		var factoriaListas, nuevaLista;

		beforeEach( function(){

			nuevaLista = { descripcion: "lista test", fecha: "2020-12-11T23:00:00.000Z" };


			inject( ['factoriaListas', function(factoria){

				factoriaListas = factoria;

			}]);

			spyOn(factoriaListas, 'actualizarStorage').and.callThrough();

			// Anula el autentico test Limpiar listas
			spyOn(factoriaListas, 'limpiar').and.returnValue([]);

			spyOn(factoriaListas, 'verTodos').and.callFake( function(param){
				
				//console.log('spy Fake', this);	// Servicio
				//console.log('spy Fake', param); 	// undefined por función

				return this.listas;
			});

			factoriaListas.invalidFunction = function(){ return true; }

			spyOn(factoriaListas, 'invalidFunction').and.throwError('Error provocado');
		
		});


		afterEach( function(){

			factoriaListas.eliminarItem(nuevaLista);

			expect(factoriaListas.actualizarStorage).toHaveBeenCalled();
		});
		
		it('Se inicializa correctamente', function(){

			expect(factoriaListas.clave).toBe('angular-todoList');

			expect(factoriaListas.listas).toBeDefined();
			
			expect(factoriaListas.listas.length).toBe(0);
		});

		it('Actualiza BBDD', function(){

			factoriaListas.listas[0] = nuevaLista;
			factoriaListas.actualizarStorage();

			var bbdd = factoriaListas.bbdd.get(factoriaListas.clave);

			expect(bbdd[0].descripcion).toBe(nuevaLista.descripcion);
		});

		it('Añade lista a BBDD', function(){
			
			factoriaListas.anadir(nuevaLista);

			expect(factoriaListas.listas.length).toBe(1);
		});

		it('Obtiene las listas', function(){

			factoriaListas.anadir(nuevaLista);
			
			var listas = factoriaListas.verTodos()

			expect(listas.length).toBe(1);
		});

		it('Elimina lista', function(){
			
			factoriaListas.anadir(nuevaLista);

			var listas = factoriaListas.eliminarItem(nuevaLista);

			expect(listas.length).toBe(0);

			expect(factoriaListas.verTodos).toHaveBeenCalled();

		});

		it('Limpiar listas', function(){
			
			factoriaListas.anadir(nuevaLista);

			factoriaListas.anadir(nuevaLista);

			expect(factoriaListas.listas.length).toBe(2);

			var listas = factoriaListas.limpiar();

			expect(listas.length).toBe(0);
		});	
	});
	
});




