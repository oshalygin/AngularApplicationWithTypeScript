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
            $stateParams: angular.ui.IStateParamsService ) {
            //,$stateParams: any) {
            //this.receiptId = $stateParams;


            var vm = this;
            vm.title = "Receipts";

            //vm.receipt = receiptService.getReceiptById(id);


        }


    }



    angular.module("app.receipts")
        .controller("app.receipts.ReceiptDetailController",
            ReceiptDetailController);

}

