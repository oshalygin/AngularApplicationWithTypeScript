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

        public virtual int Id { get; set; }
        public virtual decimal TotalAmount { get; set; }
        public virtual DateTime ReceivedDate { get; set; }
        public virtual string CheckNumber { get; set; }

        public virtual List<FundTrackReceiptComment> Comments { get; set; }

        public virtual FundTrackReceiptType Type { get; set; }

        public virtual FundTrackSubservicer Servicer { get; set; }
    }
}