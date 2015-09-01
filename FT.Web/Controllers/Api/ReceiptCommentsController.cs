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
            return Ok("oleg");

        }

        public IHttpActionResult Get(int id)
        {
            var comments = _repository.GetCommentsForReceipt(id);
            return Ok(comments);
        }

        public IHttpActionResult Post([FromBody] int receiptId, [FromBody] FundTrackReceiptComment comment)
        {

            var savedComment = _repository.AddComment(receiptId, comment);
            if (savedComment == null)
            {
                return BadRequest("An error occured!");
            }
            return Ok(savedComment);

            
        }
    }
}