module app.models {
    
    export interface IFundTrackReceipt {
        id: string;
        totalAmount: number;
        checkNumber: string;
        //todo add classes
        comments: app.models.IFundTrackReceiptComment[];
        receiptType: app.models.IFundTrackReceiptType;
        servicer: any;
    }

}