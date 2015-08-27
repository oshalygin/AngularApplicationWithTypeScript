((): void => {

    angular.module("app")
        .config(configuration);

    configuration.$inject = ["$locationProvider"];
    function configuration($locationProvider: ng.ILocationProvider): void {
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requiredBase: false
        //});
        $locationProvider.html5Mode(true);
        
    }

})();
