'use strict';

angular.module('myApp.viewDepartments',['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	 $routeProvider.when('/viewDepartments', {
	 	templateUrl: 'viewDepartments/viewDepartments.html',
	 	controller: 'ViewDepartmentsCtrl'
	 });
}])
	 .controller('ViewDepartmentsCtrl', [function($scope, $http){
	 	 $http.get('departments.json')
       .then(function(res){
          $scope.departments = res.data;                
        });
}])