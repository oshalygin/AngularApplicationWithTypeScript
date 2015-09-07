module app.receipts {


    export class CommentDetailController {

        receiptId: number;
        commentText: string;
        comment: app.models.IFundTrackReceiptComment;
        displayComments: boolean;


        static $inject = ["CommentResource", "$stateParams", "$state"];
        constructor(private commentResource: app.services.ICommentResource,
            private $stateParams: app.services.ICommentStateParams,
            private $state: angular.ui.IStateService) {
            var sv = this;
            this.comment = new app.models.FundTrackReceiptComment();
            this.displayComments = true;
            this.receiptId = $stateParams.id;

        }

        public hideComments(): void {
            this.displayComments = !this.displayComments;
        }


        public addComment(): void {

            this.addCommentToDatabase();
        }


        private addCommentToDatabase(): void {
            this.commentResource.save({
                receiptId: this.receiptId,
                text: this.comment.text

            },
                () => {
                    toastr.success("New Comment Added!");
                    this.$state.reload();
                },
                //TODO:  Look into what properties error object has
                (error: any) => {
                    console.log(error);
                    toastr.error(error.status + ": " + error.data.message);
                });
        }


    }

    angular.module("app.receipts")
        .controller("app.receipts.CommentDetailController", CommentDetailController);


}

