'use strict';

angular.module('myApp.viewEmployees', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewEmployees', {
    templateUrl: 'viewEmployees/viewEmployees.html',
    controller: 'Web2ListEmployees'
  });
}])

.controller("Web2ListEmployees", ['$scope', function($scope){
          $scope.employees = companyEmployees;                
        }]);


        var companyEmployees = [{
            name: "John Smith",
            id: 123456,
            age: 31,
            children: ["Anna", "Mary", "Jullian"],
            phone: 0678945612,
            email: "jSmith@netherlands.nl"
       }, {
            name: "John Todd",
            id: 124789,
            age: 42,
            children: ["David", "Luan", "Todd"],
            phone: 0678789612,
            email: "jTodd@netherlands.nl"
       }, {
            name: "John Michell",
            id: 789289,
            age: 29,
            children: ["David"],
            phone: 0678989612,
            email: "jMichell@netherlands.nl"
       }
       ];