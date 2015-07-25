angular.module("MyApp", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: "HomeCtrl",
            templateUrl: "/home.html",
        })
        .when("/about", {
            controller: "AboutCtrl",
            templateUrl: "/about.html",
        })
        .otherwise({
            redirectTo: "/",
        });
});
