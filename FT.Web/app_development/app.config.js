(function () {
    angular.module("app")
        .config(configuration);
    configuration.$inject = ["$locationProvider"];
    function configuration($locationProvider) {
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requiredBase: false
        //});
        $locationProvider.html5Mode(false);
    }
})();
//# sourceMappingURL=app.config.js.map