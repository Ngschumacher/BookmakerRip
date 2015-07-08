var BookmakerRip;
(function (BookmakerRip) {
    "use strict";
    var DepositService = (function () {
        function DepositService($http) {
            var _this = this;
            this.$http = $http;
            this.addDeposit = function (deposit) {
                console.log(deposit);
                return _this.$http.post("/api/Cash/", deposit);
            };
        }
        DepositService.$inject = ["$http"];
        return DepositService;
    })();
    BookmakerRip.DepositService = DepositService;
    var app = BookmakerRip.getModule();
    app.service("DepositService", DepositService);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=Deposit.Service.js.map