/// <reference path="typings/angularjs/angular.d.ts" />
var BookmakerRip;
(function (BookmakerRip) {
    angular.module('BookmakerRip', ['ngRoute']);
    BookmakerRip.getModule = function () {
        return angular.module("BookmakerRip");
    };
    BookmakerRip.getModule().config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/bookmaker', {
                templateUrl: '/App/Bookmaker/Views/bookmaker-list.html',
                controller: 'BookmakerListController',
                controllerAs: 'ctrl'
            }).
                when('/bookmaker/add', {
                templateUrl: '/App/Bookmaker/Views/bookmaker-add.html',
                controller: 'BookmakerAddController',
                controllerAs: 'ctrl'
            }).
                when('/bookmaker/:bookmakerId', {
                templateUrl: '/App/Bookmaker/Views/bookmaker-detail.html',
                controller: 'BookmakerDetailController',
                controllerAs: 'ctrl'
            }).
                when('/bookmaker/deposit/:bookmakerId', {
                templateUrl: '/App/deposit/Views/deposit-add.html',
                controller: 'DepositAddController',
                controllerAs: 'ctrl'
            }).
                when('/match', {
                templateUrl: '/App/Match/Views/match-list.html',
                controller: 'MatchListController',
                controllerAs: 'ctrl'
            }).
                when('/match/Add', {
                templateUrl: '/App/Match/Views/match-add.html',
                controller: 'MatchAddController',
                controllerAs: 'ctrl'
            }).
                when('/match/:matchId', {
                templateUrl: '/App/Match/Views/match-detail.html',
                controller: 'MatchDetailController',
                controllerAs: 'ctrl'
            }).
                when('/match/edit/:matchId', {
                templateUrl: '/App/Match/Views/match-edit.html',
                controller: 'MatchEditController',
                controllerAs: 'ctrl'
            }).
                otherwise({
                redirectTo: '/bookmaker'
            });
        }]);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=App.js.map