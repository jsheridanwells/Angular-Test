let app = angular.module('Todos', []);
app.controller('TodosCtrl', ($scope)=> {
	$scope.todos = [
		'Groceries',
		'Mow the Lawn',
		'Sleep'
	];
	$scope.done = (todo) => {
		let indexOf = $scope.todos.indexOf(todo);
		if (indexOf !== -1) {
			$scope.todos.splice(indexOf, 1);
		}
	};
	$scope.add = (e) => {
		if (e.which && e.which === 13) {
			$scope.todos.push($scope.newTodo);
			$scope.newTodo = '';
		}
	}
});