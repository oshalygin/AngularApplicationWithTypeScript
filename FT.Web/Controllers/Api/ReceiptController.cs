using System.Web.Http;
using FT.BLL;
using FT.Models;

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

            var savedReceipt = _repository.SaveNewReceipt(newReceipt);
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
