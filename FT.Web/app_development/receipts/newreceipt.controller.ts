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
        startProgress: boolean;
        progressValue: number;

        static $inject = ["ReceiptResource", "ReceiptTypesResource", "$scope", "$timeout", "$state"];
        constructor(           
            private receiptResource: app.services.IReceiptResource,
            private receiptTypesResource: app.services.IReceiptTypesResource,
            private form: IReceiptForm,
            private $timeout: angular.ITimeoutService,
            private $state: angular.ui.IStateService) {
       
            var vm = this;
            vm.title = "New Receipt";
            vm.startProgress = false;
            vm.progressValue = 0;

            this.getReceiptTypes();

            vm.receipt = new app.models.FundTrackReceipt();
            vm.receipt.servicer = new app.models.FundTrackSubservicer;
            vm.receipt.receiptType = new app.models.FundTrackReceiptType;

            vm.status = new DatePickerStatus();
            vm.status.opened = false;

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
                    this.startProgress = true;
                    this.$timeout(() => {
                        this.progressValue = 100;
                    }, 100);
                    this.$timeout(() => {
                        toastr.success("New Receipt Saved!");
                        this.$state.go("receipts");
                    }, 2000);
                    
                },
            (error: any) => {
                toastr.error(error);
            });

        }


        private getReceiptTypes(): void {
            this.receiptTypesResource.query({},
            (data: app.models.IFundTrackReceiptType[]) => {
                this.receiptTypes = data;
            });
        }



    }



    angular.module("app.receipts")
        .controller("app.receipts.NewReceiptController",
        NewReceiptController);

}

