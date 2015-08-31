module app.receipts {

    "use strict";

    interface IReceiptController {
        title: string;
        receipts: app.models.FundTrackReceipt[];
        loadedReceipts: boolean;
        lastComment: app.models.IFundTrackReceiptComment;
    }


    class ReceiptController implements IReceiptController {

        title: string;
        receipts: app.models.IFundTrackReceipt[];
        loadedReceipts: boolean;
        lastComment: app.models.IFundTrackReceiptComment;

        static $inject = ["ReceiptResource", "$timeout"];
        constructor(private receiptResource: app.services.IReceiptResource,
                    private $timeout: angular.ITimeoutService) {
            var vm = this;
            vm.receipts = [];
            vm.loadedReceipts = false;

            $timeout(() => {
                this.getAllReceipts();
            }, 1000);

            vm.title = "Receipts";
        }

        public getAllReceipts(): void {
            
            this.receiptResource.query({},
                (data: app.models.IFundTrackReceipt[]) => this.loaded(data));
            this.loadedReceipts = true;
            
        }

        private loaded(data: app.models.IFundTrackReceipt[]): void {
          
            this.receipts = data;
           
            
        }
    }



    angular.module("app.receipts")
        .controller("app.receipts.ReceiptController",
            ReceiptController);

}

