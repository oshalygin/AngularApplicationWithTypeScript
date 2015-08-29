module app.receipts {

    "use strict";

    interface IReceiptController {
        title: string;
        receipts: app.models.FundTrackReceipt[];
        lastComment: app.models.IFundTrackReceiptComment;
    }


    class ReceiptController implements IReceiptController {

        title: string;
        receipts: app.models.IFundTrackReceipt[];
        lastComment: app.models.IFundTrackReceiptComment;

        static $inject = ["ReceiptResource"];
        constructor(private receiptResource: app.services.IReceiptResource) {
            var vm = this;
            vm.receipts = [];

            this.getAllReceipts();

            vm.title = "Receipts";
        }

        public getAllReceipts(): void {
            this.receiptResource.query({},
            (data: app.models.IFundTrackReceipt[]) => this.loaded(data));
        }

        private loaded(data: app.models.IFundTrackReceipt[]): void {
            this.receipts = data;
        }
    }



    angular.module("app.receipts")
        .controller("app.receipts.ReceiptController",
            ReceiptController);

}

