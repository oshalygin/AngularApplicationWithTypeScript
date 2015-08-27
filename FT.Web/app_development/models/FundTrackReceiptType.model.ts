module app.models {
    
    export interface IFundTrackReceiptType {
        id: number;
        name: string;
        description: string;
    }
    export class FundTrackReceiptType implements IFundTrackReceiptType {

        id: number;
        name: string;
        description: string;
    }

}