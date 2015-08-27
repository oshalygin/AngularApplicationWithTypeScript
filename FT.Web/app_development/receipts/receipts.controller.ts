module app.receipts {

    "use strict";

    interface IReceiptsScope {
        title: string;
    }

    class ReceiptController implements IReceiptsScope {
        title: string;

        constructor() {
            var vm = this;
            vm.title = "derp";
        }
    }

    angular.module("app.receipts")
        .controller("app.receipts.ReceiptController", ReceiptController);

}

