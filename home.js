/* Created by Mohsin on 7/4/2014.*/

window.fbAsyncInit = function() {
 FB.init({appId: '1491087177697082',
 status: true,
 cookie: true,
 xfbml: true,
 version    : 'v2.1'
 });
 };
 (function() {
 var e = document.createElement('script'); e.async = true;
 e.src = document.location.protocol +
 '//connect.facebook.com/en_US/sdk.js";';
 document.getElementById('fb-root').appendChild(e);
 }());

var fbloginStatus = function($scope, $location, $rootScope) {
    $scope.fblogin = function (){
        window.fbAsyncInit();
        FB.login(function(response) {
            if(response.status==='connected'){
                $scope.ShowMyName();
               $scope.goto();
                $scope.x= document.getElementById('loginPage').innerHTML ="";
            }
        }, {scope:'read_stream,publish_stream,offline_access'});
    };
    $scope.ShowMyName = function () {
        FB.api("/me",
            function (response) {
                $scope.temp = response.name;
                localStorage.setItem('userName', JSON.stringify($scope.temp));
            }
        )};
    $scope.goto = function() {
            $rootScope.$apply(function () {
                $location.path("/personalInfoPage");
            });
    };
    $scope.flag = true;
    $scope.hideBtn = function(){
        $scope.flag = !$scope.flag;
    };
};


