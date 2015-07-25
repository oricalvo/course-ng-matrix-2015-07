/// <reference path="BookItem.js" />

var ContactBook = ContactBook || {};

ContactBook.Contact = (function () {
    var BookItem = ContactBook.BookItem;

    function Contact(name, email) {
        var me = this;

        BookItem.call(this);

        me.name = name;
        me.email = email;
    }

    Contact.inherit(BookItem);

    Contact.prototype.getDisplayName = function () {
        var me = this;

        return me.name + ", " + me.email;
    }

    return Contact;
})();
