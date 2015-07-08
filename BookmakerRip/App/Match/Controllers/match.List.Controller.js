//myApp.controller('matchListController', ['$scope', '$http', function ($scope, $http) {
//    $scope.Matches = [];
//    function constructor() {
//        $http.get('/Match/GetMatches').success(function (data, status, headers, config) {
//            $scope.Matches = data.Matches;
//            console.log("retrived Matches", $scope.Matches);
//        });
//    }
//    constructor();
//}]);
var BookmakerRip;
(function (BookmakerRip) {
    var MatchListController = (function () {
        function MatchListController(matchService) {
            var _this = this;
            this.matchService = matchService;
            this.vm = {};
            this.matchService.getMatches().then(function (response) {
                _this.vm.matches = response.data;
            });
        }
        MatchListController.prototype.deleteMatch = function (matchId) {
            var _this = this;
            this.matchService.deleteMatch(matchId).then(function (response) {
                _this.vm.matches = response.data;
            });
        };
        MatchListController.$inject = ["MatchService"];
        return MatchListController;
    })();
    BookmakerRip.MatchListController = MatchListController;
    var app = BookmakerRip.getModule();
    app.controller("MatchListController", MatchListController);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=match.List.Controller.js.map