/** * Created by Mohsin on 8/6/2014.*/
function ckStorage() {
    if (localStorage.getItem('offeredCoursesList1') === null) {
        var arr = ['Javascript', 'HTML' , 'CSS'];
        localStorage.setItem('offeredCoursesList1', JSON.stringify(arr));
    }
    if(localStorage.getItem('coursesSummaryObj') === null){
        var objcoursesSummary = [];
        localStorage.setItem('coursesSummaryObj', JSON.stringify(objcoursesSummary));
    }
}
ckStorage();
var swapApp = angular.module('swapApp', ['ngRoute']);
swapApp.run(function($rootScope) {
    $rootScope.xyz = localStorage.getItem('offeredCoursesList1');
    $rootScope.offeredCoursesList = JSON.parse($rootScope.xyz);
    /*$rootScope.coursesSummary = [];*/
    $rootScope.uvw = localStorage.getItem('coursesSummaryObj');
    $rootScope.coursesSummary = JSON.parse($rootScope.uvw);
});
// configure our routes
    swapApp.config(function ($routeProvider) {
        $routeProvider

            // route for the login Home page
            .when('/index', {
                templateUrl: 'index.html',
                controller: 'fbloginStatus'
            })

            // route for the Information page
            .when('/personalInfoPage', {
                templateUrl: 'personalInfoPage.html',
                controller: 'coursesDetails',
                resolve: {
                    delay: function ($q, $timeout) {
                     var delay = $q.defer();
                     $timeout(delay.resolve, 2000); //set delay of 2 seconds.
                     return delay.promise;
                     }
                }
            })

            .when('/Javascript', {
                templateUrl: 'test1.html',
                controller: 'test1Controller'
        })

        .when('/HTML', {
            templateUrl: 'test2.html',
            controller: 'test2Controller'
        })

            .when('/CSS', {
                templateUrl: 'test3.html',
                controller: 'test3Controller'
            });
    });