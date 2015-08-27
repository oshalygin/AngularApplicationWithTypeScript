(function () {
    "use strict";
    angular.module("app.layout")
        .config(configuration);
    function configuration($stateProvider, $urlProvider) {
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
