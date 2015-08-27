using System.ComponentModel.DataAnnotations.Schema;

namespace FT.DAL
{
    [Table("vReceipts")]
    public class FundReceiptDetail
    {
        public int Id { get; set; }
        public decimal TotalAmount { get; set; }
        public string Servicer { get; set; }
        public string Type { get; set; }
    }
}