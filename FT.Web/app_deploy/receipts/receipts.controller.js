var app;
(function (app) {
    var receipts;
    (function (receipts) {
        "use strict";
        var ReceiptController = (function () {
            function ReceiptController() {
                var vm = this;
                vm.title = "derp";
                for (var i = 0; i <= 5; i++) {
                    var receipt = new app.models.FundTrackReceipt();
                    receipt.id = i;
                }
            }
            return ReceiptController;
        })();
        angular.module("app.receipts")
            .controller("app.receipts.ReceiptController", ReceiptController);
    })(receipts = app.receipts || (app.receipts = {}));
})(app || (app = {}));
