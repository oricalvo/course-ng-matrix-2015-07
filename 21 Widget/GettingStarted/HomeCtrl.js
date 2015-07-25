(function () {

    function HomeCtrl($scope) {
        $scope.nums = [1, 2, 3];

        $scope.dump = function () {
            console.log($scope.birthday);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
