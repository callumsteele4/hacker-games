using System;
using System.Collections.Generic;

namespace hacker_games_trainline.Services
{
    public class Shuffler
    {
        private readonly Random _rng;

        public Shuffler()
        {
            _rng = new Random();
        }

        public IList<T> Shuffle<T>(IList<T> list)
        {
            for (var n = list.Count; n > 1;)
            {
                var k = _rng.Next(n);
                --n;
                var temp = list[n];
                list[n] = list[k];
                list[k] = temp;
            }
            return list;
        }
    }
}