using System;
using System.Collections.Generic;
using hacker_games_trainline.Data;

namespace hacker_games_trainline.Model
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Birthday { get; set; }
        public string City { get; set; }
        public string Job { get; set; }
        public int PartnerId { get; set; }
        public List<int> ChildrenIds { get; set; }
    }
}