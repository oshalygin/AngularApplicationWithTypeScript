module app.services {

    export interface ICommentStateParams extends angular.ui.IStateParamsService {
        id: number;
    }


    export interface ICommentDefinition extends ng.resource.IResource<app.models.IFundTrackReceiptComment> {

    }

    export interface ICommentResource extends ng.resource.IResourceClass<ICommentDefinition> {

    }

}

((): void => {

    angular.module("app.services")
        .factory("CommentResource", [
            "ResourceBuilder",
            (builder: app.services.ResourceBuilder) => builder.getReceiptCommentResource()
        ]);

})();

