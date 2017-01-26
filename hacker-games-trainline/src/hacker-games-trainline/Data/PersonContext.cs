using hacker_games_trainline.Model;
using Microsoft.EntityFrameworkCore;

namespace hacker_games_trainline.Data
{
    public class PersonContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=hacker-games-trainline.db");
        }

        public DbSet<Person> Persons { get; set; }
    }
}
