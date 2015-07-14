var HomeCtrl = (function () {
    function HomeCtrl() {
        this.num1 = 0;
        this.num2 = 0;
        this.result = 0;
    }
    HomeCtrl.prototype.calc = function () {
        this.result = this.num1 * 1 + this.num2 * 1;
    };
    return HomeCtrl;
})();
angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
//# sourceMappingURL=HomeCtrl.js.map