(function () {

    angular.module("MyApp").provider("contactService", function () {

        var enabled;

        this.enableCache = function (_enabled) {
            console.log("enableCache: " + _enabled);

            enabled = _enabled;
        }

        this.$get = function ($q) {
            var contacts = [
                { id: 1, name: "Ori" },
                { id: 2, name: "Roni" },
            ];

            return {
                getAll: function () {
                    return $q.when(contacts);
                },

                addContact: function (name) {
                    contacts.push({ id: -1, name: name });

                    return $q.when(true);
                },
            };
        }
    });
})();
