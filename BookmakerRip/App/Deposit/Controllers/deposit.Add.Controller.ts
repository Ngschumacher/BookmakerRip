module BookmakerRip {

    export class DepositAddController {
        vm : {
            deposit?: Deposit;
            bookmaker? : Bookmaker;
        }
        static $inject = ["DepositService", "BookmakerService", "$routeParams", "$location"];
        constructor(public depositService: IDepositService, public bookmakerService: IBookmakerService, routeParams: IRouteParams, public $location : ng.ILocationService) {
            this.vm = {};

            this.bookmakerService.getBookmaker(routeParams.bookmakerId).then((response) => {
                this.vm.bookmaker = response.data;
                var deposit = new Deposit();
                deposit.bookmakerId = this.vm.bookmaker.id;
                this.vm.deposit = deposit;
            });
            this.vm.deposit = new Deposit();
            
        }
        public addDeposit(deposit: Deposit) {
            this.depositService.addDeposit(deposit).then((response) => {
                console.log(response);
                this.vm.bookmaker = response.data;
                this.$location.path("/bookmaker/" +response.data.id);
            });
        }
    }


    var app = BookmakerRip.getModule();
    app.controller("DepositAddController", DepositAddController);
}