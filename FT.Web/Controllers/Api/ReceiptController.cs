﻿using System.Web.Http;
using FT.BLL;
using FT.Models;
using FT.Web.Models;

namespace FT.Web.Controllers.Api
{
    public class ReceiptController : ApiController
    {

        private readonly IReceiptBLL _receiptBll;
        public ReceiptController(IReceiptBLL receiptBll)
        {
            _receiptBll = receiptBll;
        }

        public IHttpActionResult Get()
        {

            var totalNumberOfReceipts = _receiptBll.GetReceiptTotal();
            var totals = new ReceiptTotals { TotalNumberOfReceipts = totalNumberOfReceipts };
            return Ok(totals);

        }


        public IHttpActionResult Get(int id)
        {
            try
            {
                var receipt = _receiptBll.GetReceiptById(id);
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

        public IHttpActionResult Get(int page, int pageSize)
        {
            var receipts = _receiptBll.GetReceipts(page, pageSize);
            return Ok(receipts);
        }

        public IHttpActionResult Post([FromBody]FundTrackReceipt newReceipt)
        {


            if (newReceipt == null)
            {
                return BadRequest("No Receipt was received");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var savedReceipt = _receiptBll.SaveNewReceipt(newReceipt);
            if (savedReceipt == null)
            {
                return Conflict();
            }

            return Created<FundTrackReceipt>(Request.RequestUri + savedReceipt.Id.ToString(), savedReceipt);


        }

        
        public IHttpActionResult Put([FromBody]FundTrackReceipt receipt)
        {
            return NotFound();
        }

    }
}
