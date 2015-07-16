(function () {

    function HomeCtrl($scope, $timeout) {
        var ori = {id: 1, name: "Ori"};
        var roni = {id: 2, name: "Roni"}
        $scope.nums = [ori, roni];

        $scope.run = function () {
            console.log($scope.nums);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
