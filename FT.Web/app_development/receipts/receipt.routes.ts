((): void => {

    angular.module("app.receipts")
        .config(configuration);

    configuration.$inject["$stateProvider", "$urlProvider"];
    function configuration(
        $stateProvider: angular.ui.IStateProvider,
        $urlProvider: angular.ui.IUrlRouterProvider) {
        //todo might not be necessary...research
        $urlProvider.otherwise("/");

        $stateProvider
            .state("receipts", {
                url: "/Receipts",
                templateUrl: "app_deployment/receipts/receipts.html",
                controller: "app.receipts.ReceiptsController",
                controllerAs: "vm"
            });
    }

})();

    
