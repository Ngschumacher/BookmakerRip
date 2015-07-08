declare module BookmakerRip {
    class BookmakerDetailController {
        private bookmakerService;
        vm: {
            bookmaker?: Bookmaker;
        };
        static $inject: string[];
        constructor(bookmakerService: IBookmakerService, routeParams: IRouteParams);
    }
}
