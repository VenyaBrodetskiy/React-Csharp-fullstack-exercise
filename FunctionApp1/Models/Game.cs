using System;
using System.Collections.Generic;

namespace FunctionApp.Models
{
    public partial class Game
    {
        public int Id { get; set; }
        public string GameName { get; set; }
        public int Year { get; set; }
        public int RatingId { get; set; }

        public virtual Rating Rating { get; set; }
    }
}
