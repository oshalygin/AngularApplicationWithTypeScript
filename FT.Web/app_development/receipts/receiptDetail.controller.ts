module app.receipts {



    interface IReceiptDetailController {
        title: string;
        receiptId: number;
        imageUrl: string;
    }

    class ReceiptDetailController implements  IReceiptDetailController {

        title: string;
        receipt: app.models.FundTrackReceipt;
        receiptId: number;
        imageUrl: string;

        static $inject = ["app.services.ReceiptService", "$stateParams"];
        constructor(receiptService: app.services.IReceiptService,
            $stateParams: app.services.IReceiptStateParams) {

            receiptService = new app.services.ReceiptService();
            this.receiptId = $stateParams.receiptId;

            var vm = this;
            vm.title = "Receipt Detail";
            vm.receipt = receiptService.getReceiptById(this.receiptId);
            vm.imageUrl = "./Content/images/receiptImage.png";

        }


    }



    angular.module("app.receipts")
        .controller("app.receipts.ReceiptDetailController",
            ReceiptDetailController);

}

