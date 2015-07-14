(function () {

    function HomeCtrl(s) {
        s.calc = function () {
            s.result = s.num1 * 1 + s.num2 * 1;
        }
    }

    angular.module("MyApp").controller("HomeCtrl",
        [
            "$scope",
            "$timeout",
            "$http",
            HomeCtrl
        ]);
})();
