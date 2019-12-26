
angular.module('mainApp', [
	'ui.router',
	'servicios.app',
	'componente.home',
	'componente.listas',
])

.config( [

	'$urlRouterProvider',
	'$locationProvider',
	function($urlRouterProvider, $locationProvider){

		$urlRouterProvider.otherwise('/inicio');

		$locationProvider

			.hashPrefix('')
	}
] );

