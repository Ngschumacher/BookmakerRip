//myApp.controller('bookmakerListController', ['$scope', '$http', 'bookmakerService', function ($scope, $http, bookmakerService) {

//    $scope.bookmakers = [];

//    function constructor() {
//        bookmakerService.GetBookmakers().then(function(data) {
//            $scope.bookmakers = data;
//            console.log(data);
//        });
//    }
//    $scope.DeleteBookmaker = function (bookmakerId) {
//        $http.get('/Bookmaker/Deletebookmaker/' + bookmakerId).success(function (data, status, headers, config) {
//            $scope.Bookmakers = data.Bookmakers;
//        });
//    }
//    constructor();
//}]);


module BookmakerRip {
    export class BookmakerListController {
        vm : {
            bookmakers? : IBookmaker[];
        }
        static $inject = ["BookmakerService"];
        constructor(private bookmakerService: IBookmakerService) {
            this.vm = {};
            this.bookmakerService.getBookmakers().then((response) => {
                this.vm.bookmakers = response.data;
                console.log(this.vm.bookmakers);
            });
        }

        public deleteBookmaker(bookmakerId: string) {
            this.bookmakerService.deleteBookmaker(bookmakerId).then((response) => {
                this.vm.bookmakers = response.data;
            });
        } 
        

    }

    var app = BookmakerRip.getModule();
    app.controller("BookmakerListController", BookmakerListController);
}