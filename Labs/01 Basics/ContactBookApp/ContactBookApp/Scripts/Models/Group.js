/// <reference path="BookItem.js" />

var ContactBook = ContactBook || {};

ContactBook.Group = (function () {
    var BookItem = ContactBook.BookItem;

    function Group(name) {
        var me = this;

        BookItem.call(me);

        me.name = name;
        me.items = [];
    }

    Group.inherit(BookItem);

    Group.prototype.getDisplayName = function () {
        var me = this;

        return me.name;
    }

    Group.prototype.addItem = function (item) {
        var me = this;

        me.items.push(item);

        item.onAdded(me);
    }

    return Group;
})();
