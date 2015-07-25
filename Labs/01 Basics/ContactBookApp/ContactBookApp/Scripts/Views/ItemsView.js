/// <reference path="BaseListItem.js" />
/// <reference path="ContactListItem.js" />
/// <reference path="GroupListItem.js" />
/// <reference path="GotoParentListItem.js" />

var ContactBook = ContactBook || {};

ContactBook.ItemsView = (function () {
    var Logger = ContactBook.Logger;
    var Book = ContactBook.Book;
    var BookItem = ContactBook.BookItem;
    var Contact = ContactBook.Contact;
    var Group = ContactBook.Group;
    var BaseListItem = ContactBook.BaseListItem;
    var ContactListItem = ContactBook.ContactListItem;
    var GroupListItem = ContactBook.GroupListItem;
    var GotoParentListItem = ContactBook.GotoParentListItem;

    function ItemsView(el) {
        var me = this;

        me.el = el;

        me.items = ko.observableArray([]);

        me.bind(Book.currentGroup);

        me.itemActivated = function () {
            me.onItemActivated(this);
        }

        me.itemSelected = function () {
            return true;
        }

        //
        //  Register to the groupChanged event so we can update the UI
        //
        Book.currentGroupChanged.add($.proxy(me.onCurrentGroupChanged, me));
    }

    ItemsView.prototype.bind = function (group) {
        var me = this;

        var items = []

        //
        //  Add goto parent item if current group has parent
        //
        if (group.parent != null) {
            items.push(new GotoParent());
        }

        items = items.concat(group.items);

        me.group = group;
        me.items(items);
    }

    ItemsView.prototype.onItemActivated = function (item) {
        var me = this;

        if (item instanceof Group) {
            Book.changeCurrentGroup(item);
        }
        else if (item instanceof GotoParent) {
            Book.changeCurrentGroup(me.group.parent);
        }
    }

    ItemsView.prototype.getTitle = function (item) {
        var me = this;

        return item.name;
    }

    ItemsView.prototype.getSubTitle = function (item) {
        var me = this;

        if (item instanceof Contact) {
            return item.email;
        }
    }

    ItemsView.prototype.onCurrentGroupChanged = function (group) {
        var me = this;

        me.bind(group);
    }

    function GotoParent() {
        var me = this;

        me.name = "[..]";
    }

    GotoParent.inherit(BookItem);

    return ItemsView;
})();
