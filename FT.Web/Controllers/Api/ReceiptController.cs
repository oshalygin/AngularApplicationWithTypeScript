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
           
            try
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
                var receipt = new FundTrackReceipt();
                receipt.Servicer = new FundTrackSubservicer();
                receipt.Type = new FundTrackReceiptType();

                receipt.CheckNumber = newReceipt.CheckNumber;
                receipt.ReceivedDate = newReceipt.ReceivedDate;
                receipt.Servicer.Name = newReceipt.Servicer.Name;
                receipt.TotalAmount = newReceipt.TotalAmount;
                


                var savedReceipt = _repository.SaveNewReceipt(receipt);
                if (savedReceipt == null)
                {
                    return Conflict();
                }

                return Created<FundTrackReceipt>(Request.RequestUri + savedReceipt.Id.ToString(), savedReceipt);
            }
            catch(Exception exception)
            {
                //TODO:  Perform some logging here...
                return InternalServerError(exception);
            }

        }

        //// PUT: api/Receipt/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Receipt/5
        //public void Delete(int id)
        //{
        //}
    }
}
