using System.Collections.Generic;
using System.Linq;
using FT.DAL;
using FT.Models;


namespace FT.BLL
{
    public class Repository: IRepository
    {
        //TODO:  add some ioc and di in the future to clean this out
        private readonly FundTrackReceiptDataAccess _repo = new FundTrackReceiptDataAccess();

        public IEnumerable<FundTrackReceipt> GetLast10Recepts()
        {
            return _repo.GetWithComments().Take(20).ToList();

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
            return _repo.GetAllReceiptTypes().ToList();
        }

    }
}