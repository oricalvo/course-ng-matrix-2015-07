(function () {

    function HomeCtrl($scope, $timeout) {
        console.log("HomeCtrl.ctor");

        $scope.contacts = [];

        $scope.add = function () {
            var contact = {
                name: $scope.userName,
                email: $scope.userName + "@gmail.com",
            };

            $scope.contacts.push(contact);
        }

        $timeout(function () {
            $scope.message = "ABC";
        }, 2000);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
