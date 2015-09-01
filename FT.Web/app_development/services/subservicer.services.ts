
module app.services {

    export interface IReceiptSubservicerStateParams extends angular.ui.IStateParamsService {
        id: number;
    }


    export interface IFundTrackSubservicerDefinition extends ng.resource.IResource<app.models.IFundTrackSubservicer> {

    }

    export interface ISubservicerResource extends ng.resource.IResourceClass<IFundTrackSubservicerDefinition> {

    }

}

((): void => {

    angular.module("app.services")
        .factory("SubservicerResource", [
            "ResourceBuilder",
            (builder: app.services.ResourceBuilder) => builder.getSubservicerResource()
        ]);

})();

