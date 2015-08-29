module app.services {

    export interface IReceiptStateParams extends angular.ui.IStateParamsService {
        receiptId: number;
    }


    export interface IFundTrackReceiptDefinition extends ng.resource.IResource<IFundTrackReceiptDefinition> {
        id: number;
        totalAmount: number;
        checkNumber: string;
        comments: app.models.IFundTrackReceiptComment[];
        receiptType: app.models.IFundTrackReceiptType;
        servicer: app.models.IFundTrackSubservicer;
    }


  
    export interface IReceiptsService extends ng.resource.IResourceClass<IFundTrackReceiptDefinition> {
        getAllReceipts(): ng.resource.IResource<IFundTrackReceiptDefinition[]>

    }

    //export class ReceiptResource implements IReceiptsService {

    //    $resource: ng.resource.IResourceService;

       
      

    //    getAllReceipts(): ng.resource.IResource<IFundTrackReceiptDefinition[]> {
    //        var receipts = <ng.resource.IResource<IFundTrackReceiptDefinition[]>>this.$resource("http://localhost:51615/api/Receipt/")
    //            .get();
    //        return receipts;
    //    }
   
    //    hardcodedReceipts(): app.models.FundTrackReceipt[] {
    //        var iterator: number;
    //        var numberOfReceipts: number;
    //        var numberOfComments: number;

    //        numberOfReceipts = 9;
    //        numberOfComments = 15;

    //        var receiptList = new Array<app.models.FundTrackReceipt>();
    //        var commentList = new Array<app.models.FundTrackReceiptComment>();

    //        var cenlarSubservicer = new app.models.FundTrackSubservicer();
    //        cenlarSubservicer.id = 1;
    //        cenlarSubservicer.isEnabled = true;
    //        cenlarSubservicer.name = "Cenlar";

    //        var loanCareSubServicer = new app.models.FundTrackSubservicer();
    //        loanCareSubServicer.id = 2;
    //        loanCareSubServicer.isEnabled = true;
    //        loanCareSubServicer.name = "LoanCare";

    //        var olegSubServicer = new app.models.FundTrackSubservicer();
    //        olegSubServicer.id = 3;
    //        olegSubServicer.isEnabled = false;
    //        olegSubServicer.name = "Oleg's SubService";

    //        var checkType = new app.models.FundTrackReceiptType();
    //        checkType.id = 1;
    //        checkType.name = "Check";
    //        checkType.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae scelerisque tortor. Fusce ac augue in nulla lobortis auctor fringilla id urna. Aenean eleifend metus mi, non fringilla libero tempus ac. Curabitur vitae posuere ligula, ac faucibus ex. Cras placerat est lectus, condimentum dictum est volutpat quis. Proin bibendum vel tortor sit amet lobortis. Curabitur bibendum porttitor erat vel molestie. Morbi auctor cursus nisl et posuere. Donec ac placerat mauris";

    //        var wireType = new app.models.FundTrackReceiptType();
    //        wireType.id = 2;
    //        wireType.name = "Wire";
    //        wireType.description = "Aenean sed fringilla lectus, vitae placerat mi. Proin non ante interdum, congue metus dignissim, gravida enim. Praesent pulvinar vehicula sodales. In congue hendrerit vestibulum. Sed vitae interdum quam. Maecenas nec quam urna. Nulla sollicitudin, nisi a vulputate luctus, leo neque luctus turpis, quis ultrices mauris dui sit amet diam. Nunc imperdiet quam id lectus convallis, eget condimentum lorem consectetur. Sed dignissim bibendum ultrices. Proin in sem ac dolor vestibulum sodales a nec lacus. Praesent lectus quam, interdum a condimentum accumsan, congue in ante. Phasellus at mi euismod, mollis dui ";

    //        for (iterator = 0; iterator <= numberOfComments; iterator++) {
    //            var comment = new app.models.FundTrackReceiptComment();
    //            comment.id = iterator;
    //            comment.createdDate = new Date(2015, 0, iterator);
    //            comment.updateDate = null;
    //            comment.text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
    //            commentList.push(comment);
    //        }

    //        for (iterator = 0; iterator <= numberOfReceipts; iterator++) {
    //            var receipt = new app.models.FundTrackReceipt();

    //            receipt.id = iterator;
    //            receipt.checkNumber = "Amerihome: " + iterator.toString();
    //            receipt.comments = commentList;
    //            receipt.servicer = (iterator % 2) ? cenlarSubservicer : loanCareSubServicer;
    //            receipt.receiptType = (iterator % 2) ? checkType : wireType;
    //            receipt.totalAmount = 500000.00 * Math.random();

    //            receiptList.push(receipt);
    //        }
    //        return receiptList;
    //    }



    //    //getAllLocalReceipts(): app.models.IFundTrackReceipt[] {

    //    //    var allReceipts = this.hardcodedReceipts();
    //    //    return allReceipts;
    //    //}

       
        


    //    //getReceiptById(receiptId: number): app.models.IFundTrackReceipt {
    //    //    //Making assumption here that the Id matches the index...
    //    //    //No need to unnecessarily loop through the array...
    //    //    var receipt = this.hardcodedReceipts()[receiptId];
    //    //    return receipt;

    //    //}
    //}

    //angular
    //    .module("app.services")
    //    .factory("app.services.ReceiptService",
    //    ReceiptResource);

}

