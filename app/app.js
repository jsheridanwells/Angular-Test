'use strict';

const app = angular.module('Auth', ['ngRoute']);

//provide user authentication check here
let isAuth = (userFactory) => {userFactory.isAuthenticated();};

app.config(($routeProvider)=>{
	$routeProvider
	.when('/', {
		templateUrl: 'partials/user.html',
		controller: 'userCtrl'
	}).when('/data-list', {
		templateUrl: 'partials/show-data.html',
		controller: 'dataCtrl',
		resolve: {isAuth}
	})
	.otherwise('/');

});

app.run(($location, FBCreds) => {
	console.log("FB Creds", FBCreds);
	let authConfig = {
		apiKey: FBCreds.apiKey,
	    authDomain: FBCreds.authDomain,
	    databaseURL: FBCreds.databaseURL
	};
	firebase.initializeApp(authConfig);
});
