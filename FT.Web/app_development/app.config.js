(function () {
    angular.module("app")
        .config(configuration);
    configuration.$inject = ["$locationProvider"];
    function configuration($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
//# sourceMappingURL=app.config.js.map