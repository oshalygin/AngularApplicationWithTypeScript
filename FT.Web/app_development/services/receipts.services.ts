
module app.services {

    export interface IReceiptStateParams extends angular.ui.IStateParamsService {
        id: number;
    }


    export interface IFundTrackReceiptDefinition extends ng.resource.IResource<app.models.IFundTrackReceipt> {

    }

    export interface IReceiptResource extends ng.resource.IResourceClass<IFundTrackReceiptDefinition> {
        update: any;
    }

}

((): void => {

    angular.module("app.services")
        .factory("ReceiptResource", [
            "ResourceBuilder",
            (builder: app.services.ResourceBuilder) => builder.getReceiptResource()
        ]);

})();

//module app.services {

//    export interface IReceiptStateParams extends angular.ui.IStateParamsService {
//        id: number;
//    }

//    export interface IReceiptResource extends ng.resource.IResourceClass<app.models.IFundTrackReceipt> {
//        update(IFundTrackReceipt): app.models.IFundTrackReceipt;
//    }


//    ((): void => {

//        angular.module("app.services")
//            .factory("ReceiptResource", [
//                "ResourceBuilder",
//                ($resource: ng.resource.IResourceService): IReceiptResource => {

//                    var updateDetails: ng.resource.IActionDescriptor = {
//                        method: "PUT",
//                        isArray: false
//                    };

//                    return <IReceiptResource>$resource(app.services.ApiEndpoints.baseUrl + ApiEndpoints.receipts, { id: "@id" },
//                        {
//                            update: updateDetails
//                        });
//                }
//            ]);

//    })();
//}
