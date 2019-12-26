'use strict';

describe('Modulo Filters', function(){

	beforeEach( function(){

		module('moduloFiltros');
	});

	describe('Filtros decorador', function(){

		it('decorator convierte en mayusculas',
			inject( function(decoratorFilter){
				//echo(filter)
				var input = 'Hola mundo',
					esperado = 'HOLA MUNDO';

				expect( decoratorFilter(input) ).toEqual(esperado);
			})
		);


		it('removeHtml elimina las etiquetas',
			inject( function(removeHtmlFilter){
				//echo(filter)
				var input = '<p>Hola mundo</p>',
					esperado = 'Hola mundo';

				expect( removeHtmlFilter(input) ).toEqual(esperado);
			})
		);
		
	});
})