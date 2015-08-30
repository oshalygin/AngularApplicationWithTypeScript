using System;

namespace FT.Web.Models
{
    public class FundTrackReceiptCommentVm
    {
        public int Id { get; set; }
        public string Text { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdateDate { get; set; }
    }
}