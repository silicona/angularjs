
angular.module('helpers.funciones', [])

.service( 'Fx', function(){

	var Fx = {

		bs_alert: function(mensaje, clase, titulo){

			var mensaje = mensaje || '',
				clase   = clase   || 'success',
				titulo  = titulo  || '',
				icono   = 'warning',
				color   = 'bg-red';

			if(clase == 'success') { 
				
				icono = 'fa fa-check';
				color = 'bg-green';

				if( titulo === '' ){ titulo = 'Éxito en la operación'; }

			}

			if(clase == 'warning') { 

				icono = 'fas fa-exclamation';
				color = 'bg-orange';
				
				if( titulo === '' ){ titulo = 'Atención:'; }
			}

			if(clase == 'danger') { 

				icono = 'fas fa-exclamation-triangle';
				color = 'bg-red';
				
				if( titulo === '' ){ titulo = 'Hubo un error:';	}
			}

			if(clase == 'info') { 

				icono = 'fas fa-info-circle';
				color = 'bg-blue';
				
				if( titulo === '' ){	titulo = 'Información:'; }
			}

			caja_titulo = titulo === true ? '' : '<h4 class="alert-title">' + titulo + '</h4>';

			/*
			if( titulo === true ){

				caja_titulo = '';

			} else {

				caja_titulo = '<h4 class="alert-title">' + titulo + '</h4>';
			}
			*/

			return [
				'<div class="bs_alert alert alert-', clase, '">',
					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>',
					'<div class="' + color + ' alert-icon">',
						'<i class="' + icono + '"></i>',
					'</div>',
					'<div class="alert-content">',
						caja_titulo,
						mensaje, 
					'</div>',

				'</div>'
			].join('');
		},

		escape_html: function(string) {

			string = string || '';

			return string.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
		},

		form_boton: function(obj_datos){

			var id           = obj_datos.id           || '',
				label        = obj_datos.label        || '',
				valor        = obj_datos.valor        || '', 
				placeholder  = obj_datos.placeholder  || '',
				ayuda        = obj_datos.ayuda        || '',
				disabled     = obj_datos.disabled     || '',
				title        = obj_datos.title        || '',
				atributos    = obj_datos.atributos    || {},
				clase        = obj_datos.clase        || '',
				col_bs_group = obj_datos.col_bs_group || '',
				col_bs_label = obj_datos.col_bs_label || '',
				col_bs_input = obj_datos.col_bs_input || '',
				href         = obj_datos.href         || '',
				target 		 = obj_datos.target 	  || '',
				icono        = obj_datos.icono        || '',
				input_group  = obj_datos.input_group  || '',
				boton_info   = '',
				html_boton   = '',
				tag_name     = 'button';
				
			if( ayuda !== '' ){

				boton_info = '<span class="badge badge-info ayuda"><i class="i_ayuda fa fa-question" data-toggle="tooltip" title="' + ayuda + '"></i></span> ';
			}

			if( disabled !== ''){

				disabled = 'disabled';
			}

			if( href !== '' ){

				tag_name = 'a';
				href = ' href="' + href + '" target="' + target + '"';
			}

			if( icono !== '' ){

				icono = '<i class="fa fa-' + icono + ' fa-lg"></i> ';
			}

			if( title !== '' ){

				title = 'title="' + title + '" ';
			}

			html_boton = '<' + tag_name + ' ' + href + title + this.objeto_a_string(atributos) + disabled + ' class="btn ' + clase + '" id="' + id + '" >' + icono + label + '</' + tag_name + '>';

			if( input_group === '' || input_group === 'true' ){
				
				return [
					'<div class="form-group div_' + id + ' ' + col_bs_group + '">',
						'<div class="input-group ' + col_bs_input + '">',
							html_boton,	
						'</div>',
					'</div>'
				].join('');
			
			} else {

				return html_boton;
			}
		},
	};

	return Fx;
});

