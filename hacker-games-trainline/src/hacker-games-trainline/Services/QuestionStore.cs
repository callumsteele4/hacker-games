using System;
using System.Collections.Generic;
using System.Linq;
using hacker_games_trainline.Data;
using hacker_games_trainline.Model;

namespace hacker_games_trainline.Services
{
    public static class QuestionStore
    {
        public static Dictionary<string, QuestionData> QuestionData = new Dictionary<string, QuestionData>();

        public static void GenerateQuestions()
        {
            Persons.GetAll(CurrentUser.User.Id).ToList().ForEach(p => QuestionData.Add(p.Name, new QuestionData()));
        }

        public static string SuggestName()
        {
            return QuestionData.First().Key;
        }

        public static void ParseQuestionResult(Question question)
        {
            if (question.Correct != null && question.Correct.Value)
            {
                QuestionData[question.Name].LastAsked = DateTime.Now;
                QuestionData[question.Name].TimesCorrect++;
            }
            else if (question.Correct != null && !question.Correct.Value)
            {
                QuestionData[question.Name].LastAsked = DateTime.Now;
                QuestionData[question.Name].TimesIncorrect++;
            }
        }
    }
}