using System.Web.Http;
using FT.BLL;


namespace FT.Web.Controllers.Api
{
    public class ReceiptCommentsController : ApiController
    {
        private readonly IReceiptCommentBLL _receiptBll;

        public ReceiptCommentsController(IReceiptCommentBLL receiptBll)
        {
            _receiptBll = receiptBll;
        }



        public IHttpActionResult Get()
        {
            var comments = _receiptBll.GetAllComments();
            return Ok(comments);
        }

        public IHttpActionResult Get(int id)
        {
            var comments = _receiptBll.GetCommentsForReceipt(id);
            return Ok(comments);
        }

        [Route("api/ReceiptComments/{receiptId}/{text}")]
        public IHttpActionResult Post([FromUri]int receiptId, [FromUri]string text)
        {

            var savedComment = _receiptBll.AddComment(receiptId, text);
            if (savedComment == null)
            {
                return BadRequest("An error occured!");
            }
            return Ok(savedComment);

            
        }
    }
}