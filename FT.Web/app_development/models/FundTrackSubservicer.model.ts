module app.models {

    export interface IFundTrackSubservicer {
        id: number;
        name: string;
        isEnabled: boolean;
    }

    export class FundTrackSubservicer implements IFundTrackSubservicer {
        id: number;
        name: string;
        isEnabled: boolean;
    }
}