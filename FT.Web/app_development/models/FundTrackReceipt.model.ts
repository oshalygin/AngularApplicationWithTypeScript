module app.models {

    export interface IFundTrackReceipt {
        id: number;
        totalAmount: number;
        checkNumber: string;
        comments: app.models.IFundTrackReceiptComment[];
        receiptType: app.models.IFundTrackReceiptType;
        servicer: app.models.IFundTrackSubservicer;
    }

    export class FundTrackReceipt implements IFundTrackReceipt{
        id: number;
        totalAmount: number;
        checkNumber: string;
        comments: app.models.IFundTrackReceiptComment[];
        receiptType: app.models.IFundTrackReceiptType;
        servicer: app.models.IFundTrackSubservicer;
    }

}