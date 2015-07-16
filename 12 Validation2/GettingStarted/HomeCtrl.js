(function () {

    function HomeCtrl($scope, $controller) {

        $scope.$watch(function () {
            console.log(!!$scope.form);

            $scope.vf = {
                name: getValidationFlag("name", "required"),
                email: {
                    required: getValidationFlag("email", "required"),
                    email: getValidationFlag("email", "email"),
                }
            };
        });

        $scope.save = function () {
            if ($scope.form.$invalid) {
                return;
            }

            console.log("Saving");
        }

        function getValidationFlag(field, errorType) {
            return $scope.form[field].$error[errorType] && ($scope.form[field].$touched || $scope.form.$submitted);
        }
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
