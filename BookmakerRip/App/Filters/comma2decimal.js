var BookmakerRip;
(function (BookmakerRip) {
    var app = BookmakerRip.getModule();
    app.filter('comma2decimal', [
        function () {
            return function (input) {
                var ret = (input) ? input.toString().trim().replace(",", ".") : null;
                return parseFloat(ret);
            };
        }]);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=comma2decimal.js.map