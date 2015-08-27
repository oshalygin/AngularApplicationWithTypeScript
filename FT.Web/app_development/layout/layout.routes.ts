((): void => {
    "use strict";

    angular.module("app.layout")
        .config(configuration);

    //configuration.$inject["$stateProvider", "$urlProvider"];
    function configuration(
        $stateProvider: angular.ui.IStateProvider
        , $urlRouterProvider: angular.ui.IUrlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "./app_development/layout/layout.html",
                controller: "app.layout.LayoutController",
                controllerAs: "vm"
            });
    }

})();