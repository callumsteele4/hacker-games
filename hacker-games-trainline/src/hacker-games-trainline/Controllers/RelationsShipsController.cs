using hacker_games_trainline.Data;
using Microsoft.AspNetCore.Mvc;

namespace hacker_games_trainline.Controllers
{
    [Route("api/[controller]")]
    public class RelationsShipsController : Controller
    {
        [HttpPost]
        public void Relationship(int fromId, int toId, string relationshipTag)
        {
            Persons.AddRelationship(fromId, toId, relationshipTag);
        }
    }
}