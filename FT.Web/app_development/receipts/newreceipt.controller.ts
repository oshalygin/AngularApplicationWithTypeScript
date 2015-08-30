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
        receiptTypes: app.models.FundTrackReceiptType[];
        servicers: app.models.FundTrackSubservicer[];

        static $inject = ["ReceiptResource"];
        constructor(           
            private receiptResource: app.services.IReceiptResource) {
       
            var vm = this;
            vm.title = "New Receipt";

            this.receipt = new app.models.FundTrackReceipt();

            this.status = new DatePickerStatus();
            this.status.opened = false;


            //TODO: Throw this into a factory service
            vm.receiptTypes = new Array<app.models.FundTrackReceiptType>();

            var firstType = new app.models.FundTrackReceiptType();
            firstType.id = 1;
            firstType.name = "Wire";

            var secondType = new app.models.FundTrackReceiptType();
            secondType.id = 2;
            secondType.name = "Cash";

            vm.receiptTypes.push(firstType);
            vm.receiptTypes.push(secondType);

            //TODO: Throw this into a factory service
            vm.servicers = new Array<app.models.FundTrackSubservicer>();

            var firstServicer = new app.models.FundTrackSubservicer();
            firstServicer.id = 1;
            firstServicer.name = "Cenlar";

            var secondServicer = new app.models.FundTrackSubservicer();
            secondServicer.id = 2;
            secondServicer.name = "LoanCare";

            var thirdSubservicer = new app.models.FundTrackSubservicer();
            thirdSubservicer.id = 3;
            thirdSubservicer.name = "Oleg's Subservice";

            vm.servicers.push(firstServicer);
            vm.servicers.push(secondServicer);
            vm.servicers.push(thirdSubservicer);

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

