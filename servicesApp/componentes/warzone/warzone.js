
angular.module( 'componente.warzone', [] )
/*
.directive('formBoton', function($document){

	return function( scope, elemento, attr ){
	
		var template = [

			'<{{ $ctrl.tag }} {{ $ctrl.title }} class="btn btn-success" id="{{ $ctrl.id }}">',
				'{{ label }}',
			'</{{ $ctrl.tag }}>'

		].join('');

		elemento.html(template);

		controller: function(){

			this.tag = 'button';

			this.title = 'Titulo de boton';

			this.id = 'btn_test';

			
			if( input_group === '' || input_group === 'true' ){

				'<div class="form-group div_' + id + ' ' + col_bs_group + '">',
					'<div class="input-group ' + col_bs_input + '">',
						html_boton,	
					'</div>',
				'</div>'
			}
			

		}
	}

})
/*
// .component('boton', {
	
// 	template: [

// 		'<{{ $ctrl.tag }} {{ $ctrl.title }} class="btn btn-success" id="{{ $ctrl.id }}">',
// 			'{{ label }}',
// 		'</{{ $ctrl.tag }}>'

				

// 	].join(''),

// 	controller: function(){

// 		this.tag = 'button';

// 		this.title = 'Titulo de boton';

// 		this.id = 'btn_test';

// 		/*
// 		if( input_group === '' || input_group === 'true' ){

// 			'<div class="form-group div_' + id + ' ' + col_bs_group + '">',
// 				'<div class="input-group ' + col_bs_input + '">',
// 					html_boton,	
// 				'</div>',
// 			'</div>'
// 		}
// 		*/

// 	}

// })

.controller( 'warzoneControlador', function($scope){

})