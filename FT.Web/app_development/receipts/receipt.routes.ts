((): void => {

    angular.module("app.receipts")
        .config(configuration);

    //configuration.$inject["$stateProvider"];
    function configuration(
        $stateProvider: angular.ui.IStateProvider) {

        $stateProvider
            .state("receipts", {
                url: "/Receipts",
                title: "Receipts",
                templateUrl: "./app_development/receipts/receipts.html",
                controller: "app.receipts.ReceiptController",
                controllerAs: "vm",
                resolve: {
                    //receipts: resolveReceipts
                }
            })
            .state("receiptDetail", {
                url: "/Receipts/Detail/:receiptId",
                templateUrl: "./app_development/receipts/receiptDetail.html",
                controller: "app.receipts.ReceiptDetailController",
                controllerAs: "vm",
                resolve: {
                   

                    //receipt: function (receiptService, $stateParams) {
                    //    //var productId = $stateParams.productId;
                    //    return receiptService.getReceiptById($stateParams.productId);
                    //}
                }});
    }

    //function resolveReceipts(receiptService: app.services.IReceiptService): ng.IPromise<app.models.IFundTrackReceipt[]> {
    //    return receiptService.getAllReceipts();
    //}

})();

    
