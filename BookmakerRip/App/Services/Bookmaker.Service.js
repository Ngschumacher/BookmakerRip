var BookmakerRip;
(function (BookmakerRip) {
    "use strict";
    var BookmakerService = (function () {
        function BookmakerService($http) {
            var _this = this;
            this.$http = $http;
            this.getBookmakers = function () {
                return _this.$http.get("/api/Bookmaker/");
            };
            this.getBookmaker = function (bookmakerId) {
                return _this.$http.get("/api/Bookmaker/" + bookmakerId);
            };
            this.addBookmaker = function (bookmaker) {
                return _this.$http.post("/api/Bookmaker/AddBookmaker", bookmaker);
            };
            this.deleteBookmaker = function (bookmakerId) {
                return _this.$http.delete('/api/Bookmaker/' + bookmakerId);
            };
        }
        BookmakerService.$inject = ["$http"];
        return BookmakerService;
    })();
    BookmakerRip.BookmakerService = BookmakerService;
    var app = BookmakerRip.getModule();
    app.service("BookmakerService", BookmakerService);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=Bookmaker.Service.js.map