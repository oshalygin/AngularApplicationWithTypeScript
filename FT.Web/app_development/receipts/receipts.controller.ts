module app.receipts {

    "use strict";

    interface IReceiptController {
        title: string;
        receipts: app.models.FundTrackReceipt[];
        lastComment: app.models.IFundTrackReceiptComment;
    }


    class ReceiptController implements IReceiptController {

        title: string;
        receipts: app.models.IFundTrackReceipt[] = [];
        lastComment: app.models.IFundTrackReceiptComment;

        //static $inject = ["app.services.ReceiptService"];
        constructor(private receiptResource: app.services.IReceiptResource) {
            var vm = this;

            


            vm.title = "Receipts";
          

        }
    }

    angular.module("app.receipts")
        .controller("app.receipts.ReceiptController",
            ReceiptController);

}

