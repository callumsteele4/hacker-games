using System;

namespace hacker_games_trainline.Data
{
    public class QuestionData
    {
        public int TimesCorrect { get; set; }
        public int TimesIncorrect { get; set; }
        public DateTime? LastAnswered { get; set; }
    }
}