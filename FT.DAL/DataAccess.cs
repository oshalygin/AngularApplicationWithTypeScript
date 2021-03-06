using System;
using System.Collections.Generic;
using System.Linq;
using FT.Entities;

namespace FT.DAL
{
    public class DataAccess : IDataAccess
    {
        private readonly FundTrackContext _context;

        public DataAccess()
        {
            _context = new FundTrackContext();
        }

        public FundTrackReceipt Create(FundTrackReceipt receipt)
        {
            var newReceipt = new FundTrackReceipt();

            newReceipt.CheckNumber = receipt.CheckNumber;
            newReceipt.TotalAmount = receipt.TotalAmount;
            newReceipt.ReceivedDate = receipt.ReceivedDate;

            newReceipt.ReceiptType = this.GetReceiptTypeById(receipt.ReceiptType.Id);
            newReceipt.Servicer = this.GetSubservicerById(receipt.Servicer.Id);

            _context.FundTrackReceipts
                .Add(newReceipt);

            _context.SaveChanges();

            return newReceipt;
        }

        public int GetTotalNumberOfReceipts()
        {
            return _context.FundTrackReceipts
                            .Count();
        }



        public int GetTotalNumberOfComments()
        {
            return _context.FundTrackReceiptComments
                            .Count();
        }

        public int GetTotalNumberOfFilteredComments(string searchTerm)
        {
            return _context.FundTrackReceiptComments
                            .Count(x => x.Text.Contains(searchTerm));
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

        public FundTrackReceiptComment AddComment(int receiptId, FundTrackReceiptComment comment)
        {
            var receipt = _context.FundTrackReceipts.Find(receiptId);

            if (_context != null)
            {
                receipt.Comments.Add(comment);
                _context.SaveChanges();
                return comment;
            }
            return null;
        }

        public FundTrackReceipt Get(int receiptId)
        {
            return _context.FundTrackReceipts
                .AsNoTracking()
                .FirstOrDefault(x => x.Id == receiptId);
        }

        public IEnumerable<FundTrackReceiptComment> GetComments()
        {
            return _context.FundTrackReceiptComments
                .AsNoTracking()
                .AsEnumerable();

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

        public IEnumerable<FundTrackReceipt> GetWithComments(int page, int pageSize)
        {
            return _context
                .FundTrackReceipts
                .AsNoTracking()
                .OrderByDescending(x => x.Id)
                .Skip(pageSize * page)
                .Take(pageSize)
                .AsEnumerable();
        }

        public IEnumerable<FundTrackReceiptComment> GetComments(int page, int pageSize)
        {
            return _context
               .FundTrackReceiptComments
               .AsNoTracking()
               .OrderByDescending(x => x.Id)
               .Skip(pageSize * page)
               .Take(pageSize)
               .AsEnumerable();

        }

        public IEnumerable<FundTrackReceiptComment> GetFilteredComments(int page, int pageSize, string searchTerm)
        {
            return _context
                .FundTrackReceiptComments
                .AsNoTracking()
                .Where(x => x.Text.Contains(searchTerm))
                .OrderByDescending(x => x.Id)
                .Skip(pageSize * page)
                .Take(pageSize)
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

        public FundTrackSubservicer GetSubservicerById(int servicerId)
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

        public IEnumerable<FundTrackSubservicer> GetAllSubservicers()
        {
            return _context
                .FundTrackSubservicers
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

            receipt.ReceiptType = this.GetReceiptTypeById(updateReceipt.ReceiptType.Id);
            receipt.Servicer = this.GetSubservicerById(updateReceipt.Servicer.Id);

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