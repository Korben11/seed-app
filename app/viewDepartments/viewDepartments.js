'use strict';

angular.module('myApp.viewDepartments',['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
	 $routeProvider.when('/viewDepartments', {
	 	templateUrl: 'viewDepartments/viewDepartments.html',
	 	controller: 'ViewDepartmentsCtrl'
	 });
}])
	 .controller('ViewDepartmentsCtrl', ['$scope', function($scope){
          $scope.departments = companyDepartments;                
        }]);

	 var companyDepartments = [{
	 	name: 'IT',
	 	description: "Information technologies (IT) department is resposible for functionality of all software and eletronics in company",
	 	people: 13,
	 	fields: ["front-end", "back-end", "security spacialist"],
	 	avarageSalary: 1500,
	 	contact: "it@department.hh"
	 }, {
	 	name: 'HR',
	 	description: "Human resources (HR) department is responsible for all employees in our company as well for interships, partime jobs...",
	 	people: 5,
	 	fields: ["recruitment", "monitoring"],
	 	avarageSalary: 1000,
	 	contact: "it@department.hh"
	 }
	 ];