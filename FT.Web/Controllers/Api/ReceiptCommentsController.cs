using System.Linq;
using System.Web.Http;
using FT.BLL;
using FT.Entities;
using FT.Web.Models;


namespace FT.Web.Controllers.Api
{
    public class ReceiptCommentsController : BaseApiController    
    {
        private readonly IReceiptCommentBLL _receiptBll;

        public ReceiptCommentsController(IReceiptCommentBLL receiptBll)
        {
            _receiptBll = receiptBll;
        }

        public IHttpActionResult Get(string searchTerm)
        {

            var totalNumberOfComments = _receiptBll.GetTotalNumberOfComments(searchTerm);
            var total = new ReceiptTotals { TotalNumberOfComments = totalNumberOfComments };
            return Ok(total);

        }

        public IHttpActionResult Get(int id)
        {
            var comments = _receiptBll.GetCommentsForReceipt(id)
                .Select(x => TheModelFactory.Create(x));
            return Ok(comments);
        }

        public IHttpActionResult Get(int page, int pageSize, string searchTerm)
        {
            var comments = _receiptBll.GetComments(page, pageSize, searchTerm)
                                    .Select(x => TheModelFactory.Create(x));

            return Ok(comments);
        }


        [Route("api/ReceiptComments/{receiptId}/{text?}")]
        [HttpPost]
        public IHttpActionResult Post([FromUri]int receiptId, [FromBody]ReceiptCommentModel receipt)
        {
            if (string.IsNullOrWhiteSpace(receipt.Text))
            {
                return BadRequest("Text for the comment was forgotten");
            }

            var savedComment = _receiptBll.AddComment(receiptId, receipt.Text);
            var createdComment = TheModelFactory.Create(savedComment);
            if (savedComment == null)
            {
                return BadRequest("An error occured!");
            }
            return Ok(createdComment);

        }


    }
}