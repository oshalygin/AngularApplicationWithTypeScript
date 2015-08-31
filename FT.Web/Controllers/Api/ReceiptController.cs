using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FT.BLL;
using FT.Models;
using FT.Web.Models;


namespace FT.Web.Controllers.Api
{
    public class ReceiptController : ApiController
    {

        private readonly IRepository _repository;
        public ReceiptController(IRepository repository)
        {
            _repository = repository;
        }


        public IHttpActionResult Get()
        {
            var receipts = _repository.GetLast10Recepts();
            return Ok(receipts);
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                var receipt = _repository.GetReceiptById(id);
                if (receipt == null)
                {
                    return NotFound();
                }
                return Ok(receipt);
            }
            catch
            {
                //TODO: Perform some logging
                return BadRequest();
            }
            
        }

       
        public IHttpActionResult Post([FromBody]FundTrackReceiptVm newReceipt)
        {
           
           
                if (newReceipt == null)
                {
                    return BadRequest("No Receipt was received");
                }
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                //TODO: Refactor this out of the controller...
                var receipt = new FundTrackReceipt
                {
                    Servicer = new FundTrackSubservicer(),
                    Type = new FundTrackReceiptType(),
                    CheckNumber = newReceipt.CheckNumber,
                    ReceivedDate = newReceipt.ReceivedDate
                };

                receipt.Servicer.Name = newReceipt.Servicer.Name;
                receipt.TotalAmount = newReceipt.TotalAmount;
                receipt.Type.Name = newReceipt.ReceiptType.Name;
                


                var savedReceipt = _repository.SaveNewReceipt(receipt);
                if (savedReceipt == null)
                {
                    return Conflict();
                }

                return Created<FundTrackReceipt>(Request.RequestUri + savedReceipt.Id.ToString(), savedReceipt);
  

        }

        //// PUT: api/Receipt/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}
        
    }
}
