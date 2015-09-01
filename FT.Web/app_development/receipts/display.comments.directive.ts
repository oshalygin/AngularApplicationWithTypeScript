module app.widgets {


    class DisplayCommentsDirective implements ng.IDirective {
        static instance(): ng.IDirective {
            return new DisplayCommentsDirective;
        }

        restrict = "E";
        templateUrl = "./app_development/receipts/commentDetail.html";
        controller = app.receipts.CommentDetailController;
        controllerAs = "sv";
    }

    angular
        .module("app.widgets")
        .directive("displayComments", DisplayCommentsDirective.instance);

}


