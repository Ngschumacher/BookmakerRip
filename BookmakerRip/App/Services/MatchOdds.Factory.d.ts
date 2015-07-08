declare module BookmakerRip {
    interface IMatchFactory {
        getBestOdds(matchOption: MatchOption, optionId: string): number;
        getReturnPayment(matchOdds: MatchOdds): number;
        getBestOddsReturnPayment(matchOdds: MatchOdds): number;
    }
    class MatchFactory {
        getReturnPayment: (matchOdds: MatchOdds) => number;
        getReturnPaymentByBookmaker: (matchOption: MatchOption, bookmakerId: string) => number;
        getBestOdds: (matchOption: MatchOption, optionId: string) => number;
        getBestOddsReturnPayment: (matchOption: MatchOption) => number;
        getChosenOdds: (matchOption: MatchOption, matchOddsOptionId: string) => number;
        getChoosenOddsReturnPayment: (matchOption: MatchOption) => number;
        getBettedOddsReturnPayment: (bettedMatchOdds: BettedMatchOdds) => number;
        getTotalBetAmount: (matchOption: MatchOption) => number;
    }
}
