var app = angular.module('moduloFiltros', []);

app.filter('decorator', function(){

	return function(text){

		return String(text).toUpperCase();
	}
});

app.filter( "removeHtml", function(){
		return function(texto){
			//console.log(texto)

			return String(texto).replace(/<[^>]+>/gm, '');
		}
	});

app.filter( "trustHtml", ['$sce', function($sce){

	return function(html){
		
		console.log(html)

		return $sce.trustAshtml(html);
	}
}]);

app.controller('FiltersController', [ '$scope', function(scope){

		scope.miHtml = '<p>Hola mundo</p>';

		scope.mi_json = {};
		scope.mi_json.title = 'Hola';
		scope.mi_json.body = 'Mundillo unido';
	}]);