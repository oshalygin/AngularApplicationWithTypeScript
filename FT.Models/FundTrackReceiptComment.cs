using System;

namespace FT.Models
{
    public class FundTrackReceiptComment
    {
        public int Id { get; set; }
        public string Text { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdateDate { get; set; }
    }
}