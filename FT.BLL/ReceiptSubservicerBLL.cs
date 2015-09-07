using System.Collections.Generic;
using FT.DAL;
using FT.Entities;

namespace FT.BLL
{
    public class ReceiptSubservicerBLL : IReceiptSubservicerBLL
    {

        private readonly IDataAccess _repo;
        public ReceiptSubservicerBLL(IDataAccess repo)
        {
            _repo = repo;
        }

        public IEnumerable<FundTrackSubservicer> GetAllSubservicers()
        {
            return _repo.GetAllSubservicers();
        }
    }
}
