'use strict';

const app = angular.module('Auth', ['ngRoute']);

app.config(($routeProvider)=>{
	$routeProvider
	.when('/', {
		templateUrl: 'partials/show-data.html',
		controller: 'dataCtrl'
	})
	.otherwise('/');

});

app.run(($location, FBCreds) => {
	console.log("FB Creds", FBCreds);
	let authConfig = {
		apiKey: FBCreds.apiKey,
	    authDomain: FBCreds.authDomain,
	    databaseURL: FBCreds.databaseURL
	}
	firebase.initializeApp(authConfig);
});
