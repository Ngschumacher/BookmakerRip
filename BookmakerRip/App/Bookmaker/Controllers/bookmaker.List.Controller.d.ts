declare module BookmakerRip {
    class BookmakerListController {
        private bookmakerService;
        vm: {
            bookmakers?: IBookmaker[];
        };
        static $inject: string[];
        constructor(bookmakerService: IBookmakerService);
        deleteBookmaker(bookmakerId: string): void;
    }
}
