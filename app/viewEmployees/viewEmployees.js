'use strict';

angular.module('myApp.viewEmployees', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewEmployees', {
    templateUrl: 'viewEmployees/viewEmployees.html',
    controller: 'Web2ListEmployees'
  });
}])

.controller("Web2ListEmployees", function($scope)
            {

                        $scope.title = "Employee List";
                        $scope.employees = [
                        {name: "John Smith", id: 123451, email: "john.s@employee.com", phone: 016478991},
                        {name: "John Johnson", id: 123452, email: "john.j@employee.com", phone: 016478992},
                        {name: "John Black", id: 123453, email: "john.b@employee.com", phone: 016478993},
                        {name: "John White", id: 123454, email: "john.w@employee.com", phone: 016478994},
                        {name: "John Lee", id: 123455, email: "john.l@employee.com", phone: 016478995},
                        {name: "John Donald", id: 123456, email: "john.d@employee.com", phone: 016478996},
                        {name: "John Free", id: 123457, email: "john.f@employee.com", phone: 016478997},
                        {name: "John Right", id: 123879, email: "john.l@employee.com", phone: 016478789},
                        {name: "John Marlyn", id: 123741, email: "john.d@employee.com", phone: 016478012},
                        {name: "John Jonas", id: 123247, email: "john.f@employee.com", phone: 016478984}

                      ];
            }
);
