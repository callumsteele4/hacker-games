using hacker_games_trainline.Data;
using Microsoft.AspNetCore.Mvc;

namespace hacker_games_trainline.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [HttpGet]
        public JsonResult Get()
        {
            return Json(CurrentUser.User);
        }
    }
}