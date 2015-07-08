declare module BookmakerRip {
    interface IMatchService {
        getMatches(): ng.IHttpPromise<Match[]>;
        addMatch(match: Match): ng.IHttpPromise<Match[]>;
        getMatch(matchId: string): ng.IHttpPromise<Match>;
        deleteMatch(matchId: string): ng.IHttpPromise<Match[]>;
    }
    class MatchService {
        private $http;
        static $inject: string[];
        constructor($http: ng.IHttpService);
        getMatches: () => ng.IHttpPromise<Match[]>;
        addMatch: (match: Match) => ng.IHttpPromise<Match[]>;
        getMatch: (matchId: string) => ng.IHttpPromise<Match>;
        deleteMatch: (matchId: string) => ng.IHttpPromise<Match[]>;
    }
}
