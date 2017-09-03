'use strict';

app.controller('dataCtrl', function($scope, dataFactory, $location, $route){
	$scope.myData = {};
	$scope.newItem = {
		name: '',
		description: ''
	};

	const showData = function() {
		console.log("showData is firing");
		dataFactory.getData()
		.then((data)=>{
			$scope.myData = data;
			console.log("$scope.myData", $scope.myData);
		});
	};

	$scope.addItem = function() {
		dataFactory.addItem($scope.newItem);
		showData();
		// $route.reload();
	};

	$scope.deleteItem = function(item) {
		dataFactory.deleteItem(item);
	};

	showData();
});