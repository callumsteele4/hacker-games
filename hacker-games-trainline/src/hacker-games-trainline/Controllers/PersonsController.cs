using System;
<<<<<<< Updated upstream
using System.Linq;
using System.Threading.Tasks;
=======
using hacker_games_trainline.Data;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
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
            Persons.AddPerson(person, null);

            return Json(person);
        }
    }

    [Route("api/[controller]")]
    public class RelationsShipsController : Controller
    {
        [HttpPost]
        public void Relationship(int fromId, int toId, string relationshipTag)
        {
            Persons.AddRelationship(fromId, toId, relationshipTag);
>>>>>>> Stashed changes
        }
    }
}
