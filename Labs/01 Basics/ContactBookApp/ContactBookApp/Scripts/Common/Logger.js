var ContactBook = ContactBook || {};

ContactBook.Logger = (function () {
    function message(message) {
        console.log(message);
    }

    function error(message) {
        console.error(message);
    }

    return {
        message: message,
        error: error,
    };
})();
