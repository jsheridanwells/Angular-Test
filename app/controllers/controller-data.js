'use strict';

app.controller('dataCtrl', function($scope, dataFactory){
	$scope.myData;

	const showData = function() {
		console.log("showData is firing");
		dataFactory.getData()
		.then((data)=>{
			$scope.myData = data;
			console.log("$scope.myData", $scope.myData);
		});
	};
	showData();
});