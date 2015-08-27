module app.layout {
    "use strict";

    interface IHomeController {
        title: string;
        projectName: string;
        copyrightDate: Date;
    }
    
    class HomeController implements IHomeController {
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

    angular.module("app.home")
        .controller("app.home.HomeController",
            HomeController);

}