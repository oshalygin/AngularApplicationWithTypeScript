using System;
using System.Collections.Generic;
using System.Linq;

namespace FT.DAL.Deprecated
{
    class Repository
    {
        private readonly FundTrackContext _context = new FundTrackContext();

        public List<FundTrackReceipt> GetAllReceiptsWithCommentsTypeSubservicer()
        {
            return _context.FundTrackReceipts
                .Include("Comments")
                .Include("Type")
                .Include("Servicer")
                .ToList();
        }

        public FundTrackReceipt GetReceiptWithCommentsById(int id)
        {
            return _context.FundTrackReceipts
                .Include("Comments")
                .FirstOrDefault(x => x.Id == id);
        }

        public FundTrackReceipt GetReceiptById(int id)
        {
            return _context.FundTrackReceipts
                .Find(id);
        }

        public List<FundTrackReceipt> GetReceiptsFromReceivedStartingDate(DateTime receivedStartingDate)
        {
            return _context.FundTrackReceipts
                .Where(x => x.ReceivedDate > receivedStartingDate)
                .ToList();
        }

        public int UpdateAllReceiptsWithNewReceivedDate(DateTime newUpdateDate)
        {
            var receipts = _context.FundTrackReceipts.ToList();
            receipts.ForEach(x => x.ReceivedDate = newUpdateDate);

            return _context.SaveChanges();
        }

        public int UpdateReceiptReceivedDate(FundTrackReceipt updateReceipt)
        {
            var receipt = _context.FundTrackReceipts
                .Find(updateReceipt.Id);

            receipt.ReceivedDate = updateReceipt.ReceivedDate;
            return _context.SaveChanges();
        }

        public int UpdateReceiptTotalAndCheck(FundTrackReceipt updateReceipt)
        {
            var receipt = _context.FundTrackReceipts
                .Find(updateReceipt.Id);

            receipt.TotalAmount = updateReceipt.TotalAmount;
            receipt.CheckNumber = updateReceipt.CheckNumber;

            return _context.SaveChanges();
        }

        public int AddCommentToReceipt(int receiptId, FundTrackReceiptComment comment)
        {
            var receipt = _context.FundTrackReceipts
                .Find(receiptId);

            if (receipt != null)
            {
                receipt.Comments.Add(comment);
            }

            return _context.SaveChanges();
        }

        public int AddListOfCommentToReceipt(int receiptId, List<FundTrackReceiptComment> comment)
        {
            var receipt = _context.FundTrackReceipts
                .Find(receiptId);

            if (receipt != null)
            {
                receipt.Comments.AddRange(comment);
            }

            return _context.SaveChanges();
        }

        public int InsertNewReceipt(FundTrackReceipt receipt)
        {
            _context.FundTrackReceipts
                .Add(receipt);

            return _context.SaveChanges();
        }

        public int InsertListOfNewReceipts(List<FundTrackReceipt> receipts)
        {
            _context.FundTrackReceipts
                .AddRange(receipts);

            return _context.SaveChanges();
        }

        public int DeleteReceipt(int ReceiptId)
        {
            var receipt = _context.FundTrackReceipts
                .Find(ReceiptId);

            _context.FundTrackReceipts
                .Remove(receipt);

            return _context.SaveChanges();
        }

      
    }
}