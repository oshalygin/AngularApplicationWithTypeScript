module app.receipts {

    interface INewReceiptController {
        title: string;
        receipt: app.models.FundTrackReceipt;
        datePicker: app.models.DatePickerStatus;
        receiptTypes: app.models.FundTrackReceiptType[];
        servicers: app.models.FundTrackSubservicer[];
        receiptForm: angular.IFormController;
        savingFormLoader: boolean;
        startProgress: boolean;
        progressValue: number;
    }

    class NewReceiptController implements INewReceiptController {

        title: string;
        receipt: app.models.FundTrackReceipt;
        datePicker: app.models.DatePickerStatus;
        receiptTypes: app.models.FundTrackReceiptType[];
        servicers: app.models.FundTrackSubservicer[];
        receiptForm: angular.IFormController;
        savingFormLoader: boolean;
        startProgress: boolean;
        progressValue: number;

        static $inject = ["ReceiptResource", "ReceiptTypesResource", "SubservicerResource",
            "$scope", "$timeout", "$state"];
        constructor(
            private receiptResource: app.services.IReceiptResource,
            private receiptTypesResource: app.services.IReceiptTypesResource,
            private subservicerResource: app.services.ISubservicerResource,
            private form: app.models.IReceiptForm,
            private $timeout: angular.ITimeoutService,
            private $state: angular.ui.IStateService) {

            var vm = this;
            vm.title = "New Receipt";
            vm.startProgress = false;
            vm.progressValue = 0;

            this.getReceiptTypes();
            this.getSubservicers();

            vm.receipt = new app.models.FundTrackReceipt();
            vm.receipt.servicer = new app.models.FundTrackSubservicer;

            vm.receipt.receiptType = new app.models.FundTrackReceiptType;


            vm.datePicker = new app.models.DatePickerStatus();


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
                //TODO:  Look into what properties error object has
                (error: any) => {
                    toastr.error("Failed: Server Error");
                });

        }


        private getReceiptTypes(): void {
            this.receiptTypesResource.query({},
                (data: app.models.IFundTrackReceiptType[]) => {
                    this.receiptTypes = data;
                });
        }

        private getSubservicers(): void {
            this.subservicerResource.query({},
                (data: app.models.IFundTrackSubservicer[]) => {
                    this.servicers = data;
                });
        }



    }



    angular.module("app.receipts")
        .controller("app.receipts.NewReceiptController",
            NewReceiptController);

}

