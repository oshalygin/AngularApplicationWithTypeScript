module app.widgets {

    class SpinningWidget {
        static instance(): ng.IDirective {
            return new SpinningWidget();
        }

        restrict = "E";
        template = "<div class='sk-rotating-plane'> </div>";


    }

    angular
        .module("app.widgets")
        .directive("spinningWidget", SpinningWidget.instance);
}