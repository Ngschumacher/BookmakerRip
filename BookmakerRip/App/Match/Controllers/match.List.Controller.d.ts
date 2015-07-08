declare module BookmakerRip {
    class MatchListController {
        private matchService;
        vm: {
            matches?: Match[];
        };
        static $inject: string[];
        constructor(matchService: IMatchService);
        deleteMatch(matchId: string): void;
    }
}
