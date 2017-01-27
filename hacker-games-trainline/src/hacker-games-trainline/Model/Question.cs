using System;
using System.Collections.Generic;

namespace hacker_games_trainline.Model
{
    public class Question
    {
        public string Name { get; set; }
        public List<PictureQuestion> PicturePaths { get; set; }
        public bool? Correct { get; set; }
        public Guid Guid { get; set; }
    }
}