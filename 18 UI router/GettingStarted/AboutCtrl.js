(function () {

    function AboutCtrl($scope, $location, contactService) {
        $scope.add = function () {
            contactService.addContact($scope.name).then(function () {
                $location.url("/");
            });
        }
    }

    angular.module("MyApp").controller("AboutCtrl", AboutCtrl);
})();
