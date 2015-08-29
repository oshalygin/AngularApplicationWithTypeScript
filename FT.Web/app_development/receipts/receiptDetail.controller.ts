module app.receipts {



    interface IReceiptDetailController {
        title: string;
        receiptId: number;
        imageUrl: string;
    }

    class ReceiptDetailController implements IReceiptDetailController {

        title: string;
        receipt: app.models.FundTrackReceipt;
        receiptId: number;
        imageUrl: string;

        static $inject = ["$stateParams", "ReceiptResource"];
        constructor(
            $stateParams: app.services.IReceiptStateParams,
            private receiptResource: app.services.IReceiptResource) {
            this.receiptId = $stateParams.id;

            var vm = this;
            vm.title = "Receipt Detail";
            vm.imageUrl = "./Content/images/receiptImage.png";

            this.getReceiptById(this.receiptId);

            //vm.receipt = receiptService.getReceiptById(this.receiptId);


        }

        public getReceiptById(id: number): void {
            this.receiptResource.get({ id: id },
            (data: app.models.IFundTrackReceipt) => this.loaded(data));
        }

        private loaded(data: app.models.IFundTrackReceipt): void {
            this.receipt = data;

        }


    }



    angular.module("app.receipts")
        .controller("app.receipts.ReceiptDetailController",
            ReceiptDetailController);

}

