using System.Collections.Generic;
using FT.Models;

namespace FT.BLL
{
    public interface IReceiptBLL
    {
        IEnumerable<FundTrackReceipt> GetAllReceipts();
        FundTrackReceipt GetReceiptById(int id);
        FundTrackReceipt SaveNewReceipt(FundTrackReceipt receipt);
        IEnumerable<FundTrackReceipt> GetReceipts(int page, int pageSize);
        int GetReceiptTotal();

        FundTrackReceipt UpdateReceipt(FundTrackReceipt updatedReceipt);
    }
}