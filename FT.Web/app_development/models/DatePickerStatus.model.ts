module app.models {

    export class DatePickerStatus {
        opened: boolean;
        format: string;

        constructor() {
            this.opened = false;
            this.format = "MM/dd/yyyy";
        }

        public open($event: any) {
            this.opened = true;
            
        }
    }
}