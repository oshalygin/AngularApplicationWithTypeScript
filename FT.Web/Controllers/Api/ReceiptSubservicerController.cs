using System.Linq;
using System.Web.Http;
using FT.BLL;

namespace FT.Web.Controllers.Api
{
    public class ReceiptSubservicerController : BaseApiController
    {

        private readonly IReceiptSubservicerBLL _iSubservicerBll;
        public ReceiptSubservicerController(IReceiptSubservicerBLL receiptBll)
        {
            _iSubservicerBll = receiptBll;
        }

        public IHttpActionResult Get()
        {
            var subservicerTypes = _iSubservicerBll.GetAllSubservicers()
                .Select(x => TheModelFactory.Create(x));

            return Ok(subservicerTypes);
        }

    }
}
