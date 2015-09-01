module app.widgets {


    class DisplayCommentsDirective implements ng.IDirective {
        static instance(): ng.IDirective {
            return new DisplayCommentsDirective;
        }

        restrict = 'E';
        templateUrl = "./app_development/receipts/comments.html";
        controller = app.receipts.CommentsController;
        controllerAs = "sv";
    }

    angular
        .module("app.widgets")
        .directive("displayComments", DisplayCommentsDirective.instance);

}


