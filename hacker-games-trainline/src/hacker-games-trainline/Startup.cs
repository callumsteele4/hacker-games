using hacker_games_trainline.Data;
using hacker_games_trainline.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace hacker_games_trainline
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            
            Configuration = builder.Build();

            Seed();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseCors(builder =>
                builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseMvc();
        }

        private void Seed()
        {
            Persons.AddPerson(CurrentUser.User);

            var callum = new Person { Name = "Callum Steele" };
            var marta = new Person { Name = "Marta Ludovico" };
            var alexandre = new Person { Name = "Alexandre Rieux" };
            var shakeel = new Person { Name = "Shakeel Mohammed" };

            Persons.AddPerson(callum);
            Persons.AddPerson(marta);
            Persons.AddPerson(alexandre);
            Persons.AddPerson(shakeel);

            Persons.AddRelationship(CurrentUser.User, marta, RelationshipType.Sister.ToString());
            Persons.AddRelationship(CurrentUser.User, callum, RelationshipType.Son.ToString());
            Persons.AddRelationship(CurrentUser.User, alexandre, RelationshipType.Father.ToString());
            Persons.AddRelationship(CurrentUser.User, shakeel, RelationshipType.Son.ToString());

            Persons.AddRelationship(marta, CurrentUser.User, RelationshipType.Sister.ToString());
            Persons.AddRelationship(marta, callum, RelationshipType.Aunt.ToString());
            Persons.AddRelationship(marta, alexandre, RelationshipType.Father.ToString());
            Persons.AddRelationship(marta, shakeel, RelationshipType.Aunt.ToString());
            
            Persons.AddRelationship(callum, CurrentUser.User, RelationshipType.Mother.ToString());
            Persons.AddRelationship(callum, marta, RelationshipType.Nephew.ToString());
            Persons.AddRelationship(callum, alexandre, RelationshipType.Grandson.ToString());
            Persons.AddRelationship(callum, shakeel, RelationshipType.Brother.ToString());

            Persons.AddRelationship(alexandre, CurrentUser.User, RelationshipType.Daughter.ToString());
            Persons.AddRelationship(alexandre, marta, RelationshipType.Daughter.ToString());
            Persons.AddRelationship(alexandre, callum, RelationshipType.Grandson.ToString());
            Persons.AddRelationship(alexandre, shakeel, RelationshipType.Grandson.ToString());

            Persons.AddRelationship(shakeel, CurrentUser.User, RelationshipType.Mother.ToString());
            Persons.AddRelationship(shakeel, marta, RelationshipType.Nephew.ToString());
            Persons.AddRelationship(shakeel, callum, RelationshipType.Brother.ToString());
            Persons.AddRelationship(shakeel, alexandre, RelationshipType.Grandson.ToString());
        }
    }
}
