using System.Web.Http;
using FT.BLL;

namespace FT.Web.Controllers.Api
{
    public class ReceiptSubservicerController : ApiController
    {

        private readonly IRepository _repository;
        public ReceiptSubservicerController(IRepository repository)
        {
            _repository = repository;
        }

        public IHttpActionResult Get()
        {
            var subservicerTypes = _repository.GetAllSubservicers();
            return Ok(subservicerTypes);
        }


    }
}
