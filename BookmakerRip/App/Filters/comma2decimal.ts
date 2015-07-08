module BookmakerRip {
    var app = BookmakerRip.getModule();

    app.filter('comma2decimal', [
        function () { // should be altered to suit your needs
            return function (input) {
                var ret = (input) ? input.toString().trim().replace(",", ".") : null;
                return parseFloat(ret);
            };
        }]); 

    //app.controller("comma2decimal", BookmakerListController);
}

