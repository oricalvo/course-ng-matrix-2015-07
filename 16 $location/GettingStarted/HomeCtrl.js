(function () {

    function HomeCtrl($scope, $location) {
        $scope.change = function () {
            $location.url("/page1");
        }

        $scope.$watch(function () {
            return $location.url();
        }, function (newValue) {
            $scope.page = newValue;

            console.log($scope.page);
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
