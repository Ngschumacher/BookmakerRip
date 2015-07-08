declare module BookmakerRip {
    class DepositAddController {
        depositService: IDepositService;
        bookmakerService: IBookmakerService;
        $location: ng.ILocationService;
        vm: {
            deposit?: Deposit;
            bookmaker?: Bookmaker;
        };
        static $inject: string[];
        constructor(depositService: IDepositService, bookmakerService: IBookmakerService, routeParams: IRouteParams, $location: ng.ILocationService);
        addDeposit(deposit: Deposit): void;
    }
}
