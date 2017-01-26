using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using hacker_games_trainline.Model;
using QuickGraph;

namespace hacker_games_trainline.Data
{
    public static class Persons
    {
        private static int _nextId;
        private static readonly BidirectionalGraph<Person, Relationship> Graph = new BidirectionalGraph<Person, Relationship>();

        public static void AddPerson(Person person, Relationship relationship)
        {
            person.Id = _nextId;
            _nextId++;
            Graph.AddVertex(person);
            if (relationship != null) Graph.AddEdge(relationship);
        }

        public static Person FindPerson(int id)
        {
            return Graph.Vertices.Single(p => p.Id == id);
        }

        public static IEnumerable<KeyValuePair<Person, string>> GetAll()
        {
            var relations = Graph.Edges.Where(e => e.Source.Id == 0);
            return relations
                .Select(e => new KeyValuePair<Person, string>(e.Target, e.Tag.ToString()));
        }

        public static void AddRelationship(int fromId, int toId, string relationshipTag)
        {
            var fromPerson = FindPerson(fromId);
            var toPerson = FindPerson(toId);
            var relationship = new Relationship(fromPerson, toPerson, (RelationshipType) Enum.Parse(typeof(RelationshipType), relationshipTag));
            Graph.AddEdge(relationship);
        }
    }
}
