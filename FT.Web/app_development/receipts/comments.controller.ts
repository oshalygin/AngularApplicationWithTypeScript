module app.receipts {


    export class CommentsController {
        
        receiptComments: app.models.IFundTrackReceiptComment[];
        receiptId: number;
        commentText: string;

        static $inject = ["CommentResource"];
        constructor(private commentResource: app.services.ICommentResource) {
            var vm = this;
            vm.receiptComments = [];


        }
    }



    angular.module("app.receipts")
        .controller("app.receipts.CommentsController", CommentsController);


}

