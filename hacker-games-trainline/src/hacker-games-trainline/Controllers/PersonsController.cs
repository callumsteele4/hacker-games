using System;
using hacker_games_trainline.Model;
using Microsoft.AspNetCore.Mvc;

namespace hacker_games_trainline.Controllers
{
    [Route("api/[controller]")]
    public class PersonsController : Controller
    {
        [HttpGet]
        public JsonResult Get()
        {
            return Json(new Person
            {
                Birthday = DateTime.Now,
                Photo = new Photo(),
                Name = "Callum Steele"
            });
        }

        [HttpGet("{id}")]
        public JsonResult Get(string id)
        {
            return Json(new Person
            {
                Birthday = DateTime.Now,
                Photo = new Photo(),
                Name = "Natalie Akam"
            });
        }
    }
}
