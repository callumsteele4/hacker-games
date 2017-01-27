namespace hacker_games_trainline.Model
{
    public class PictureQuestion
    {
        public string PicturePath { get; set; }
        public bool IsCorrectPicture { get; set; }

        public PictureQuestion(string picturePath, bool isCorrectPicture)
        {
            PicturePath = picturePath;
            IsCorrectPicture = isCorrectPicture;
        }
    }
}