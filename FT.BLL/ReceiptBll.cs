using System;
using System.Collections.Generic;
using System.Linq;
using FT.DAL;
using FT.Entities;


namespace FT.BLL
{
    public class ReceiptBLL : IReceiptBLL
    {
        private readonly IDataAccess _repo;
        public ReceiptBLL(IDataAccess repo)
        {
            _repo = repo;
        }

        public int GetReceiptTotal()
        {
            return _repo.GetTotalNumberOfReceipts();
        }


        public IEnumerable<FundTrackReceipt> GetReceipts(int page = 1, int pageSize = 10)
        {
            page -= 1;
            return _repo.GetWithComments(page, pageSize).ToList();

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

        public IEnumerable<FundTrackSubservicer> GetAllSubservicers()
        {
            return _repo.GetAllSubservicers();
        }

        public FundTrackReceipt UpdateReceipt(FundTrackReceipt updatedReceipt)
        {
            return _repo.Update(updatedReceipt);

        }
    }
}