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
        }])
	 .controller('ReviewController', function(){
	 	this.review = {};

	 	this.addReview = function (dep) {
	 		 dep.reviews.push(this.review);
	 		 this.review = {};
	 	};
	 })
	 .directive('departmentInfo', function () {
	 	 return{
	 	 	restrict: 'E',
	 	 	templateUrl: 'viewDepartments/department-info.html'
	 	 }; 
	 })
	 .directive('departmentReviews', function () {
	 	 return{
	 	 	restrict: 'E',
	 	 	templateUrl: 'viewDepartments/department-reviews.html'
	 	 }; 
	 })
	 .directive('departmentReviewForm', function () {
	 	 return{
	 	 	restrict: 'E',
	 	 	templateUrl: 'viewDepartments/department-review-form.html'
	 	 }; 
	 });

	 var companyDepartments = [{
	 	name: 'IT',
	 	description: "Information technologies (IT) department is resposible for functionality of all software and eletronics in company",
	 	people: 13,
	 	fields: ["front-end", "back-end", "security spacialist"],
	 	avarageSalary: 1500,
	 	contact: "it@department.hh",
	 	reviews: [
	 	{
	 		body: "Great job IT!",
        	author: "mike@example.org"
        }]
	 }, {
	 	name: 'HR',
	 	description: "Human resources (HR) department is responsible for all employees in our company as well for interships, partime jobs...",
	 	people: 5,
	 	fields: ["recruitment", "monitoring"],
	 	avarageSalary: 1000,
	 	contact: "it@department.hh",
	 	reviews: [
	 	{
	 		body: "faslkjlf jsadf alskjdf alsk jfasl;f sl;fja a;s fjsas",
        	author: "bubu@example.org"
        }]
	 }
	 ];