
myApp.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    $scope.ShowTab = "AddMatch";

    $scope.AddBonusToBookmakerId = 0;


    function standardCash() {
        $scope.Cash = {
            MinOdds: 1,
            RunThroughs : 0
        }
    }

    standardCash();


    

    $scope.AddCash = function(cash) {
        $http.post('/Cash/AddCash', { Cash: cash }).success(function (data, status, headers, config) {
            $scope.Bookmakers = data.Bookmakers;
            console.log("deposit succeded");
        });
    }

}]);
