module BookmakerRip {
    //
    export class MatchAddController {
        vm: {
            match?: Match;
            newMatchOption?: MatchOption;
            optionAmount? : number;
        }

       static $inject = ["MatchService"];

       constructor(private matchService: IMatchService) {
           this.vm = { match: new Match(), newMatchOption : new MatchOption()};
       }

       public addMatchOption() {
           console.log(this.vm.newMatchOption);
           this.vm.match.matchOptions.push(this.vm.newMatchOption);
           this.vm.newMatchOption = new MatchOption();
           this.vm.optionAmount = 0;
       }
       public createOptions(optionAmount) {
           console.log(optionAmount);
           this.vm.newMatchOption.matchOddsOptions = [];
           for (var i = 0; i < optionAmount; i++) {
               this.vm.newMatchOption.matchOddsOptions.push(new MatchOddsOption());
           };
       }

       public addMatch(match: Match) {
           console.log(match);
           this.matchService.addMatch(match).then((response) => {
           });
       }

        

   }
   var app = BookmakerRip.getModule();
   app.controller("MatchAddController", MatchAddController);
}
