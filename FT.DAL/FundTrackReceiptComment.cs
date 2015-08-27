using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace FT.DAL
{
    public class FundTrackReceiptComment
    {
        public int Id { get; set; }
        public string Text { get; set; }

        [Column(TypeName = "datetime2")]
        public DateTime CreatedDate { get; set; }

        public DateTime UpdateDate { get; set; }
    }
}