module app.services {
    "use strict";

    export class ResourceBuilder {
        
        static $inject = ["$resource"];

        constructor(private $resource: ng.resource.IResourceService) {
            
        }
        public getFundReceiptResource(): app.services.IReceiptsService {
            return this.$resource("http://localhost:51615/api/Receipt/:id",
                { id: "@id" }, {});
        }
    }
    

}

