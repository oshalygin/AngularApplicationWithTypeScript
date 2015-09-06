using System.Web.Mvc;
using System.Web.Routing;

namespace FT.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("CatchAll",
                "{*url}",
                new { controller = "Home", action = "Index" }
            );
        }
    }
}
