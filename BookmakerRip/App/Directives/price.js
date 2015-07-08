var BookmakerRip;
(function (BookmakerRip) {
    var Price = (function () {
        function Price($filter) {
            var _this = this;
            this.$filter = $filter;
            this.restrict = 'A';
            this.require = 'ngModel';
            this.$inject = ['$filter'];
            this.link = function (scope, element, attrs, ctrl) {
                var filter = _this.$filter;
                ctrl.$parsers.push(function (data) {
                    //convert data from view format to model format
                    data = filter('comma2decimal')(data);
                    return data;
                });
                ctrl.$formatters.push(function (data) {
                    //convert data from model format to view format
                    data = filter('decimalComma')(data);
                    return data;
                });
            };
            console.log($filter('comma2decimal')("10,98"));
        }
        Price.factory = function () {
            var directive = function ($filter) { return new Price($filter); };
            //directive.$inject = ['$filter'];
            return directive;
        };
        return Price;
    })();
    var app = BookmakerRip.getModule();
    app.directive("price", Price.factory());
})(BookmakerRip || (BookmakerRip = {}));
//app.directive('price', ['$filter',
//    function ($filter) {
//        return {
//            restrict: 'A',
//            require: 'ngModel',
//            link: function (scope, element, attrs, ngModelController) {
//                ngModelController.$parsers.push(function (data) {
//                    //convert data from view format to model format
//                    data = $filter('comma2decimal')(data);
//                    return data;
//                });
//                ngModelController.$formatters.push(function (data) {
//                    //convert data from model format to view format
//                    data = $filter('decimal2comma')(data);
//                    return data;
//                });
//            }
//        };
//    }]); 
//# sourceMappingURL=price.js.map