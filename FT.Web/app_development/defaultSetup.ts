
module Models {
    export class Default {
        version: string;
        author: string;
        deployment: boolean;
    }

    export class FundTracker {
        receiptNum: number;
        checkNumber: string;
        totalAmount: number;
    }

}

var initialSetup = new Models.Default();
initialSetup.author = "Oleg Shalygin";
initialSetup.version = "1.0.0";
initialSetup.deployment = true;

var receipt = new Models.FundTracker();
receipt.checkNumber = "ABCCheckNumber#123";
receipt.receiptNum = 1;
receipt.totalAmount = 600.00;
