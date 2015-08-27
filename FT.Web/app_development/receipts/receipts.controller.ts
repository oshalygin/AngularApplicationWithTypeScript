﻿module app.receipts {

    "use strict";

    interface IReceiptsScope {
        title: string;
        receipts: app.models.IFundTrackReceipt[];
    }

    

    class ReceiptController implements IReceiptsScope {
        title: string;
        receipts: app.models.FundTrackReceipt[];

        static $inject = ["app.services.ReceiptService"];
        constructor(receiptService: app.services.IReceiptService) {

            var vm = this;
            vm.title = "Receipts";
            vm.receipts = receiptService.getAllReceipts();
            

        }
    }

    angular.module("app.receipts")
        .controller("app.receipts.ReceiptController",
            ReceiptController);

}

