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


module BookmakerRip {
    "use strict";

    export interface IMatchService {
        getMatches(): ng.IHttpPromise<Match[]>;
        addMatch(match: Match): ng.IHttpPromise<Match[]>;
        getMatch(matchId : string) : ng.IHttpPromise<Match>;
        deleteMatch(matchId: string) : ng.IHttpPromise<Match[]>;
    }

    export class MatchService {
        static $inject = ["$http"];

        constructor(private $http: ng.IHttpService) {
        }

        getMatches = (): ng.IHttpPromise<Match[]> => {
            return this.$http.get<Match[]>("/api/Match");
        };

        addMatch = (match: Match): ng.IHttpPromise<Match[]> => {
            return this.$http.post<Match[]>("/api/Match/AddMatch",  match );
        }

        getMatch = (matchId: string): ng.IHttpPromise<Match> => {
            return this.$http.get<Match>("api/Match/"+matchId);
        }
        deleteMatch = (matchId: string) : ng.IHttpPromise<Match[]> => {

            return this.$http.delete("api/match/" + matchId);
        }

    }
    var app = BookmakerRip.getModule();
    app.service("MatchService", MatchService);
}