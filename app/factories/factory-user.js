'use strict';

app.factory('userFactory', function ($q, $http) {
	let currentUser = null;

	const isAuthenticated = function() {
		return new Promise((resolve, reject) => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					currentUser = user.uid;
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	};

	const getCurrentUser = function() {
		return currentUser;
	};

	const logIn = function(userObj) {
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
		.catch((error) => {
			console.log("error from login", error.code, error.message);
		});
	};

	const logOut = function() {
		firebase.auth().signOut();
	};

	const register = function(userObj) {
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
		.catch((error)=>{
			console.log("error in register", error.code, error.message);
		});
	};

	return {isAuthenticated, getCurrentUser, logIn, logOut, register};

});