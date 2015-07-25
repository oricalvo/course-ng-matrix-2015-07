(function () {

    function HomeCtrl($scope, $timeout, $parse, $element, $compile) {
        $scope.tn = "NY";

        //var obj = {
        //};

        //var fn = $parse("a.b.c.d");
        //var setter = fn.assign;

        //setter(obj, 42);
        //var res = fn(obj);

        //console.log(res);

        //console.log("%O", obj);

        $scope.onClockTick = function (time) {
            //console.log("Tick: " + time);
        }

        $scope.stop = function () {
            $scope.clocks.clock1.stop();
            $scope.clocks.clock2.stop();
        }

        $scope.start = function () {
            $scope.clocks.clock1.start();
            $scope.clocks.clock2.start();
        }

        $scope.createComponent = function () {
            var html = angular.element("<" + $scope.componentType + "/>");

            var linkFn = $compile(html);
            linkFn($scope);

            $element.append(html);
        }

        //$timeout(function () {
        //    $scope.tn = "TA";
        //}, 2500);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
