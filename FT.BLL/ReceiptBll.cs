using System;
using System.Collections.Generic;
using System.Linq;
using FT.DAL;
using FT.Models;


namespace FT.BLL
{
    public class ReceiptBLL: IReceiptBLL
    {
        private readonly IDataAccess _repo;
        public ReceiptBLL(IDataAccess repo)
        {
            _repo = repo;
        }


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

        public IEnumerable<FundTrackSubservicer> GetAllSubservicers()
        {
            return _repo.GetAllSubservicers();
        }


    }
}