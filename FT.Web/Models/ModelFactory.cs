using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FT.Entities;

namespace FT.Web.Models
{
    public class ModelFactory
    {
        public ReceiptModel Create(FundTrackReceipt model)
        {
            return new ReceiptModel()
            {
                Id = model.Id,
                CheckNumber = model.CheckNumber,
                Comments = model.Comments.Select(x => Create(x)).ToList(),
                ReceiptType = Create(model.ReceiptType),
                ReceivedDate = model.ReceivedDate,
                TotalAmount = model.TotalAmount,
                Servicer = Create(model.Servicer)
            };
        }
        public ReceiptTypeModel Create(FundTrackReceiptType model)
        {
            return new ReceiptTypeModel()
            {
                Id = model.Id,
                Description = model.Description,
                Name = model.Name
            };
        }

        public ReceiptSubservicerModel Create(FundTrackSubservicer model)
        {
            return new ReceiptSubservicerModel()
            {
                Id = model.Id,
                IsEnabled = model.IsEnabled,
                Name = model.Name
            };

        }

        public ReceiptCommentModel Create(FundTrackReceiptComment model)
        {
            return new ReceiptCommentModel()
            {
                Id = model.Id,
                CreatedDate = model.CreatedDate,
                ReceiptId = model.FundTrackReceipt.Id,
                Text = model.Text,
                UpdateDate =  model.UpdateDate
            };

        }



    }
}