var ContactBook = ContactBook || {};

ContactBook.BookItem = (function () {

    function BookItem() {
        var me = this;

        me.parent = null;
    }

    BookItem.prototype.getDisplayName = function () {
        throw new Error("Abstract method call");
    }

    BookItem.prototype.onAdded = function (parent) {
        var me = this;

        me.parent = parent;
    }

    return BookItem;
})();
