using System.Linq;
using System.Web.Http;
using FT.BLL;

namespace FT.Web.Controllers.Api
{
    public class ReceiptTypesController : BaseApiController
    {
        private readonly IReceiptTypeBLL _receiptTypeBll;
        public ReceiptTypesController(IReceiptTypeBLL receiptTypeBll)
        {
            _receiptTypeBll = receiptTypeBll;
        }

        public IHttpActionResult Get()
        {
            var receiptTypes = _receiptTypeBll.GetAllReceiptTypes()
                .Select(x => TheModelFactory.Create(x));

            return Ok(receiptTypes);
        }

    }
}
