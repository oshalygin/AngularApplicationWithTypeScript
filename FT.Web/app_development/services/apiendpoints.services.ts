module app.services {

    export class ApiEndpoints {
       
        public static local: boolean = true;

        public static get baseUrl(): string {
            if (this.local) {
                return "http://localhost:51615/api/";
            } else {
                return "";
            }
        }


        static get receiptsApi(): string {
            return "Receipt/:id";
        }
        
    }


}