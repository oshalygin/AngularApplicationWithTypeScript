using System.Collections.Generic;
using FT.Entities;

namespace FT.BLL
{
    public interface IReceiptSubservicerBLL
    {
        IEnumerable<FundTrackSubservicer> GetAllSubservicers();
    }
}