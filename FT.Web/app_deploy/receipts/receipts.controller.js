var app;
(function (app) {
    var receipts;
    (function (receipts) {
        "use strict";
        var ReceiptController = (function () {
            function ReceiptController() {
                var vm = this;
                vm.title = "derp";
            }
            return ReceiptController;
        })();
        angular.module("app.receipts")
            .controller("app.receipts.ReceiptController", ReceiptController);
    })(receipts = app.receipts || (app.receipts = {}));
})(app || (app = {}));
