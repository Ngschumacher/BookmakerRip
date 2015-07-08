declare module BookmakerRip {
    class MatchEditController {
        private matchService;
        private bookmakerService;
        matchFactory: IMatchFactory;
        vm: {
            match?: Match;
            bookmakers?: IBookmaker[];
            matchFactory?: IMatchFactory;
            bookmakerView?: boolean;
        };
        static $inject: string[];
        constructor(matchService: IMatchService, bookmakerService: IBookmakerService, matchFactory: IMatchFactory, routeParams: IRouteParams, filter: ng.IFilterProvider);
        addMatch(): void;
        changeToBookmakerView(): void;
        getMatchOddsByBookmakerId(matchOptionId: string, matchOptionOddsId: string, bookmakerId: string): Odds;
    }
}
