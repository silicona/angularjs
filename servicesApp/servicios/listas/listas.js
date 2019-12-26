
angular.module('api.listas', ['LocalStorageModule'])

	.service( 'servicioListas', function(localStorageService){

		this.clave = 'angular-todoList';

		this.bbdd = localStorageService;
		
		this.anadir = function(nuevaLista){

			nuevaLista.id_lista = this.listas.length;
			this.lista.push(nuevaLista);

			//this.listas.unshift(nuevaLista);
			this.actualizarStorage();
		};

		this.actualizarStorage = function(){

			localStorageService.set(this.clave, this.listas);
		};

		this.limpiar = function(){

			this.listas = [];
			this.actualizarStorage();

			return this.verTodos();
		};

		this.verTodos = function(){

			if( localStorageService.get(this.clave) ){

				this.listas = localStorageService.get(this.clave);
				
			} else {
				this.listas = [];

			}

			return this.listas;
		};

		this.eliminarItem = function(item){

			this.listas = this.listas.filter( function(lista){

				return lista !== item;
			});

			this.actualizarStorage();

			return this.verTodos();
		};
	});