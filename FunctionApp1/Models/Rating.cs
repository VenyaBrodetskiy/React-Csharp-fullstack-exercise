using System;
using System.Collections.Generic;

namespace FunctionApp.Models
{
    public partial class Rating
    {
        public Rating()
        {
            Games = new HashSet<Game>();
            Movies = new HashSet<Movie>();
        }

        public int Id { get; set; }
        public string RatingTitle { get; set; }

        public virtual ICollection<Game> Games { get; set; }
        public virtual ICollection<Movie> Movies { get; set; }
    }
}
