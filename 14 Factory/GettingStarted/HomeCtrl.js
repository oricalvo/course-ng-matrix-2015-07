(function () {

    function HomeCtrl($scope, contactService) {

        contactService.getAll().then(function (contacts) {
            $scope.contacts = contacts;

            console.log("1");
        }).catch(function () {
            alert("FAILED");
        });

        console.log("3");
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
