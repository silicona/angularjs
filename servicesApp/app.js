
angular.module( 'mainApp', [
	'ngRoute',
	'helpers.funciones',
	//'ui.router',
	'api.listas',
	'componente.home',
	'componente.listas',
] )

/*
// ui.router
.config( function($urlRouterProvider){

	$urlRouterProvider.otherwise('/listas');

});
*/

// ngRoute
.config( [

	'$routeProvider', 
	'$locationProvider', 
	function($routeProvider, $locationProvider){

		$routeProvider

			.when('/', {
				controller: 'homeControlador',
				templateUrl: 'componentes/home/home.html'
			})

			.when('/listas', {
				controller: 'listasControlador',
				templateUrl: 'componentes/listas/listas.html'
			})

			.when('/warzone', {
				controller: 'listasControlador',
				templateUrl: 'componentes/warzone/warzone.html'
			})

			//.when('/')

			.otherwise('/');

		$locationProvider

			.hashPrefix('')
	}
] );

/*
angular.module('moduloServicio', ['LocalStorageModule'])


.config( function($stateProvider){

	$stateProvider
		.state( 'Listas', {
			url: '/',
			templateUrl: ''
		})
})


.service( 'servicioListas', function(localStorageService){

	this.clave = 'angular-todoList';
	this.bbdd = localStorageService;

	if( localStorageService.get(this.clave) ){

		this.listas = localStorageService.get(this.clave);
	} else {
		this.listas = [];

	}
	
	this.anadir = function(nuevaLista){

		this.listas.unshift(nuevaLista);
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

		return this.listas;
	};

	this.eliminarItem = function(item){

		this.listas = this.listas.filter( function(lista){

			return lista !== item;
		});

		this.actualizarStorage();

		return this.verTodos();
	};
})

.controller('ServicesController', function($scope, servicioListas){

	$scope.listas = servicioListas.verTodos();
	$scope.nuevaLista = {};

	$scope.anadirLista = function(){

		servicioListas.anadir($scope.nuevaLista);

		$scope.nuevaLista = {};
	}

	$scope.eliminarLista = function(item){

		$scope.listas = servicioListas.eliminarItem(item);
	}

	$scope.limpiar = function(){

		$scope.listas = servicioListas.limpiar();
	}
})
*/

