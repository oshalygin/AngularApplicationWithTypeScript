using System.Web.Http;
using FT.BLL;

namespace FT.Web.Controllers.Api
{
    public class ReceiptSubservicerController : ApiController
    {

        private readonly IReceiptSubservicerBLL _receiptBll;
        public ReceiptSubservicerController(IReceiptSubservicerBLL receiptBll)
        {
            _receiptBll = receiptBll;
        }

        public IHttpActionResult Get()
        {
            var subservicerTypes = _receiptBll.GetAllSubservicers();
            return Ok(subservicerTypes);
        }


    }
}
