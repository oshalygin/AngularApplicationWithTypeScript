((): void => {

    angular.module("app.receipts")
        .config(configuration);

    configuration.$inject = ["$stateProvider"];
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
                url: "/Receipts/Detail/:id",
                title: "Receipt Detail",
                templateUrl: "./app_development/receipts/receiptDetail.html",
                controller: "app.receipts.ReceiptDetailController",
                controllerAs: "vm"
            })
            .state("newReceipt", {
                url: "/Receipts/NewReceipt/",
                title: "New Receipt",
                templateUrl: "./app_development/receipts/newreceipt.html",
                controller: "app.receipts.NewReceiptController",
                controllerAs: "vm"
            });
    }



})();

    
