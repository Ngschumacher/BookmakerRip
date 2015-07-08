var BookmakerRip;
(function (BookmakerRip) {
    var BookmakerAddController = (function () {
        function BookmakerAddController(bookmakerService) {
            var _this = this;
            this.bookmakerService = bookmakerService;
            this.vm = {};
            this.bookmakerService.getBookmakers().then(function (response) {
                console.log(response.data);
                _this.vm.bookmakers = response.data;
                console.log(_this.vm);
            });
        }
        BookmakerAddController.prototype.addBookmaker = function (bookmaker) {
            var _this = this;
            this.bookmakerService.addBookmaker(bookmaker).then(function (response) {
                _this.vm.bookmakers = response.data;
            });
        };
        BookmakerAddController.prototype.deleteBookmaker = function (bookmaker) {
            var _this = this;
            this.bookmakerService.deleteBookmaker(bookmaker.id).then(function (response) {
                var index = _this.vm.bookmakers.indexOf(bookmaker);
                _this.vm.bookmakers.slice(index, 1);
            });
        };
        BookmakerAddController.$inject = ["BookmakerService"];
        return BookmakerAddController;
    })();
    BookmakerRip.BookmakerAddController = BookmakerAddController;
    var app = BookmakerRip.getModule();
    app.controller("BookmakerAddController", BookmakerAddController);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=bookmaker.Add.Controller.js.map