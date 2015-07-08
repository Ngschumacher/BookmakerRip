declare module BookmakerRip {
    class MatchAddController {
        private matchService;
        vm: {
            match?: Match;
            newMatchOption?: MatchOption;
            optionAmount?: number;
        };
        static $inject: string[];
        constructor(matchService: IMatchService);
        addMatchOption(): void;
        createOptions(optionAmount: any): void;
        addMatch(match: Match): void;
    }
}
