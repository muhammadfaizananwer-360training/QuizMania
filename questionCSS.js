/*Created by Mohsin on 6/30/2014.*/


var test3Controller = function($scope ,$location ,$rootScope) {
    $scope.quizName = 'CSS Quiz 1';
    $scope.ElementIndex = $rootScope.offeredCoursesList.indexOf('CSS');
    $rootScope.offeredCoursesList.splice($scope.ElementIndex,1);
    $scope.temp = $rootScope.offeredCoursesList;
    localStorage.setItem('offeredCoursesList1', JSON.stringify($scope.temp));
    $scope.secondAttempt = true;
    $scope.emptyTheDiv = function () {
        if ($scope.secondAttempt) {
            $scope.jsTest();
            $scope.secondAttempt = false;
        } else $scope.nextItem();
    };

    $scope.flag1 = false;
    $scope.hideBtn = function () {
        $scope.flag1 = !$scope.flag1;
    };

    $scope.qcount = 0;
    $scope.optcount = 0;
    $scope.qJS = [];
    $scope.optJs = [];

    $scope.qJS.push(
        "What does CSS stand for?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'>Creative Style Sheets<br>" +
        "<input type='radio' name='q1' value='bb'>Colorful Style Sheets<br>" +
        "<input type='radio' name='q1' value='ba'>Computer Style Sheets<br>" +
        "<input type='radio' name='q1' value='ab'>Cascading Style Sheets<br>" +
        "<br><br><br><br>");

    $scope.qJS.push(
        "Which is the correct CSS syntax?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> body:color=black<br>" +
        "<input type='radio' name='q1' value='bb'>{body;color:black}<br>" +
        "<input type='radio' name='q1' value='ba'>{body:color=black(body}<br>" +
        "<input type='radio' name='q1' value='ab'>body {color: black}<br>" +
        "<br><br><br><br>");

    $scope.qJS.push("Which property is used to change the background color?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> bgcolor<br>" +
    "<input type='radio' name='q1' value='ab'>background-color:   <br>" +
    "<input type='radio' name='q1' value='bb'>color<br>" +
    "<input type='radio' name='q1' value='ba'>All of above<br>" +
    "<br><br><br><br>");

    $scope.qJS.push(
        "How do you display hyperlinks without an underline?");

    $scope.optJs.push("<input type='radio' name='q1' value='ab'>a {text-decoration:none}<br>" +
        "<input type='radio' name='q1' value='aa'>a {text-decoration:no underline}<br>" +
        "<input type='radio' name='q1' value='bb'>a {decoration:no underline}<br>" +
        "<input type='radio' name='q1' value='ba'>a {underline:none}<br>" +
        "<br><br><br><br>");

    $scope.qJS.push(
        "Where in an HTML document is the correct place to refer to an external style sheet?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> At the end of the document<br>" +
        "<input type='radio' name='q1' value='bb'>In the body section<br>" +
        "<input type='radio' name='q1' value='ab'>In the head section<br>"+
        "<input type='radio' name='q1' value='ba'>At the top of the document<br>" +
        "<br><br><br><br>");

    $scope.qJS.push(
        "How do you make the text bold in CSS?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> font-weight:bold<br>" +
        "<input type='radio' name='q1' value='ab'>style:bold<br>" +
        "<input type='radio' name='q1' value='bb'>font:b<br>"+
        "<input type='radio' name='q1' value='ba'>All of above<br>" +
        "<br><br><br><br>");
    $scope.userInput = 'ab';

    $scope.jsTest = function () {
        $scope.x = document.getElementById('questionsTextArea').innerHTML = "<br><div id='qDiv'><br>" + $scope.qJS[$scope.qcount] + "<br><br></div>";
        $scope.y = document.getElementById('questionsTextArea').innerHTML += "<br>" + $scope.optJs[$scope.optcount];
    };


    $scope.crtCount = 0;
    $scope.right = [];
    $scope.wrong = [];
    $scope.rightCount = 0;
    $scope.wrongCount = 0;
    $scope.chosen;
    $scope.correct = 0;
    $scope.correctFlag;

    $scope.validate = function () {
        $scope.chosen = "";
        $scope.len = document.chk.q1.length;
        for ($scope.i = 0; $scope.i < $scope.len; $scope.i++) {
            if (document.chk.q1[$scope.i].checked) {
                $scope.chosen = document.chk.q1[$scope.i].value
            }
        }
        if ($scope.chosen == $scope.userInput) {
            $scope.right[$scope.rightCount++] = $scope.chosen;
            $scope.qcount++;
            $scope.optcount++;
            $scope.correctFlag = true;
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

    $scope.jSResult = 0;
    $scope.secondPrint = true;
    $scope.nextItem = function () {
        if ($scope.qcount < $scope.qJS.length) {
            $scope.jsTest();
        }
        else {
            $scope.jSResult = (($scope.right.length / $scope.qJS.length) * 100).toFixed(2);
            $scope.temp1 = {Name:'CSS',  Scored : $scope.jSResult};
            $rootScope.coursesSummary.push($scope.temp1);
            $scope.temp = $rootScope.coursesSummary;
            localStorage.setItem('coursesSummaryObj', JSON.stringify($scope.temp));
            document.getElementById('middle').innerHTML = "<h1 id='res'>Result</h1>" +
                "<p1 ng-model='offeredCoursesSummary.courseResult'>" + $scope.jSResult + "</p1>" + "%";
            $location.path("/personalInfoPage");
            if ($scope.secondPrint) {
                $scope.secondPrint = false;
            }
        }

        $scope.flag1 = true;
        $scope.show_hide = function () {
            $scope.flag1 = !$scope.flag1;
        };

        $scope.gotoNextPage = function () {
            $location.path("/personalInfoPage");
        };
    };
};


