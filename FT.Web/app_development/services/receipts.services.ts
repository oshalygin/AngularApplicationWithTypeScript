module app.services {

    export interface IReceiptStateParams extends angular.ui.IStateParamsService {
        receiptId: number;
    }


    export interface IFundTrackReceiptDefinition extends ng.resource.IResource<app.models.IFundTrackReceipt> {
       
    }

    export interface IReceiptResource extends ng.resource.IResourceClass<IFundTrackReceiptDefinition> {
        
    }

    angular.module("app.services")
        .factory("ReceiptResource", [
            "ResourceBuilder",
            (builder: app.services.ResourceBuilder) => builder.getReceiptResource()
        ]);

}

