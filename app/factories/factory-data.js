'use strict';

app.factory('dataFactory', function($q, $http, FBCreds){


	const getData = function () {
		let myData = {}	;
		console.log("getData is firing");
		return $q((resolve, reject) => {

			$http.get(`${FBCreds.databaseURL}/mushrooms.json`)  // construct database url here
			.then((itemObj)=>{
				myData = itemObj.data;
				resolve(myData);
			})
			.catch((error)=>{
				reject(error);
			});
		});
	};

	const addItem = function (obj) {
		let newObj = JSON.stringify(obj);
		return $http.post(`${FBCreds.databaseURL}/mushrooms.json`, newObj)
			.then(data => data)
			.catch(error => console.log(error.code, error.message));
	};

	const deleteItem = function (item) {
		console.log("delete item firing: ", item);
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/mushrooms/${item}.json`)
			.then(response => resolve(response))
			.catch(error => reject(error));

		});
	};

	return {getData, addItem, deleteItem};

});