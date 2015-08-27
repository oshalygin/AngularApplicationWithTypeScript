((): void => {

    angular.module("app.receipts")
        .config(configuration);

    //configuration.$inject["$stateProvider"];

    function configuration(
        $stateProvider: angular.ui.IStateProvider) {

        $stateProvider
            .state("receipts", {
                url: "/Receipts",
                templateUrl: "./app_development/receipts/receipts.html",
                controller: "app.receipts.ReceiptController",
                controllerAs: "vm"
            });
    }

})();

    
