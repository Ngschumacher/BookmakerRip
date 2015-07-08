var BookmakerRip;
(function (BookmakerRip) {
    var BookmakerDetailController = (function () {
        function BookmakerDetailController(bookmakerService, routeParams) {
            var _this = this;
            this.bookmakerService = bookmakerService;
            this.vm = {};
            this.bookmakerService.getBookmaker(routeParams.bookmakerId).then(function (response) {
                _this.vm.bookmaker = response.data;
                console.log(_this.vm.bookmaker);
            });
        }
        BookmakerDetailController.$inject = ["BookmakerService", "$routeParams"];
        return BookmakerDetailController;
    })();
    BookmakerRip.BookmakerDetailController = BookmakerDetailController;
    var app = BookmakerRip.getModule();
    app.controller("BookmakerDetailController", BookmakerDetailController);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=bookmaker.Detail.Controller.js.map