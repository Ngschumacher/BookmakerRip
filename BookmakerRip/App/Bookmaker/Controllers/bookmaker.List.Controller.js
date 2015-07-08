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
var BookmakerRip;
(function (BookmakerRip) {
    var BookmakerListController = (function () {
        function BookmakerListController(bookmakerService) {
            var _this = this;
            this.bookmakerService = bookmakerService;
            this.vm = {};
            this.bookmakerService.getBookmakers().then(function (response) {
                _this.vm.bookmakers = response.data;
                console.log(_this.vm.bookmakers);
            });
        }
        BookmakerListController.prototype.deleteBookmaker = function (bookmakerId) {
            var _this = this;
            this.bookmakerService.deleteBookmaker(bookmakerId).then(function (response) {
                _this.vm.bookmakers = response.data;
            });
        };
        BookmakerListController.$inject = ["BookmakerService"];
        return BookmakerListController;
    })();
    BookmakerRip.BookmakerListController = BookmakerListController;
    var app = BookmakerRip.getModule();
    app.controller("BookmakerListController", BookmakerListController);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=bookmaker.List.Controller.js.map