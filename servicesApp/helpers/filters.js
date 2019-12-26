
angular.module('mainApp')

.filter( "trustHtml", ['$sce', function($sce){

	return function(html){
		
		console.log(html)

		return $sce.trustAshtml(html);
	}
}]);