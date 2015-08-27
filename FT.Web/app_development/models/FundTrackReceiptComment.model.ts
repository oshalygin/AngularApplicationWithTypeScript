module app.models {

    export interface IFundTrackReceiptComment {
        id: number;
        text: string;
        createdDate: Date;
        updateDate: Date;
    }

    export class FundTrackReceiptComment implements IFundTrackReceiptComment {
        id: number;
        text: string;
        createdDate: Date;
        updateDate: Date;
    }
}