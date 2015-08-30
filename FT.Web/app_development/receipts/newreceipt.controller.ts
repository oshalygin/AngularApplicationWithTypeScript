module app.receipts {



    interface INewReceiptController {
        title: string;
        receipt: app.models.IFundTrackReceipt;
    }

    class NewReceiptController implements INewReceiptController {

        title: string;
        receipt: app.models.FundTrackReceipt;

        static $inject = ["ReceiptResource"];
        constructor(           
            private receiptResource: app.services.IReceiptResource) {
       
            var vm = this;
            vm.title = "New Receipt";

            this.receipt = new app.models.FundTrackReceipt();


        }


        private saveNewReceipt(): void {
            this.receiptResource.save(this.receipt,
            () => {
                //TODO: Toaster stuff
            },
            () => {
                //TODO: Toaster stuff
            });

        }


    }



    angular.module("app.receipts")
        .controller("app.receipts.NewReceiptController",
        NewReceiptController);

}

