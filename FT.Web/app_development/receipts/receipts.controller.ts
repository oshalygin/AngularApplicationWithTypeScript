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
        totalNumberOfReceipts: number;

        static $inject = ["ReceiptResource", "$timeout"];
        constructor(private receiptResource: app.services.IReceiptResource,
            private $timeout: angular.ITimeoutService) {
            var vm = this;
            vm.receipts = [];
            vm.loadedReceipts = false;
            vm.page = 1;
            vm.pageSize = 10;

            $timeout(() => {
                this.getReceipts();
            }, 1000);

            vm.title = "Receipts";
           
        }

        public pageChanged(page: number): void {
            this.getReceipts();
        }

        
        //TODO: Create another service to track down totals...
        //private getReceiptTotal(): void {
        //    this.receiptResource.get({})
        //}

        private getReceipts(): void {
            
            this.receiptResource.query({ page: this.page, pageSize: this.pageSize},
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

