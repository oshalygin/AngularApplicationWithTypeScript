(function () {
    angular.module("app.receipts")
        .config(configuration);
    function configuration($stateProvider) {
        //todo might not be necessary...research
        //$urlProvider.otherwise("/");
        $stateProvider
            .state("receipts", {
            url: "/Receipts",
            templateUrl: "app_deployment/receipts/receipts.html",
            controller: "app.receipts.ReceiptsController",
            controllerAs: "vm"
        });
    }
})();
