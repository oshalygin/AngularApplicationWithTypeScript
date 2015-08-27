module app.layout {
    "use strict";

    interface ILayoutController {
       title: string;
    }
    
    class LayoutController implements ILayoutController {
        title: string;

        constructor() {
            var vm = this;
            vm.title = "Landing Page";
        }
    }

    angular.module("app.layout")
        .controller("app.layout.LayoutController",
            LayoutController);

}