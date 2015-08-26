var Models;
(function (Models) {
    var Default = (function () {
        function Default() {
        }
        return Default;
    })();
    Models.Default = Default;
    var FundTracker = (function () {
        function FundTracker() {
        }
        return FundTracker;
    })();
    Models.FundTracker = FundTracker;
})(Models || (Models = {}));
var initialSetup = new Models.Default();
initialSetup.author = "Oleg Shalygin";
initialSetup.version = "1.0.0";
initialSetup.deployment = true;
var receipt = new Models.FundTracker();
receipt.checkNumber = "ABCCheckNumber#123";
receipt.receiptNum = 1;
receipt.totalAmount = 600.00;
//# sourceMappingURL=defaultSetup.js.map