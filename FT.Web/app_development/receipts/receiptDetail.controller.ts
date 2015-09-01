module app.receipts {



    interface IReceiptDetailController {
        title: string;
        receiptId: number;
        imageUrl: string;
    }

    class ReceiptDetailController implements IReceiptDetailController {

        title: string;
        receipt: app.models.FundTrackReceipt;
        receiptTypes: app.models.FundTrackReceiptType[];
        servicers: app.models.FundTrackSubservicer[];
        receiptId: number;
        imageUrl: string;
        editMode: boolean;

        static $inject = ["$stateParams",
            "ReceiptResource",
            "ReceiptTypesResource",
            "SubservicerResource"];
        constructor(
            $stateParams: app.services.IReceiptStateParams,
            private receiptResource: app.services.IReceiptResource,
            private receiptTypesResource: app.services.IReceiptTypesResource,
            private subservicerResource: app.services.ISubservicerResource) {
            this.receiptId = $stateParams.id;

            var vm = this;
            this.editMode = false;
            vm.title = "Receipt Detail";
            vm.imageUrl = "./Content/images/receiptImage.png";

            this.getReceiptById(this.receiptId);
            this.getReceiptTypes();
            this.getSubservicers();


        }

        public flipOnEditMode(): void {
            this.editMode = !this.editMode;
        }

        public getReceiptById(id: number): void {
            this.receiptResource.get({ id: id },
                (data: app.models.IFundTrackReceipt) => this.loaded(data));
        }

        private loaded(data: app.models.IFundTrackReceipt): void {
            this.receipt = data;

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
        .controller("app.receipts.ReceiptDetailController",
            ReceiptDetailController);

}

