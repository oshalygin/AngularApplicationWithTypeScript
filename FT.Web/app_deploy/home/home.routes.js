(function () {
    "use strict";
    angular.module("app.home")
        .config(configuration);
    function configuration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
            url: "/",
            templateUrl: "./app_development/home/home.html",
            controller: "app.home.HomeController",
            controllerAs: "vm"
        });
    }
})();