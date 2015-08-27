module app.receipts {

    interface IReceiptDetailController {
        title: string;
            
    }
    class ReceiptDetailController {
        
        title: string;
        receipt: app.models.FundTrackReceipt; 
        

        constructor(receiptService: app.services.IReceiptService) {

            var vm = this;
            vm.title = "Receipts";
            //vm.receipts = receiptService.getAllReceipts();
            //vm.receipts[0].id = 10;

        }


    }



    angular.module("app.receipts")
        .controller("app.receipts.ReceiptDetailController",
            ReceiptDetailController);

}

