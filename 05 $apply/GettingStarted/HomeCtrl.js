(function () {

    function HomeCtrl($scope) {

        $scope.message = "";

        $scope.$watch(function () {
            return window.location.hash;
        }, function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log("CHANGED: " + oldValue + " --> " + newValue);
        });

        $scope.$watch("message", function (newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }

            console.log("CHANGED: " + oldValue + " --> " + newValue);
        });

        $scope.change = function () {
            $scope.message += "X";

            window.location.hash = "blabla";
        }

        //setTimeout(function () {

        //    $scope.$apply(function () {
        //        $scope.message = "ABC";

        //        throw new Error("Oops");
        //    });

        //}, 1000);

        //$scope.message = "XXX";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
