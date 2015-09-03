using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FT.DAL;
using FT.Models;

namespace FT.BLL
{
    public class ReceiptCommentBLL : IReceiptCommentBLL
    {
        private readonly IDataAccess _repo;
        public ReceiptCommentBLL(IDataAccess repo)
        {
            _repo = repo;
        }


        public IEnumerable<FundTrackReceiptComment> GetAllComments()
        {
            return _repo.GetComments()
                .OrderByDescending(x => x.Id)
                .Take(30)
                .ToList();
        }

        public IEnumerable<FundTrackReceiptComment> GetCommentsForReceipt(int receiptId)
        {
            var receipt = _repo.Get(receiptId);
            return receipt.Comments;
        }


        public FundTrackReceiptComment AddComment(int receiptId, string text)
        {
            var newComment = new FundTrackReceiptComment
            {
                Text = text,
                CreatedDate = DateTime.UtcNow
            };
            return _repo.AddComment(receiptId, newComment);
        }

    }
}
