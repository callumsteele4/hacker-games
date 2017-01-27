using System;
using System.Collections.Generic;
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
            app.UseStaticFiles();
        }

        private void Seed()
        {
            var natalieId = 0;
            var callumId = 1;
            var martaId = 2;
            var alexandreId = 3;
            var shakeelId = 4;
            var tomId = 5;
            var princeId = 6;
                
            CurrentUser.User = new Person { Name = "Natalie Akam", Birthday = new DateTime(1992, 6, 15), ChildrenIds = new List<int> { callumId }, PartnerId = tomId, PicturePath = "http://hacker-games-trainline20170126053304.azurewebsites.net/Natalie.jpg" };
            Persons.AddPerson(CurrentUser.User);


            var callum = new Person { Name = "Callum Steele", City = "London", Job = "Developer", Note = "Callum likes to party!", Birthday = new DateTime(1992, 6, 15), PicturePath = "http://hacker-games-trainline20170126053304.azurewebsites.net/Callum.gif" };
            var marta = new Person { Name = "Marta Ludovico", City = "Reading", Job = "Developer", Note = "Marta hurt her ankle", Birthday = new DateTime(1987, 8, 12), PicturePath = "http://hacker-games-trainline20170126053304.azurewebsites.net/Marta.jpg" };
            var alexandre = new Person { Name = "Alexandre Rieux", City = "Paris", Job = "Lord of Shadwell", Note = "He's a Lord", Birthday = new DateTime(1982, 6, 10), ChildrenIds = new List<int> { natalieId, martaId }, PartnerId = shakeelId, PicturePath = "http://hacker-games-trainline20170126053304.azurewebsites.net/Alex.jpg" };
            var shakeel = new Person { Name = "Shakeel Mohammed", City = "Dublin", Job = "Developer", Note = "Shak likes to party!", Birthday = new DateTime(1984, 6, 25), ChildrenIds = new List<int> { natalieId, martaId }, PartnerId = alexandreId, PicturePath = "http://hacker-games-trainline20170126053304.azurewebsites.net/Shak.jpg" };
            var tom = new Person { Name = "Tom Price", City = "Munich", Job = "Rockstar", Note = "Tom likes to party!", Birthday = new DateTime(1965, 6, 21), ChildrenIds = new List<int> { callumId }, PartnerId = natalieId, PicturePath = "http://hacker-games-trainline20170126053304.azurewebsites.net/Tom.jpg" };
            var prince = new Person { Name = "Prince", Birthday = new DateTime(1960, 6, 21), City = "London", Job = "Developer", Note = "Prince likes to party like its 1999!", ChildrenIds = new List<int> { callumId }, PartnerId = natalieId, PicturePath = "http://hacker-games-trainline20170126053304.azurewebsites.net/prince.jpg" };


            Persons.AddPerson(callum);
            Persons.AddPerson(marta);
            Persons.AddPerson(alexandre);
            Persons.AddPerson(shakeel);
            Persons.AddPerson(tom);
            Persons.AddPerson(prince);

            Persons.AddRelationship(CurrentUser.User, marta, RelationshipType.Sister.ToString());
            Persons.AddRelationship(CurrentUser.User, callum, RelationshipType.Son.ToString());
            Persons.AddRelationship(CurrentUser.User, alexandre, RelationshipType.Father.ToString());
            Persons.AddRelationship(CurrentUser.User, shakeel, RelationshipType.Father.ToString());
            Persons.AddRelationship(CurrentUser.User, tom, RelationshipType.Husband.ToString());
            Persons.AddRelationship(CurrentUser.User, prince, RelationshipType.Son.ToString());

            Persons.AddRelationship(marta, CurrentUser.User, RelationshipType.Sister.ToString());
            Persons.AddRelationship(marta, callum, RelationshipType.Nephew.ToString());
            Persons.AddRelationship(marta, alexandre, RelationshipType.Father.ToString());
            Persons.AddRelationship(marta, shakeel, RelationshipType.Father.ToString());
            Persons.AddRelationship(marta, tom, RelationshipType.Brother.ToString());
            Persons.AddRelationship(marta, prince, RelationshipType.Son.ToString());


            Persons.AddRelationship(callum, CurrentUser.User, RelationshipType.Mother.ToString());
            Persons.AddRelationship(callum, marta, RelationshipType.Aunt.ToString());
            Persons.AddRelationship(callum, alexandre, RelationshipType.Grandfather.ToString());
            Persons.AddRelationship(callum, shakeel, RelationshipType.Grandfather.ToString());
            Persons.AddRelationship(callum, tom, RelationshipType.Father.ToString());
            Persons.AddRelationship(callum, prince, RelationshipType.Son.ToString());

            Persons.AddRelationship(alexandre, CurrentUser.User, RelationshipType.Daughter.ToString());
            Persons.AddRelationship(alexandre, marta, RelationshipType.Daughter.ToString());
            Persons.AddRelationship(alexandre, callum, RelationshipType.Grandson.ToString());
            Persons.AddRelationship(alexandre, shakeel, RelationshipType.Husband.ToString());
            Persons.AddRelationship(alexandre, tom, RelationshipType.Grandfather.ToString());
            Persons.AddRelationship(alexandre, prince, RelationshipType.Son.ToString());

            Persons.AddRelationship(shakeel, CurrentUser.User, RelationshipType.Daughter.ToString());
            Persons.AddRelationship(shakeel, marta, RelationshipType.Daughter.ToString());
            Persons.AddRelationship(shakeel, callum, RelationshipType.Grandson.ToString());
            Persons.AddRelationship(shakeel, alexandre, RelationshipType.Husband.ToString());
            Persons.AddRelationship(shakeel, tom, RelationshipType.Grandfather.ToString());
            Persons.AddRelationship(shakeel, prince, RelationshipType.Son.ToString());

            Persons.AddRelationship(tom, prince, RelationshipType.Son.ToString());
            
            Persons.AddRelationship(prince, tom, RelationshipType.Father.ToString());

        }
    }
}
