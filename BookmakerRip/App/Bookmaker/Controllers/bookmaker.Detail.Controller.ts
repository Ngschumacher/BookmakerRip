module BookmakerRip {
     
    export class BookmakerDetailController {
        vm : {
            bookmaker? : Bookmaker;
        }

        static $inject = ["BookmakerService", "$routeParams"];

        constructor(private bookmakerService: IBookmakerService, routeParams: IRouteParams) {
            this.vm = {};
            this.bookmakerService.getBookmaker(routeParams.bookmakerId).then((response) => {
                this.vm.bookmaker = response.data;
                console.log(this.vm.bookmaker);
            });
        }
    }


    var app = BookmakerRip.getModule();
    app.controller("BookmakerDetailController", BookmakerDetailController);
}