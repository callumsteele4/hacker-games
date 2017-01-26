using hacker_games_trainline.Model;
using QuickGraph;

namespace hacker_games_trainline.Data
{
    public class Relationship : TaggedEdge<Person, RelationshipType>
    {
        public Relationship(Person source, Person target, RelationshipType tag) : base(source, target, tag)
        {
        }
    }
}