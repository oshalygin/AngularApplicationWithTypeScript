using System.Web.Http;
using FT.Models;

namespace FT.Web.Controllers.Api
{
    public class ReceiptCommentsController : ApiController
    {
        public IHttpActionResult Post([FromBody] int receiptId, [FromBody] string commentText)
        {
            //todo: implement


            return InternalServerError();
        }
    }
}