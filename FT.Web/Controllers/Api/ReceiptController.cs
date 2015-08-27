using System.Collections.Generic;
using System.Web.Http;
using FT.Models;

namespace FT.Web.Controllers.Api
{
    public class ReceiptController : ApiController
    {
        
        public IEnumerable<FundTrackReceipt> Get()
        {
            return null;
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
