module app.layout {
    "use strict";

    interface ILayoutController {
        title: string;
        projectName: string;
        copyrightDate: Date;
    }
    
    class LayoutController implements ILayoutController {
        title: string;
        projectName: string;
        copyrightDate: Date;

        constructor() {
            var vm = this;
            vm.title = "Landing Page";
            vm.projectName = "Angular with TypeScript Spike";
            vm.copyrightDate = new Date(1, 1, 2015);
        }
    }

    angular.module("app.layout")
        .controller("app.layout.LayoutController",
            LayoutController);

}