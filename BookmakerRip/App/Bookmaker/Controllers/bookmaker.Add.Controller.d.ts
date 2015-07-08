declare module BookmakerRip {
    class BookmakerAddController {
        private bookmakerService;
        vm: {
            bookmakers?: IBookmaker[];
        };
        static $inject: string[];
        constructor(bookmakerService: IBookmakerService);
        addBookmaker(bookmaker: IBookmaker): void;
        deleteBookmaker(bookmaker: Bookmaker): void;
    }
}
