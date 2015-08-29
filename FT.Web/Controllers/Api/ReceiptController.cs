using System.Collections.Generic;
using System.Web.Http;
using FT.BLL;
using FT.Models;


namespace FT.Web.Controllers.Api
{
    public class ReceiptController : ApiController
    {
        //TODO: Refactor all this stuff to IHttpResponse with a model instead of this view stuff
        private IRepository _repository;
        public ReceiptController(IRepository repository)
        {
            _repository = repository;
        }
        

        public IEnumerable<FundTrackReceipt> Get()
        {
            var receipts = _repository.Get10Receipts();
            return receipts;
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
