var app;
(function (app) {
    var layout;
    (function (layout) {
        "use strict";
        var HomeController = (function () {
            function HomeController() {
                var vm = this;
                vm.title = "Landing Page";
                vm.projectName = "Angular with TypeScript Spike";
                vm.copyrightDate = new Date(1, 1, 2015);
            }
            return HomeController;
        })();
        angular.module("app.home")
            .controller("app.home.HomeController", HomeController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
