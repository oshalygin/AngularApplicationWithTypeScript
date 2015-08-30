module app.receipts {



    interface INewReceiptController {
        title: string;
        receipt: app.models.IFundTrackReceipt;
    }

    class DatePickerStatus {
        opened: boolean;
    }

    class NewReceiptController implements INewReceiptController {

        title: string;
        receipt: app.models.FundTrackReceipt;
        status: DatePickerStatus;

        static $inject = ["ReceiptResource"];
        constructor(           
            private receiptResource: app.services.IReceiptResource) {
       
            var vm = this;
            vm.title = "New Receipt";

            this.receipt = new app.models.FundTrackReceipt();

            this.status = new DatePickerStatus();
            this.status.opened = false;

            //Date stuff


        }

        public open($event: any) {
            this.status.opened = true;
        }


        private saveNewReceipt(): void {
            this.receiptResource.save(this.receipt,
            () => {
                toastr.success("New Receipt Saved!");
            },
            () => {
                toastr.error("Server Error!  Contact your administrator");
            });

        }


    }



    angular.module("app.receipts")
        .controller("app.receipts.NewReceiptController",
        NewReceiptController);

}

