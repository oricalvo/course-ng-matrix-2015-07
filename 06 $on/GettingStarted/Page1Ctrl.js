(function () {

    function Page1Ctrl($scope) {
        $scope.done = function () {
            $scope.$emit("done");
        }
    }

    angular.module("MyApp").controller("Page1Ctrl", Page1Ctrl);
})();
