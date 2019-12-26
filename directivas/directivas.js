
app.directive( 'backImg', function(){

	return function(scope, elemento, attrs){

		//attrs.backImg // Asi no se accede. $observe compila js primero

		attrs.$observe( 'backImg', function(valor){

			elemento.css({
				'background': 'url(' + valor + ')',
				'background-position': 'center',
				'background-size': 'cover'
			});
		});
	}
});

app.directive( 'miAutocomplete', function(){

	function link(scope, elemento, attrs){

		$(elemento).autocomplete({

			source: scope.$eval(attrs.miAutocomplete),

			select: function(ev, ui){

				ev.preventDefault();
				console.log(ui)

				if( ui.item ){
					scope.seleccionarOpcion(ui.item.value);
				}

			},
			focus: function( ev, ui){

				ev.preventDefault();

				$(this).val(ui.item.label);

			}
		})
	};

	return {
		link: link
	};
});