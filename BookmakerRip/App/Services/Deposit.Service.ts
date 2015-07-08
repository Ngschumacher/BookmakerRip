module BookmakerRip {
    "use strict";

    export interface IDepositService {
        addDeposit(deposit : Deposit): ng.IHttpPromise<Bookmaker>;
   
    }

    export class DepositService {
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) {
        }
        
        addDeposit = (deposit: Deposit): ng.IHttpPromise<Bookmaker> => {
            console.log(deposit);
            return this.$http.post<Bookmaker>("/api/Cash/", deposit);
        }
    }
    var app = BookmakerRip.getModule();
    app.service("DepositService", DepositService);
}