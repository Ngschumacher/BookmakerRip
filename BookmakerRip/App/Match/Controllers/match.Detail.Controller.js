var BookmakerRip;
(function (BookmakerRip) {
    var MatchDetailController = (function () {
        function MatchDetailController(matchService, bookmakerService, matchFactory, routeParams, filter) {
            var _this = this;
            this.matchService = matchService;
            this.bookmakerService = bookmakerService;
            this.matchFactory = matchFactory;
            this.vm = {};
            /*
            this.vm.betting[]
            */
            this.vm.bookmakerView = false;
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
        MatchDetailController.prototype.addMatch = function () {
            this.matchService.addMatch(this.vm.match).then(function (response) {
            });
        };
        MatchDetailController.prototype.chooseOdds = function (matchOption, odds, bookmakerId) {
            var bettingOdds = new BookmakerRip.BettingOdds();
            bettingOdds.matchOptionId = matchOption.id;
            bettingOdds.odds = odds;
            //if (matchOption.bettingOdds === undefined) {
            //    matchOption.bettingOdds = new Array();
            //}
            var matchOddsOption = matchOption.matchOddsOptions.filter(function (x) { return x.id === odds.optionId; })[0];
            if (matchOddsOption !== undefined) {
                matchOddsOption.bettingOdds = bettingOdds;
            }
            //console.log(matchOption);
        };
        MatchDetailController.prototype.setBettingOddsValue = function (bettingOdds, matchOption) {
            var winningAmount = bettingOdds.amount * bettingOdds.odds.value;
            var totalBetAmount = 0;
            matchOption.matchOddsOptions.forEach(function (matchOddsOption) {
                if (bettingOdds === matchOddsOption.bettingOdds) {
                }
                else {
                    matchOddsOption.bettingOdds.amount = winningAmount / matchOddsOption.bettingOdds.odds.value;
                }
                if (matchOddsOption.bettingOdds !== undefined) {
                    totalBetAmount = (matchOddsOption.bettingOdds.amount * 1) + totalBetAmount;
                }
            });
            matchOption.totalBetAmount = totalBetAmount;
            matchOption.oddsWin = winningAmount;
            matchOption.totalWin = winningAmount - totalBetAmount;
        };
        MatchDetailController.prototype.changeToBookmakerView = function () {
            this.vm.bookmakerView = !this.vm.bookmakerView;
        };
        MatchDetailController.prototype.getMatchOddsByBookmakerId = function (matchOptionId, matchOptionOddsId, bookmakerId) {
            var matchOption = this.vm.match.matchOptions.filter(function (matchOption) { return matchOption.id === matchOptionId; });
            var matchOdds;
            if (matchOption.length > 0) {
                matchOdds = (matchOption[0]).matchOdds.filter(function (matchOdds) { return matchOdds.bookmakerId === bookmakerId; })[0];
                return matchOdds.odds.filter(function (x) { return x.optionId === matchOptionOddsId; })[0];
            }
            return null;
        };
        MatchDetailController.prototype.createOdds = function (matchOption) {
            console.log(matchOption);
            var bettedMatchOdds = new BookmakerRip.BettedMatchOdds(matchOption);
            if (matchOption.bettedMatchOdds == undefined) {
                matchOption.bettedMatchOdds = new Array();
            }
            matchOption.matchOddsOptions.forEach(function (matchOddsOption) {
                var bettedOdds = matchOddsOption.bettingOdds;
                bettedOdds.optionName = matchOddsOption.name;
                bettedMatchOdds.bettedOdds.push(bettedOdds);
                matchOddsOption.bettingOdds = undefined;
            });
            matchOption.oddsWin = 0;
            matchOption.totalBetAmount = 0;
            matchOption.totalWin = 0;
            console.log(bettedMatchOdds);
            matchOption.bettedMatchOdds.push(bettedMatchOdds);
            console.log(this.vm.match);
        };
        MatchDetailController.$inject = ["MatchService", "BookmakerService", "MatchFactory", "$routeParams", "$filter"];
        return MatchDetailController;
    })();
    BookmakerRip.MatchDetailController = MatchDetailController;
    var app = BookmakerRip.getModule();
    app.controller("MatchDetailController", MatchDetailController);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=match.Detail.Controller.js.map