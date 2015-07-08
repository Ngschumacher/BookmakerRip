var BookmakerRip;
(function (BookmakerRip) {
    //
    var MatchAddController = (function () {
        function MatchAddController(matchService) {
            this.matchService = matchService;
            this.vm = { match: new BookmakerRip.Match(), newMatchOption: new BookmakerRip.MatchOption() };
        }
        MatchAddController.prototype.addMatchOption = function () {
            console.log(this.vm.newMatchOption);
            this.vm.match.matchOptions.push(this.vm.newMatchOption);
            this.vm.newMatchOption = new BookmakerRip.MatchOption();
            this.vm.optionAmount = 0;
        };
        MatchAddController.prototype.createOptions = function (optionAmount) {
            console.log(optionAmount);
            this.vm.newMatchOption.matchOddsOptions = [];
            for (var i = 0; i < optionAmount; i++) {
                this.vm.newMatchOption.matchOddsOptions.push(new BookmakerRip.MatchOddsOption());
            }
            ;
        };
        MatchAddController.prototype.addMatch = function (match) {
            console.log(match);
            this.matchService.addMatch(match).then(function (response) {
            });
        };
        MatchAddController.$inject = ["MatchService"];
        return MatchAddController;
    })();
    BookmakerRip.MatchAddController = MatchAddController;
    var app = BookmakerRip.getModule();
    app.controller("MatchAddController", MatchAddController);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=match.Add.Controller.js.map