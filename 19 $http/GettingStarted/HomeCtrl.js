(function () {

    function HomeCtrl($scope, contactService, $q) {

        //$q.all([getData1(), getData2()]).then(function (res) {
        //}).catch(function (err) {
        //});

        contactService.getAll().then(function (contacts) {
            $scope.contacts = contacts;
        });
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
