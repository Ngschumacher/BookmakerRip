declare module BookmakerRip {
    interface IDepositService {
        addDeposit(deposit: Deposit): ng.IHttpPromise<Bookmaker>;
    }
    class DepositService {
        private $http;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        addDeposit: (deposit: Deposit) => ng.IHttpPromise<Bookmaker>;
    }
}
