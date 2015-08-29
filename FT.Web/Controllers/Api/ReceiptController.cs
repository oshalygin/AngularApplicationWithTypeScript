using System.Collections.Generic;
using System.Net;
using System.Net.Http;
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

        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Receipt
        //public void Post([FromBody]string value)
        //{
        //}

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
