
module app.services {

    export interface IReceiptTypesStateParams extends angular.ui.IStateParamsService {
        id: number;
    }


    export interface IFundTrackReceiptTypesDefinition extends ng.resource.IResource<app.models.IFundTrackReceiptType> {
       
    }

    export interface IReceiptTypesResource extends ng.resource.IResourceClass<IFundTrackReceiptTypesDefinition> {
        
    }

}

((): void => {

    angular.module("app.services")
        .factory("ReceiptTypesResource", [
            "ResourceBuilder",
            (builder: app.services.ResourceBuilder) => builder.getReceiptTypeResource()
        ]);

})();

