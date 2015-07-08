module BookmakerRip {

    export class MatchEditController {
        vm: {
            match?: Match;
            bookmakers?: IBookmaker[];
            matchFactory?: IMatchFactory;
            bookmakerView? : boolean;
        }

        static $inject = ["MatchService", "BookmakerService", "MatchFactory", "$routeParams", "$filter"];
      
        constructor(private matchService: IMatchService, private bookmakerService: IBookmakerService, public matchFactory: IMatchFactory, routeParams: IRouteParams, filter : ng.IFilterProvider) {
            this.vm = {};
            this.vm.bookmakerView = true;
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
    }
    var app = BookmakerRip.getModule();
    app.controller("MatchEditController", MatchEditController);
}
