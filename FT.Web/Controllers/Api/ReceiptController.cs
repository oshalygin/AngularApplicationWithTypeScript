using System.Web.Http;
using FT.BLL;
using FT.Models;

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
            var receipts = _receiptBll.GetLast20Recepts();
            return Ok(receipts);
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

        //// PUT: api/Receipt/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

    }
}
