module app.receipts {



    interface IReceiptDetailController {
        title: string;
        receiptId: number;
    }

    class ReceiptDetailController implements  IReceiptDetailController {

        title: string;
        receipt: app.models.FundTrackReceipt;
        receiptId: number;

        static $inject = ["$stateParams"];
        constructor(receiptService: app.services.IReceiptService,
            $stateParams: app.services.IReceiptStateParams
           ) {

            receiptService = new app.services.ReceiptService();

            //this.receiptId = $stateParams.receiptId;
            this.receiptId = 2;

            var vm = this;
            vm.title = "Receipts";

            vm.receipt = receiptService.getReceiptById(this.receiptId);
            //vm.receipt = receipt;


        }


    }



    angular.module("app.receipts")
        .controller("app.receipts.ReceiptDetailController",
            ReceiptDetailController);

}

