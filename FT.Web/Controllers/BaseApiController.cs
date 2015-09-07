using System.Web.Http;
using FT.BLL;
using FT.Web.Models;

namespace FT.Web.Controllers
{
    public class BaseApiController : ApiController
    {
        protected readonly ModelFactory TheModelFactory;

        public BaseApiController()
        {
            TheModelFactory = new ModelFactory();
        }
    }
}
