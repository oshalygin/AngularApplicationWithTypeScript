module app.services {

    "use strict";
    export class ResourceBuilder {

        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {
         
        }

        public getReceiptResource(): app.services.IReceiptResource {
            return this.$resource("http://localhost:51615/api/Receipt/:id", { id: "@id" });
        }
    }

    angular.module("app.services")
        .factory("ResourceBuilder", ["$resource",
            ($resource) => new app.services.ResourceBuilder($resource)]);

}

