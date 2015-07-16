(function () {

    angular.module("MyApp").service("contactService", function ($q, $http) {
        this.getAll = function () {
            var contacts = [
                { id: 1, name: "Ori" },
                { id: 2, name: "Roni" },
            ];

            console.log("2");

            return $q.when(contacts);
        }
    });

    //function ContactService($q, $http) {
    //    this.$q = $q;
    //    this.$http = $http;
    //}

    //ContactService.prototype.getAll = function () {

    //    //return this.$http.get("/api/contact");

    //    var contacts = [
    //        { id: 1, name: "Ori" },
    //        { id: 2, name: "Roni" },
    //    ];

    //    console.log("2");

    //    return this.$q.when(contacts);
    //}

    //angular.module("MyApp").service("contactService", ContactService);
})();
