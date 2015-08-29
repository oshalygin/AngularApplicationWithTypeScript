module app.receipts {

    "use strict";

    interface IReceiptsScope {
        title: string;
        receipts: app.models.FundTrackReceipt[];
        lastComment: app.models.IFundTrackReceiptComment;
    }


    class ReceiptController implements IReceiptsScope {

        title: string;
        receipts: app.models.FundTrackReceipt[] = [];
        lastComment: app.models.IFundTrackReceiptComment;

        //static $inject = ["app.services.ReceiptService"];
        constructor(receipts: app.models.FundTrackReceipt[]) {
            var vm = this;

            vm.title = "Receipts";
            //vm.receipts = receiptService.getAllReceipts();
            vm.receipts = null;

        }
    }

    angular.module("app.receipts")
        .controller("app.receipts.ReceiptController",
            ReceiptController);

}

