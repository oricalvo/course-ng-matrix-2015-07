(function () {

    function ClockComponent($scope, $interval, $attrs, $parse) {
        var intervalId = null;

        if ($attrs.name) {
            var getter = $parse($attrs.name);
            var setter = getter.assign;
            if (!setter) {
                throw new Error("The expression: " + $attrs.name + " is not assignable");
            }

            setter($scope.$parent, this);
        }

        $scope.time = new Date();

        this.stop = function () {

            if (intervalId) {
                $interval.cancel(intervalId);
                intervalId = null;
            }
        }

        this.start = function () {
            if (intervalId) {
                return;
            }

            $scope.time = new Date();

            intervalId = $interval(function () {
                $scope.time = new Date();

                $scope.onTick({
                    time: $scope.time
                });
            }, 1000);
        }

        this.start();
    }

    angular.module("MyApp").directive("clock", function () {
        var ddo = {
            restrict: "E",
            templateUrl: "/Clock.html",
            controller: ClockComponent,
            scope: {
                timezone: "=",
                onTick: "&",
            }
        };

        return ddo;
    });

})();
