myApp.factory('matchService', ['$http', function ($http) {
    var service = {
        GetMatches: function () {
            return $http.get('/Match/GetMatch').then(function (response) {
                return response.data;

                $scope.Bookmakers = data.Bookmakers;
            });
        }
    }
    return service;
}]);