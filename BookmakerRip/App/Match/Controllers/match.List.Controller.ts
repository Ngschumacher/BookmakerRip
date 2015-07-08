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


module BookmakerRip {
    export class MatchListController {
        vm: {
            matches?: Match[];
        }

        static $inject = ["MatchService"];

        constructor(private matchService: IMatchService) {
            this.vm = {};
            this.matchService.getMatches().then((response) => {
                this.vm.matches = response.data;
            });
        }
        public deleteMatch(matchId: string) {
            this.matchService.deleteMatch(matchId).then((response) => {
                this.vm.matches = response.data;
            });
        }

    }

var app = BookmakerRip.getModule();
app.controller("MatchListController", MatchListController);
}