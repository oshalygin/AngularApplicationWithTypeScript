using System.Web.Http;
using FT.BLL;

namespace FT.Web.Controllers.Api
{
    public class ReceiptTypesController : ApiController
    {
        private readonly IRepository _repository;
        public ReceiptTypesController(IRepository repository)
        {
            _repository = repository;
        }


        public IHttpActionResult Get()
        {
            var receiptTypes = _repository.GetAllReceiptTypes();
            return Ok(receiptTypes);
        }

    }
}
