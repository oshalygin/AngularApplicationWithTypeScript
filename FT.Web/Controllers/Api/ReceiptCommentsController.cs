using System.Web.Http;
using FT.BLL;
using FT.Models;
using FT.Web.Models;


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

            var totalNumberOfComments = _receiptBll.GetTotalNumberOfComments();
            var total = new ReceiptTotals { TotalNumberOfComments = totalNumberOfComments };
            return Ok(total);

        }

        public IHttpActionResult Get(int id)
        {
            var comments = _receiptBll.GetCommentsForReceipt(id);
            return Ok(comments);
        }

        public IHttpActionResult Get(int page, int pageSize, string searchTerm)
        {
            var comments = _receiptBll.GetComments(page, pageSize, searchTerm);
            return Ok(comments);
        }


        [Route("api/ReceiptComments/{receiptId}/{text?}")]
        [HttpPost]
        public IHttpActionResult Post([FromUri]int receiptId, [FromBody]FundTrackReceiptComment receipt)
        {
            if (string.IsNullOrWhiteSpace(receipt.Text))
            {
                return BadRequest("Text for the comment was forgotten");
            }

            var savedComment = _receiptBll.AddComment(receiptId, receipt.Text);
            if (savedComment == null)
            {
                return BadRequest("An error occured!");
            }
            return Ok(savedComment);

        }


    }
}