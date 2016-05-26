'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}])
.controller('namesCtrl', function($scope){
	$scope.tasks = companyTask;
});

var Task = [
        {eID:'1',task:'Cleanning', time:'17h-18h'},
        {eID:'2',task:'Cleanning', time:'17h-18h'},
        {eID:'3',task:'Office', time:'8h-16h'},
        {eID:'4',task:'Office', time:'8h-16h'},
        {eID:'5',task:'Managing', time:'8h-16h'},
        {eID:'6',task:'Managing', time:'8h-16h'},
        {eID:'7',task:'Scheduling', time:'12h'},
        {eID:'8',task:'scheduling', time:'12h'},
        {eID:'9',task:'Watching', time:'8h-16h'},
        {eID:'10',task:'watching', time:'8h-16h'},
    ]