/// <reference path="../Common/Logger.js" />

var ContactBook = ContactBook || {};

ContactBook.App = (function () {
    var Group = ContactBook.Group;
    var Contact = ContactBook.Contact;
    var Book = ContactBook.Book;
    var Logger = ContactBook.Logger;

    function App() {
        var me = this;
    }

    App.prototype.run = function () {
        var me = this;

        me.views = [];

        me.parse();

        me.bind();
    }

    App.prototype.bind = function () {
        var me = this;

        $.each(me.views, function () {
            var view = this;

            ko.applyBindings(view, view.el.get(0));

            if (view.onBind) {
                view.onBind();
            }
        });
    }

    App.prototype.parse = function () {
        var me = this;

        $("[data-view]").each(function () {
            var element = $(this);

            var viewClassName = element.attr("data-view");
            var ctor = ContactBook[viewClassName];
            if (!ctor) {
                Logger.error("Ctor " + viewClassName + " was not found");
                return;
            }

            //
            //  Wrap the data-view element with stopBinding to allow nested view model
            //
            var parent = element.parent();
            var wrapper = $('<div data-bind="stopBinding: true"/>');
            parent.append(wrapper);
            wrapper.append(element);

            //
            //  Associate the view element with the view object
            //
            var view = new ctor(element);
            element.data("view", view);
            me.views.push(view);
        });
    }

    $(function () {
        ContactBook.App.run();
    });

    return new App();
})();
