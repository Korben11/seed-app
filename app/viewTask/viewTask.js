'use strict';

angular.module('myApp.viewTask', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewTask', {
    templateUrl: 'viewTask/viewTask.html',
    controller: 'viewTask'
  });
}])

.controller('viewTask', function($scope){  
  $scope.tasks = companyTask;

  $scope.add = function(x){
    $scope.tasks.push(x);
  }

$scope.del = function(x){
var index = $scope.tasks.indexOf(x);
$scope.tasks.splice(index, 1);
};

$scope.edit = function(x){
 $scope.current = x;
};

$scope.save = function(x){
    $scope.current = {};
};



});

var companyTask = [
        {eID:'0',task:'Cleanning', time:'17h-18h'},
        {eID:'1',task:'Cleanning', time:'17h-18h'},
        {eID:'2',task:'Office', time:'8h-16h'},
        {eID:'3',task:'Office', time:'8h-16h'},
        {eID:'4',task:'Managing', time:'8h-16h'},
        {eID:'5',task:'Managing', time:'8h-16h'},
        {eID:'6',task:'Scheduling', time:'12h'},
        {eID:'7',task:'scheduling', time:'12h'},
        {eID:'8',task:'Watching', time:'8h-16h'},
        {eID:'9',task:'watching', time:'8h-16h'},
    ];




