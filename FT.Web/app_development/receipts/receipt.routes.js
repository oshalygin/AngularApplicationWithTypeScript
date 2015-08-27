(function () {
    angular.module("app.receipts")
        .config(configuration);
    //configuration.$inject["$stateProvider"];
    function configuration($stateProvider) {
        $stateProvider
            .state("receipts", {
            url: "/Receipts",
            title: "Receipts",
            templateUrl: "./app_development/receipts/receipts.html",
            controller: "app.receipts.ReceiptController",
            controllerAs: "vm"
        });
    }
})();
