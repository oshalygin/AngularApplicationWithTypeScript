module app.receipts {

    "use strict";

    interface IReceiptsScope {
        title: string;
        receipts: app.models.IFundTrackReceipt[];
        lastComment: app.models.IFundTrackReceiptComment;
    }

    

    class ReceiptController implements IReceiptsScope {
        title: string;
        receipts: app.models.FundTrackReceipt[];
        lastComment: app.models.IFundTrackReceiptComment;

        static $inject = ["app.services.ReceiptService"];
        constructor(receiptService: app.services.IReceiptService) {

            var vm = this;
            vm.title = "Receipts";
            vm.receipts = receiptService.getAllReceipts();
            vm.receipts[0].id = 10;

        }
    }

    angular.module("app.receipts")
        .controller("app.receipts.ReceiptController",
            ReceiptController);

}

