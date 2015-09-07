using System.Collections.Generic;
using FT.Models;

namespace FT.BLL
{
    public interface IReceiptCommentBLL
    {
        FundTrackReceiptComment AddComment(int receiptId, string text);
        IEnumerable<FundTrackReceiptComment> GetAllComments();
        IEnumerable<FundTrackReceiptComment> GetCommentsForReceipt(int receiptId);
        IEnumerable<FundTrackReceiptComment> GetComments(int page = 1, int pageSize = 10);
        int GetTotalNumberOfComments();
    }
}