var app;
(function (app) {
    var layout;
    (function (layout) {
        "use strict";
        var LayoutController = (function () {
            function LayoutController() {
                var vm = this;
                vm.title = "Landing Page";
            }
            return LayoutController;
        })();
        angular.module("app.layout")
            .controller("app.layout.LayoutController", LayoutController);
    })(layout = app.layout || (app.layout = {}));
})(app || (app = {}));
