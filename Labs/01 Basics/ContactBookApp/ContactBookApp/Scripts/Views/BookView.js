/// <reference path="ItemsView.js" />

var ContactBook = ContactBook || {};

ContactBook.BookView = (function () {
    var Logger = ContactBook.Logger;

    function BookView(el) {
        var me = this;

        me.el = el;
    }

    BookView.prototype.addContact = function () {
        Logger.message("Adding contact");
    }

    BookView.prototype.addGroup = function () {
        Logger.message("Adding group");
    }

    return BookView;
})();
