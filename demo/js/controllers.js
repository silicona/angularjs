
angular.module('demoApp')

	.controller('MainController', function($scope){

		console.log($scope);
		$scope['vm.activeTab'] = 0
	});