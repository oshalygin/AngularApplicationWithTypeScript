using System.Collections.Generic;
using FT.Models;

namespace FT.BLL
{
    public interface IRepository
    {
        IEnumerable<FundTrackReceipt> GetLast10Recepts();
        FundTrackReceipt GetReceiptById(int id);
    }
}
