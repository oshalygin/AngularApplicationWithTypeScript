(function () {
    angular.module("app.receipts")
        .config(configuration);
    //configuration.$inject["$stateProvider"];
    function configuration($stateProvider) {
        //todo might not be necessary...research
        //$urlProvider.otherwise("/");
        $stateProvider
            .state("receipts", {
            url: "/Receipts",
            templateUrl: "./app_development/receipts/receipts.html",
            controller: "app.receipts.ReceiptController",
            controllerAs: "vm"
        });
    }
})();
