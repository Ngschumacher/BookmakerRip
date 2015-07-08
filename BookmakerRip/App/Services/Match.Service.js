//myApp.factory('matchService', ['$http', function ($http) {
//    var service = {
//        GetMatches: function () {
//            return $http.get('/Match/GetMatch').then(function (response) {
//                return response.data;
//                $scope.Bookmakers = data.Bookmakers;
//            });
//        }
//    }
//    return service;
//}]);
var BookmakerRip;
(function (BookmakerRip) {
    "use strict";
    var MatchService = (function () {
        function MatchService($http) {
            var _this = this;
            this.$http = $http;
            this.getMatches = function () {
                return _this.$http.get("/api/Match");
            };
            this.addMatch = function (match) {
                return _this.$http.post("/api/Match/AddMatch", match);
            };
            this.getMatch = function (matchId) {
                return _this.$http.get("api/Match/" + matchId);
            };
            this.deleteMatch = function (matchId) {
                return _this.$http.delete("api/match/" + matchId);
            };
        }
        MatchService.$inject = ["$http"];
        return MatchService;
    })();
    BookmakerRip.MatchService = MatchService;
    var app = BookmakerRip.getModule();
    app.service("MatchService", MatchService);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=Match.Service.js.map