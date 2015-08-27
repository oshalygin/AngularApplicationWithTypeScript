module app.models {

    export interface IFundTrackSubservicer {
        id: number;
        name: string;
        isEnabled: boolean;
    }

    export class FundTrackSubservicer {
        id: number;
        name: string;
        isEnabled: boolean;
    }
}