(function () {

    function HomeCtrl($scope, $timeout) {
        $scope.message = "XXX";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
