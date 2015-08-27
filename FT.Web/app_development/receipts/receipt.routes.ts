﻿((): void => {

    angular.module("app.receipts")
        .config(configuration);

    //configuration.$inject["$stateProvider"];

    function configuration(
        $stateProvider: angular.ui.IStateProvider) {
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

    
