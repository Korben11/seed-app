'use strict';

angular.module('myApp.viewDepartments',['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	 $routeProvider.when('/viewDepartments', {
	 	templateUrl: 'viewDepartments/viewDepartments.html',
	 	controller: 'ViewDepartmentsCtrl'
	 });
}])
	 .controller('ViewDepartmentsCtrl', ['$scope', function($scope){
          $scope.departments = [
          						{ "department":"learn angular", "done":true },
								{ "department":"build an angular app", "done":false},
								{ "department":"something", "done":false },
								{ "department":"another todo", "done":true }
								];                
        }]);