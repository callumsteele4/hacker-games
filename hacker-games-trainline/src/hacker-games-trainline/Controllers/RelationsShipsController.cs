using hacker_games_trainline.Data;
using Microsoft.AspNetCore.Mvc;

namespace hacker_games_trainline.Controllers
{
    [Route("api/[controller]")]
    public class RelationshipsController : Controller
    {
        [HttpPost]
        public void Post(int fromId, int toId, string relationshipTag)
        {
            var fromPerson = Persons.FindPerson(fromId);
            var toPerson = Persons.FindPerson(toId);
            Persons.AddRelationship(fromPerson, toPerson, relationshipTag);
        }
    }
}