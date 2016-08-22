/**
 * Created by Mohsin on 6/30/2014.
 */

var test2Controller = function($scope ,$location, $rootScope) {
    $scope.quizName = 'HTML Quiz 1';
    $scope.ElementIndex = $rootScope.offeredCoursesList.indexOf('HTML');
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
        "Which attribute you’ll use with TD tag to merge two cells horizontally?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'>merge = rowspan:2 <br>" +
        "<input type='radio' name='q1' value='bb'>merge = colspan2<br>" +
        "<input type='radio' name='q1' value='ba'>rowspan = 2<br>" +
        "<input type='radio' name='q1' value='ab'>colspan = 2<br>");

    $scope.qJS.push(
        "Which attribute is used to name an element uniquely?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> class<br>" +
        "<input type='radio' name='q1' value='ab'>id<br>" +
        "<input type='radio' name='q1' value='bb'>dot<br>" +
        "<input type='radio' name='q1' value='ba'>All Above<br>");

    $scope.qJS.push(
        "Which of the following are attributes of Font tag?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> Face<br>" +
        "<input type='radio' name='q1' value='bb'>Size<br>" +
        "<input type='radio' name='q1' value='ba'>Color<br>" +
        "<input type='radio' name='q1' value='ab'>All of above<br>");

    $scope.qJS.push(
        "Is negative value allowed to be used when giving a padding property to an element?");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'>True<br>" +
        "<input type='radio' name='q1' value='ab'>False<br>" +
        "<input type='radio' name='q1' value='bb'>Don't know<br>" +
        "<input type='radio' name='q1' value='ba'>None of the above<br>");

    $scope.qJS.push(
        " To include a local style within an HTML tag, you use the ______ attribute.");

    $scope.optJs.push("<input type='radio' name='q1' value='ab'> Link<br>" +
        "<input type='radio' name='q1' value='aa'>Style<br>" +
        "<input type='radio' name='q1' value='bb'>Local<br>"+
        "<input type='radio' name='q1' value='ba'>Format<br>");

    $scope.qJS.push(
        "HTML Markup Language is a set of Markups______");

    $scope.optJs.push("<input type='radio' name='q1' value='aa'> Attributes<br>" +
        "<input type='radio' name='q1' value='bb'>Sets<br>" +
        "<input type='radio' name='q1' value='ab'>Tags<br>"+
        "<input type='radio' name='q1' value='ba'>Groups<br>");
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
            $scope.temp1 = {Name:'HTML',  Scored : $scope.jSResult};
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

