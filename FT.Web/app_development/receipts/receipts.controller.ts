module app.receipts {

    "use strict";

    interface IReceiptController {
        title: string;
        receipts: app.models.FundTrackReceipt[];
        loadedReceipts: boolean;
        lastComment: app.models.IFundTrackReceiptComment;
        pageSize: number;
        page: number;
    }


    class ReceiptController implements IReceiptController {

        title: string;
        receipts: app.models.IFundTrackReceipt[];
        loadedReceipts: boolean;
        lastComment: app.models.IFundTrackReceiptComment;
        pageSize: number;
        page: number;

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
            vm.page = 0;
            vm.pageSize = 4;
        }

        public getAllReceipts(): void {
            
            this.receiptResource.query({page: this.page, pageSize: this.pageSize},
                (data: app.models.IFundTrackReceipt[]) => this.loaded(data));   
        }

        private loaded(data: app.models.IFundTrackReceipt[]): void {
          
            this.receipts = data;
            this.loadedReceipts = true;
            
        }
    }



    angular.module("app.receipts")
        .controller("app.receipts.ReceiptController",
            ReceiptController);

}

