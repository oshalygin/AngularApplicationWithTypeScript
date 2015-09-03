using System;
using System.Collections.Generic;
using System.Linq;
using FT.DAL;
using FT.Models;


namespace FT.BLL
{
    public class ReceiptBll: IReceiptBLL
    {
        
        private readonly FundTrackReceiptDataAccess _repo = new FundTrackReceiptDataAccess();

        public IEnumerable<FundTrackReceipt> GetLast20Recepts()
        {
            return _repo.GetWithComments()
                .Take(20)
                .ToList();

        }

        public IEnumerable<FundTrackReceipt> GetAllReceipts()
        {
            return _repo.GetWithComments()
                .ToList();
        }

        public FundTrackReceipt GetReceiptById(int id)
        {
            return _repo.Get(id);
        }

        public FundTrackReceipt SaveNewReceipt(FundTrackReceipt receipt)
        {

            return _repo.Create(receipt);
            
        }

        public IEnumerable<FundTrackReceiptType> GetAllReceiptTypes()
        {
            return _repo.GetAllReceiptTypes();
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

        public IEnumerable<FundTrackReceiptComment> GetAllComments()
        {
            return _repo.GetComments()
                .OrderByDescending(x=>x.Id)
                .Take(30)
                .ToList();
        }

        public IEnumerable<FundTrackSubservicer> GetAllSubservicers()
        {
            return _repo.GetAllSubservicers();
        }


    }
}