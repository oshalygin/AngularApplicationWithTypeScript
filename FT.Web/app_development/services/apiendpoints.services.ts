module app.services {

    export interface IApiProvider {
        baseUrl: string;
        local: boolean;
    }

    export class ApiProvider implements IApiProvider {
        //_baseUrl: string;
        local: boolean = true;

        get baseUrl(): string {
            if (this.local) {
                return "http://localhost:51615/api";
            } else {
                return "";
            }
        }
        

        
    }

    angular
        .module('app.services')
        .service('app.services.ApiProvider', ApiProvider);

}