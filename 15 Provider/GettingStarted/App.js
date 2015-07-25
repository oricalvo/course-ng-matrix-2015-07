angular.module("MyApp", ["ngSanitize"]).config(function (contactServiceProvider) {
    contactServiceProvider.enableCache(false);
}).run(function (contactServiceProvider) {


    //
    //  Will never happen
    //
    angular.module("MyApp").config(function () {
    }).run(function () {
    });


});


angular.module("MyApp").config(function () {
}).run(function () {
});
