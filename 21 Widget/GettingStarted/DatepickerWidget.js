(function () {

    angular.module("MyApp").directive("datepicker", function () {
        var ddo = {
            restrict: "A",
            compile: function (element, attrs) {
                //element.append("<input />");
                //element.append("<button>...</button>");

                //return {
                //    pre: function () {
                //    },
                //    post: function () {
                //    }
                //};

                return function postLink(scope, element, attrs) {
                    element.datepicker();

                    element.on("change", function () {
                        console.log(element.val());

                        scope.date = element.val();

                        scope.$apply();
                    });

                    //var button = element.find("button");

                    //button.on("click", function () {
                    //    alert("Button was clicked");
                    //});
                }
            },
            scope: {
                date: "=",
            }
        };

        return ddo;
    });

})();
