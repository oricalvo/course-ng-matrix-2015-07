angular.module("MyApp", ["ui.router"]).config(function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "Home.html",
            controller: "HomeCtrl",
        })
        .state('home.view1', {
            url: "/view1",
            templateUrl: "View1.html",
            controller: "View1Ctrl",
        })
        .state('about', {
            url: "/about",
            templateUrl: "About.html",
            controller: "AboutCtrl",
        });

    //$routeProvider
    //    .when("/", {
    //        controller: "HomeCtrl",
    //        templateUrl: "/home.html",
    //    })
    //    .when("/about", {
    //        controller: "AboutCtrl",
    //        templateUrl: "/about.html",
    //    })
    //    .otherwise({
    //        redirectTo: "/",
    //    });
});
