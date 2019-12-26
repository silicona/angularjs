
//var app = angular.module( 'servicios.app', [] );
var app = angular.module( 'servicios.app', ['LocalStorageModule'] );

/*
app.factory( 'ListasFactoria', function(localStorageService){
//.factory( 'ListaService', ['localStorageService', function(localStorageService){

	var ListasFactoria = {

		clave: 'angular-todoList',
		listas: [],


		initialize: function(){

			if( localStorageService.get(this.clave) ){

				this.listas = localStorageService.get(this.clave);
			}

			return this;
		},

		anadir: function(nuevaLista){

			this.listas.unshift(nuevaLista);
			this.actualizarStorage();
		},

		actualizarStorage: function(){

			localStorageService.set(this.clave, this.listas);
		},

		limpiar: function(){

			this.listas = [];
			this.actualizarStorage();

			return this.verTodos();
		},

		verTodos: function(){


			return this.listas;
		},

		eliminarItem: function(item){

			this.listas = this.listas.filter( function(lista){

				return lista !== item;
			});

			this.actualizarStorage();

			return this.verTodos();
		},
	};

	return ListasFactoria.initialize();
});
*/

app.factory('factoriaCoches', function () {

    var cars = [
        createCar('volkswagen', 'golf', '2.0 TDI 150CV'),
        createCar('ford', 'focus', '1.8 TDCI 115CV')
    ];

    function createCar(brand, model, engine) {
        return {
            brand: brand,
            model: model,
            engine: engine
        };
    }

    function getCars() {
        return cars;
    }

    return {
        getAll: getCars
    };
});

app.factory( 'factoriaListas', function(localStorageService){

	var todoService = {

		clave: 'angular-todoList',

		listas: [],

		bbdd: localStorageService,

		anadir: function(nuevaLista){

			this.listas.unshift(nuevaLista);
			this.actualizarStorage();
		},

		actualizarStorage: function(){

			localStorageService.set(this.clave, this.listas);
		},
		
		limpiar: function(){

			this.listas = [];
			this.actualizarStorage();

			return this.verTodos();
		},

		verTodos: function(){

			//this.listas = localStorageService.get(this.clave);


			if( this.bbdd.get(this.clave) ){

				this.listas = localStorageService.get(this.clave);

			}/* else {

				this.listas = [];
			}*/

			return this.listas;
		},

		eliminarItem: function(item){

			this.listas = this.listas.filter( function(lista){

				return lista !== item;
			});

			this.actualizarStorage();

			return this.verTodos();
		},
	};


	return todoService;
});

