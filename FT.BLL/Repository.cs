using System.Collections.Generic;
using System.Linq;
using FT.DAL;
using FT.Models;


namespace FT.BLL
{
    public class Repository
    {
        //TODO:  add some ioc and di in the future to clean this out
        private readonly FundTrackReceiptDataAccess _repo = new FundTrackReceiptDataAccess();

        public IEnumerable<FundTrackReceipt> Get10Receipts()
        {
            return _repo.GetWithComments().Take(10).ToList();
        }
    }
}