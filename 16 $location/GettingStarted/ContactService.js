(function () {

    angular.module("MyApp").provider("contactService", function () {

        var enabled;

        this.enableCache = function (_enabled) {
            console.log("enableCache: " + _enabled);

            enabled = _enabled;
        }

        this.$get = function ($q) {
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
                },
            };
        }
    });
})();
