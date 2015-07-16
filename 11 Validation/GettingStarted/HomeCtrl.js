(function () {

    function HomeCtrl($scope, $controller) {


        runAsync().tehn(fu
        

        $scope.save = function () {
            if ($scope.form.$invalid) {
                return;
            }

            console.log("Saving");
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
