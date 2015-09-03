using System.Web.Http;
using FT.BLL;

namespace FT.Web.Controllers.Api
{
    public class ReceiptTypesController : ApiController
    {
        private readonly IReceiptTypeBLL _receiptBll;
        public ReceiptTypesController(IReceiptTypeBLL receiptBll)
        {
            _receiptBll = receiptBll;
        }


        public IHttpActionResult Get()
        {
            var receiptTypes = _receiptBll.GetAllReceiptTypes();
            return Ok(receiptTypes);
        }

    }
}
