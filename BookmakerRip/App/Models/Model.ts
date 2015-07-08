module BookmakerRip {
    export class Match {
        name: string;
        matchOptions: MatchOption[];
        constructor() {
            this.matchOptions = new Array();
        }
    }
    
    export class MatchOption {
        id: string;
        name: string;
        totalBetAmount: number;
        oddsWin: number;
        totalWin: number;
        matchOddsOptions: MatchOddsOption[];
        matchOdds: MatchOdds[];
        bettedMatchOdds: BettedMatchOdds[];

        constructor() {
            this.matchOddsOptions = new Array();
            this.matchOdds = new Array();
            this.bettedMatchOdds = new Array();
        }
    }
    export class BettedMatchOdds {
        status: number;
        totalBetAmount: number;
        oddsWin: number;
        totalWin: number;
        bettedOdds : BettedOdds[];
        constructor(matchOption: MatchOption) {

            this.totalBetAmount = matchOption.totalBetAmount;
            this.oddsWin = matchOption.oddsWin;
            this.totalWin = matchOption.totalWin;
            this.bettedOdds = new Array();
            this.status = 0;

        }
    }
    export class BettingOdds {
        id: string;
        matchOptionId: string;
        amount : number;
        odds: Odds;
        bookmaker : Bookmaker;
        constructor() {
            this.amount = 0;
        }
    }
    
    export class BettedOdds extends  BettingOdds {
        optionName: string;
        
    }

    export class MatchOddsOption {
        id: string;
        name: string;
        bettingOdds: BettingOdds;
    }
   
    export class MatchOdds {
        odds: Odds[];
        bookmakerName: string;
        bookmakerId: string;

        constructor() {
            this.odds = new Array();
        }
    }
    export class Odds {
        id : string;
        optionId: string;
        value: number;
        bookmaker: Bookmaker;
    }
    
    export class Bookmaker {
        id: string;
        name: string;
        deposits : Deposit[];
    }
    export class Deposit {
        id : string;
        amount: number;
        bookmakerId: string;
        runThroughs: number;
        minOdds : number;

    }
}