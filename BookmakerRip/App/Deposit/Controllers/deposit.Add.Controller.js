var BookmakerRip;
(function (BookmakerRip) {
    var DepositAddController = (function () {
        function DepositAddController(depositService, bookmakerService, routeParams, $location) {
            var _this = this;
            this.depositService = depositService;
            this.bookmakerService = bookmakerService;
            this.$location = $location;
            this.vm = {};
            this.bookmakerService.getBookmaker(routeParams.bookmakerId).then(function (response) {
                _this.vm.bookmaker = response.data;
                var deposit = new BookmakerRip.Deposit();
                deposit.bookmakerId = _this.vm.bookmaker.id;
                _this.vm.deposit = deposit;
            });
            this.vm.deposit = new BookmakerRip.Deposit();
        }
        DepositAddController.prototype.addDeposit = function (deposit) {
            var _this = this;
            this.depositService.addDeposit(deposit).then(function (response) {
                console.log(response);
                _this.vm.bookmaker = response.data;
                _this.$location.path("/bookmaker/" + response.data.id);
            });
        };
        DepositAddController.$inject = ["DepositService", "BookmakerService", "$routeParams", "$location"];
        return DepositAddController;
    })();
    BookmakerRip.DepositAddController = DepositAddController;
    var app = BookmakerRip.getModule();
    app.controller("DepositAddController", DepositAddController);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=deposit.Add.Controller.js.map