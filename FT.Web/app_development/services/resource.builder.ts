module app.services {



    "use strict";
    export class ResourceBuilder {

        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {


        }


        public getReceiptResource(): app.services.IReceiptResource {

            var updateDetails: ng.resource.IActionDescriptor =
                {
                    method: "PUT",
                    isArray: false
                };

            return <IReceiptResource>this.$resource(ApiEndpoints.baseUrl + ApiEndpoints.receipts, { id: "@id" }, {
                update: updateDetails
            });
        }


        public getReceiptTypeResource(): app.services.IReceiptTypesResource {
            return this.$resource(ApiEndpoints.baseUrl + ApiEndpoints.receiptTypes, { id: "@id" });
        }

        public getReceiptCommentResource(): app.services.ICommentResource {
            return this.$resource(ApiEndpoints.baseUrl + ApiEndpoints.comments, {
                receiptId: "@receiptId",
                text: "@text"
            });
        }

        public getSubservicerResource(): app.services.ISubservicerResource {
            return this.$resource(ApiEndpoints.baseUrl + ApiEndpoints.servicer, { id: "@id" });
        }

    }

    angular.module("app.services")
        .factory("ResourceBuilder", ["$resource",
            ($resource: angular.resource.IResourceService) => new app.services.ResourceBuilder($resource)]);

}

