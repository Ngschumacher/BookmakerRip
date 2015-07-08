module BookmakerRip {
     
    export class BookmakerAddController {
        vm : {
            bookmakers? : IBookmaker[];
        }

        static $inject = ["BookmakerService"];

        constructor(private bookmakerService: IBookmakerService) {
            this.vm = {};
            this.bookmakerService.getBookmakers().then((response) => {
                console.log(response.data); 
                this.vm.bookmakers = response.data;
                console.log(this.vm);
            });
        }
        
        public addBookmaker(bookmaker: IBookmaker) {
            this.bookmakerService.addBookmaker(bookmaker).then( (response) => {
                this.vm.bookmakers = response.data;
            });
        }
        public deleteBookmaker(bookmaker : Bookmaker) {
            this.bookmakerService.deleteBookmaker(bookmaker.id).then((response) => {
                var index = this.vm.bookmakers.indexOf(bookmaker);
                this.vm.bookmakers.slice(index, 1);
            });
        }
        

    }


    var app = BookmakerRip.getModule();
    app.controller("BookmakerAddController", BookmakerAddController);
}