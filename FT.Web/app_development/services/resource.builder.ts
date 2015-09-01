module app.services {

    "use strict";
    export class ResourceBuilder {


        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {


        }

        public getReceiptResource(): app.services.IReceiptResource {
            return this.$resource(ApiEndpoints.baseUrl + ApiEndpoints.receipts, { id: "@id" });
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

    }

    angular.module("app.services")
        .factory("ResourceBuilder", ["$resource",
            ($resource: angular.resource.IResourceService) => new app.services.ResourceBuilder($resource)]);

}

