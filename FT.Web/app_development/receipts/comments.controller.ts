module app.receipts {

    "use strict";

    class CommentsController {
        comments: app.models.IFundTrackReceiptComment[];
        loadedComments: boolean;
        title: string;

        static $inject = ["$timeout", "CommentResource"];
        constructor(private $timeout: angular.ITimeoutService,
            private commentResource: app.services.ICommentResource) {

            var vm = this;
            vm.title = "Comments";
            vm.loadedComments = false;
            vm.comments = [];

            $timeout(() => {
                this.getAllComments();
            }, 1000);


        }

        private getAllComments(): void {
            this.commentResource.query({},
            (data: app.models.IFundTrackReceiptComment[]) => {
                this.comments = data;
                this.loadedComments = true;
            });
        }

    }





    angular.module("app.receipts")
        .controller("app.receipts.CommentsController", CommentsController);

}