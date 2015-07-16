(function () {

    function HomeCtrl($scope, $timeout) {
        //$scope.message = "<h1>XXX</h1>";

        $scope.message = "<script>alert('ddd');</script>";
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
