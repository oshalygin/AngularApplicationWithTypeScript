using System;
using System.Collections.Generic;
using FT.Entities;

namespace FT.Web.Models
{
    public class ReceiptModel
    {

        public ReceiptModel()
        {
            Comments = new List<ReceiptCommentModel>();
        }

        public virtual int Id { get; set; }
        public virtual decimal TotalAmount { get; set; }
        public virtual DateTime ReceivedDate { get; set; }
        public virtual string CheckNumber { get; set; }

        public virtual List<ReceiptCommentModel> Comments { get; set; }

        public virtual ReceiptTypeModel ReceiptType { get; set; }

        public virtual ReceiptSubservicerModel Servicer { get; set; }
    }
}