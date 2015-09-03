using System.Collections.Generic;
using FT.Models;

namespace FT.BLL
{
    public interface IReceiptBLL
    {
        IEnumerable<FundTrackReceipt> GetLast20Recepts();
        IEnumerable<FundTrackReceipt> GetAllReceipts();
        FundTrackReceipt GetReceiptById(int id);
        FundTrackReceipt SaveNewReceipt(FundTrackReceipt receipt);
 
    }
}