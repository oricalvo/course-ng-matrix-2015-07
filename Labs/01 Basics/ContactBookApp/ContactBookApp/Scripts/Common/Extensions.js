(function () {
    Function.prototype.inherit = function (base) {
        function F() {
        }

        F.prototype = base.prototype;

        this.prototype = new F();
        this.prototype.constructor = this;
    }

    ko.bindingHandlers.stopBinding = {
        init: function () {
            return { controlsDescendantBindings: true };
        }
    };
})();
