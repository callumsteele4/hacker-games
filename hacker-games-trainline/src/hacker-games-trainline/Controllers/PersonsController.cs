using hacker_games_trainline.Data;
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
            return Json(Persons.GetAll());
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            return Json(Persons.FindPerson(id));
        }

        [HttpPost]
        public JsonResult Post([FromBody] Person person)
        {
            Persons.AddPerson(person);

            return Json(person);
        }
    }
}
