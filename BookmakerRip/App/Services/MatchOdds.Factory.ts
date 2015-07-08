module BookmakerRip
{
    export interface IMatchFactory {
        getBestOdds(matchOption: MatchOption, optionId: string): number;
        getReturnPayment(matchOdds: MatchOdds): number;
        getBestOddsReturnPayment(matchOdds: MatchOdds) : number;
    }

    "use strict";
    export class MatchFactory  {
        getReturnPayment = (matchOdds: MatchOdds): number => {
            var sum = 0;
            for (var i = 0; i < matchOdds.odds.length; i++) {

                sum += 100 / parseFloat(matchOdds.odds[i].value.toString().replace(",", "."));
            }
            return 100 / sum * 100;
        }

        getReturnPaymentByBookmaker = (matchOption: MatchOption, bookmakerId: string): number => {
            var sum = 0;
            var matchOdds = matchOption.matchOdds.filter(x => x.bookmakerId == bookmakerId)[0];
            for (var i = 0; i < matchOdds.odds.length; i++) {

                sum += 100 / parseFloat(matchOdds.odds[i].value.toString().replace(",", "."));
            }
            return 100 / sum * 100;

        }

        getBestOdds = (matchOption : MatchOption, optionId: string): number => {
            var bestOdds: number = 0;

            matchOption.matchOdds.forEach((matchOdds: MatchOdds) => {
                matchOdds.odds.forEach((odds : Odds) => {
                    if (odds.optionId === optionId && odds.value > bestOdds) {
                        bestOdds = odds.value;
                    }
                });
            });
            return bestOdds;
        };

        getBestOddsReturnPayment = (matchOption: MatchOption): number => {
            var sum = 0;
            
            matchOption.matchOddsOptions.forEach((matchOddsOption: MatchOddsOption) => {
                sum += 100 / this.getBestOdds(matchOption, matchOddsOption.id);
            });

            return 100 / sum * 100;
        };
        
        getChosenOdds = (matchOption: MatchOption, matchOddsOptionId: string): number => {
            //if (matchOption.bettingOdds == undefined) {
            //    return 0;
            //}
            
            //var bettingOdds = matchOption.bettingOdds.filter(x => x.matchOptionId === matchOption.id && x.matchOddsOptionId === matchOddsOptionId)[0];
            //if (bettingOdds == undefined) {
            //    return 0;

            //}
            //return bettingOdds.oddsValue;
            return 0;
        }

        getChoosenOddsReturnPayment = (matchOption: MatchOption): number => {
            var sum = 0;

            matchOption.matchOddsOptions.forEach((matchOddsOption: MatchOddsOption) => {
                var value : number = 0;
                if (matchOddsOption.bettingOdds !== undefined) {
                    value = matchOddsOption.bettingOdds.odds.value;
                }
                sum += 100 / value;
            });

            return 100 / sum * 100;
        };
        getBettedOddsReturnPayment = (bettedMatchOdds: BettedMatchOdds): number => {
            var sum = 0;

            bettedMatchOdds.bettedOdds.forEach((bettedOdds: BettedOdds) => {
                var value: number = 0;
                if (bettedOdds !== undefined) {
                    value = bettedOdds.odds.value;
                }
                sum += 100 / value;
            });

            return 100 / sum * 100;
        };

        getTotalBetAmount = (matchOption: MatchOption): number => {
            var sum : number = 0;
            console.log(matchOption);
            matchOption.matchOddsOptions.forEach((matchOddsOption: MatchOddsOption) => {
                var value: number = 0;
                if (matchOddsOption.bettingOdds !== undefined) {
                    value = matchOddsOption.bettingOdds.amount;
                    sum = value + sum;
                }
            });
            console.log(sum);
            return sum;
        }
    }
    
    var app = BookmakerRip.getModule();
    app.service("MatchFactory", MatchFactory);  
}
