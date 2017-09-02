const app = angular.module('Auth', ['ngRoute']);

app.config(($routeProvider)=>{
	$routeProvider
	.when('/', {
		templateUrl: 'partials/user.html',
		controller: 'userCtrl'
	})
	.otherwise('/');

	app.run(($location, FBCreds) => {
		let authConfig = {
			apiKey: FBCreds.apiKey,
		    authDomain: FBCreds.authDomain,
		    databaseURL: FBCreds.databaseURL
		}
		firebase.initializeApp(authConfig);
	});
});