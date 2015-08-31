﻿module app.services {

    "use strict";
    export class ResourceBuilder {
        

        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {
            
            
        }


        public getReceiptResource(): app.services.IReceiptResource {
            return this.$resource(ApiEndpoints.baseUrl + ApiEndpoints.receiptsApi, { id: "@id" });
        }


        public getReceiptTypeResource(): app.services.IReceiptTypesResource {
            return this.$resource("http://localhost:51615/api/ReceiptTypes/:id", { id: "@id" });
        }

    }

    angular.module("app.services")
        .factory("ResourceBuilder", ["$resource",
            ($resource: angular.resource.IResourceService) => new app.services.ResourceBuilder($resource)]);

}

