'use strict';

angular.module('myApp.viewTask', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewTask', {
    templateUrl: 'viewTask/viewTask.html',
    controller: 'ViewTaskCtrl'
  });
}])

var companyTask = [
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
    ];


.controller('ViewTaskCtrl', [function() {

}])
.controller('namesCtrl', ['$scope', function($scope){
$scope.tasks = companyTask;

$scope.del = function(eID){
var index = getSelectedIndex(eID);
alert(index);
$scope.companyTask.splice(index, 1);
};

function getSelectedIndex(eID){
    for(var i=0; i<$scope.companyTask.length; i++)    
        if($scope.companyTask[i].eID == eID)
            return i;
        return -1;              
               
}
}]);


