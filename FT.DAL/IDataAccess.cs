using System.Collections.Generic;
using FT.Models;

namespace FT.DAL
{
    public interface IDataAccess
    {
        FundTrackReceiptComment AddComment(int receiptId, FundTrackReceiptComment comment);
        void AddComments(int receiptId, IEnumerable<FundTrackReceiptComment> comments);
        FundTrackReceipt Create(FundTrackReceipt receipt);
        void Delete(int receiptId);
        IEnumerable<FundTrackReceipt> Get();
        FundTrackReceipt Get(int receiptId);
        IEnumerable<FundTrackReceiptType> GetAllReceiptTypes();
        IEnumerable<FundTrackSubservicer> GetAllSubservicers();
        IEnumerable<FundTrackReceiptComment> GetComments();
        FundTrackReceiptType GetReceiptTypeById(int receiptTypeId);
        FundTrackSubservicer GetSubservicerById(int servicerId);
        IEnumerable<FundTrackReceipt> GetWithComments();
        FundTrackReceipt GetWithComments(int receiptId);
        void RandomizeAllReceiptTotals();
        void RemoveComments(IEnumerable<FundTrackReceiptComment> comments);
        FundTrackReceipt Update(FundTrackReceipt updateReceipt);
    }
}