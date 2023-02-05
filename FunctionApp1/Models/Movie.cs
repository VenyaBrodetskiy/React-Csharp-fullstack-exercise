using System;
using System.Collections.Generic;

namespace FunctionApp.Models
{
    public partial class Movie
    {
        public int Id { get; set; }
        public string MovieName { get; set; }
        public int Year { get; set; }
        public int RatingId { get; set; }

        public virtual Rating Rating { get; set; }
    }
}
