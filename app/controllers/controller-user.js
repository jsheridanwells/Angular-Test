'use strict';

app.controller('userCtrl', function($scope, $window, $location, userFactory){

	$scope.account = {
		email: '',
		password: ''
	};

	$scope.register = () => {
		console.log("register firing");
		userFactory.register({
			email: $scope.account.email,
			password: $scope.account.password
		})
		.then((userData) => {
			console.log("userData is ", userData);
			$scope.logIn(userData);
		}, (error) => {
			console.log("error in register", error.code, error.message);
		});
	};

	$scope.logIn = () => {
		console.log("login firing");
		userFactory.logIn($scope.account)
		.then(()=>{
			$window.location.href = '#!/view-data';
		});
	};

	$scope.logOut = () => {
		userFactory.logOut()
		.then(()=>{
			console.log("logout successful");
		},
		(error)=>{
			console.log("error on logOut", error.code, error.message );
		});
	};

});