'use strict';

app.factory('dataFactory', function($q, $http, FBCreds){


	const getData = function () {
		let myData = {}	;

		console.log("getData is firing");
		return $q((resolve, reject) => {
			console.log("url in getData is ", `${FBCreds.databaseURL}/mushrooms.json`);
			$http.get(`${FBCreds.databaseURL}/mushrooms.json`)  // construct database url here
			.then((itemObj)=>{
				myData = itemObj.data;

				//figure out how to push data to myData
				
				resolve(myData);
			})
			.catch((error)=>{
				reject(error);
			});
		});
	};

	return {getData};

});