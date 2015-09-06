module app.receipts {

    "use strict";

    interface IReceiptController {
        title: string;
        receipts: app.models.FundTrackReceipt[];
        loadedReceipts: boolean;
        lastComment: app.models.IFundTrackReceiptComment;
        pageSize: number;
        page: number;
        totalNumberOfReceipts: number;
        maxNumberOfPagesToDisplay: number;
    }


    class ReceiptController implements IReceiptController {

        title: string;
        receipts: app.models.IFundTrackReceipt[];
        loadedReceipts: boolean;
        lastComment: app.models.IFundTrackReceiptComment;
        pageSize: number;
        page: number;
        totalNumberOfReceipts: number;
        maxNumberOfPagesToDisplay: number;

        static $inject = ["ReceiptResource", "$timeout"];
        constructor(private receiptResource: app.services.IReceiptResource,
            private $timeout: angular.ITimeoutService) {
            var vm = this;

            this.receipts = [];
            this.loadedReceipts = false;
            this.page = 1;
            this.pageSize = 10;
            this.maxNumberOfPagesToDisplay = 4;
            this.title = "Receipts";


            $timeout(() => {
                this.getReceiptTotal();
                this.getReceipts();

            }, 1000);



        }

        public pageChanged(page: number): void {
            this.getReceipts();
        }



        private getReceiptTotal(): void {
            this.receiptResource.get({}, (data: app.models.IFundTrackTotals) => {
                this.totalNumberOfReceipts = data.totalNumberOfReceipts;
            });
        }

        private getReceipts(): void {

            this.receiptResource.query({ page: this.page, pageSize: this.pageSize },
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

