using System;
using System.Collections.Generic;
using System.Linq;
using hacker_games_trainline.Data;
using hacker_games_trainline.Model;

namespace hacker_games_trainline.Services
{
    public class QuestionGenerator
    {
        private readonly Random _random;

        public QuestionGenerator()
        {
            _random = new Random();
        }

        public Question AdaptiveAlgorithmQuestion()
        {
            return null;
        }

        public Question RandomQuestion()
        {
            var persons = Persons.GetAll(CurrentUser.User.Id).ToList();

            var shuffler = new Shuffler();
            var randomDigits = shuffler.Shuffle(Enumerable.Range(0, persons.Count).ToList()).Take(4).ToArray();

            var question = new Question { PicturePaths = new List<PictureQuestion>(), Guid = Guid.NewGuid() };
            SetCorrectPicturePath(question, persons[randomDigits[0]]);
            SetIncorrectPicturePaths(question, new List<Person> { persons[randomDigits[1]], persons[randomDigits[2]], persons[randomDigits[3]]});

            return question;
        }

        private static void SetIncorrectPicturePaths(Question question, List<Person> persons)
        {
            persons.ForEach(p => question.PicturePaths.Add(new PictureQuestion(p.PicturePath, false)));
        }

        private static void SetCorrectPicturePath(Question question, Person person)
        {
            question.Name = person.Name;
            question.PicturePaths.Add(new PictureQuestion(person.PicturePath, true));
        }
    }
}