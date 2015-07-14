(function () {

    function TabCtrl($scope) {
        $scope.page = "page1";

        $scope.changePage = function (page) {
            $scope.page = page;
        }

        $scope.$on("done", function () {
            $scope.page = "finish";
        });
    }

    angular.module("MyApp").controller("TabCtrl", TabCtrl);
})();
