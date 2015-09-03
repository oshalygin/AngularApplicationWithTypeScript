using System.Collections.Generic;
using FT.Models;

namespace FT.BLL
{
    public interface IReceiptTypeBLL
    {
        IEnumerable<FundTrackReceiptType> GetAllReceiptTypes();
    }
}