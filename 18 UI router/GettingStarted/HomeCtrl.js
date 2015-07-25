(function () {

    function HomeCtrl($scope, contactService) {
        $scope.title = "Home";

        var off = $rootScope.$on("ffff", function () {
        });

        off();

        contactService.getAll().then(function (contacts) {
            $scope.contacts = contacts;
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
