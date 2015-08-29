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

        static $inject = ["$stateParams"];
        constructor(
            $stateParams: app.services.IReceiptStateParams)
             {

            
            this.receiptId = $stateParams.receiptId;

            var vm = this;
            vm.title = "Receipt Detail";
            //vm.receipt = receiptService.getReceiptById(this.receiptId);
            vm.imageUrl = "./Content/images/receiptImage.png";

        }


    }



    angular.module("app.receipts")
        .controller("app.receipts.ReceiptDetailController",
            ReceiptDetailController);

}

