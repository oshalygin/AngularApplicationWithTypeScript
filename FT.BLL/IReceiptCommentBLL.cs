using System.Collections.Generic;
using FT.Entities;

namespace FT.BLL
{
    public interface IReceiptCommentBLL
    {
        FundTrackReceiptComment AddComment(int receiptId, string text);
        IEnumerable<FundTrackReceiptComment> GetAllComments();
        IEnumerable<FundTrackReceiptComment> GetCommentsForReceipt(int receiptId);
        IEnumerable<FundTrackReceiptComment> GetComments(int page, int pageSize, string searchTerm);
        int GetTotalNumberOfComments(string searchTerm);
    }
}