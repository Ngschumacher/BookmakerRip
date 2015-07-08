var BookmakerRip;
(function (BookmakerRip) {
    //console.log("testing");
    //app.filter('decimal2comma', [
    //    function () {// should be altered to suit your needs
    //        return function (input) {
    //            console.log("test");
    //            var ret = (input) ? input.toString().replace(".", ",") : null;
    //            if (ret) {
    //                var decArr = ret.split(",");
    //                if (decArr.length > 1) {
    //                    var dec = decArr[1].length;
    //                    if (dec === 1) { ret += "0"; }
    //                }//this is to show prices like 12,20 and not 12,2
    //            }
    //            return ret;
    //        };
    //    }]); 
    function decimal2Comma() {
        return function (input) {
            console.log("test");
            var ret = (input) ? input.toString().replace(".", ",") : null;
            if (ret) {
                var decArr = ret.split(",");
                if (decArr.length > 1) {
                    var dec = decArr[1].length;
                    if (dec === 1) {
                        ret += "0";
                    }
                } //this is to show prices like 12,20 and not 12,2
            }
            return ret;
        };
    }
    BookmakerRip.decimal2Comma = decimal2Comma;
    var app = BookmakerRip.getModule();
    app.filter("decimalComma", decimal2Comma);
})(BookmakerRip || (BookmakerRip = {}));
//# sourceMappingURL=decimal2comma.js.map