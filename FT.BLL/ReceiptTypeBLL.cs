using System.Collections.Generic;
using FT.DAL;
using FT.Entities;

namespace FT.BLL
{
    public class ReceiptTypeBLL : IReceiptTypeBLL
    {
        private readonly IDataAccess _repo;
        public ReceiptTypeBLL(IDataAccess repo)
        {
            _repo = repo;
        }

        public IEnumerable<FundTrackReceiptType> GetAllReceiptTypes()
        {
            return _repo.GetAllReceiptTypes();
        }

    }
}
