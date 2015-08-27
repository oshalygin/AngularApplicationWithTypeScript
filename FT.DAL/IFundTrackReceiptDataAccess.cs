using System.Collections.Generic;
using FT.Models;

namespace FT.DAL
{
    internal interface IFundTrackReceiptDataAccess
    {
        FundTrackReceipt Create(FundTrackReceipt receipt);
        void AddComments(int receiptId, IEnumerable<FundTrackReceiptComment> comments);
        FundTrackReceipt Get(int receiptId);
        IEnumerable<FundTrackReceipt> Get();
        FundTrackReceipt Update(FundTrackReceipt updateReceipt);
        void Delete(int receiptId);
    }
}