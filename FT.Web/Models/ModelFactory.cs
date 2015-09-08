using System.Linq;
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
                UpdateDate = model.UpdateDate
            };

        }
        public FundTrackReceipt Parse(ReceiptModel model)
        {
            return new FundTrackReceipt()
            {
                Id = model.Id,
                CheckNumber = model.CheckNumber,
                Comments = model.Comments.Select(x => Parse(x)).ToList(),
                ReceiptType = Parse(model.ReceiptType),
                ReceivedDate = model.ReceivedDate,
                TotalAmount = model.TotalAmount,
                Servicer = Parse(model.Servicer)
            };
        }

        public FundTrackReceiptType Parse(ReceiptTypeModel model)
        {
            return new FundTrackReceiptType()
            {
                Id = model.Id,
                Description = model.Description,
                Name = model.Name
            };
        }

        public FundTrackSubservicer Parse(ReceiptSubservicerModel model)
        {
            return new FundTrackSubservicer()
            {
                Id = model.Id,
                IsEnabled = model.IsEnabled,
                Name = model.Name
            };

        }

        public FundTrackReceiptComment Parse(ReceiptCommentModel model)
        {

            return new FundTrackReceiptComment()
            {
                Id = model.Id,
                CreatedDate = model.CreatedDate,
                Text = model.Text,
                FundTrackReceipt = new FundTrackReceipt()
                {
                    Id = model.ReceiptId
                },
                UpdateDate = model.UpdateDate
            };

        }



    }
}