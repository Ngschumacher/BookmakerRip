declare module BookmakerRip {
    class Match {
        name: string;
        matchOptions: MatchOption[];
        constructor();
    }
    class MatchOption {
        id: string;
        name: string;
        totalBetAmount: number;
        oddsWin: number;
        totalWin: number;
        matchOddsOptions: MatchOddsOption[];
        matchOdds: MatchOdds[];
        bettedMatchOdds: BettedMatchOdds[];
        constructor();
    }
    class BettedMatchOdds {
        status: number;
        totalBetAmount: number;
        oddsWin: number;
        totalWin: number;
        bettedOdds: BettedOdds[];
        constructor(matchOption: MatchOption);
    }
    class BettingOdds {
        id: string;
        matchOptionId: string;
        amount: number;
        odds: Odds;
        bookmaker: Bookmaker;
        constructor();
    }
    class BettedOdds extends BettingOdds {
        optionName: string;
    }
    class MatchOddsOption {
        id: string;
        name: string;
        bettingOdds: BettingOdds;
    }
    class MatchOdds {
        odds: Odds[];
        bookmakerName: string;
        bookmakerId: string;
        constructor();
    }
    class Odds {
        id: string;
        optionId: string;
        value: number;
        bookmaker: Bookmaker;
    }
    class Bookmaker {
        id: string;
        name: string;
        deposits: Deposit[];
    }
    class Deposit {
        id: string;
        amount: number;
        bookmakerId: string;
        runThroughs: number;
        minOdds: number;
    }
}
