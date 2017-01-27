using System;
using System.Collections.Generic;
using System.Linq;
using hacker_games_trainline.Model;
using QuickGraph;

namespace hacker_games_trainline.Data
{
    public static class Persons
    {
        private static int _nextId = 0;
        private static readonly BidirectionalGraph<Person, Relationship> Graph = new BidirectionalGraph<Person, Relationship>();

        public static void AddPerson(Person person)
        {
            person.Id = _nextId;
            _nextId++;
            Graph.AddVertex(person);
        }

        public static Person FindPerson(int id)
        {
            return Graph.Vertices.Single(p => p.Id == id);
        }

        public static Person FindPerson(string name)
        {
            return Graph.Vertices.Single(p => p.Name == name);
        }

        public static IEnumerable<Person> GetAll(int id)
        {
            var relations = Graph.Edges.Where(e => e.Source.Id == id);
            return relations
                .Select(e =>
                {
                    var person = new Person(e.Target) {Relation = e.Tag.ToString()};
                    return person;
                });
        }

        public static void AddRelationship(Person fromPerson, Person toPerson, string relationshipTag)
        {
            var relationship = new Relationship(
                fromPerson,
                toPerson,
                (RelationshipType) Enum.Parse(typeof(RelationshipType), relationshipTag));
            Graph.AddEdge(relationship);
        }
    }
}
