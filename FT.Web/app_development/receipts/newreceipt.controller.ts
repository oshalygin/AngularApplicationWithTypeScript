module app.receipts {



    interface INewReceiptController {
        title: string;
        receipt: app.models.IFundTrackReceipt;
    }

    interface IReceiptForm extends angular.IScope {
        receiptForm: angular.IFormController;
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
        receiptForm: angular.IFormController;
        savingFormLoader: boolean;

        //TODO: Throw this into another class
        countFrom: number;
        countTo: number; 
        progressValue: number;
        

        static $inject = ["ReceiptResource", "$scope", "$timeout"];
        constructor(           
            private receiptResource: app.services.IReceiptResource,
            private form: IReceiptForm,
            private $timeout: angular.ITimeoutService) {
       
            var vm = this;
            vm.title = "New Receipt";

            vm.receipt = new app.models.FundTrackReceipt();
            vm.receipt.servicer = new app.models.FundTrackSubservicer;
            vm.receipt.receiptType = new app.models.FundTrackReceiptType;

            vm.status = new DatePickerStatus();
            vm.status.opened = false;


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

            //TODO: Throw all this into a factory service
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

            //Progress Bar Stuff
            var amount = 75;
          
            vm.countTo = amount;
            vm.countFrom = 0;
          

            $timeout(() => {
                vm.progressValue = amount;
            }, 1000);

        }

        public open($event: any) {
            this.status.opened = true;
        }

        
        public saveReceipt(): void {

            if (this.form.receiptForm.$invalid) {
                toastr.error("There are form validation errors!");
                return;
            }

            this.saveReceiptToDatabase();
        }


        private saveReceiptToDatabase(): void {
            this.receiptResource.save(this.receipt,
            () => {
                toastr.success("New Receipt Saved!");
            },
            (error) => {
                toastr.error(error);
            });

        }


    }



    angular.module("app.receipts")
        .controller("app.receipts.NewReceiptController",
        NewReceiptController);

}

