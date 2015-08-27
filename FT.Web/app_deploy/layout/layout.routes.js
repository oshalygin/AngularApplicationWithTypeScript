(function () {
    "use strict";
    angular.module("app.layout")
        .config(configuration);
    function configuration($stateProvider, $urlRouterProvider) {
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
