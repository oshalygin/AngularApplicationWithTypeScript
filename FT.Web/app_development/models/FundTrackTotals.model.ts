module app.models {

	export interface IFundTrackTotals {
		totalNumberOfReceipts: number;
		totalNumberOfComments: number;
		totalNumberOfSubservicers: number;
		totalNumberOfReceiptTypes: number;
	}

	class FundTracktotals implements IFundTrackTotals {
		totalNumberOfReceipts: number;
		totalNumberOfComments: number;
		totalNumberOfSubservicers: number;
		totalNumberOfReceiptTypes: number;
	}
}