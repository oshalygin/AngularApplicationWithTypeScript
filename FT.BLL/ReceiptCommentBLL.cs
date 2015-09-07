using System;
using System.Collections.Generic;
using System.Linq;
using FT.DAL;
using FT.Entities;

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

        public IEnumerable<FundTrackReceiptComment> GetComments(int page = 1, int pageSize = 10, string searchTerm = "")
        {
            page -= 1;
            if (string.IsNullOrWhiteSpace(searchTerm))
            {
                return _repo.GetComments(page, pageSize).ToList();
            }
            return _repo.GetFilteredComments(page, pageSize, searchTerm);
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

        public int GetTotalNumberOfComments(string searchTerm = "")
        {
            if (string.IsNullOrWhiteSpace(searchTerm))
            {
                return _repo.GetTotalNumberOfComments();
            }
            return _repo.GetTotalNumberOfFilteredComments(searchTerm);
        }


    }
}
