/**
 * Created by Mohsin on 6/30/2014.
 */


var test1Controller = function($scope ,$location,$rootScope){
    $scope.quizName = 'Javascript Quiz 1';
    $scope.ElementIndex = $rootScope.offeredCoursesList.indexOf('Javascript');
    $rootScope.offeredCoursesList.splice($scope.ElementIndex,1);
    $scope.temp = $rootScope.offeredCoursesList;
    localStorage.setItem('offeredCoursesList1', JSON.stringify($scope.temp));
    $scope.secondAttempt = true;
    $scope.emptyTheDiv = function(){
        if($scope.secondAttempt) {
            $scope.jsTest();
            $scope.secondAttempt = false;
        }else $scope.nextItem();
    };

    $scope.flag1 = false;
    $scope.hideBtn = function(){
        $scope.flag1 = !$scope.flag1;
    };

    $scope.qcount = 0;
    $scope.optcount = 0;
    $scope.qJS = [];
    $scope.optJs = [];
    $scope.qJS.push("" +
        "What is the value of variable 'x' if <br> var x = 9 % 3; ");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> 3<br>" +
        "<input type='radio' name='q1' value='bb'>1<br>" +
        "<input type='radio' name='q1' value='ba'>9<br>" +
        "<input type='radio' name='q1' value='ab'>0<br>" +
        "<br><br><br><br>");

    $scope.qJS.push(
        "The variable total now has a value of 10.59675? <br>var prettyTotal = total.toFixed(2);");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> 00.1059675<br>" +
        "<input type='radio' name='q1' value='bb'>1059.675<br>" +
        "<input type='radio' name='q1' value='ab'>10.59<br>" +
        "<input type='radio' name='q1' value='ba'>10596.75<br>" +
        "<br><br><br><br>");

    $scope.qJS.push("How many time the loop will executed?" +
        "<br>var i = 0;<br>while (i >= 3) {<br>alert(i);<br>i++;}");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> 4<br>" +
        "<input type='radio' name='q1' value='bb'>3<br>" +
        "<input type='radio' name='q1' value='ba'>2<br>" +
        "<input type='radio' name='q1' value='ab'>0<br>" +
        "<br><br>");

    $scope.qJS.push(
        "What is main purpose of shift() function when we call it in an array variable?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> To shift the newly added value one element ahead<br>" +
        "<input type='radio' name='q1' value='bb'>To shift the newly added value one element back<br>" +
        "<input type='radio' name='q1' value='ab'>To remove the element from the beginning of an array<br>" +
        "<input type='radio' name='q1' value='ba'>To add the new element in the beginning of an array<br>" +
        "<br><br><br><br>");

    $scope.qJS.push(
        "What is the value of a variable if it will not be initialize any where?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> NaN<br>" +
        "<input type='radio' name='q1' value='bb'>empty<br>" +
        "<input type='radio' name='q1' value='ba'>null<br>"+
        "<input type='radio' name='q1' value='ab'>undefined<br>" +
        "<br><br><br><br>");

    $scope.qJS.push(
        "What value of 'theSum' will alert?" +
        "<br>var theSum = 4;<br>function addNumbers() {<br>var theSum = 2 + 4;<br>}<br>addNumbers();<br>alert(theSum);");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> 6<br>" +
        "<input type='radio' name='q1' value='bb'>2<br>" +
        "<input type='radio' name='q1' value='ab'>4<br>"+
        "<input type='radio' name='q1' value='ba'>undefined<br>" +
        "<br>");
    $scope. userInput ='ab';

    $scope.jsTest = function(){
        $scope.x = document.getElementById('questionsTextArea').innerHTML = "<br><div id='qDiv'><br>"+ $scope.qJS[$scope.qcount]+ "<br><br></div>";
        $scope.y = document.getElementById('questionsTextArea').innerHTML += "<br>"+$scope.optJs[$scope.optcount];
    };


    $scope.crtCount = 0;
    $scope.right =[];
    $scope.wrong = [];
    $scope.rightCount = 0;
    $scope.wrongCount = 0;
    $scope.chosen;
    $scope.correct=0;
    $scope.correctFlag;

    $scope.validate = function(){
        $scope.chosen = "";
        $scope.len = document.chk.q1.length;
        for ($scope.i = 0; $scope.i <$scope.len; $scope.i++) {
            if (document.chk.q1[$scope.i].checked) {
                $scope.chosen = document.chk.q1[$scope.i].value
            }
        }
        if ($scope.chosen == $scope.userInput) {
            $scope.right[$scope.rightCount++]=$scope.chosen;
            $scope.qcount++;
            $scope.optcount++;
            $scope.correctFlag =true;
        }
        else if ($scope.chosen == "") {
            alert("No option selected");
        }

        else {
            $scope.wrong[$scope.wrongCount++] = $scope.chosen;
            $scope.qcount++;
            $scope.optcount++;
            $scope.correctFlag = false;
        }
        $scope.nextItem();
    };

    $scope.jSResult=0;
    $scope.secondPrint = true;
    $scope.nextItem = function(){
        if($scope.qcount < $scope.qJS.length){
            $scope.jsTest();
        }
        else {
            $scope.jSResult = (($scope.right.length / $scope.qJS.length) * 100).toFixed(2);
            $scope.temp1 = {Name:'Javascript',  Scored : $scope.jSResult};
            $rootScope.coursesSummary.push($scope.temp1);
            $scope.temp = $rootScope.coursesSummary;
            localStorage.setItem('coursesSummaryObj', JSON.stringify($scope.temp));
            document.getElementById('middle').innerHTML = "<h1 id='res'>Result</h1>" +
               "<p1 ng-model='offeredCoursesSummary.courseResult'>"+ $scope.jSResult +"</p1>"+ "%";
            /*$scope.gotoNextPage();*/
            $location.path("/personalInfoPage");
            if($scope.secondPrint) {
                $scope.secondPrint = false;
            }
        }

        $scope.flag1 = true;
        $scope.show_hide = function(){
            $scope.flag1 = !$scope.flag1;
        };

        $scope.gotoNextPage = function() {
            $location.path("/personalInfoPage");
        };
    };
};

