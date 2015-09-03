using System.Collections.Generic;
using FT.Models;

namespace FT.BLL
{
    public interface IReceiptSubservicerBLL
    {
        IEnumerable<FundTrackSubservicer> GetAllSubservicers();
    }
}