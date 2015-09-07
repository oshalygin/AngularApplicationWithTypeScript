module app.receipts {

    "use strict";

    interface ICommentsController {
        comments: app.models.IFundTrackReceiptComment[];
        loadedComments: boolean;
        title: string;
        searchTerm: string;
        totalNumberOfComments: number;
        pageSize: number;
        page: number;
        maxNumberOfPagesToDisplay: number;
    }

    class CommentsController implements ICommentsController {
        comments: app.models.IFundTrackReceiptComment[];
        loadedComments: boolean;
        title: string;
        searchTerm: string;
        totalNumberOfComments: number;
        pageSize: number;
        page: number;
        maxNumberOfPagesToDisplay: number;

        static $inject = ["$timeout", "CommentResource", "$scope"];
        constructor(private $timeout: angular.ITimeoutService,
            private commentResource: app.services.ICommentResource,
            private $scope: angular.IScope) {

            var vm = this;
            vm.title = "Comments";
            vm.loadedComments = false;
            vm.comments = [];
            this.page = 1;
            this.pageSize = 10;
            this.maxNumberOfPagesToDisplay = 4;
            vm.searchTerm = "";

            $timeout(() => {
                this.getReceiptTotal();
                this.getComments();
            }, 1000);

            $scope.$watch("vm.searchTerm",
                (oldString: string, newString: string): void => {
                    if (oldString !== newString) {
                        this.getComments();
                        this.getReceiptTotal();
                    }
            });

        }

        public pageChanged(page: number): void {
            this.getComments();
        }

        private getReceiptTotal(): void {
            this.commentResource.get({searchTerm: this.searchTerm}, (data: app.models.IFundTrackTotals) => {
                this.totalNumberOfComments = data.totalNumberOfComments;
            });
        }

        private getComments(): void {

            this.commentResource.query({ page: this.page, pageSize: this.pageSize, searchTerm: this.searchTerm },
                (data: app.models.IFundTrackReceiptComment[]) => {
                    this.comments = data;
                    this.loadedComments = true;
                });
        }


    }


    angular.module("app.receipts")
        .controller("app.receipts.CommentsController", CommentsController);

}