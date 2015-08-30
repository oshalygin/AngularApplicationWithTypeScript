using System;
using System.Collections.Generic;

namespace FT.Web.Models
{
    public class FundTrackReceiptVm
    {
        public FundTrackReceiptVm()
        {
            Comments = new List<FundTrackReceiptCommentVm>();
        }

        public virtual int Id { get; set; }
        public virtual decimal TotalAmount { get; set; }
        public virtual DateTime ReceivedDate { get; set; }
        public virtual string CheckNumber { get; set; }

        public virtual List<FundTrackReceiptCommentVm> Comments { get; set; }

        public virtual FundTrackReceiptTypeVm ReceiptType { get; set; }

        public virtual FundTrackSubservicerVm Servicer { get; set; }
    }
}