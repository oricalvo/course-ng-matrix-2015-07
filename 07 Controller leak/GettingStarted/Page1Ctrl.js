(function () {

    function Page1Ctrl($scope, $rootScope) {
        console.log("Page1Ctrl:ctor");

        $scope.done = function () {
            $scope.$emit("done");
        }

        var off = $rootScope.$on("currentPageChanged", function () {
            console.log("Page1: currentPageChanged");
        });

        $scope.$on("$destroy", function () {
            off();
        });
    }

    angular.module("MyApp").controller("Page1Ctrl", Page1Ctrl);
})();
