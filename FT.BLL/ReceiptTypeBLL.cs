using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FT.DAL;
using FT.Models;

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
