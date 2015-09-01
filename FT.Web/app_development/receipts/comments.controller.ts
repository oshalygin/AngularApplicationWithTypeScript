module app.receipts {


    export class CommentsController {

        receiptId: number;
        commentText: string;
        comment: app.models.IFundTrackReceiptComment;

        static $inject = ["CommentResource", "$stateParams"];
        constructor(private commentResource: app.services.ICommentResource,
            $stateParams: app.services.ICommentStateParams) {
            var sv = this;
            this.comment = new app.models.FundTrackReceiptComment();

            this.receiptId = $stateParams.id;



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
                },
                //TODO:  Look into what properties error object has
                (error: any) => {
                    toastr.error("Failed: Server Error");
                });
        }


    }

    angular.module("app.receipts")
        .controller("app.receipts.CommentsController", CommentsController);


}

