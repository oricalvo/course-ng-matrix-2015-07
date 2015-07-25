(function () {

    //angular.module("MyApp").value("contactService", {});

    //angular.module("MyApp").value("$", jQuery);

    angular.module("MyApp").factory("contactService", function ($q, $http) {

        return {
            getAll: function () {
                var contacts = [
                    { id: 1, name: "Ori" },
                    { id: 2, name: "Roni" },
                ];

                console.log("2");

                return $q.when(contacts);
            },

            deleteById: function (id) {
            }
        };

    });
})();
