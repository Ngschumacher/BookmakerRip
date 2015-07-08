var myApp = angular.module('BookmakerRip', ['ngRoute']);

myApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
       
        when('/bookmaker', {
            templateUrl: '/App/Bookmaker/Views/bookmaker-list.html',
            controller: 'bookmakerListController'
        }).
        when('/bookmaker/add', {
            templateUrl: '/App/Bookmaker/Views/bookmaker-add.html',
            controller: 'BookmakerAddController',
            controllerAs:'bm'
        }).
        when('/bookmaker/:bookmakerId', {
            templateUrl: '/App/Bookmaker/Views/bookmaker-detail.html',
            controller: 'BookmakerDetailController'
        }).
          when('/match', {
              templateUrl: '/App/Match/Views/match-list.html',
              controller: 'matchListController'
          }).
          when('/match/Add', {
              templateUrl: '/App/Match/Views/match-add.html',
              controller: 'matchAddController'
          }).
          when('/match/:matchId', {
              templateUrl: '/App/Match/Views/match-detail.html',
              controller: 'matchDetailController'
          }).
        otherwise({
            redirectTo: '/bookmaker'
        });
  }]);
