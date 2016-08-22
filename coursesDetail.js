/*Created by Mohsin on 8/9/2014.*/

/*
var coursesDetails= function ($scope) {
    $scope.hideList = false;
    $scope.showHide = function(){
      $scope.hideList = ! $scope.hideList;
    };
    $scope.temp = localStorage.getItem('userName');
    $scope.userName = JSON.parse($scope.temp);
    $scope.greeting = 'Welcome '+$scope.userName;
};
*/

var coursesDetails= function ($scope, $location, $rootScope) {
    $scope.x= document.getElementById('loginPage').innerHTML ="";
    $scope.x= document.getElementById('flag').innerHTML ="";

    $scope.hideList = false;
    $scope.showHide = function(){
        $scope.hideList = ! $scope.hideList;
    };
    $scope.temp = localStorage.getItem('userName');
    $scope.userName = JSON.parse($scope.temp) || "User";
    $scope.greeting = 'Welcome '+$scope.userName;

};
