using hacker_games_trainline.Model;
using hacker_games_trainline.Services;
using Microsoft.AspNetCore.Mvc;

namespace hacker_games_trainline.Controllers
{
    [Route("api/[controller]")]
    public class QuestionsController : Controller
    {
        private readonly QuestionGenerator _questionGenerator;

        public QuestionsController()
        {
            _questionGenerator = new QuestionGenerator();
        }

        [HttpGet]
        public JsonResult Get()
        {
            return Json(_questionGenerator.RandomQuestion());
        }

        [HttpPost]
        public void Post([FromBody] Question question)
        {
            QuestionStore.ParseQuestionResult(question);
        }
    }
}