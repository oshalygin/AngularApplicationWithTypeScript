((): void => {
    "use strict";

    angular.module("app.layout")
        .config(configuration);

    //configuration.$inject["$stateProvider", "$urlProvider"];
    function configuration(
        $stateProvider: angular.ui.IStateProvider,
        $urlProvider: angular.ui.IUrlRouterProvider) {

        $urlProvider.otherwise("/");

        $stateProvider
            .state("home", {
            url: "",
            abstract: true,
                templateUrl: "app_development/layout/layout.html",
                controller: "app.layout.LayoutController",
                controllerAs: "vm"
            });
    }

})();