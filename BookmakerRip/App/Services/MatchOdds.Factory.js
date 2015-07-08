var BookmakerRip;
(function (BookmakerRip) {
    "use strict";
    var MatchFactory = (function () {
        function MatchFactory() {
            var _this = this;
            this.getReturnPayment = function (matchOdds) {
                var sum = 0;
                for (var i = 0; i < matchOdds.odds.length; i++) {
                    sum += 100 / parseFloat(matchOdds.odds[i].value.toString().replace(",", "."));
                }
                return 100 / sum * 100;
            };
            this.getReturnPaymentByBookmaker = function (matchOption, bookmakerId) {
                var sum = 0;
                var matchOdds = matchOption.matchOdds.filter(function (x) { return x.bookmakerId == bookmakerId; })[0];
                for (var i = 0; i < matchOdds.odds.length; i++) {
                    sum += 100 / parseFloat(matchOdds.odds[i].value.toString().replace(",", "."));
                }
                return 100 / sum * 100;
            };
            this.getBestOdds = function (matchOption, optionId) {
                var bestOdds = 0;
                matchOption.matchOdds.forEach(function (matchOdds) {
                    matchOdds.odds.forEach(function (odds) {
                        if (odds.optionId === optionId && odds.value > bestOdds) {
                            bestOdds = odds.value;
                        }
                    });
                });
                return bestOdds;
            };
            this.getBestOddsReturnPayment = function (matchOption) {
                var sum = 0;
                matchOption.matchOddsOptions.forEach(function (matchOddsOption) {
                    sum += 100 / _this.getBestOdds(matchOption, matchOddsOption.id);
                });
                return 100 / sum * 100;
            };
            this.getChosenOdds = function (matchOption, matchOddsOptionId) {
                //if (matchOption.bettingOdds == undefined) {
                //    return 0;
                //}
                //var bettingOdds = matchOption.bettingOdds.filter(x => x.matchOptionId === matchOption.id && x.matchOddsOptionId === matchOddsOptionId)[0];
                //if (bettingOdds == undefined) {
                //    return 0;
                //}
                //return bettingOdds.oddsValue;
                return 0;
            };
            this.getChoosenOddsReturnPayment = function (matchOption) {
                var sum = 0;
                matchOption.matchOddsOptions.forEach(function (matchOddsOption) {
                    var value = 0;
                    if (matchOddsOption.bettingOdds !== undefined) {
                        value = matchOddsOption.bettingOdds.odds.value;
                    }
                    sum += 100 / value;
                });
                return 100 / sum * 100;
            };
            this.getBettedOddsReturnPayment = function (bettedMatchOdds) {
                var sum = 0;
                bettedMatchOdds.bettedOdds.forEach(function (bettedOdds) {
                    var value = 0;
                    if (bettedOdds !== undefined) {
                        value = bettedOdds.odds.value;
                    }
                    sum += 100 / value;
                });
                return 100 / sum * 100;
            };
            this.getTotalBetAmount = function (matchOption) {
                var sum = 0;
                console.log(matchOption);
                matchOption.matchOddsOptions.forEach(function (matchOddsOption) {
                    var value = 0;
                    if (matchOddsOption.bettingOdds !== undefined) {
                        value = matchOddsOption.bettingOdds.amount;
                        sum = value + sum;
                    }
                });
                console.log(sum);
                return sum;
            };
        }
        return MatchFactory;
    })();
    BookmakerRip.MatchFactory = MatchFactory;
    var app = BookmakerRip.getModule();
    app.service("MatchFactory", MatchFactory);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=MatchOdds.Factory.js.map