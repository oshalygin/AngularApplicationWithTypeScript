using System;
using System.Collections.Generic;

namespace FT.Models
{
    public class FundTrackReceipt
    {
        public FundTrackReceipt()
        {
            Comments = new List<FundTrackReceiptComment>();
        }

        public int Id { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime ReceivedDate { get; set; }
        public string CheckNumber { get; set; }

        public List<FundTrackReceiptComment> Comments { get; set; }

        public FundTrackReceiptType Type { get; set; }

        public FundTrackSubservicer Servicer { get; set; }
    }
}