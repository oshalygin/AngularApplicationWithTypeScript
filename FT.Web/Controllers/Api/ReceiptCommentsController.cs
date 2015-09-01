using System.Web.Http;
using FT.BLL;
using FT.Models;
using Newtonsoft.Json.Linq;

namespace FT.Web.Controllers.Api
{
    public class ReceiptCommentsController : ApiController
    {
        private readonly IRepository _repository;

        public ReceiptCommentsController(IRepository repository)
        {
            _repository = repository;
        }



        public IHttpActionResult Get()
        {
            var comments = _repository.GetAllComments();
            return Ok(comments);
        }

        public IHttpActionResult Get(int id)
        {
            var comments = _repository.GetCommentsForReceipt(id);
            return Ok(comments);
        }

        [Route("api/ReceiptComments/{receiptId}/{text}")]
        public IHttpActionResult Post([FromUri]int receiptId, [FromUri]string text)
        {

            var savedComment = _repository.AddComment(receiptId, text);
            if (savedComment == null)
            {
                return BadRequest("An error occured!");
            }
            return Ok(savedComment);

            
        }
    }
}