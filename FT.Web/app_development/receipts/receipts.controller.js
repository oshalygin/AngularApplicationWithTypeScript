var app;
(function (app) {
    var receipts;
    (function (receipts) {
        "use strict";
        var ReceiptController = (function () {
            function ReceiptController(receiptService) {
                var vm = this;
                vm.title = "Receipts";
                vm.receipts = receiptService.getAllReceipts();
                //
            }
            ReceiptController.$inject = ["app.services.ReceiptService"];
            return ReceiptController;
        })();
        angular.module("app.receipts")
            .controller("app.receipts.ReceiptController", ReceiptController);
    })(receipts = app.receipts || (app.receipts = {}));
})(app || (app = {}));
//# sourceMappingURL=receipts.controller.js.map