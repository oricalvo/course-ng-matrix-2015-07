declare var angular;

class HomeCtrl {
    num1: number;
    num2: number;
    result: number;

    constructor() {
        this.num1 = 0;
        this.num2 = 0;
        this.result = 0;

        setTimeout(() => {
        }, 1500);

    }

    calc() {
        this.result = this.num1 * 1 + this.num2 * 1;
    }
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
