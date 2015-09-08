using System.Linq;
using System.Net;
using System.Web.Http;
using FT.BLL;
using FT.Web.Models;

namespace FT.Web.Controllers.Api
{
    public class ReceiptController : BaseApiController
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
                var receiptModel = TheModelFactory.Create(receipt);

                return Ok(receiptModel);
            }
            catch
            {
                //TODO: Perform some error logging
                return BadRequest();
            }

        }

        public IHttpActionResult Get(int page, int pageSize)
        {
            var receipts = _receiptBll
                .GetReceipts(page, pageSize)
                .Select(x => TheModelFactory.Create(x));

            return Ok(receipts);
        }

        public IHttpActionResult Post([FromBody]ReceiptModel newReceipt)
        {


            if (newReceipt == null)
            {
                return BadRequest("No Receipt was received");
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var receiptToSave = TheModelFactory.Parse(newReceipt);
            var savedReceipt = 
                TheModelFactory.Create(_receiptBll.SaveNewReceipt(receiptToSave));

            if (savedReceipt == null)
            {
                return Conflict();
            }

            return Created<ReceiptModel>(Request.RequestUri + savedReceipt.Id.ToString(), savedReceipt);


        }


        public IHttpActionResult Put([FromBody]ReceiptModel updatedReceipt)
        {
            if (updatedReceipt == null)
            {
                return StatusCode(HttpStatusCode.NoContent);
    
            }
            if (!ModelState.IsValid)
            {
                return BadRequest("Input Validation Errors!");
            }
            var parsedReceipt = TheModelFactory.Parse(updatedReceipt);
            var receipt = TheModelFactory.Create(_receiptBll.UpdateReceipt(parsedReceipt));
            return Ok(receipt);

        }

    }
}
