var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BookmakerRip;
(function (BookmakerRip) {
    var Match = (function () {
        function Match() {
            this.matchOptions = new Array();
        }
        return Match;
    })();
    BookmakerRip.Match = Match;
    var MatchOption = (function () {
        function MatchOption() {
            this.matchOddsOptions = new Array();
            this.matchOdds = new Array();
            this.bettedMatchOdds = new Array();
        }
        return MatchOption;
    })();
    BookmakerRip.MatchOption = MatchOption;
    var BettedMatchOdds = (function () {
        function BettedMatchOdds(matchOption) {
            this.totalBetAmount = matchOption.totalBetAmount;
            this.oddsWin = matchOption.oddsWin;
            this.totalWin = matchOption.totalWin;
            this.bettedOdds = new Array();
            this.status = 0;
        }
        return BettedMatchOdds;
    })();
    BookmakerRip.BettedMatchOdds = BettedMatchOdds;
    var BettingOdds = (function () {
        function BettingOdds() {
            this.amount = 0;
        }
        return BettingOdds;
    })();
    BookmakerRip.BettingOdds = BettingOdds;
    var BettedOdds = (function (_super) {
        __extends(BettedOdds, _super);
        function BettedOdds() {
            _super.apply(this, arguments);
        }
        return BettedOdds;
    })(BettingOdds);
    BookmakerRip.BettedOdds = BettedOdds;
    var MatchOddsOption = (function () {
        function MatchOddsOption() {
        }
        return MatchOddsOption;
    })();
    BookmakerRip.MatchOddsOption = MatchOddsOption;
    var MatchOdds = (function () {
        function MatchOdds() {
            this.odds = new Array();
        }
        return MatchOdds;
    })();
    BookmakerRip.MatchOdds = MatchOdds;
    var Odds = (function () {
        function Odds() {
        }
        return Odds;
    })();
    BookmakerRip.Odds = Odds;
    var Bookmaker = (function () {
        function Bookmaker() {
        }
        return Bookmaker;
    })();
    BookmakerRip.Bookmaker = Bookmaker;
    var Deposit = (function () {
        function Deposit() {
        }
        return Deposit;
    })();
    BookmakerRip.Deposit = Deposit;
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=Model.js.map