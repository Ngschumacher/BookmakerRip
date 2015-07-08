/// <reference path="typings/angularjs/angular.d.ts" />
module BookmakerRip {

    angular.module('BookmakerRip', ['ngRoute']);

    export var getModule: () => ng.IModule = () => {
        return angular.module("BookmakerRip");
    }
    getModule().config(['$routeProvider',
        $routeProvider => {
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

}
