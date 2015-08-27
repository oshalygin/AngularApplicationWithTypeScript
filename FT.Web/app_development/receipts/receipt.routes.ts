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
                controllerAs: "vm"
            })
            .state("receiptDetail", {
                url: "/Receipts/Detail/:receiptId",
                templateUrl: "./app_development/receipts/receiptDetail.html",
                controller: "app.receipts.ReceiptDetailController",
                controllerAs: "vm",
                resolve: {
                    //receiptService: "app.services.ReceiptService",

                    //receipt: function (receiptService, $stateParams) {
                    //    //var productId = $stateParams.productId;
                    //    return receiptService.getReceiptById($stateParams.productId);
                    //}
                }});
    }

})();

    
