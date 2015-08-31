using System;
using System.Collections.Generic;
using System.Linq;
using FT.Models;


namespace FT.DAL
{
    public class FundTrackReceiptDataAccess : IFundTrackReceiptDataAccess
    {
        private readonly FundTrackContext _context;

        public FundTrackReceiptDataAccess()
        {
            _context = new FundTrackContext();
        }

        public FundTrackReceipt Create(FundTrackReceipt receipt)
        {
            _context.FundTrackReceipts
                .Add(receipt);

            _context.SaveChanges();

            return receipt;
        }

        public void AddComments(int receiptId, IEnumerable<FundTrackReceiptComment> comments)
        {
            var receipt = _context.FundTrackReceipts.Find(receiptId);

            if (_context != null)
            {
                receipt.Comments.AddRange(comments);
                _context.SaveChanges();
            }
        }

        public FundTrackReceipt Get(int receiptId)
        {
            return _context.FundTrackReceipts
                .AsNoTracking()
                .FirstOrDefault(x => x.Id == receiptId);
        }

        public FundTrackReceipt GetWithComments(int receiptId)
        {
            return _context.FundTrackReceipts
                .AsNoTracking()
                .Single(x => x.Id == receiptId);
        }


        public IEnumerable<FundTrackReceipt> Get()
        {
            return _context.FundTrackReceipts
                .OrderByDescending(x => x.Id)
                .AsEnumerable();
        }

        public IEnumerable<FundTrackReceipt> GetWithComments()
        {
            return _context
                .FundTrackReceipts
                .AsNoTracking()
                .OrderByDescending(x => x.Id)
                .AsEnumerable();
        }

        public FundTrackSubservicer GetSubservicer(int servicerId)
        {
            return _context
                .FundTrackSubservicers
                .Find(servicerId);
        }

        public IEnumerable<FundTrackReceiptType> GetAllReceiptTypes()
        {
            return _context
                .FundTrackReceiptTypes
                .AsNoTracking()
                .AsEnumerable();
        }

        public FundTrackReceiptType GetReceiptTypeById(int receiptTypeId)
        {
            return _context
                .FundTrackReceiptTypes
                .Find(receiptTypeId);
        }

        public FundTrackReceipt Update(FundTrackReceipt updateReceipt)
        {
            FundTrackReceipt receipt = _context.FundTrackReceipts
                .Find(updateReceipt.Id);

            receipt.CheckNumber = updateReceipt.CheckNumber;
            receipt.ReceivedDate = updateReceipt.ReceivedDate;
            receipt.TotalAmount = updateReceipt.TotalAmount;

            _context.SaveChanges();
            return receipt;
        }

        public void Delete(int receiptId)
        {
            var receipt = _context.FundTrackReceipts
                .Single(x => x.Id == receiptId);

            _context.FundTrackReceipts
                .Remove(receipt);

            _context.SaveChanges();
        }


        public void RandomizeAllReceiptTotals()
        {
            var random = new Random();
            _context.FundTrackReceipts.ToList()
                .ForEach(x => x.TotalAmount = random.Next(1000000));
            _context.SaveChanges();
        }


        public void RemoveComments(IEnumerable<FundTrackReceiptComment> comments)
        {
            _context.FundTrackReceiptComments.RemoveRange(comments);
            _context.SaveChanges();
        }
    }
}