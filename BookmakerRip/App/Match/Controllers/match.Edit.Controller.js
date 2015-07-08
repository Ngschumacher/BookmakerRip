var BookmakerRip;
(function (BookmakerRip) {
    var MatchEditController = (function () {
        function MatchEditController(matchService, bookmakerService, matchFactory, routeParams, filter) {
            var _this = this;
            this.matchService = matchService;
            this.bookmakerService = bookmakerService;
            this.matchFactory = matchFactory;
            this.vm = {};
            this.vm.bookmakerView = true;
            this.vm.matchFactory = matchFactory;
            this.matchService.getMatch(routeParams.matchId).then(function (response) {
                //var vm = this;
                _this.vm.match = response.data;
                _this.bookmakerService.getBookmakers().then(function (response) {
                    _this.vm.bookmakers = response.data;
                    //Få alle bookmakere i match.matchOdds, hvis de ikke er der, tilføj dem.
                    // var allreadyExistingBookermakes = this.vm.bookmakers.filter(item => this.vm.match.matchOdds.filter(x => x.bookmakerId === item.id).length > 0);
                    //find manglende matchOddsOptions
                    _this.vm.match.matchOptions.forEach(function (matchOption) {
                        var needsToBeadded = _this.vm.bookmakers.filter(function (bookmaker) { return matchOption.matchOdds.filter(function (x) { return x.bookmakerId === bookmaker.id; }).length === 0; });
                        needsToBeadded.forEach(function (bookmaker) {
                            //each option for the odds, 1 x 2 for instance.
                            var matchOdds = new BookmakerRip.MatchOdds();
                            matchOdds.bookmakerId = bookmaker.id;
                            matchOdds.bookmakerName = bookmaker.name;
                            matchOption.matchOddsOptions.forEach(function (option) {
                                var odds = new BookmakerRip.Odds();
                                odds.optionId = option.id;
                                odds.value = 0;
                                odds.bookmaker = bookmaker;
                                matchOdds.odds.push(odds);
                            });
                            matchOption.matchOdds.push(matchOdds);
                        });
                    });
                });
                console.log(_this.vm.match);
            });
        }
        MatchEditController.prototype.addMatch = function () {
            this.matchService.addMatch(this.vm.match).then(function (response) {
            });
        };
        MatchEditController.prototype.changeToBookmakerView = function () {
            this.vm.bookmakerView = !this.vm.bookmakerView;
        };
        MatchEditController.prototype.getMatchOddsByBookmakerId = function (matchOptionId, matchOptionOddsId, bookmakerId) {
            var matchOption = this.vm.match.matchOptions.filter(function (matchOption) { return matchOption.id === matchOptionId; });
            var matchOdds;
            if (matchOption.length > 0) {
                matchOdds = (matchOption[0]).matchOdds.filter(function (matchOdds) { return matchOdds.bookmakerId === bookmakerId; })[0];
                return matchOdds.odds.filter(function (x) { return x.optionId === matchOptionOddsId; })[0];
            }
            return null;
        };
        MatchEditController.$inject = ["MatchService", "BookmakerService", "MatchFactory", "$routeParams", "$filter"];
        return MatchEditController;
    })();
    BookmakerRip.MatchEditController = MatchEditController;
    var app = BookmakerRip.getModule();
    app.controller("MatchEditController", MatchEditController);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=match.Edit.Controller.js.map