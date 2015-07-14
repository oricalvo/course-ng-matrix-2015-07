(function () {

    function TabCtrl($scope, $rootScope) {
        $scope.page = "page1";

        $scope.changePage = function (page) {
            $scope.page = page;

            $rootScope.$broadcast("currentPageChanged");
        }

        $scope.$on("done", function () {
            $scope.page = "finish";
        });
    }

    angular.module("MyApp").controller("TabCtrl", TabCtrl);
})();
