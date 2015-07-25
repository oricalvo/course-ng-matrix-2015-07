/// <reference path="BookItem.js" />
/// <reference path="Group.js" />

var ContactBook = ContactBook || {};

ContactBook.Book = (function () {
    var Group = ContactBook.Group;
    var Contact = ContactBook.Contact;

    function Book() {
        var me = this;

        //
        //  Fields
        //
        me.root = new Group("~");
        me.currentGroup = me.root;

        //
        //  Events
        //
        me.currentGroupChanged = $.Callbacks();

        me.seed();
    }

    Book.prototype.seed = function () {
        var me = this;

        var friends = new Group("Friends");
        me.root.addItem(friends);

        var udi = new Contact("Udi", "udi@gmail.com");
        friends.addItem(udi);

        var tommy = new Contact("Tommy", "tommy@gmail.com");
        friends.addItem(tommy);

        var family = new Group("Family");
        me.root.addItem(family);

        var roni = new Contact("Roni", "roni@gmail.com");
        family.addItem(roni);

        var coworkers = new Group("Co-Workers");
        me.root.addItem(coworkers);

        var shlomi = new Contact("Shlomi", "shlomi@gmail.com");
        coworkers.addItem(shlomi);

        var ori = new Contact("Ori", "ori@gmail.com");
        me.root.addItem(ori);
    }

    Book.prototype.changeCurrentGroup = function (newGroup) {
        var me = this;

        me.currentGroup = newGroup;

        me.currentGroupChanged.fire(newGroup);
    }

    return new Book();
})();
