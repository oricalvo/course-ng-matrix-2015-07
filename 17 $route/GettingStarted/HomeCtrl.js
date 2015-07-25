(function () {

    function HomeCtrl($scope, contactService) {
        $scope.title = "Home";

        contactService.getAll().then(function (contacts) {
            $scope.contacts = contacts;
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
