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

        /////EndPoints

        static get receipts(): string {
            return "Receipt/:id";
        }

        static get receiptTypes(): string {
            return "ReceiptTypes/:id";
        }

        static get comments(): string {
            return "ReceiptComments/:id";
        }

    }


}