module BookmakerRip {

    export class MatchDetailController {
        vm: {
            match?: Match;
            bookmakers?: IBookmaker[];
            matchFactory?: IMatchFactory;
            bookmakerView? : boolean;
        }

        static $inject = ["MatchService", "BookmakerService", "MatchFactory", "$routeParams", "$filter"];
      
        constructor(private matchService: IMatchService, private bookmakerService: IBookmakerService, public matchFactory: IMatchFactory, routeParams: IRouteParams, filter : ng.IFilterProvider) {
            this.vm = {};
            /*
            this.vm.betting[]
            */
            this.vm.bookmakerView = false;
            this.vm.matchFactory = matchFactory;

            this.matchService.getMatch(routeParams.matchId).then((response) => {
                //var vm = this;
                this.vm.match = response.data;

                this.bookmakerService.getBookmakers().then((response) => {
                    this.vm.bookmakers = response.data;

                    //Få alle bookmakere i match.matchOdds, hvis de ikke er der, tilføj dem.
                   // var allreadyExistingBookermakes = this.vm.bookmakers.filter(item => this.vm.match.matchOdds.filter(x => x.bookmakerId === item.id).length > 0);

                    //find manglende matchOddsOptions

                    this.vm.match.matchOptions.forEach((matchOption : MatchOption) => {
                        var needsToBeadded = this.vm.bookmakers.filter(bookmaker => matchOption.matchOdds.filter(x => x.bookmakerId === bookmaker.id).length === 0);
                        needsToBeadded.forEach((bookmaker: Bookmaker) => {

                            //each option for the odds, 1 x 2 for instance.
                            var matchOdds = new MatchOdds();
                            matchOdds.bookmakerId = bookmaker.id;
                            matchOdds.bookmakerName = bookmaker.name;
                             
                            matchOption.matchOddsOptions.forEach((option: MatchOddsOption) => {
                                var odds = new Odds();
                                odds.optionId = option.id;
                                odds.value = 0;
                                odds.bookmaker = bookmaker;
                                matchOdds.odds.push(odds);
                            });
                            matchOption.matchOdds.push(matchOdds);
                        });
                    });
                });
                console.log(this.vm.match);
            });
        }

        public addMatch() {
            this.matchService.addMatch(this.vm.match).then((response) => {
            });
        }

        public chooseOdds(matchOption: MatchOption, odds: Odds, bookmakerId: string) {

            var bettingOdds = new BettingOdds();
            bettingOdds.matchOptionId = matchOption.id;
            bettingOdds.odds = odds;
            
            //if (matchOption.bettingOdds === undefined) {
            //    matchOption.bettingOdds = new Array();
            //}
            var matchOddsOption = matchOption.matchOddsOptions.filter(x => x.id === odds.optionId)[0];
            if (matchOddsOption !== undefined) {
                matchOddsOption.bettingOdds = bettingOdds;
            }
            //console.log(matchOption);


        }

        public setBettingOddsValue(bettingOdds : BettingOdds, matchOption : MatchOption) {
            var winningAmount: number = bettingOdds.amount * bettingOdds.odds.value;
            var totalBetAmount: number = 0;

            matchOption.matchOddsOptions.forEach((matchOddsOption: MatchOddsOption) => {
                if (bettingOdds === matchOddsOption.bettingOdds) {
                } else {
                    matchOddsOption.bettingOdds.amount = winningAmount / matchOddsOption.bettingOdds.odds.value;
                }

                if (matchOddsOption.bettingOdds !== undefined) {
                    totalBetAmount = (matchOddsOption.bettingOdds.amount * 1) + totalBetAmount;
                }

            });
            matchOption.totalBetAmount = totalBetAmount;
            matchOption.oddsWin = winningAmount;
            matchOption.totalWin = winningAmount - totalBetAmount;
        }

        public changeToBookmakerView() {
            this.vm.bookmakerView = !this.vm.bookmakerView;
        }

        public getMatchOddsByBookmakerId(matchOptionId : string, matchOptionOddsId : string,  bookmakerId: string) {
            var matchOption = this.vm.match.matchOptions.filter(matchOption => matchOption.id === matchOptionId);
            var matchOdds: MatchOdds;
            if (matchOption.length > 0) {
                matchOdds = (matchOption[0]).matchOdds.filter(matchOdds => matchOdds.bookmakerId === bookmakerId)[0];
                return matchOdds.odds.filter(x => x.optionId === matchOptionOddsId)[0];
            }
            return null;
        }

        public createOdds(matchOption: MatchOption) {
            console.log(matchOption);
            var bettedMatchOdds = new BettedMatchOdds(matchOption);

            if (matchOption.bettedMatchOdds == undefined) {
                matchOption.bettedMatchOdds = new Array();
            }

            matchOption.matchOddsOptions.forEach((matchOddsOption: MatchOddsOption) => {
                var bettedOdds = <BettedOdds> matchOddsOption.bettingOdds;
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
        }
    }
    var app = BookmakerRip.getModule();
    app.controller("MatchDetailController", MatchDetailController);
}
