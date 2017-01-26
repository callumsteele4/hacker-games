using System;
using System.Linq;
using System.Threading.Tasks;
using hacker_games_trainline.Model;
using Microsoft.AspNetCore.Mvc;
using hacker_games_trainline.Data;

namespace hacker_games_trainline.Controllers
{
    [Route("api/[controller]")]
    public class PersonsController : Controller
    {
        private readonly PersonContext _personsContext;

        public PersonsController(PersonContext personsContext)
        {
            _personsContext = personsContext;
        }

        [HttpGet]
        public JsonResult Get()
        {
            return Json(
                _personsContext.Persons.ToList());
        }

        [HttpGet("{id}")]
        public async Task<JsonResult> Get(int id)
        {
            return Json(
                await _personsContext.FindAsync<Person>(id));
        }

        [HttpPost]
        public async Task<JsonResult> PostAsync([FromBody] Person person)
        {
            await _personsContext.AddAsync(person);
            _personsContext.SaveChanges();
            return Json(person);
        }
    }
}
