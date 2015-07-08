module BookmakerRip {
    class Price implements ng.IDirective{
    
        restrict = 'A';
        require = 'ngModel';
        constructor(public $filter: ng.IFilterService) {
            console.log($filter('comma2decimal')("10,98"));
        }

        $inject = ['$filter'];

        link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
            var filter = this.$filter;
            ctrl.$parsers.push(data => {
                //convert data from view format to model format
                
                data = filter('comma2decimal')(data);

                return data;
            });

            ctrl.$formatters.push(data => {
                //convert data from model format to view format
                data = filter('decimalComma')(data);

                return data;
            });
        }

        static factory(): ng.IDirectiveFactory {
            const directive = ($filter: ng.IFilterService) => new Price($filter);
            //directive.$inject = ['$filter'];
            return directive;
        }    
    }
    var app = BookmakerRip.getModule();
    app.directive("price", Price.factory());

}


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