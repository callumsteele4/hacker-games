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
            // Need to create a score, (incorrect - correct) * score of date order

            // Initialise scores
            var scores = new Dictionary<string, double>();
            QuestionData.Select(qd => qd.Key).ToList().ForEach(k => scores.Add(k, 0));
            
            // Add scores for ordering
            scores = SetLastAnsweredScores(scores);

            // Apply scores for incorrect/correct
            scores = SetCorrectIncorrectScores(scores);

            return scores.OrderByDescending(s => s.Value).First().Key;
            //return QuestionData.OrderBy(qd => qd.Value.LastAnswered).First().Key;
        }

        private static Dictionary<string, double> SetCorrectIncorrectScores(Dictionary<string, double> scores)
        {
            var newScores = new Dictionary<string, double>();

            foreach (var score in QuestionData)
            {
                if (score.Value.TimesIncorrect > score.Value.TimesCorrect)
                {
                    newScores.Add(score.Key, (score.Value.TimesIncorrect - score.Value.TimesCorrect + 1) * scores[score.Key]);
                } else if (score.Value.TimesIncorrect == score.Value.TimesCorrect && score.Value.TimesCorrect == 0)
                {
                    newScores.Add(score.Key, scores.Count * scores[score.Key]);
                } else if (score.Value.TimesIncorrect == score.Value.TimesCorrect)
                {
                    newScores.Add(score.Key, (score.Value.TimesCorrect / 2) * scores[score.Key]);
                } else if (score.Value.TimesIncorrect < score.Value.TimesCorrect)
                {
                    newScores.Add(score.Key, (1 / (score.Value.TimesCorrect - score.Value.TimesIncorrect)) * scores[score.Key]);
                }
            }

            return newScores;
        }

        private static Dictionary<string, double> SetLastAnsweredScores(IDictionary<string, double> scores)
        {
            var newScores = new Dictionary<string, double>();
            var orderedByDate = QuestionData.OrderByDescending(qd => qd.Value.LastAnswered).ToArray();

            foreach (var score in scores)
            {
                newScores.Add(score.Key,
                    QuestionData[score.Key].LastAnswered == null
                        ? 10
                        : Array.FindIndex(orderedByDate, qd => qd.Key == score.Key));
            }
            return newScores;
        }

        public static void ParseQuestionResult(Question question)
        {
            if (question.Correct != null && question.Correct.Value)
            {
                QuestionData[question.Name].LastAnswered = DateTime.Now;
                QuestionData[question.Name].TimesCorrect++;
            }
            else if (question.Correct != null && !question.Correct.Value)
            {
                QuestionData[question.Name].LastAnswered = DateTime.Now;
                QuestionData[question.Name].TimesIncorrect++;
            }
        }
    }
}