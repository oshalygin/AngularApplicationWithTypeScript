(function () {
    "use strict";
    angular.module("app.home")
        .config(configuration);
    //configuration.$inject["$stateProvider", "$urlProvider"];
    function configuration($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
            url: "/",
            title: "Home",
            templateUrl: "./app_development/home/home.html",
            controller: "app.home.HomeController",
            controllerAs: "vm"
        });
    }
})();
