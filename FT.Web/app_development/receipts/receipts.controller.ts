module app.receipts {

    "use strict";

    interface IReceiptsScope {
        //
    }

    class ReceiptController implements  IReceiptsScope {
        //
    }

    angular.module("app.receipts")
        .controller("app.receipts.ReceiptController", ReceiptController);

}

