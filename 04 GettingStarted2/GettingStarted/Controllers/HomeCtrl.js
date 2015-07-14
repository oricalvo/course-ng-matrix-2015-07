/// <reference path="angular.js" />

define(["../app/MyApp"], function (myApp) {

    function HomeCtrl($scope) {
        $scope.message = "Hello";

        $scope.items = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    myApp.controller("HomeCtrl", HomeCtrl);
});
