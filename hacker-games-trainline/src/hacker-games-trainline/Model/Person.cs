using System;
using System.Collections.Generic;
using hacker_games_trainline.Data;

namespace hacker_games_trainline.Model
{
    public class Person
    {
        public Person() { }

        public Person(Person person)
        {
            Id = person.Id;
            Name = person.Name;
            Birthday = person.Birthday;
            City = person.City;
            Job = person.Job;
            PartnerId = person.PartnerId;
            ChildrenIds = person.ChildrenIds;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public string City { get; set; }
        public string Job { get; set; }
        public int? PartnerId { get; set; }
        public List<int> ChildrenIds { get; set; }
        public string Relation { get; set; }
    }
}