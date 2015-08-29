((): void => {
    

    angular.module("app.home")
        .config(configuration);

    configuration.$inject = ["$stateProvider", "$urlRouterProvider"];
    function configuration(
        $stateProvider: angular.ui.IStateProvider
        , $urlRouterProvider: angular.ui.IUrlRouterProvider) {

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